const word = document.getElementById("word");
const result = document.getElementById("result")
const nextBtn = document.getElementById("answerBtn");
let quizArray = [
  {
    img: "/img/Bungeoppang.png",
    hint: "oooo의 oo! oo!",
    answer: "도라에몽의 팥붕! 슈붕!"
  },
  {
    img: "/img/PussinBoots.png",
    hint: "ooo ooo",
    answer: "엄마는 외계인"
  },
  {
    img: "/img/CheddarCheese.png",
    hint: "ooo ooo o",
    answer: "황치즈 드래곤 볼"
  },
  {
    img: "/img/Crispy_Rice.png",
    hint: "ooo ooo 아이스크림",
    answer: "구수한 누룽지 아이스크림"
  },
  {
    img: "/img/Rainbow.png",
    hint: "oooo ooo",
    answer: "레인보우 샤베트"
  },
  {
    img: "/img/Almond.png",
    hint: "ooo oo",
    answer: "아몬드 봉봉"
  },
  {
    img: "/img/LoveStruck.png",
    hint: "ooo oo oo",
    answer: "사랑에 빠진 딸기"
  },
  {
    img: "/img/Yogurt.png",
    hint: "ooooo",
    answer: "31요거트"
  },
];
let originalQuizArray = [...quizArray]; // 처음 문제 배열을 복사하여 저장

let currentQuestion = null; // 현재 문제 번호
let totalQuestions = quizArray.length; // 전체 문제 갯수

document.addEventListener("DOMContentLoaded", function () {
  showImage(); // 페이지 로드 완료 시 이미지 출력 함수 실행

  nextBtn.addEventListener("click", () => {
    scoreCount();
    let progress = ((totalQuestions - quizArray.length) / totalQuestions) * 100;
    document.querySelector("progress").value = progress;
    showImage(); // 버튼 클릭 시 이미지 출력 함수 실행
  });
});

function showImage() {
  if (quizArray.length === 0) {
    // // 이미지 배열이 비어있으면 새로 채운다
    // quizArray = [...originalQuizArray];
    window.location.href = "/html/resultPage.html";
    return; // 함수를 종료하여 이미지 출력 코드가 실행되지 않게 함
  }
  let quizNum = Math.floor(Math.random() * quizArray.length);
  let objImg = document.getElementById("randomImg");
  objImg.src = quizArray[quizNum].img;
  word.innerText = quizArray[quizNum].hint;

  currentQuestion = quizArray[quizNum]; // 현재 문제를 저장
  quizArray.splice(quizNum, 1); // 선택한 문제 제거
}

let resultCount = 0;
function scoreCount() {
  let userInput = document.querySelector("input").value; // 사용자의 입력을 가져옴
  let currentAnswer = currentQuestion.answer; // 현재 문제의 정답을 가져옴
  if(userInput === currentAnswer){
    resultCount++
  }
  console.log("resultCount",resultCount)
  document.querySelector("input").value = "";
}

