// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчил санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random() * 6) + 1;

// <div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";

// Тоглоом эхлэхэд бэлтгэе
window.document.querySelector("#score-0").textContent = 0;
window.document.querySelector("#score-1").textContent = 0;

window.document.querySelector("#current-0").textContent = 0;
window.document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";

console.log("Шоо :" + dice);
