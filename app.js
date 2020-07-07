// Тоглоомын бүх газарт ашиглагдах  глобаль хувьсагчдыг энд заралъя
var activePlayer = 0;
var scores = [0, 0];
var roundScore = 0;
window.document.getElementById("score-0").textContent = "0";
window.document.getElementById("score-1").textContent = "0";
window.document.getElementById("current-0").textContent = "0";
window.document.getElementById("current-1").textContent = "0";

// Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч.
var isNewGame;

// Шооны зургийг үзүүлэх элементийг DOM-оос хайж олоод энд хадгалъя
var diceDom = document.querySelector(".dice");

// New game товчны эвент листенер
document.querySelector(".btn-new").addEventListener("click", initGame);

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame !== false) {
    //  1 - 6 доторх санамсаргүй нэг  тоо гаргаж авна
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    //  Шооны зургийг вэб дээр гаргаж ирнэ.
    diceDom.style.display = "block";

    // Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ.
    diceDom.src = "dice-" + diceNumber + ".png";

    // Буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог өөрчилнө
    if (diceNumber !== 1) {
      // 1 - ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна. NEW GAME товчийг дарж шинээр эхлэнэ үү");
  }
});

// HOLD товчны эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame !== false) {
    // Уг тоглогчийн цуглуулсан ээлжийн оноог глобаль оноон дээр нь нэмж өгнө.
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Дэлгэц дээр оноог нь өөрчилнө
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    // Уг тоглогчийг хожсон эсэхийг (оноо нь 100-с их эсэх ) шалгах
    if (scores[activePlayer] >= 10) {
      // Тоглоомыг дууссан төлөвт оруулна.
      isNewGame = false;

      // Ялагч гэсэн текстийг нэрнийх нь оронд бичих
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      activePlayer === 0 ? (otherPlayer = 1) : (otherPlayer = 0);
      document.getElementById("name-" + otherPlayer).textContent = "LOSER!!!";
      document
        .querySelector(".player-" + otherPlayer + "-panel")
        .classList.add("loser");
    } else {
      // Тоглогчийн ээлжийг солино.
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна. NEW GAME товчийг дарж шинээр эхлэнэ үү");
  }
});

// Энэ функц нь тоглох ээлжийг дараачийн тоглогчруу шилжүүлдэг.
function switchToNextPlayer() {
  // Энэ тоглогчийн ээлжиндээ цуглуулсана оноог 0 ;болгоно.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  // Тоглочийн ээлжийг нөгөө тоглогчруу шилжүүлнэ.
  // Хэрэв идэвхтэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго.
  // Үгүй бол идэвхтэй тоглогчийг 0 болго.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Улаан цэгийг шилжүүлэх
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Шоог түр алга болгох
  diceDom.style.display = "block";
}
function initGame() {
  // Тоглоом эхэллээ гэдэг төлөвт оруулна
  isNewGame = true;
  // Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0, хоёрдугаар тоглочийг 1 гэж тэмдэглэе.
  activePlayer = 0;

  // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];

  // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  roundScore = 0;

  // Шооны аль талаараа хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчил санамсаргүйгээр үүсгэж өгнө.
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // <div class="player-score" id="score-0">43</div>
  // window.document.querySelector("#score-0").textContent = dice;

  // document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";

  // Тоглоом эхлэхэд бэлтгэе
  window.document.getElementById("score-0").textContent = "0";
  window.document.getElementById("score-1").textContent = "0";
  window.document.getElementById("current-0").textContent = "0";
  window.document.getElementById("current-1").textContent = "0";

  diceDom.style.display = "none";

  // Toglogchdiin neriig butsaah
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document
    .querySelector(".player-0-panel", ".player-1-panel")
    .classList.remove("winner", "loser");
  document
    .querySelector(".player-1-panel", ".player-0-panel")
    .classList.remove("winner", "loser");

  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.toggle("active");

  switchToNextPlayer();
}
