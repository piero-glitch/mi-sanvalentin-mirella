const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainSticker = document.getElementById("mainSticker");

const noData = [
  { text: "ya pue monita 🥺", sticker: "assets/no1.webp" },
  { text: "hey respete! 😤", sticker: "assets/no2.webp" },
  { text: "tss ya ves como eres 🙄", sticker: "assets/no3.webp" },
  { text: "¿así va a ser? 😒", sticker: "assets/no4.webp" },
  { text: "anda di que sí pues 😏💘", sticker: "assets/no5.webp" }
];

let noCount = 0;
let yesScale = 1;

noBtn.onclick = () => {
  if (noCount < noData.length) {
    // Cambia frase
    noBtn.innerText = noData[noCount].text;
    // Cambia sticker central
    mainSticker.src = noData[noCount].sticker;
    // Aumenta tamaño del SI
    yesScale += 0.15;
    yesBtn.style.transform = `scale(${yesScale})`;
    noCount++;
  }
};

yesBtn.onclick = () => {
  window.location.href = "yes.html";
};
