$(document).ready(function(){
	getSongs();
})
var audio;
var music;
function getSongs(){
	$.getJSON("app.json", function(mjson){
		music = json;
		console.log(music);
	});
}