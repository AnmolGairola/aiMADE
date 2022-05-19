let img
val = 5


function preload(){
  
  img = loadImage('assets/img8.png')
  
}


function setup() {
  //val = random(1, 10)
  print(val)
  createCanvas(img.width, img.height);
  
  for (let col = 0; col < img.width; col+=random(val)){
    for(let row = 0; row < img.height; row+=random(val)){
      
      x = col
      y = row
            
      
      let c = img.get(x, y);
      stroke(color(c))
      strokeWeight(random(val,20))
      circle(x, y, random(val));
      
    }
  }
}

