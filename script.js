function changeBackColor(e) {
    e.target.style.background = "yellow";
 }


 document.getElementById("myInput").addEventListener("focus", changeBackColor);