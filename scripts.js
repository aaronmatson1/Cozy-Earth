console.log('loading scripts');

$(function(){
  $("#myDIV").hide();
});



function myFunction() {
  var x = document.getElementById("myDIV");
  var title = document.getElementById("title");

  if (x.style.display === "none") {
    console.log('show card')
    x.style.display = "block";
    title.style.display = "none";
  } else {
    console.log('hide card');
    x.style.display = "none";
    title.style.display = "block"
    
  }
}