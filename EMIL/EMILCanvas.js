/*
Description: Programming Culmminating
Author: Emily Peng
Last Edit: January 12, 2025
*/
 
let myWidth=800;
let myHeight=400;

let MouseX = 0;
let MouseY = 0;

//setup function----------
function setup() {
	
if (windowWidth/800 < (windowHeight-30)/400){
    myWidth=windowWidth;
    myHeight=400*windowWidth/800;
}
else {
    myWidth=800*(windowHeight-30)/400;
    myHeight=windowHeight-30;
}
    
createCanvas(myWidth, myHeight);


	frameRate(20);
}



function windowResized() {


if (windowWidth/800 < (windowHeight-30)/400){
    myWidth=windowWidth;
    myHeight=400*windowWidth/800;
}
else {
    myWidth=800*(windowHeight-30)/400;
    myHeight=windowHeight-30;
}
    
  resizeCanvas(myWidth, myHeight);

  
}







//initialize variables----------

//colors; index 1, E index 7
let redValue=255;
let greenValue=0;  
let blueValue=0; 

//glowing bulbs; index 3
let glow=0;

//starting mode
const startIndex=[0, 7, 1, 3];

//number of index; 0=block letters, 1=round letters, 2=logos, 3=light bulbs, 4=pixelated, 5=pixel storm, 6=line illusion, 7=fun movement
let indexCount=7;

let indexE=startIndex[0];
let indexM=startIndex[1];
let indexI=startIndex[2];
let indexL=startIndex[3];

//smoke index
const smoke=[0];

//arguments for the tittle; I index 7; size, growth
const tittle=[0, 0];

//stripe locations; L index 7
const stripes=[-100, -50, 0, 50, 100];

//center of arc; E+M index 7
let train=3.14;


//draw function----------
function draw() {
	
scale(myWidth/800);
MouseX=800*mouseX/myWidth;
MouseY=800*mouseY/myWidth;


	
	//shuffles indexes once space is pressed
	if(keyIsPressed)
		{
				if(key==" ")
					{
						let step=indexCount+1;

						//ensures each letter's index is changed
						let current=indexE;
						while(indexE==current || indexE==2)
							{
								indexE=floor(random()*step);
							}

						current=indexM;
						while(indexM==current || indexM==2)
							{
								indexM=floor(random()*step);
							}

						current=indexI;
						while(indexI==current || indexI==2)
							{
								indexI=floor(random()*step);
							}

						current=indexL;
						while(indexL==current || indexL==2)
							{
								indexL=floor(random()*step);
							}
						
					}
		}
	
	//background
	background(255);

	//letters
	fill(200);
	
	drawE(indexE, 0.5);
	drawM(indexM, 0.5);
	drawI(indexI, 0.5);
	drawL(indexL, 0.5);
	
	//testing function
	testDraw(0, 1);
	
	//border
	fill(0);
	stroke(0);
	rect(0, 0, 800, 100);
	rect(0, 300, 800, 100);

	//changes color of fill according to the rainbow; index 1, E index 7
	colorWheel();
	
	//changes glowing bulbs; index 3
	glow=glow+1/3;
				if(glow>=7)
					{
						glow=0; 
					}
	
	//changes arc location; E+M index 7
	train=train+PI/45;
	if(train>2*PI)
		{
			train=0;
		}

	//changes stripes location; L index 7
	for(i=0; i<stripes.length; i++)
		{
			stripes[i]=stripes[i]-5;
			
			if(stripes[i]<-100)
				{
					stripes[i]=150;
				}
		}
	
	//guides/references
	/*
	noFill();
	square(200, 0, 400);
	guides(50, 4)
	//boxReference(200);
*/
	
}


//built in functions----------
function mouseClicked()
{
	
	//Changes to next index when you click a letter
	if(MouseY>100 && MouseY<300)
		{
			if(MouseX<200)
				{
					indexE=indexE+1;	
					if(indexE==2){
						indexE=indexE+1;
					}
				}
			else if(MouseX<400)
				{
					indexM=indexM+1;
					if(indexM==2){
						indexM=indexM+1;
					}
				}
			else if(MouseX<600)
				{
					indexI=indexI+1;
					if(indexI==2){
						indexI=indexI+1;
					}
				}
			else
				{
					indexL=indexL+1;
					if(indexL==2){
						indexL=indexL+1;
					}
				}
		}
	
	//Resets index to 0;
	let end=indexCount+1;
	if(indexE>=end)
		{
			indexE=0;
		}
	if(indexM>=end)
		{
			indexM=0;
		}
	if(indexI>=end)
		{
			indexI=0;
		}
	if(indexL>=end)
		{
			indexL=0;
		}
}



//my functions----------

/**
* Draws whatever is put in it and used for testing
*
*@param {num} - index - which drawing should be produced
*@param {num} - size - how big the drawings should be
*
*/
function testDraw(index, size)
{
	let x=width/2;
	let y=height/2;
	if(index==0)
		{

				
		
		}	
}

/**
* Draws the letter E
*
*@param {num} - index - which drawing should be produced
*@param {num} - size - how big the drawings should be
*
*/
function drawE(index, size)
{
	//sets location
	let x=100;
	let y=200;
	
	if(index==0)
		{
			//creates border
			stroke(0);
			strokeWeight(10);
			
			//horizontal lines
			rect(x-100*size, y-150*size, 200*size, 50*size);
			rect(x-100*size, y+100*size, 200*size, 50*size);
			rect(x-100*size, y-30*size, 150*size, 50*size);
			
			//vertical lines
			rect(x-100*size, y-150*size, 50*size, 250*size);
			
			//draws filled in
			noStroke();
			fill(redValue, greenValue, blueValue);
			
			//horizontal lines
			rect(x-100*size, y-150*size, 200*size, 50*size);
			rect(x-100*size, y+100*size, 200*size, 50*size);
			rect(x-100*size, y-30*size, 150*size, 50*size);
			
			//vertical lines
			rect(x-100*size, y-150*size, 50*size, 250*size);
			
			//resets stroke
			strokeWeight(1);
		}
	else if(index==1)
		{
			//draws background
			rainbowBackground(0);
			
			//sets stroke weight and color
			stroke(255);
			strokeWeight(25);
			noFill();
			
			//draws letter
			//arcs 
			arc(x, y-50*size, 200*size, 200*size, PI, PI + PI);
			arc(x, y+50*size, 200*size, 200*size, 0, PI);
			
			//straight lines
			fill(255);
			strokeWeight(1);
			rect(x-100*size, y-30*size, 100*size, 50*size);
			rect(x-125*size, y-50*size, 50*size, 100*size);
			
			//other
			circle(x, y-5*size, 25);
		
		}
	else if(index==2)
		{
		 console.log("something went wrong");
		}
	else if(index==3)
		{
			//sets up image
			const row1=[0, 1, 1, 1, 1, 1, 0];
			const row2=[0, 1, 1, 0, 1, 1, 0];
			const row3=[0, 1, 1, 0, 0, 0, 0];
			const row4=[0, 1, 1, 1, 1, 0, 0];
			const row5=[0, 1, 1, 0, 0, 0, 0];
			const row6=[0, 1, 1, 0, 1, 1, 0];
			const row7=[0, 1, 1, 1, 1, 1, 0];
			
			const grid=[row1, row2, row3, row4, row5, row6, row7];
			
			//goes through array
			for(w=0; w<7; w=w+1)
				{
								for(q=0; q<7; q=q+1)
								{
									//checks if it should draw
									if(grid[w][q]!=0)
										{
											//sets the starting point
											let ox=x-150*size;
											let oy=y-150*size;
											
											//draws image
											stroke(0);
											fill(0);
											ellipse(ox+q*50*size, oy+w*50*size, 10*size, 10*size);
											noFill();
											ellipse(ox+q*50*size, oy+w*50*size, 45*size, 45*size);
											
											//makes bulbs glow
											if(w==floor(glow))
												{
													fill(255, 255, 100, 150);
													noStroke();
													ellipse(ox+q*50*size, oy+w*50*size, 55*size, 55*size);
													ellipse(ox+q*50*size, oy+w*50*size, 20*size, 20*size);
												} 
											
											//resets stroke
											stroke(0);
										} 
								
								//		ellipse(q, w, 30, 30);			
								}

										
				
										
				}
			
		}
	else if(index==4)
		{
			//sets up image
			const row1=[0, 1, 1, 1, 1, 1, 0];
			const row2=[1, 0, 0, 0, 0, 0, 1];
			const row3=[1, 0, 0, 0, 0, 0, 1];
			const row4=[1, 1, 1, 1, 1, 1, 0];
			const row5=[1, 0, 0, 0, 0, 0, 0];
			const row6=[1, 0, 0, 0, 0, 0, 1];
			const row7=[0, 1, 1, 1, 1, 1, 0];
			
			const grid=[row1, row2, row3, row4, row5, row6, row7];
			
			//goes through array
			for(w=0; w<7; w=w+1)
				{
								for(q=0; q<7; q=q+1)
								{
									//checks if part should be drawn
									if(grid[w][q]!=0)
										{
											//sets starting location
											let ox=x-175*size;
											let oy=y-175*size;
											
											//draws image
											stroke(0);
											fill(0);
											square(ox+q*50*size, oy+w*50*size, 50*size);
										
											}
									}
					}

		}
	else if(index==5)
		{
			//horizontal
			pixelRectangle(x-100*size, y-150*size, 200*size, 50*size, 5*size);
			pixelRectangle(x-100*size, y+100*size, 200*size, 50*size, 5*size);
			pixelRectangle(x-50*size, y-25*size, 100*size, 50*size, 5*size);
			
			//vertical
			pixelRectangle(x-100*size, y-100*size, 50*size, 200*size, 5*size);
		}
	else if(index==6)
		{
			//sets stroke color and weight
			strokeWeight(5);
			stroke(0);
			
			//horizontal
			line(x-50*size, y-100*size, x+100*size, y-100*size);
			line(x-50*size, y+25*size, x+100*size, y+25*size);
			line(x-100*size, y+150*size, x+100*size, y+150*size);
			
			//vertical
			line(x-50*size, y-100*size, x-50*size, y-25*size);
			line(x-50*size, y+100*size, x-50*size, y+25*size);
			
			line(x+100*size, y-150*size, x+100*size, y-100*size);
			line(x+100*size, y+150*size, x+100*size, y+100*size);
			line(x+100*size, y-25*size, x+100*size, y+25*size);
			
			//resets stroke
			strokeWeight(1);
		}
	else if(index==7)
		{
			//sets start and end of arc
			let head=train+0.1;
			let tail=train-0.1;

			//sets stroke and color
			noFill()
			strokeWeight(5);
			stroke(0);
			
			//draws border
			arc(x, y, 300*size, 300*size, PI/4, PI);
			arc(x-25*size, y, 250*size, 250*size, PI, 0);
			arc(x, y, 200*size, 200*size, 0, PI);
			arc(x-25*size, y, 150*size, 150*size, PI, 0);
			arc(x, y, 100*size, 100*size, 0, PI);
			arc(x-25*size, y, 50*size, 50*size, PI, PI/4);
			
			//sets stroke and color
			strokeWeight(10);
			stroke(redValue, greenValue, blueValue, 200);
			
			//draws glowing part
			if(train>0 && train<PI)
				{
						arc(x, y, 200*size, 200*size, tail, head);
						arc(x, y, 100*size, 100*size, tail, head);
					if(train<PI/4)
						{
							arc(x-25*size, y, 50*size, 50*size, tail, head);  
						}
					else
						{
							arc(x, y, 300*size, 300*size, tail, head);
						}
				}
			else
				{
						arc(x-25*size, y, 250*size, 250*size, tail, train+0.1);
						arc(x-25*size, y, 150*size, 150*size, tail, train+0.1);
						arc(x-25*size, y, 50*size, 50*size, tail, train+0.1);  
				}
			
			//sets stroke and color
			stroke(255);
			strokeWeight(2)
			
			//draws inner tube
			arc(x, y, 300*size, 300*size, PI/4, PI);
			arc(x-25*size, y, 250*size, 250*size, PI, 0);
			arc(x, y, 200*size, 200*size, 0, PI);
			arc(x-25*size, y, 150*size, 150*size, PI, 0);
			arc(x, y, 100*size, 100*size, 0, PI);
			arc(x-25*size, y, 50*size, 50*size, PI, PI/4);
			
		}
}

/**
* Draws the letter M
*
*@param {num} - index - which drawing should be produced
*@param {num} - size - how big the drawings should be
*
*/
function drawM(index, size)
{
	//sets location
	let x=300;
	let y=200;
	
	//draws letter
	if(index==0)
		{
			//sets stroke color and weight
			stroke(0);
			strokeWeight(10);
			
			//horizontal lines
			rect(x-30*size, y, 60*size, 50*size);
			
			//vertical lines
			rect(x-150*size, y-150*size, 50*size, 300*size);
			rect(x+100*size, y-150*size, 50*size, 300*size);
			
			//other straight lines
			quad(x-100*size, y-150*size, x-130*size, y-100*size, x-30*size, y+50*size, x, y);
			quad(x+100*size, y-150*size, x+130*size, y-100*size, x+30*size, y+50*size, x, y);
			
			//sets stroke and color
			noStroke();
			fill(redValue, greenValue, blueValue);
			
			//horizontal lines
			rect(x-30*size, y, 60*size, 50*size);
			
			//vertical lines
			rect(x-150*size, y-150*size, 50*size, 300*size);
			rect(x+100*size, y-150*size, 50*size, 300*size);
			
			//other straight lines
			quad(x-100*size, y-150*size, x-130*size, y-100*size, x-30*size, y+50*size, x, y);
			quad(x+100*size, y-150*size, x+130*size, y-100*size, x+30*size, y+50*size, x, y);
			
			//resets stroke
			strokeWeight(1);
		}
	else if(index==1)
		{
			//draws background
			rainbowBackground(200);
			
			//sets stroke and color
			stroke(255);
			strokeWeight(25);
			noFill();
			
			//arcs 
			arc(x-75*size, y-50*size, 150*size, 200*size, PI, PI + PI);
			arc(x+75*size, y-50*size, 150*size, 200*size, PI, PI + PI);
			
			//straight lines
			line(x-150*size, y-50*size, x-150*size, y+150*size);
			line(x+150*size, y-50*size, x+150*size, y+150*size);
			line(x, y-50*size, x, y+150*size);
			
			//resets stroke
			strokeWeight(1);
	
		}
	else if(index==2)
		{
			console.log("something went wrong");		
		}
	else if(index==3)
		{
			//sets up image
			const row1=[1, 1, 1, 1, 1, 1, 1];
			const row2=[1, 1, 1, 1, 1, 1, 1];
			const row3=[1, 1, 0, 1, 0, 1, 1];
			const row4=[1, 1, 0, 1, 0, 1, 1];
			const row5=[1, 1, 0, 0, 0, 1, 1];
			const row6=[1, 1, 0, 0, 0, 1, 1];
			const row7=[1, 1, 0, 0, 0, 1, 1];
			
			const grid=[row1, row2, row3, row4, row5, row6, row7];
			
			//goes through array
			for(w=0; w<7; w=w+1)
				{
							for(q=0; q<7; q=q+1)
							{
								//checks if image should be drawn
								if(grid[w][q]!=0)
									{
										//sets location
										let ox=x-150*size;
										let oy=y-150*size;
										
										//sets color and stroke
										stroke(0);
										strokeWeight(1);
										fill(0);
										
										//draws bulbs
										ellipse(ox+q*50*size, oy+w*50*size, 10*size, 10*size);
										noFill();
										ellipse(ox+q*50*size, oy+w*50*size, 45*size, 45*size);
										
										//draws glowing bulbs
										if(w==floor(glow))
											{
												fill(255, 255, 100, 150);
												noStroke();
												ellipse(ox+q*50*size, oy+w*50*size, 55*size, 55*size);
												ellipse(ox+q*50*size, oy+w*50*size, 20*size, 20*size);
											} 
									} 
							}		
				}

		}
	else if(index==4)
		{
			//sets up image
			const row1=[0, 1, 1, 0, 1, 1, 0];
			const row2=[1, 0, 0, 1, 0, 0, 1];
			const row3=[1, 0, 0, 1, 0, 0, 1];
			const row4=[1, 0, 0, 1, 0, 0, 1];
			const row5=[1, 0, 0, 1, 0, 0, 1];
			const row6=[1, 0, 0, 1, 0, 0, 1];
			const row7=[1, 0, 0, 1, 0, 0, 1];
			
			const grid=[row1, row2, row3, row4, row5, row6, row7];
			
			//goes through array
			for(w=0; w<7; w=w+1)
				{
							for(q=0; q<7; q=q+1)
							{
								//checks if image should be drawn
								if(grid[w][q]!=0)
									{
										//sets location
										let ox=x-175*size;
										let oy=y-175*size;
										
										//sets color and stroke
										stroke(0);
									fill(0);
										
										//draws pixel
										square(ox+q*50*size, oy+w*50*size, 50*size);
										
										//resets stroke
										stroke(0);
										
									} 		
							}
					}

		}
	else if(index==5)
		{
				//horizontal
				pixelRectangle(x-150*size, y-150*size, 300*size, 50*size, 5*size);
			
				//vertical
				pixelRectangle(x-150*size, y-100*size, 50*size, 250*size, 5*size);
				pixelRectangle(x-25*size, y-100*size, 50*size, 250*size, 5*size);
				pixelRectangle(x+100*size, y-100*size, 50*size, 250*size, 5*size);

		}
	else if(index==6)
		{
			//sets stroke weight and color
			strokeWeight(5);
			stroke(0);
			
			//horizontal
			line(x-150*size, y+150*size, x-100*size, y+150*size);
			line(x+150*size, y+150*size, x+100*size, y+150*size);
			line(x-25*size, y+150*size, x+25*size, y+150*size);
			
			//vertical
			line(x-100*size, y-100*size, x-100*size, y+150*size);
			line(x+150*size, y-150*size, x+150*size, y+150*size);
			
			//diagonal
			line(x+100*size, y-50*size, x+25*size, y+150*size);
			line(x-50*size, y-150*size, x, y+50*size);
			
			//resets stroke
			strokeWeight(1);
		}
	else if(index==7)
		{
			//sets start and end of arc
			let head=train+PI/2;
			let tail=train-PI/2;
			if(head<0)
				{
					head=head+2*PI;
				}
			if(tail>PI*2)
				{
					tail=tail-2*PI;
				}
			if(tail<PI && tail>0)
					{
						tail=PI;
					}
				if(head<PI || head>2*PI)
					{
						head=0;
					}

			//sets color and stroke
			noFill();
			strokeWeight(5)
			
			//draws arcs
			if(train<PI/2-0.01 || train>PI/2+0.01)
				{
					stroke(255, 0, 255);
					arc(x-75*size, y+150*size, 150*size, 600*size, tail, head);
					arc(x+75*size, y+150*size, 150*size, 600*size, tail, head);

					stroke(255, 255, 0);
					arc(x-75*size, y+150*size, 125*size, 575*size, tail, head);
					arc(x+75*size, y+150*size, 125*size, 575*size, tail, head);

					stroke(0, 255, 255);
					arc(x-75*size, y+150*size, 100*size, 550*size, tail, head);
					arc(x+75*size, y+150*size, 100*size, 550*size, tail, head);

				}
			
			//resets stroke
			stroke(0);
			strokeWeight(1)
		}
}

/**
* Draws the letter I
*
*@param {num} - index - which drawing should be produced
*@param {num} - size - how big the drawings should be
*
*/
function drawI(index, size)
{
	//sets location
	let x=500;
	let y=200;
	
	if(index==0)
		{
			//sets stroke color and weight
			stroke(0);
			strokeWeight(10);
			
			//horizontal lines
			rect(x-100*size, y-150*size, 200*size, 50*size);
			rect(x-100*size, y+100*size, 200*size, 50*size);
			
			//vertical lines
			rect(x-25*size, y-150*size, 50*size, 300*size);
		
			//sets stroke and color
			noStroke();
			fill(redValue, greenValue, blueValue);
			
			//horizontal lines
			rect(x-100*size, y-150*size, 200*size, 50*size);
			rect(x-100*size, y+100*size, 200*size, 50*size);
			
			//vertical lines
			rect(x-25*size, y-150*size, 50*size, 300*size);
		
			//reset stroke
			strokeWeight(1);
		}
	else if(index==1)
		{
			
			//draws background
			rainbowBackground(400);
			
			//sets color and stroke
			stroke(255);
			strokeWeight(25);
			noFill();
			
			//arcs 
			arc(x, y-100*size, 100*size, 100*size, PI, PI + PI);
			arc(x-100*size, y+0*size, 300*size, 300*size, 0, HALF_PI);
			arc(x+100*size, y+0*size, 300*size, 300*size, HALF_PI, PI);
			arc(x-100*size, y+100*size, 100*size, 100*size, HALF_PI, PI);
			arc(x+100*size, y+100*size, 100*size, 100*size, 0, HALF_PI);
			
			//straight lines
			line(x-50*size, y-100*size, x-50*size, y)
			line(x+50*size, y-100*size, x+50*size, y)
			
			//resets stroke
			strokeWeight(1);
		}
	else if(index==2)
		{
			console.log("something went wrong");
		}
	else if(index==3)
		{
				
			//sets up image
			const row1=[0, 1, 1, 1, 1, 1, 0];
			const row2=[0, 0, 1, 0, 1, 0, 0];
			const row3=[0, 0, 1, 0, 1, 0, 0];
			const row4=[0, 0, 1, 0, 1, 0, 0];
			const row5=[0, 0, 1, 0, 1, 0, 0];
			const row6=[0, 0, 1, 0, 1, 0, 0];
			const row7=[0, 1, 1, 1, 1, 1, 0];
			
			const grid=[row1, row2, row3, row4, row5, row6, row7];
			
			//goes through array
			for(w=0; w<7; w=w+1)
				{
							for(q=0; q<7; q=q+1)
							{
						
								//checks if image should be drawn
								if(grid[w][q]!=0)
									{
										//sets location
										let ox=x-150*size;
										let oy=y-150*size;
										
										//draws bulbs
										stroke(0);
										fill(0);
										ellipse(ox+q*50*size, oy+w*50*size, 10*size, 10*size);
										noFill();
										ellipse(ox+q*50*size, oy+w*50*size, 45*size, 45*size);
										
										//draws glowing bulbs
										if(w==floor(glow))
											{
												fill(255, 255, 100, 150);
												noStroke();
												ellipse(ox+q*50*size, oy+w*50*size, 55*size, 55*size);
												ellipse(ox+q*50*size, oy+w*50*size, 20*size, 20*size);
											} 
									} 
							}					
				}
		}
	else if(index==4)
		{
			//sets up image
			const row1=[1, 1, 1, 1, 1, 1, 1];
			const row2=[0, 0, 0, 1, 0, 0, 0];
			const row3=[0, 0, 0, 1, 0, 0, 0];
			const row4=[0, 0, 0, 1, 0, 0, 0];
			const row5=[0, 0, 0, 1, 0, 0, 0];
			const row6=[0, 0, 0, 1, 0, 0, 0];
			const row7=[1, 1, 1, 1, 1, 1, 1];
			
			const grid=[row1, row2, row3, row4, row5, row6, row7];
			
			//goes through array
			for(w=0; w<7; w=w+1)
				{
								for(q=0; q<7; q=q+1)
								{
							
									//checks if image should be drawn
									if(grid[w][q]!=0)
										{
											//sets location
											let ox=x-175*size;
											let oy=y-175*size;

											//draws pixel
											stroke(0);
											fill(0);
											square(ox+q*50*size, oy+w*50*size, 50*size);
											
										} 
								}
				}

		}
	else if(index==5)
		{
			//horizontal
			pixelRectangle(x-100*size, y-150*size, 200*size, 50*size, 5*size);
			pixelRectangle(x-100*size, y+100*size, 200*size, 50*size, 5*size);
			
			//vertical
			pixelRectangle(x-25*size, y-100*size, 50*size, 250*size, 5*size);
		}
	else if(index==6)
		{
			//sets stroke weight and color
			strokeWeight(5);
			stroke(0);
			
			//horizontal
			line(x-50*size, y+150*size, x+50*size, y+150*size);
			line(x-50*size, y-100*size, x-25*size, y-100*size);
			line(x+50*size, y-100*size, x+25*size, y-100*size);
			line(x-50*size, y+100*size, x-25*size, y+100*size);
			line(x+50*size, y+100*size, x+25*size, y+100*size);
			
			//vertical
			line(x+25*size, y-100*size, x+25*size, y+100*size);
			line(x+50*size, y+100*size, x+50*size, y+150*size);
			line(x+50*size, y-100*size, x+50*size, y-150*size);
			
			//resets stroke
			strokeWeight(1);
		}
	else if(index==7)
		{
			//sets color and stroke
			fill(100);
			noStroke();
			
			//draws smoke
			drawSmoke(x, y, tittle, size);
			
			//draws chimney
			stroke(0);
			strokeWeight(1);
			fill(200, 100, 50);
			rect(x-50*size, y, 100*size, 150*size);
			fill(150, 50, 50);
			rect(x-75*size, y, 150*size, 50*size);
		}
}

/**
* Draws the letter L
*
*@param {num} - index - which drawing should be produced
*@param {num} - size - how big the drawings should be
*
*/
function drawL(index, size)
{
	let x=700;
	let y=200;
	if(index==0)
		{
			//sets stroke color and weight
			stroke(0);
			strokeWeight(10);
		
			//horizontal lines
			rect(x-100*size, y+100*size, 200*size, 50*size);
			
			//vertical lines
			rect(x-100*size, y-150*size, 50*size, 300*size);
		
			//sets color and stroke
			noStroke();
			fill(redValue, greenValue, blueValue);
			
			//horizontal lines
			rect(x-100*size, y+100*size, 200*size, 50*size);
			
			//vertical lines
			rect(x-100*size, y-150*size, 50*size, 300*size);
		
			//resets stroke
			strokeWeight(1);
		}
	else if(index==1)
		{
			//draws background
			rainbowBackground(600);
			
			//sets color and stroke
			stroke(255);
			strokeWeight(25);
			noFill();
			
			//arcs 
			arc(x-50*size, y+100*size, 100*size, 100*size, HALF_PI, PI);
			
			//straight lines
			line(x-100*size, y-150*size, x-100*size, y+100*size);
			line(x-50*size, y+150*size, x+100*size, y+150*size);
			
			//resets stroke
			strokeWeight(1);
		}
	else if(index==2) 
		{
			console.log("something went wrong");
		}
	else if(index==3)
		{
			//sets up image
			const row1=[1, 1, 1, 1, 0, 0, 0];
			const row2=[0, 1, 1, 0, 0, 0, 0];
			const row3=[0, 1, 1, 0, 0, 0, 0];
			const row4=[0, 1, 1, 0, 0, 0, 0];
			const row5=[0, 1, 1, 0, 0, 0, 0];
			const row6=[0, 1, 1, 0, 1, 1, 0];
			const row7=[0, 1, 1, 1, 1, 1, 0];
			
			const grid=[row1, row2, row3, row4, row5, row6, row7];
			
		//goes through array
		for(w=0; w<7; w=w+1)
				{
							for(q=0; q<7; q=q+1)
							{
								//checks if image should be drawn
								if(grid[w][q]!=0)
									{
										//sets location
										let ox=x-150*size;
										let oy=y-150*size;
										
										//draws bulbs
										stroke(0);
										fill(0);
										ellipse(ox+q*50*size, oy+w*50*size, 10*size, 10*size);
										noFill();
										ellipse(ox+q*50*size, oy+w*50*size, 45*size, 45*size);
										
										//draws glowing bulbs
										if(w==floor(glow))
											{
													fill(255, 255, 100, 150);
													noStroke();
													ellipse(ox+q*50*size, oy+w*50*size, 55*size, 55*size);
													ellipse(ox+q*50*size, oy+w*50*size, 20*size, 20*size);
												} 
									} 	
							}
				}
			
		}
	else if(index==4)
		{
			//sets up image	
			const row1=[1, 0, 0, 0, 0, 0, 0];
			const row2=[1, 0, 0, 0, 0, 0, 0];
			const row3=[1, 0, 0, 0, 0, 0, 0];
			const row4=[1, 0, 0, 0, 0, 0, 0];
			const row5=[1, 0, 0, 0, 0, 0, 0];
			const row6=[1, 0, 0, 0, 0, 0, 0];
			const row7=[1, 1, 1, 1, 1, 1, 1];
			
			const grid=[row1, row2, row3, row4, row5, row6, row7];
			
			//goes through array
			for(w=0; w<7; w=w+1)
				{
							for(q=0; q<7; q=q+1)
							{
									//checks if image should be drawn
									if(grid[w][q]!=0)
										{
											//sets location
											let ox=x-175*size;
											let oy=y-175*size;
											
											//draws pixel
											stroke(0);
											fill(0);
											square(ox+q*50*size, oy+w*50*size, 50*size);
											
											//resets stroke
											stroke(0);
										} 
								}
				}
		}
	else if(index==5)
		{
			//horizontal
			pixelRectangle(x-100*size, y+100*size, 200*size, 50*size, 5*size);
			
			//vertical
			pixelRectangle(x-100*size, y-150*size, 50*size, 250*size, 5*size);
			
		}
	else if(index==6)
		{
			//sets stroke weight and color
			strokeWeight(5);
			stroke(0);
			
			//horizontal
			line(x-100*size, y+150*size, x+100*size, y+150*size);
			
			//vertical
			line(x+100*size, y+100*size, x+100*size, y+150*size);
			line(x-50*size, y-150*size, x-50*size, y+100*size);
			
			//resets stroke
			strokeWeight(1);
		}
	else if(index==7)
		{
			//draws stripes
				for(i=0; i<stripes.length; i++)
					{
							fill(100, 0, 0)
						quad(x-50*size, y-25*size+stripes[i]*size, x-50*size, y+stripes[i]*size, x+50*size, y+25*size+stripes[i]*size, x+50*size, y+stripes[i]*size)

						fill(255, 100, 100)
						quad(x-50*size, y+stripes[i]*size, x-50*size, y-25*size+stripes[i]*size, x+50*size, y-50*size+stripes[i]*size, x+50*size, y-25*size+stripes[i]*size)
					}
			
			//draws top and bottom
			fill(0);
			rect(x-50*size, y-150*size, 100*size, 50*size)
			rect(x-50*size, y+125*size, 100*size, 50*size)
			
		}
}

/**
* Rotates through the colors of the rainbow
*/
function colorWheel()
{
	//sets interval
	let step=12;
	
	//changes color
	if(redValue>=255 && greenValue<=255 && blueValue<=0)
		{
			greenValue=greenValue+step;
		}
	else if(redValue>=0 && greenValue>=255 & blueValue<=0)
		{
			redValue=redValue-step;
		}
	else if(greenValue>=255 && blueValue<=255 && redValue<=0)
		{
			blueValue=blueValue+step;
		}
	else if(greenValue>=0 && blueValue>=255 & redValue<=0)
		{
			greenValue=greenValue-step;
		}
	else if(blueValue>=255 && redValue<=255 && greenValue<=0)
		{
			redValue=redValue+step;
		}
	else if(blueValue>=0 && redValue>=255 & greenValue<=0)
		{
			blueValue=blueValue-step;
		}
	
}

/**
* Draws a rainbow background
*/
function rainbowBackground(start)
{
	//initial setup
	let redValue=255;
	let greenValue=0;
	let blueValue=0;
	let step=1530/200;
	
	//draws block
	for(i=100; i<300; i=i+1)
		{
			//draws part of rainbow
			stroke(redValue, greenValue, blueValue);
			line(start, i, start+200, i);
			
			//changes color
			if(redValue>=255 && greenValue<=255 && blueValue<=0)
				{
					greenValue=greenValue+step;
				}
			else if(redValue>=0 && greenValue>=255 & blueValue<=0)
				{
					redValue=redValue-step;
				}
			else if(greenValue>=255 && blueValue<=255 && redValue<=0)
				{
					blueValue=blueValue+step;
				}
			else if(greenValue>=0 && blueValue>=255 & redValue<=0)
				{
					greenValue=greenValue-step;
				}
			else if(blueValue>=255 && redValue<=255 && greenValue<=0)
				{
					redValue=redValue+step;
				}
			else if(blueValue>=0 && redValue>=255 & greenValue<=0)
				{
					blueValue=blueValue-step;
				}
		}
}

/**
* draws a pixelated rectangle
*
*@param {num} - x - x coordinate of where the rectangle is
*@param {num} - y - y coordinate of where the rectangle is
*@param {num} - length - length of the rectangle
*@param {num} - height - height of the rectangle
*@param {num} - step - how big each pixel is
*
*/
function pixelRectangle(x, y, length, height, step)
{
	noStroke();
	for(q=y; q<y+height; q=q+step)
		{
			for(w=x; w<x+length; w=w+step)
				{
					//decides whether pixel is filled
					let randomValue=random();
					if(randomValue<0.3)
						{
							//picks a color in the pink to yellow range
							fill(255, random()*255, 100)
						}
					else
						{
							noFill()
						}
					
					//drawing pixel
					square(w, q, step);
				}
		}
}

/**
* draws the smoke from I index 7
*
*@param {num} - x - x coordinate of where the smoke is coming from
*@param {num} - y - y coordinate of where the smoke is coming from
*@param {num} - tittle - holds the information of the tittle of the "I"
*@param {num} - how big the smoke is
*
*/
function drawSmoke(x, y, tittle, size)
{

	//determines whether to draw more smoke
	let randomValue=random();
	if(randomValue<0.3)
		{
			//finds/makes a slot in the smoke array for a cloud of smoke
			for(i=0; i<smoke.length+1; i++)
				{
					if(smoke[i]==0 || smoke[i]==null)
						{
							//sets properties for a could of smoke; x-coordinate, y-coordinate, start size, end size, change in x, change in y, growth direction
							const cloud=[x-25*size+random()*50*size, y, random()*50, random()*80, random(), random()*5, 0];
							smoke[i]=cloud;

							//ends loop
							i=smoke.length+3;
						}
				}
		}
	
	
	//draws smoke
	for(i=0; i<smoke.length; i++)
		{
			//check if smoke should be drawn
			if(smoke[i]!=0 && smoke[i]!=null)
				{
					//draws smoke
					circle(smoke[i][0], smoke[i][1], smoke[i][2]*size);
					
					//updates smoke properties
					//location
					smoke[i][0]=smoke[i][0]+smoke[i][4];
					if(smoke[i][2]<y-150)
						{
							smoke[i][1]=smoke[i][1]-0.99;
						}
					else
						{
							smoke[i][1]=smoke[i][1]-smoke[i][5];
						}
					
					//size and growth direction
					if(smoke[i][6]==0)
						{
							smoke[i][2]=smoke[i][2]*1.05; 

							if(smoke[i][2]>smoke[i][3])
								{
									smoke[i][6]=1;
								}
						}
					if(smoke[i][6]==1)
						{
							smoke[i][2]=smoke[i][2]*0.95; 

							if(smoke[i][2]<5)
								{
									smoke[i]=0;
								}
						}
					
				}
			
		}
	
	//draws tittle
	circle(x, y-50*size, tittle[0]*size);
	
	//updates tittle properties
	if(tittle[1]==0)
		{
			tittle[0]=tittle[0]+2;
			if(tittle[0]>75)
				{
					tittle[1]=1;
				}
		}
	else if(tittle[1]==1)
		{
			tittle[0]=tittle[0]-2;
			if(tittle[0]<0)
				{
					tittle[1]=0;
				}
		}
	
}

/**
* draws squares to use as a reference
*
*@param {num} - step - interval of when to draw next square
*
*/
function boxReference(step)
{
	noFill();
	for(i=0; i<width; i=i+step)
		{
			square(i, (height/2)-(step/2), step);
		}
}

/**
* draws a grid as guide/reference
*
*@param {num} - gridSize - the density of the grid
*@param {num} - interval - how often a line in the grid should be bolded
*
*/
function guides(gridSize, interval)
{
	noFill();
	//vertical lines
	for(q=0; q<width; q=q+gridSize)
		{
			//drawing lines
			stroke(0);
			
			//makes a thicker line every 5 lines
			if(floor(q/(interval*gridSize))==q/(interval*gridSize))
			{
				strokeWeight(3)
			}
			else
			{
				strokeWeight(1)
			}
			
			//draws line
			line(q, 0, q, height);
		}
	
	//horzontal lines
	for(q=0; q<height; q=q+gridSize)
		{
			//makes line thicker every 5 lines
			if(floor(q/(interval*gridSize))==q/(interval*gridSize))
			{
				strokeWeight(3)
			}
			else
			{
				strokeWeight(1)
			}
	
			//draws line
			line(0, q, width, q);
		}
	strokeWeight(1);
}
