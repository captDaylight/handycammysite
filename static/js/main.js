function panOut() {
	clearTimeout(t);

	$(".page-comingsoon").removeClass("filter-me");

	$("#thehand").animate({
		bottom: "-590px"
	}, 1000);

	t = setTimeout(function() {
		panIn();
	}, 7000);
}

function panIn() {
	clearTimeout(t);

	$(".page-comingsoon").addClass("filter-me");

	$("#thehand").animate({
		bottom: "-30px"
	}, 1000);

	t = setTimeout(function() {
		panOut();
	}, 7000);
}

var t;
$(document).ready(function() {
	t = setTimeout(function() {
		panIn();
	}, 5000);
});