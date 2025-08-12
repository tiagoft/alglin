import cv2

# List to hold available camera indexes
available_cameras = []

# Check camera indices from 0 to 10 (you can increase this range)
for i in range(10):
    cap = cv2.VideoCapture(i)
    if cap.isOpened():
        available_cameras.append(i)
        cap.release()

# Print the available cameras
if available_cameras:
    print(f"Available cameras: {available_cameras}")
else:
    print("No cameras found.")
