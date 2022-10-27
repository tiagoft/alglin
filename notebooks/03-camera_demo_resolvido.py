import numpy as np
import cv2 as cv

def criar_indices_upsampling(min_i, max_i, min_j, max_j, upsample):
    import itertools
    L = list(itertools.product(np.linspace(min_i, max_i, (max_i-min_i+1) * upsample), np.linspace(min_j, max_j, (max_j-min_j+1) * upsample)))
    idx_i = np.array([e[0] for e in L])
    idx_j = np.array([e[1] for e in L])
    idx = np.vstack( (idx_i, idx_j) )
    return idx

def run():
    width = 160*2
    height = 120*2

    X = criar_indices_upsampling(0, height-1, 0, width-1, 1)
    X = np.vstack ( (X, np.ones( X.shape[1]) ) )
    T = np.array([[1, 0, -height/2], [0, 1, -width/2], [0, 0, 1]])
    T_ = np.linalg.inv(T)
    theta = 0

    image_ = np.zeros( (height,width,3) ) 

    cap = cv.VideoCapture(0)
    if not cap.isOpened():
        print("Cannot open camera")
        exit()


    while True:
        # Capture frame-by-frame
        ret, frame = cap.read()
        frame = cv.resize(frame, (width,height), interpolation =cv.INTER_AREA)

        # if frame is read correctly ret is True
        if not ret:
            print("Can't receive frame (stream end?). Exiting ...")
            break

        # image.shape = (width, height, colors)
        image = np.array(frame).astype(float)/255
        # transformacao
        
        R = np.array([[np.cos(theta), -np.sin(theta), 0], [np.sin(theta), np.cos(theta), 0], [0, 0, 1]])
        A = np.linalg.inv(T_ @ R @ T)
        #Xd = A @ X
        
        Xd = X
        Xo = A @ X

        filter0 = Xo[0,:]>=0
        Xd = Xd[:,filter0]
        Xo = Xo[:,filter0]
        filter1 = Xo[0,:]<image_.shape[0]
        Xd = Xd[:,filter1]
        Xo = Xo[:,filter1]
        filter2 = Xo[1,:]>=0
        Xd = Xd[:,filter2]
        Xo = Xo[:,filter2]
        filter3 = Xo[1,:]<image_.shape[1]
        Xd = Xd[:,filter3]
        Xo = Xo[:,filter3]

    #    Xd[0,:] = np.clip(Xd[0,:], 0, image_.shape[0]-1)
    #    Xd[1,:] = np.clip(Xd[1,:], 0, image_.shape[1]-1)

        Xd = Xd.astype(int)
        Xo = Xo.astype(int)

        image_ *= 0
        image_[Xd[0,:], Xd[1,:], :] = image[Xo[0,:], Xo[1,:], :]
        
        theta += 0.1

        # Display the resulting frame
        #image_large = cv.resize(image_, (width*4,height*4), interpolation =cv.INTER_AREA)
        cv.imshow('frame', image_)
        if cv.waitKey(1) == ord('q'):
            break



    # When everything done, release the capture
    cap.release()
    cv.destroyAllWindows()

run()