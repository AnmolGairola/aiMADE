let input;
let img;
val = 10
let value = 1

function setup() {
  input = createFileInput(handleFile);
  input.position(0, 0);
  can = createCanvas(500, 500)
}

function draw() {
  //background(255);
  if (img && value == 1) {
    can = createCanvas(img.width, img.height)
    image(img, 0, 0, width, height);
    for (let col = 0; col < img.width; col+=val){
      for(let row = 0; row < img.height; row+=val){
      
      x = col
      y = row
        
      let c = can.get(x, y);
      stroke(color(c))
      strokeWeight(random(val,20))
      circle(x, y, random(val));
      
      
      
   }
 }
    value = value * -1
      
  }
}

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
    print(can)
  } else {
    img = null;
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value = value * -1;
  } 
}
