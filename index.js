AOS.init();
  document.getElementById("read_more").addEventListener( 'click' , changeClass);
function changeClass() {
var content = document.getElementById("extra_content");
var btn = document.getElementById("read_more");
content.classList.toggle('show');

if (content.classList.contains("show")) {
btn.innerHTML = "Show Less";
} else {
btn.innerHTML = "Show More";
}
}
document.getElementById("read_more_certi").addEventListener( 'click' , () => {
  var contento = document.getElementById("extra_content_certi");
  var btn = document.getElementById("read_more_certi");
  contento.classList.toggle('showo');

  if (contento.classList.contains("show")) {
  btn.innerHTML = "Show Less";
  } else {
  btno.innerHTML = "Show More";
  }
});

var measuredate=  Math.ceil((Math.abs(new Date() -new Date('09/06/2020'))) / (1000 * 60 * 60 * 24))+65;
document.getElementById("change").innerHTML= "At Day "+measuredate+" of 100"
