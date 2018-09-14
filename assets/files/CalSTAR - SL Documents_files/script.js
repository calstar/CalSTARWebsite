$(document).ready(function() {

$(".element").typed({
  strings: ["CALSTAR"],
  typeSpeed: 100,
  startDelay: 600,
  showCursor: false,
  callback: showText,
});

function showText() {
  $(".picture-text2").fadeIn();
  $(".picture-text3").fadeIn();
};

// $(".text2").typed({
//   strings: ["3... 2... 1... LIFTOFF!"],
//   typeSpeed: 150,
//   startDelay: 600,
//   showCursor: false,
//   callback: showPhoto,
// });

$(".face").hover(function() {
    $(this).find(".circle").addClass("circle-hover");
  }, function() {
    $(this).find(".circle").removeClass("circle-hover");
});

// function showPhoto() {
//   $(".text2").fadeOut();
//   $(".team").fadeIn();
// };

// $(".titlep").typed({
//   strings: ["PROJECTS"],
//   typeSpeed: 100,
//   startDelay: 600,
//   showCursor: false,
//   callback: showContact,
// });
//
// $(".leader").typed({
//   strings: ["LEADERS"],
//   typeSpeed: 150,
//   startDelay: 800,
//   showCursor: false,
// });

// $(".year").typed({
//   strings: ["2016"],
//   typeSpeed: 150,
//   startDelay: 600,
//   showCursor: false,
//   callback: showDoc,
// });
//
// function showDoc() {
//   $(".doc").fadeIn();
// };
//
// $(".titles").typed({
//   strings: ["SPONSORS"],
//   typeSpeed: 100,
//   startDelay: 600,
//   showCursor: false,
//   callback: showSponsor,
// });
//
// function showSponsor() {
//   $(".want").fadeIn();
//   $(".description").fadeIn();
//   $(".sponsor1 img").fadeIn();
// };

// $(".interest").typed({
//   strings: ["Interested in CalSTAR?"],
//   typeSpeed: 100,
//   startDelay: 600,
//   showCursor: false,
//   callback: showContact,
// });
//
// function showContact() {
//   $(".speel").fadeIn();
//   $(".icontext").fadeIn();
//   $(".icon").fadeIn();
// };

});
