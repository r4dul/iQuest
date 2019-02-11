window.onload =  setInterval(changeSize, 20);


var size = 200;
const el = document.getElementById("heart");
var aswitch = true;

function changeSize(){
	if (aswitch) {
		increaseSize();
	} else {
		decreaseSize();
	}
}

function increaseSize(){
	if (size < 240)
	{
		el.style.width = size + 'px';
		el.style.height = size + 'px';
		size += 4;
	} else {
		aswitch = false;
	}
}

function decreaseSize(){
	if (size > 200)
	{
		el.style.width = size + 'px';
		el.style.height = size + 'px';
		size -= 4;
	} else {
		aswitch = true;
	}
}