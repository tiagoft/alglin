(() => {
  const ids = ['vx', 'vy', 'b1x', 'b1y', 'b2x', 'b2y'];
  const $ = id => document.getElementById(id);
  const plot = $('plot');
  const plotSlot = $('plot-slot');
  const visualContent = $('visual-content');
  const plotModal = $('plot-modal');
  const plotModalSlot = $('plot-modal-slot');
  const closePlot = $('close-plot');
  const progress = $('progress');
  const play = $('play');
  let animation = null;
  let started = null;

  const number = id => {
    const value = Number($(id).value);
    return Number.isFinite(value) ? value : null;
  };

  const read = () => {
    const values = ids.map(number);
    return values.some(value => value === null)
      ? null
      : { v: values.slice(0, 2), b1: values.slice(2, 4), b2: values.slice(4, 6) };
  };

  const format = (value, digits = 2) => Number.isFinite(value)
    ? (Math.abs(value) < 0.0005 ? 0 : value).toFixed(digits).replace('-', '−').replace('.', ',')
    : 'indefinido';

  const point = (u, v, a, b) => [u * a[0] + v * b[0], u * a[1] + v * b[1]];

  const state = (data, t) => {
    const a = [(1 - t) + t * data.b1[0], t * data.b1[1]];
    const b = [t * data.b2[0], (1 - t) + t * data.b2[1]];
    const determinant = a[0] * b[1] - b[0] * a[1];
    const singular = Math.abs(determinant) < 0.0008;
    const coordinates = singular
      ? null
      : [
          (b[1] * data.v[0] - b[0] * data.v[1]) / determinant,
          (-a[1] * data.v[0] + a[0] * data.v[1]) / determinant
        ];
    return { a, b, determinant, singular, coordinates };
  };

  const svgElement = (name, attributes = {}, text = '') => {
    const node = document.createElementNS('http://www.w3.org/2000/svg', name);
    Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
    if (text) node.textContent = text;
    return node;
  };

  function draw() {
    const data = read();
    const validity = $('validity');
    if (!data) {
      validity.textContent = 'Preencha todos os campos com números válidos.';
      validity.classList.add('invalid');
      return;
    }

    const t = Number(progress.value);
    const current = state(data, t);
    const finalDeterminant = data.b1[0] * data.b2[1] - data.b2[0] * data.b1[1];
    validity.textContent = Math.abs(finalDeterminant) < 0.0008
      ? `b₁ e b₂ não formam uma base: det = ${format(finalDeterminant, 3)}.`
      : `Base válida: det(b₁,b₂) = ${format(finalDeterminant, 3)}.`;
    validity.classList.toggle('invalid', Math.abs(finalDeterminant) < 0.0008);

    $('t-value').textContent = `t = ${format(t, 3)}`;
    $('current-basis').textContent = `{(${format(current.a[0])}, ${format(current.a[1])}), (${format(current.b[0])}, ${format(current.b[1])})}`;
    $('coordinates').textContent = current.coordinates
      ? `(${format(current.coordinates[0], 3)}, ${format(current.coordinates[1], 3)})`
      : 'indefinidas';
    $('determinant').textContent = format(current.determinant, 3);

    const width = Math.max(300, Math.round(plot.getBoundingClientRect().width));
    const expanded = plotModalSlot.contains(visualContent);
    const height = expanded
      ? Math.max(300, Math.min(window.innerHeight - 260, Math.round(width * 0.62)))
      : width < 550 ? 390 : 510;
    const margin = { top: 18, right: 28, bottom: 38, left: 48 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const extent = Math.max(
      2.5,
      ...[...data.v, ...data.b1, ...data.b2, ...current.a, ...current.b].map(Math.abs)
    ) * 1.3;
    const scaleX = x => margin.left + (x + extent) / (2 * extent) * innerWidth;
    const scaleY = y => margin.top + (extent - y) / (2 * extent) * innerHeight;

    [...plot.children].slice(1).forEach(node => node.remove());
    plot.setAttribute('viewBox', `0 0 ${width} ${height}`);
    plot.setAttribute('height', height);

    const definitions = svgElement('defs');
    [['arrow-head-1', 'basis-1'], ['arrow-head-2', 'basis-2'], ['arrow-head-target', 'target']].forEach(([id, kind]) => {
      const marker = svgElement('marker', {
        id,
        viewBox: '0 0 10 10',
        refX: '8.5',
        refY: '5',
        markerWidth: '7',
        markerHeight: '7',
        orient: 'auto-start-reverse'
      });
      marker.appendChild(svgElement('path', {
        d: 'M 0 0 L 10 5 L 0 10 z',
        class: `arrow-head-${kind === 'target' ? 'target' : kind === 'basis-1' ? '1' : '2'}`
      }));
      definitions.appendChild(marker);
    });
    plot.appendChild(definitions);

    const group = svgElement('g');
    const step = extent <= 4 ? 1 : 2;
    for (let x = -Math.floor(extent / step) * step; x <= extent; x += step) {
      group.appendChild(svgElement('line', { x1: scaleX(x), y1: scaleY(-extent), x2: scaleX(x), y2: scaleY(extent), class: 'reference-grid' }));
    }
    for (let y = -Math.floor(extent / step) * step; y <= extent; y += step) {
      group.appendChild(svgElement('line', { x1: scaleX(-extent), y1: scaleY(y), x2: scaleX(extent), y2: scaleY(y), class: 'reference-grid' }));
    }
    for (let u = -5; u <= 5; u += 0.5) {
      const first = point(u, -5, current.a, current.b);
      const second = point(u, 5, current.a, current.b);
      group.appendChild(svgElement('line', { x1: scaleX(first[0]), y1: scaleY(first[1]), x2: scaleX(second[0]), y2: scaleY(second[1]), class: 'moving-grid-2' }));
    }
    for (let v = -5; v <= 5; v += 0.5) {
      const first = point(-5, v, current.a, current.b);
      const second = point(5, v, current.a, current.b);
      group.appendChild(svgElement('line', { x1: scaleX(first[0]), y1: scaleY(first[1]), x2: scaleX(second[0]), y2: scaleY(second[1]), class: 'moving-grid-1' }));
    }
    group.appendChild(svgElement('line', { x1: scaleX(-extent), y1: scaleY(0), x2: scaleX(extent), y2: scaleY(0), class: 'axis' }));
    group.appendChild(svgElement('line', { x1: scaleX(0), y1: scaleY(-extent), x2: scaleX(0), y2: scaleY(extent), class: 'axis' }));

    const arrow = (from, to, kind, dashed = false) => group.appendChild(svgElement('line', {
      x1: scaleX(from[0]),
      y1: scaleY(from[1]),
      x2: scaleX(to[0]),
      y2: scaleY(to[1]),
      class: `${kind} vector${dashed ? ' component' : ''}`,
      'marker-end': `url(#arrow-head-${kind === 'target' ? 'target' : kind === 'basis-1' ? '1' : '2'})`
    }));

    arrow([0, 0], current.a, 'basis-1');
    arrow([0, 0], current.b, 'basis-2');
    arrow([0, 0], data.v, 'target');
    group.appendChild(svgElement('circle', { cx: scaleX(data.v[0]), cy: scaleY(data.v[1]), r: 5, class: 'target' }));
    plot.appendChild(group);
    plot.appendChild(svgElement('rect', { x: margin.left, y: margin.top, width: innerWidth, height: innerHeight, class: 'frame' }));
    plot.appendChild(svgElement('text', { x: width - margin.right, y: height - 10, 'text-anchor': 'end', class: 'axis-label' }, 'x'));
    plot.appendChild(svgElement('text', { x: 18, y: margin.top + 2, class: 'axis-label' }, 'y'));
  }

  function stop() {
    if (animation) cancelAnimationFrame(animation);
    animation = null;
    started = null;
    play.textContent = 'Animar';
  }

  function animate(timestamp) {
    if (started === null) started = timestamp;
    const ratio = Math.min(1, (timestamp - started) / 5200);
    const eased = 0.5 - 0.5 * Math.cos(Math.PI * ratio);
    progress.value = eased;
    draw();
    if (ratio < 1) animation = requestAnimationFrame(animate);
    else stop();
  }

  play.addEventListener('click', () => {
    if (animation) { stop(); return; }
    progress.value = '0';
    play.textContent = 'Pausar';
    animation = requestAnimationFrame(animate);
  });
  progress.addEventListener('input', () => { stop(); draw(); });
  ids.forEach(id => $(id).addEventListener('input', () => { stop(); if (id.startsWith('b')) progress.value = '1'; draw(); }));
  $('reset').addEventListener('click', () => {
    const values = { vx: 1, vy: 1, b1x: 2, b1y: 3, b2x: 4, b2y: 5 };
    Object.entries(values).forEach(([id, value]) => $(id).value = value);
    progress.value = '0';
    stop();
    draw();
  });
  function openPlot() {
    plotModal.hidden = false;
    plotModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    plotModalSlot.appendChild(visualContent);
    requestAnimationFrame(() => { draw(); closePlot.focus(); });
  }

  function closePlotModal() {
    plotSlot.appendChild(plot);
    document.querySelector('.visual').insertBefore(visualContent, document.querySelector('.visual').firstChild);
    plotModal.hidden = true;
    plotModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    draw();
  }

  plot.addEventListener('click', openPlot);
  closePlot.addEventListener('click', closePlotModal);
  plotModal.addEventListener('click', event => {
    if (event.target === plotModal) closePlotModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !plotModal.hidden) closePlotModal();
  });
  window.addEventListener('resize', draw);
  new ResizeObserver(draw).observe(document.querySelector('.visual'));
  draw();
})();
