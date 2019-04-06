// $("#change").click(function(event) {
// 	$("body").css('background','black');
// });
// $("div").click(function(event) {
// 	var result = $(this).hasClass('green');
// 	console.log(result);
// 	if(result){
// 		alert("Этот квадрат зеленый")
// 	}
// });

// var currentColor = undefined;
// $(".small").click(function(event) {
// $('.small').removeClass('border')
// currentColor = $(this).text()
// $(this).addClass('border')

// });
// $(".big").click(function(event) {
// if ($(this).hasClass(currentColor)){
// 	alert("The Same Color")
// }
// });

// $("div").click(function(event) {
// $(this).height(25).width(25)
// });

$("#w100").click(function(event) {
	var currentWidth = $("#box").width();
	$("#box").width(currentWidth += 100)
});
$("#w-100").click(function(event) {
	var currentWidth1 = $("#box").width();
	$("#box").width(currentWidth1 -= 100)
});
$("#h100").click(function(event) {
	var currentHeight = $("#box").height();
	$("#box").height(currentHeight += 100)
});
$("#h-100").click(function(event) {
	var currentHeight1 = $("#box").height();
	$("#box").height(currentHeight1 -= 100)
});

$("#box").click(function(event) {
	console.log($(this).Width())
	console.log($(this).innerWidth())
	console.log($(this).innerHeight())
	console.log($(this).outerWidth())
	console.log($(this).outerHight())
});
