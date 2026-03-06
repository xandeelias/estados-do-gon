const videos = ["gon.mp4", "gon_e_killua.mp4","gon_fim.mp4","gon_torta.mp4"];

function trocarVideo() {

    indice = (indice + 1) % videos.length;

    const video = document.getElementById("meuVideo");
    video.src = videos[indice];

    video.load();
    video.play().catch(() => {
        console.log("Autoplay bloqueado pelo navegador.");
    });
};
const video = document.getElementById("meuVideo");

video.addEventListener("ended", () => {
    video.currentTime = 0;
    video.play();
});
document.addEventListener("DOMContentLoaded", function () {

    const video = document.getElementById("meuVideo");
    const btnPlayPause = document.getElementById("btnPlayPause");

    btnPlayPause.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            btnPlayPause.textContent = "Play/Pause";
        } else {
            video.pause();
            btnPlayPause.textContent = "Play/Pause";
        }
    });

});
const imagens = [
"gon_feliz.gif",
"gon_raivoso.gif",
"gon_muito_raivoso.gif",
"gon_muito_abalado.gif",
"gon_fritando.gif",
"gon_praticando.gif",
"gon_dormindo.gif",
"gon_e_killua.gif"
];

let indice = 0;

function mostrarImagem() {
  document.getElementById("imagem").src = imagens[indice];
}

function proximo() {
  indice++;
  if (indice >= imagens.length) {
    indice = 0;
  }
  mostrarImagem();
}