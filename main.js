
var rides;
var cost;


function metroCalc(){

	rides = document.getElementById("rides").value;
	cost = rides * 4 * 2.75;
	
	alert("You spend about $" + 
		cost +
	 " per month");

	metroCard ();

}

function metroCard (){
	if (cost > 116) {
		alert("You should by a Monthly Metro Card!");
	} else {
		alert("You should buy a Pay-Per-Ride Metro Card!")
	}
	
}