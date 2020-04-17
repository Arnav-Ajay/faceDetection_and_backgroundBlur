let video = document.getElementById("video");
let blurButton = document.getElementById("blur");

let width = 320;
let height = 0;

// whether streaming video from the camera.
let streaming = false;
let stream = null;
let vc = null;
let isBlurred = false;

let src = null;
let dst = null;

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/weights'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/weights'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/weights'),
  faceapi.nets.faceExpressionNet.loadFromUri('/weights')
]).then(startCamera)

function startCamera() {
  if (streaming) return;
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(function(s) {
    stream = s;
    video.srcObject = s;
    video.play();
  })
    .catch(function(err) {
    console.log("An error occured! " + err);
  });

  video.addEventListener("canplay", function(ev){
    if (!streaming) {
      height = video.videoHeight / (video.videoWidth/width);
      video.setAttribute("width", width);
      video.setAttribute("height", height);
      streaming = true;
      vc = new cv.VideoCapture(video);
    }

    const canvas =  document.getElementById('canvasOutput') 
    this.canvas = faceapi.createCanvasFromMedia(video);
  
    const displaySize = { width: video.width, height: video.height }
    faceapi.matchDimensions(canvas, displaySize);
  
    setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
  
        console.log(detections[0]['detection']['box']['_x']);
        console.log(detections[0]['detection']['box']['_y']);
        console.log(detections[0]['detection']['box']['_width']);
        console.log(detections[0]['detection']['box']['_height']);
        
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  
        faceapi.draw.drawDetections(canvas, resizedDetections);
        face_landmarks = faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
  
    }, 100)
  }, false);

  blurButton.addEventListener("click", function(ev){

    if (!streaming) { console.warn("Please startup your webcam"); return; }
    
    src = new cv.Mat(height, width, cv.CV_8UC4);
    dst = new cv.Mat(height, width, cv.CV_8UC4);

    if(isBlurred == false) {
      requestAnimationFrame(blurBackground);
      isBlurred = true;
    } else {
      requestAnimationFrame(unBlurBackground);
      isBlurred = false;
    }
  }, false);
}

function blurBackground() {
  vc.read(src);
  cv.GaussianBlur(src, dst, {width: 39, height: 39}, 0, 0, cv.BORDER_DEFAULT);

  cv.imshow("canvasOutput", dst);
  requestAnimationFrame(blurBackground);
}

function unBlurBackground() {
  vc.read(src);
  cv.GaussianBlur(src, dst, {width: 1, height: 1}, 0, 0, cv.BORDER_DEFAULT);

  cv.imshow("canvasOutput", dst);
  requestAnimationFrame(unBlurBackground);
}