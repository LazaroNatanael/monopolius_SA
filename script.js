var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
document.querySelectorAll('.conteiner').forEach(image => {
  image.onclick=() =>{
    document.querySelector('.popup-imagem').style.display = "block";
    document.querySelector('.popup-imagem img').scr = image.getAtribute('src');
  }
});

document.querySelector('.popup-imagem span').onclick = () =>{
  document.querySelector('.popup-imagem').style.display = "none";
}


