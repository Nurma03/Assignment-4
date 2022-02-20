$(".icon2").hide();
$(".C").hide();

document.querySelector(".icon").addEventListener("mouseover", function() {
  $(".icon").hide();
  $(".icon2").show();
});

document.querySelector(".icon2").addEventListener("mouseout", function() {
  $(".icon").show();
  $(".icon2").hide();
});

$(".nav-link").on("click", function() {
  alert("Not working!!! Demo-version");
});

$(".btn").on("click", function() {
  alert("Not working!!! Demo-version");
});

document.querySelector(".author").addEventListener("click", function() {
  var audio = new Audio("audio/shutka.mp3");
  audio.play();
  $(".C").show();
});
