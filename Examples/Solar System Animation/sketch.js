var starPoses = [];
var zoomAmt = 0
var sizeOffSlide;
var planetOffSlide;
var speedUpSlide;
var speedDownSlide;
var sizeOffSlideNum;
var planetOffSlideNum;
var speedUpSlideNum;
var speedDownSlideNum;
function setup() {

  var canv = createCanvas(720,720,WEBGL);
  canv.parent(select('.codepart'))
  for(var stars = 0; stars < 800; stars++){
    var obj = {
      x: random(-width*10/4,width*10/4),//random(-width*2,width*2),
      y: random(-height*10/4,height*10/4),//random(-height*2,height*2),
      z: random(-1000,-2000)
    }
    starPoses.push(obj);
  }
  noStroke();

  sizeOffSlideNum = createDiv('')
  sizeOffSlide = createSlider(-10,10,1,0.01)
  planetOffSlideNum = createDiv('')
  planetOffSlide = createSlider(-15,15,1,0.1)
  speedUpSlideNum = createDiv('')
  speedUpSlide = createSlider(-10,10,1,0.1)
  speedDownSlideNum = createDiv('')
  speedDownSlide = createSlider(-10,10,5,0.1)

  sizeOffSlide.id("Slider1Ex")
  planetOffSlide.id("Slider2Ex")
  speedUpSlide.id("Slider3Ex")
  speedDownSlide.id("Slider4Ex")
  sizeOffSlideNum.parent(select('.codepart'))
  sizeOffSlide.parent(select('.codepart'))
  planetOffSlideNum.parent(select('.codepart'))
  planetOffSlide.parent(select('.codepart'))
  speedUpSlideNum.parent(select('.codepart'))
  speedUpSlide.parent(select('.codepart'))
  speedDownSlideNum.parent(select('.codepart'))
  speedDownSlide.parent(select('.codepart'))

}
var sizeOffset = 1//0.5;
var speedUp = 1;
var speedDown = 5;
var planetOff = 1//6;
var sunSize = 15 / (sizeOffset);
var dataSheetObj = []
var stopSwitch = 0;
function draw() {
  dataSheetObj = [{
      name: "mercury",
      size: sunSize/(277/sizeOffset),
      speed:  47.4,//365 * 0.241,
      distance: 57.9*10^6,//149600000 * 0.387,
      baseColor: [125,125,125]
    },{
      name: "venus",
      size: sunSize/(113/sizeOffset),
      speed: 35.0,//365 * 0.615,
      distance: 108.2*10^6,//149600000 * 0.723,
      baseColor: [25,250,25]
    },{
      name: "earth",
      size: sunSize/(108/sizeOffset),
      speed: 29.8,//365 * 1,
      distance: 149.6*10^6,//149600000,
      baseColor: [25,125,255]
    },{
      name: "mars",
      size: sunSize/(208/sizeOffset),
      speed: 24.1,//365 * 1.88,
      distance: 227.9*10^6,//149600000 * 1.52,
      baseColor: [255,50,10]
    },{
      name: "jupiter",
      size: sunSize/(9.7/sizeOffset),
      speed: 13.1,//365 * 11.9,
      distance: 778.6*10^6,//149600000 * 5.2,
      baseColor: [255,175,75]
    },{
      name:"saturn",
      size: sunSize/(11.4/sizeOffset),
      speed: 9.7,//365 * 29.4,
      distance: 1433.5*10^6,//149600000 * 9.58,
      baseColor: [125,225,125]
    },{
      name: "uranus",
      size: sunSize/(26.8/sizeOffset),
      speed: 6.8,//365 * 83.7,
      distance: 2872.5*10^6,//149600000 * 19.2,
      baseColor: [125,255,255]
    },{
      name:"neptune",
      size: sunSize/(27.7/sizeOffset),
      speed: 5.4,//365 * 163.7,
      distance: 4495.1*10^6,//149600000 * 30.05,
      baseColor: [15,25,255]
    },{
      name: "pluto",
      size: sunSize/(585.444444444/sizeOffset),
      speed: 4.7,//365 * 247.9,
      distance: 5906.4*10^6,//149600000 * 39.48,
      baseColor: [225,225,225]
    }
    //https://www.jpl.nasa.gov/infographics/infographic.view.php?id=10749
    //https://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_ratio.html
  ]
  sizeOffset = sizeOffSlide.value()//0.5;
  speedUp = speedUpSlide.value();
  speedDown = speedDownSlide.value();
  planetOff = planetOffSlide.value()//6;
  sunSize = 15 / (sizeOffset);
  sizeOffSlideNum.html("Size Offset: "+sizeOffSlide.value())
  planetOffSlideNum.html("Planet Offset: "+planetOffSlide.value())
  speedUpSlideNum.html("Speed Up Offset: "+speedUpSlide.value())
  speedDownSlideNum.html("Speed Down Offset: "+speedDownSlide.value())

  if (mouseIsPressed&(mouseX<width&mouseX>0&mouseY<height&mouseY>0)) {
      if (mouseButton === LEFT) {
        zoomAmt+=5
      }
      if (mouseButton === CENTER) {
        zoomAmt-=5
      }
    }
  translate(mouseX-width/2,mouseY-height/2,-zoomAmt)
  //translate(0,0,-zoomAmt)
  //rotateY(map(mouseX-width/2,-width/2,width/2,0,360))
  //rotateX(map(mouseY-height/2,-height/2,height/2,0,360))
  background(0,0,0);
    for(var count = 0; count < starPoses.length; count++){
      push();
      translate(starPoses[count].x,starPoses[count].y,starPoses[count].z)
      fill(255*random(0,1));
      rotateX(90)
      cone(2,1);
      pop();
    }
    var dist = 200;
    //var lightPoses = [
    //  [0,dist,0],
    //  [dist,0,0],
    //  [0,0,dist]
    //  ]
    //for(var i = 0; i < 3; i++){
    //    directionalLight(255,255,255,lightPoses[i][0],lightPoses[i][1],lightPoses[i][2]);
    //    directionalLight(255,255,255,-lightPoses[i][0],-lightPoses[i][1],-lightPoses[i][2]);
    //}
    //pointLight(255,255,255,0,0,0);1
    for(var i = 0; i < 10; i++){
      pointLight(255,255,255,0,0,1000)
    }
    push();
    ambientMaterial(255,255,125)
    sphere(sunSize);
    normalMaterial();
    //rotateY(0)
    //plane(sunSize*2);
    pop();

    for (var planet = 0; planet < dataSheetObj.length;planet++) {
      push();

      var leObj = dataSheetObj[planet];
      var name = leObj.name;
      var speed = leObj.speed*((millis()*1000)/(4000*speedDown));
      //print(second())
      var size = leObj.size*planetOff;
      var color = leObj.baseColor;
      var dist = map(leObj.distance,dataSheetObj[0].distance,dataSheetObj[8].distance,sunSize+2,360);
      var orbitalCircumference = leObj.distance*TWO_PI
      var angle = map(speed*speedUp,0,orbitalCircumference,0,360)%360
      if(dataSheetObj[2] === leObj){

      }
      angleMode(DEGREES);
      rotateZ(angle);
      translate(dist,0,0);
      ambientMaterial(color);
      if(planet === 5){
        ambientMaterial(color[0],color[1],color[2],25)
          torus(size*(2.270/2),2.270)
      }
      ambientMaterial(color[0],color[1],color[2]);
      sphere(size);
      ambientMaterial(color[0],color[1],color[2],10)
      torus(size+20,5)
      box(2,size*2+40,2)
      box(size*2+40,2,2)
    /*  translate(0,size+50,0);
      rotateZ(180);
      scale(1/scaleure);
      cone();*/
      pop();

    }
}
