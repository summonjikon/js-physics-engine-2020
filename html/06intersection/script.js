const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


let A,B,C,D,F,G,S;

A = new Point(100,100,20,"blue",true);
B = new Point(800,400,20,"red",true);
C = new Point(100,300,20,"green",true);
D = new Point(700,200,20,"orange",true);
S = new Point(0,0,10,"white",false);

F = new LinearFunction(1,1); 
G = new LinearFunction(1,1);


function animate(){
  context.clearRect(0,0,width,height);
  A.draw(context); 
  B.draw(context); 
  C.draw(context);
  D.draw(context);
  S.draw(context);

  S.x = F.intersection(G).x;
  S.y = F.intersection(G).y;

  F.slope = (A.y - B.y)/(A.x - B.x); 
  F.intercept = A.y - A.x * F.slope;
  F.draw(context);

  G.slope = (C.y - D.y)/(C.x - D.x);
  G.intercept = D.y - D.x * G.slope;
  G.draw(context);

}

setInterval(animate,10); 