console.log('loading scripts');

$(function(){
  $("#myDIV").hide();
});



function myFunction() {
  var x = document.getElementById("myDIV");

  if (x.style.display === "none") {
    console.log('show card')
    x.style.display = "block";
  } else {
    console.log('hide card');
    x.style.display = "none";
    
  }
}