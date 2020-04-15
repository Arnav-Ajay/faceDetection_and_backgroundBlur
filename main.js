
const imageUpload = document.getElementById('imageUpload')
const video = document.getElementById('videoElement')

// let dst = new cv.Mat();

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/weights'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/weights'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/weights'),
  faceapi.nets.faceExpressionNet.loadFromUri('/weights')
]).then(start)

async function start(){
  navigator.getUserMedia(
      { video: {} },
      stream => video.srcObject = stream,
      err => console.error(err)
  );

}

video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);

  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize);


  setInterval(async () => {
      const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
      const resizedDetections = faceapi.resizeResults(detections, displaySize);

      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

      faceapi.draw.drawDetections(canvas, resizedDetections);
      face_landmarks = faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections);


      // let src = cv.imread(canvas);
      // let dst = new cv.Mat();
      // let ksize = new cv.Size(9, 9);
      // let anchor = new cv.Point(-1, -1);
      // var t = cv.blur(src, dst, ksize);
      // cv.imshow('canvasOutput', dst);
      // src.delete(); 
      // dst.delete();

  }, 100)

})
