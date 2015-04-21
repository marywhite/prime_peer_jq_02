function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}
function propId(){
	return + randomNumber(1000,9999);
}

function sqFt(){
	return randomNumber(1000,9999);
}

function pricePerFt(){
	return randomNumber(1, 50);
}


$(document).ready(function(){
//$("#genProp").on("click", function(){
	$("#genProp").click(slideDownRow);
	$("#someTable").on("click", ".removeListing", function(){
	$(this).parent().slideUp(500);
	$(this).parent().remove();
});
	//$("#genProp").on("click")
});

var i=0;

function slideDownRow () {
	i++;
	var square = sqFt();
	var perFoot = pricePerFt();
	var cost = square * perFoot;
	$("#someTable").append("<div class='newRow" + i + "' style='display: none;'><tr><td>Property ID: " + propId() + "  </td><td>" + square + " Sq. Ft.</td><td>  $" + perFoot + " / sq. ft.</td><td>  Total Price $" + cost + "</td><td> Monthly Payment $" + Math.round(cost/12) + " </td><td><button class= 'removeListing'>Remove Listing</button></td></tr></div>")
	$(".newRow"+i).hide().slideDown(500);
}

function slideUpRow (element) {
	$(".removeListing")
}