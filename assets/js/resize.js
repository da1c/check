resize();

// 画面のリサイズ
window.onresize = resize();

function resize() { 
    // 
    canvas = document.getElementById("Canvas3D");
    canvas.style.width = "100%";
    canvas.style.height = (window.innerHeight * 0.8) + "px";

    canvas = document.getElementById("Canvas2D");
    canvas.style.width = "100%";
    canvas.style.height = (window.innerHeight * 0.8) + "px";

    header = document.getElementById("header");
    header.style.width = "100%";
    header.style.height = (window.innerHeight * 0.2) + "px";
}