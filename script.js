var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var id = context.getImageData(0, 0, canvas.width, canvas.height)


function complexModule(x, y){
  return x*x + y*y;
}

function calculateIterations(realAxis, imaginaryAxis, maxIterations) {
  let a = realAxis;
  let b = imaginaryAxis;
  x = a;
  y = b;
  iteration = 1;
  while(complexModule(x, y) <= 4 && iteration < maxIterations){
    let aux = x*x - y*y + a;
    y = 2*x*y + b;
    x = aux;
    iteration++;
  }
  return iteration;
}

function renderSet(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  id = context.getImageData(0, 0, canvas.width, canvas.height);
  let pixels = id.data;
  let realAxis;
  let imaginaryAxis;
  let iterations;
  let r;
  let g;
  let b;
  for(let x = 0; x < canvas.width; x++){
    for(let y = 0; y < canvas.height; y++){
      realAxis = (x/canvas.width)*3.5 - 2.5;
      imaginaryAxis = (y/canvas.height)*2.2 - 1.1;
      let maxIterations = 100;
      iterations = calculateIterations(realAxis, imaginaryAxis, maxIterations);
      if(iterations == maxIterations){
        r = 0;
        g = 0;
        b = 0;
      } else {
        r = iterations/maxIterations * 210;
        g = iterations/maxIterations * 210;
        b = iterations/maxIterations * 256;
      }
      
      let off = (y*id.width + x)*4;
      pixels[off] = r;
      pixels[off + 1] = g;
      pixels[off + 2] = b;
      pixels[off + 3] = 256;
    }
  }
  context.putImageData(id, 0, 0);
}