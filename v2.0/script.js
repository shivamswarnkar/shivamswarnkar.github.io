var currMargin = 0;
var commonDiff = 0.3;
function move(){
	var head = document.getElementById("heading");
	if(currMargin > 59.3 || currMargin < -59.3){
		commonDiff *= -1;
		colorChange(head);
	}

	currMargin += commonDiff;

	head.style.marginLeft = (currMargin)+"%";
	console.log(currMargin);
}

setInterval(move, 10);


function colorChange(head){
	var colors = ["red", "white", "lightgreen", "yellow", "orange", "hotpink"];
	var currColor = head.style.color;
	var randColor = currColor;
	while(randColor == currColor){
		randColor = colors[Math.floor(Math.random()*colors.length)];
	}
	head.style.color = randColor;
}