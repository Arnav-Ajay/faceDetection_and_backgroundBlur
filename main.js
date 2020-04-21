// let video = document.getElementById("video");
// let blurButton = document.getElementById("blur");

// let width = 320;
// let height = 0;

// // whether streaming video from the camera.
// let streaming = false;
// let stream = null;
// let vc = null;
// let isBlurred = false;

// let src = null;
// let dst = null;

// Promise.all([
//   faceapi.nets.tinyFaceDetector.loadFromUri('/weights'),
//   faceapi.nets.faceLandmark68Net.loadFromUri('/weights'),
//   faceapi.nets.faceRecognitionNet.loadFromUri('/weights'),
//   faceapi.nets.faceExpressionNet.loadFromUri('/weights')
// ]).then(startCamera)

// function startCamera() {
//   if (streaming) return;
//   navigator.mediaDevices.getUserMedia({video: true, audio: false})
//     .then(function(s) {
//     stream = s;
//     video.srcObject = s;
//     video.play();
//   })
//     .catch(function(err) {
//     console.log("An error occured! " + err);
//   });

//   video.addEventListener("canplay", function(ev){
//     if (!streaming) {
//       height = video.videoHeight / (video.videoWidth/width);
//       video.setAttribute("width", width);
//       video.setAttribute("height", height);
//       streaming = true;
//       vc = new cv.VideoCapture(video);
//     }
//     startFaceDetection();

//     // const canvas =  document.getElementById('canvasOutput') 
//     // this.canvas = faceapi.createCanvasFromMedia(video);

//     // const displaySize = { width: video.width, height: video.height }
//     // faceapi.matchDimensions(canvas, displaySize);
  
//     // setInterval(async () => {
//     //     const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
//     //     const resizedDetections = faceapi.resizeResults(detections, displaySize);
  
//     //     console.log(detections[0]['detection']['box']['_x']);
//     //     console.log(detections[0]['detection']['box']['_y']);
//     //     console.log(detections[0]['detection']['box']['_width']);
//     //     console.log(detections[0]['detection']['box']['_height']);
        
//     //     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  
//     //     faceapi.draw.drawDetections(canvas, resizedDetections);
//     //     face_landmarks = faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
//     //     faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
  
//     // }, 100)
//   }, false);

//   blurButton.addEventListener("click", function(ev){

//     if (!streaming) { console.warn("Please startup your webcam"); return; }
    
//     src = new cv.Mat(height, width, cv.CV_8UC4);
//     dst = new cv.Mat(height, width, cv.CV_8UC4);

//     if(isBlurred == false) {
//       requestAnimationFrame(blurBackground);
//       isBlurred = true;
//     } else {
//       requestAnimationFrame(unBlurBackground);
//       isBlurred = false;
//     }
//   }, false);
// }

// function blurBackground() {
//   vc.read(src);
//   cv.GaussianBlur(src, dst, {width: 39, height: 39}, 0, 0, cv.BORDER_DEFAULT);

//   cv.imshow("canvasOutput", dst);
//   requestAnimationFrame(blurBackground);
// }

// // function unBlurBackground() {
// //   vc.read(src);
// //   cv.GaussianBlur(src, dst, {width: 1, height: 1}, 0, 0, cv.BORDER_DEFAULT);

// //   cv.imshow("canvasOutput", dst);
// //   requestAnimationFrame(unBlurBackground);
// // }

// function startFaceDetection(){
//   const canvas =  document.getElementById('canvasOutput') 
//   this.canvas = faceapi.createCanvasFromMedia(video);

//   const displaySize = { width: video.width, height: video.height }
//   faceapi.matchDimensions(canvas, displaySize);

//   setInterval(async () => {    
//     const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
//     const resizedDetections = faceapi.resizeResults(detections, displaySize);

//     console.log(detections[0]['detection']['box']['_x']);
//     console.log(detections[0]['detection']['box']['_y']);
//     console.log(detections[0]['detection']['box']['_width']);
//     console.log(detections[0]['detection']['box']['_height']);
      
//     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

//     faceapi.draw.drawDetections(canvas, resizedDetections);
//     face_landmarks = faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
//     faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

//   }, 100)

// }

// function unBlurBackground() {
//   startFaceDetection(); 
//   dst = vc.read(src);
// }


































// let video = document.getElementById("video");

// let width = 320;
// let height = 240;

// // whether streaming video from the camera.
// let streaming = false;
// let stream = null;
// let vc = null;

// var scaleFactor = 0.25;
// var snapshots = [];


// Promise.all([
//   faceapi.nets.tinyFaceDetector.loadFromUri('/weights'),
//   faceapi.nets.faceLandmark68Net.loadFromUri('/weights'),
//   faceapi.nets.faceRecognitionNet.loadFromUri('/weights'),
//   faceapi.nets.faceExpressionNet.loadFromUri('/weights')
// ]).then(startCamera)

// function startCamera() {
//   if (streaming) return;
//   navigator.mediaDevices.getUserMedia({video: true, audio: false})
//     .then(function(s) {
//     stream = s;
//     video.srcObject = s;
//     video.play();
//   })
//     .catch(function(err) {
//     console.log("An error occured! " + err);
//   });

//   video.addEventListener("canplay", function(ev){
//     if (!streaming) {
//       height = video.videoHeight / (video.videoWidth/width);
//       video.setAttribute("width", width);
//       video.setAttribute("height", height);
//       streaming = true;
//       vc = new cv.VideoCapture(video);
//     }
//   }, false);

//   var output = document.getElementById('c1');
//   var canvas = capture(video, scaleFactor);
//   canvas.onclick = function() {
//     window.open(this.toDaraURL());
//   };
//   snapshots.unshift(canvas);
//   for(var i=0; i<5; i++){
//     cv.imshow(output, snapshots[i])
//   }
// }

// function capture(video, scaleFactor) {
//   if(scaleFactor == null){
//     scaleFactor = 1;
//   }

//   var w = width * scaleFactor;
//   var h = height * scaleFactor;
//   var canvas = document.createElement('canvas');
//   canvas.width = w;
//   canvas.height = h;
//   var ctx = canvas.getContext('2d');
//   ctx.drawImage(video, 0, 0, w, h);

//   return canvas;
// }

































// let video = document.getElementById("video");

// let width = 320;
// let height = 240;

// // whether streaming video from the camera.
// let streaming = false;
// let stream = null;
// let vc = null;

// var scaleFactor = 0.25;
// var snapshots = [];


// document.querySelector('input').addEventListener('change', extractFrames, false);

// function extractFrames() {
//   var video = document.createElement('video');
//   var array = [];
//   var canvas = document.createElement('canvas');
//   var ctx = canvas.getContext('2d');
//   var pro = document.querySelector('#progress');

//   function initCanvas(e) {
//     canvas.width = this.videoWidth;
//     canvas.height = this.videoHeight;
//   }

//   function drawFrame(e) {
//     this.pause();
//     ctx.drawImage(this, 0, 0);
//     /* 
//     this will save as a Blob, less memory consumptive than toDataURL
//     a polyfill can be found at
//     https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob#Polyfill
//     */
//     canvas.toBlob(saveFrame, 'image/jpeg');
//     pro.innerHTML = ((this.currentTime / this.duration) * 100).toFixed(2) + ' %';
//     if (this.currentTime < this.duration) {
//       this.play();
//     }
//   }

//   function saveFrame(blob) {
//     array.push(blob);
//   }

//   function revokeURL(e) {
//     URL.revokeObjectURL(this.src);
//   }
  
//   function onend(e) {
//     var img;
//     // do whatever with the frames
//     for (var i = 0; i < array.length; i++) {
//       img = new Image();
//       img.onload = revokeURL;
//       img.src = URL.createObjectURL(array[i]);
//       document.body.appendChild(img);
//     }
//     // we don't need the video's objectURL anymore
//     URL.revokeObjectURL(this.src);
//   }
  
//   video.muted = true;

//   video.addEventListener('loadedmetadata', initCanvas, false);
//   video.addEventListener('timeupdate', drawFrame, false);
//   video.addEventListener('ended', onend, false);

//   video.src = URL.createObjectURL(this.files[0]);
//   video.play();
// }

































// let video = document.getElementById("video");

// let width = 320;
// let height = 240;

// // whether streaming video from the camera.
// let streaming = false;
// let stream = null;
// let vc = null;

// Promise.all([
//   faceapi.nets.tinyFaceDetector.loadFromUri('/weights'),
//   faceapi.nets.faceLandmark68Net.loadFromUri('/weights'),
//   faceapi.nets.faceRecognitionNet.loadFromUri('/weights'),
//   faceapi.nets.faceExpressionNet.loadFromUri('/weights')
// ]).then(startCamera)

// function startCamera() {
//   if (streaming) return;
//   navigator.mediaDevices.getUserMedia({video: true, audio: false})
//     .then(function(s) {
//     stream = s;
//     video.srcObject = s;
//     video.play();
//   })
//     .catch(function(err) {
//     console.log("An error occured! " + err);
//   });

//   video.addEventListener("canplay", function(ev){
//     if (!streaming) {
//       height = video.videoHeight / (video.videoWidth/width);
//       video.setAttribute("width", width);
//       video.setAttribute("height", height);
//       streaming = true;
//       vc = new cv.VideoCapture(video);
//     }
//   }, false);

//   var seriously = new Seriously();

//   var src = seriously.source(video);
//   var target = seriously.target('#canvasOutput');

//   var blur = seriously.effect('blur');

//   blur.source = src;
//   target.source = blur;

// }

































// let video = document.getElementById("video");
// let blurButton = document.getElementById("blur");
// let canvasFrame = document.getElementById('canvasOutput');
// let faceFrame = document.getElementById('faceOutput');
// let context = canvasFrame.getContext('2d');
// let width = 320;
// let height = 0;

// // whether streaming video from the camera.
// let streaming = false;
// let stream = null;
// let vc = null;
// let isBlurred = false;

// let src = null;
// let dst = null;

// let src1 = null;
// let dst2 = null;

// Promise.all([
//   faceapi.nets.tinyFaceDetector.loadFromUri('/weights'),
//   faceapi.nets.faceLandmark68Net.loadFromUri('/weights'),
//   faceapi.nets.faceRecognitionNet.loadFromUri('/weights'),
//   faceapi.nets.faceExpressionNet.loadFromUri('/weights')
// ]).then(startCamera)

// function startCamera() {
//   if (streaming) return;
//   navigator.mediaDevices.getUserMedia({video: true, audio: false})
//     .then(function(s) {
//     stream = s;
//     video.srcObject = s;
//     video.play();
//   })
//     .catch(function(err) {
//     console.log("An error occured! " + err);
//   });

//   video.addEventListener("canplay", function(ev){
//     if (!streaming) {
//       height = video.videoHeight / (video.videoWidth/width);
//       video.setAttribute("width", width);
//       video.setAttribute("height", height);
//       streaming = true;
//       vc = new cv.VideoCapture(video);
//       setTimeout(processVideo, 1);
//     }
//     startFaceDetection();

//   }, false);

//   blurButton.addEventListener("click", function(ev){

//     if (!streaming) { console.warn("Please startup your webcam"); return; }
    
//     src = new cv.Mat(height, width, cv.CV_8UC4);
//     dst = new cv.Mat(height, width, cv.CV_8UC4);

//     if(isBlurred == false) {
//       requestAnimationFrame(blurBackground);
//       isBlurred = true;
//     } else {
//       requestAnimationFrame(unBlurBackground);
//       isBlurred = false;
//     }
//   }, false);
// }

// function processVideo() {
//   let begin = Date.now();
//   src1 = new cv.Mat(height, width, cv.CV_8UC4);
//   dst1 = new cv.Mat(height, width, cv.CV_8UC4);

//   const fps = 60;

//   vc.read(src1);
  
//   context.drawImage(video, 0, 0, width, height);
//   src1.data.set(context.getImageData(0, 0, width, height).data);
//   //cv.GaussianBlur(src1, dst1, {width: 39, height: 39}, 0, 0, cv.BORDER_DEFAULT);
//   dst1 = src1.clone()
//   cv.imshow("canvasOutput", dst1);

//   let delay = 1000/fps - (Date.now() - begin);
//   setTimeout(processVideo, delay);
// }

// function blurBackground() {
//   vc.read(src);
//   cv.GaussianBlur(src, dst, {width: 39, height: 39}, 0, 0, cv.BORDER_DEFAULT);

//   cv.imshow("canvasOutput", dst);
//   requestAnimationFrame(blurBackground);
// }

// function unBlurBackground() {
//   vc.read(src);
//   cv.GaussianBlur(src, dst, {width: 1, height: 1}, 0, 0, cv.BORDER_DEFAULT);

//   cv.imshow('canvasOutput', dst);
//   requestAnimationFrame(unBlurBackground);
// }

// function createROI(x, y, w, h){

//   try{
//     if(w!=0 && h!=0){
//       let src2 = new cv.Mat(height, width, cv.CV_8UC4);
//       vc.read(src2);
//       let rect = new cv.Rect(x, y, w, h);
//       let roi = new cv.Mat();
//       console.log(rect);
//       roi = src2.roi(rect);
//       if(roi.width!=0 && roi.height!=0){
//         cv.imshow(faceFrame, roi);
//       }
//     }
//   } catch(err){
//     console.log("someError");
//   }
// }

// function startFaceDetection(){

//   const canvas =  document.getElementById('canvasOutput') 
//   this.canvas = faceapi.createCanvasFromMedia(video);

//   const displaySize = { width: video.width, height: video.height }
//   faceapi.matchDimensions(canvas, displaySize);

//   setInterval(async () => {    
//     const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
//     const resizedDetections = faceapi.resizeResults(detections, displaySize);

//     console.log(detections[0]['detection']['box']['_x']);
//     console.log(detections[0]['detection']['box']['_y']);
//     console.log(detections[0]['detection']['box']['_width']);
//     console.log(detections[0]['detection']['box']['_height']);

    
//     let xInit = detections[0]['detection']['box']['_x'];
//     let yInit = detections[0]['detection']['box']['_y'];
//     let boxW = detections[0]['detection']['box']['_width'];
//     let boxH = detections[0]['detection']['box']['_height'];

//     createROI(xInit, yInit, boxW, boxH);
   
//     // let rect = new cv.Rect(xInit, yInit, boxW, boxH);
//     // let roi = new cv.Mat();
//     // console.log(rect);

//     // roi = src.roi(rect);
//     // cv.imshow('faceOutput', roi);
    
//     // canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

//     // faceapi.draw.drawDetections(canvas, resizedDetections);
//     // face_landmarks = faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
//     // faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
//   }, 100)

// }
// // let src = cv.imread('canvasInput');
// // let dst = new cv.Mat();
// // // You can try more different parameters
// // let rect = new cv.Rect(100, 100, 200, 200);
// // dst = src.roi(rect);
// // cv.imshow('canvasOutput', dst);
// // src.delete();
// // dst.delete()

































let video = document.getElementById("video");
let blurButton = document.getElementById("blur");
let canvasFrame = document.getElementById('canvasOutput');
let faceFrame = document.getElementById('faceOutput');
let context = canvasFrame.getContext('2d');
let width = 320;
let height = 0;

// whether streaming video from the camera.
let streaming = false;
let stream = null;
let vc = null;
let isBlurred = false;

let src = null;
let dst = null;

let src1 = null;
let dst2 = null;

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
      setTimeout(processVideo, 1);
    }
    startFaceDetection();

    // setInterval(async () => {    
    //   const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
    //   const resizedDetections = faceapi.resizeResults(detections, displaySize);
  
    //   console.log(resizedDetections[0]['detection']['box']['_x']);
    //   console.log(resizedDetections[0]['detection']['box']['_y']);
    //   console.log(resizedDetections[0]['detection']['box']['_width']);
    //   console.log(resizedDetections[0]['detection']['box']['_height']);
  
      
    //   let xInit = detections[0]['detection']['box']['_x'];
    //   let yInit = detections[0]['detection']['box']['_y'];
    //   let boxW = detections[0]['detection']['box']['_width'];
    //   let boxH = detections[0]['detection']['box']['_height'];
  
    //   if(xInit!=0 && yInit!=0 && boxW!=0 && boxH!=0){
    //     createROI(xInit, yInit, boxW, boxH);
    //   }
    // }, 100);

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
  dst.delete();
  requestAnimationFrame(blurBackground);
}

function unBlurBackground() {
  vc.read(src);
  cv.GaussianBlur(src, dst, {width: 1, height: 1}, 0, 0, cv.BORDER_DEFAULT);

  cv.imshow('canvasOutput', dst);
  dst.delete();
  requestAnimationFrame(unBlurBackground);
}

function createROI(x, y, w, h){

  try{
    let src2 = new cv.Mat(height, width, cv.CV_8UC4);
    vc.read(src2);
    console.log(src2.cols);

    if(src2.cols >= w && src2.rows >= h){
      let rect = new cv.Rect(x, y, w, h);
      let myroi = new cv.Mat(height, width, cv.CV_8UC4);
      console.log(rect);
      myroi = src2.roi(rect);
      // console.log(myroi.x);
      // if(roi.width!=0 && roi.height!=0){
      cv.imshow(faceFrame, myroi);
      src2.delete();
      myroi.delete()
      // }
    }
    else{console.log("nothing happened");}
  } catch(err){
    console.log(err+ "some error");
  }
}

function processVideo() {
  let begin = Date.now();
  src1 = new cv.Mat(height, width, cv.CV_8UC4);
  dst1 = new cv.Mat(height, width, cv.CV_8UC4);

  const fps = 60;

  vc.read(src1);
  
  context.drawImage(video, 0, 0, width, height);
  src1.data.set(context.getImageData(0, 0, width, height).data);
  //cv.GaussianBlur(src1, dst1, {width: 39, height: 39}, 0, 0, cv.BORDER_DEFAULT);
  dst1 = src1.clone()
  cv.imshow("canvasOutput", dst1);

  let delay = 1000/fps - (Date.now() - begin);
  setTimeout(processVideo, delay);
}

function startFaceDetection(){

  const canvas =  document.getElementById('canvasOutput') 
  this.canvas = faceapi.createCanvasFromMedia(video);

  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize);

  setInterval(async () => {    
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
    const resizedDetections = faceapi.resizeResults(detections, displaySize);

    console.log(resizedDetections[0]['detection']['box']['_x']);
    console.log(resizedDetections[0]['detection']['box']['_y']);
    console.log(resizedDetections[0]['detection']['box']['_width']);
    console.log(resizedDetections[0]['detection']['box']['_height']);

    
    let xInit = resizedDetections[0]['detection']['box']['_x'];
    let yInit = resizedDetections[0]['detection']['box']['_y'];
    let boxW = resizedDetections[0]['detection']['box']['_width'];
    let boxH = resizedDetections[0]['detection']['box']['_height'];

    createROI(xInit, yInit, boxW, boxH);
   
    // let rect = new cv.Rect(xInit, yInit, boxW, boxH);
    // let roi = new cv.Mat();
    // console.log(rect);

    // roi = src.roi(rect);
    // cv.imshow('faceOutput', roi);
    
    // canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

    // faceapi.draw.drawDetections(canvas, resizedDetections);
    // face_landmarks = faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    // faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
  }, 100)

}
// let src = cv.imread('canvasInput');
// let dst = new cv.Mat();
// // You can try more different parameters
// let rect = new cv.Rect(100, 100, 200, 200);
// dst = src.roi(rect);
// cv.imshow('canvasOutput', dst);
// src.delete();
// dst.delete()