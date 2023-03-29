
function myFunction(){
	var iy = 5;
	var ino = 2;
	if(document.getElementById('a-btn').checked) {
		var iy = iy + 1;
		document.getElementsByClassName('radiobutn').style.display = "none";
		document.getElementsByClassName('results').style.display = "block";
		document.getElementById("num1").innerHTML = iy;
		
	}else if(document.getElementById('b-btn').checked) {
		var ino = ino + 1;
		document.getElementsByClassName('radiobutn').style.display = "none";
		document.getElementsByClassName('results').style.display = "block";
		document.getElementById("num2").innerHTML = ino;
		
	}
}