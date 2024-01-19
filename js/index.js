const word = document.getElementById("word");
const nextBtn = document.getElementById("answerBtn");
let imgArray = [
  {
    img: "/img/Bungeoppang.png",
    hint: "oooo의 oo! oo!",
  },
  {
    img: "/img/PussinBoots.png",
    hint: "ooo ooo",
  },
  {
    img: "/img/CheddarCheese.png",
    hint: "ooo ooo o",
  },
  {
    img: "/img/Crispy_Rice.png",
    hint: "ooo ooo 아이스크림",
  },
  {
    img: "/img/Rainbow.png",
    hint: "oooo ooo",
  },
  {
    img: "/img/Almond.png",
    hint: "ooo oo",
  },
  {
    img: "/img/LoveStruck.png",
    hint: "ooo oo oo",
  },
  {
    img: "/img/Yogurt.png",
    hint: "ooooo",
  },
];

let answerArray = [
  {
    answer: "도라에몽의 팥붕! 슈붕",
  },
  {
    answer: "엄마는 외계인",
  },
  {
    answer: "황치즈 드래곤 볼",
  },
  {
    answer: "구수한 누룽지 아이스크림",
  },
  {
    answer: "레인보우 샤베트",
  },
  {
    answer: "아몬드 봉봉",
  },
  {
    answer: "사랑에 빠진 딸기",
  },
  {
    answer: "31요거트",
  },
];
let imgArrayCopy = [...imgArray];

let currentQuestion = 0; // 현재 문제 번호
let totalQuestions = imgArray.length; // 전체 문제 갯수

document.addEventListener("DOMContentLoaded", function () {
  showImage(); // 페이지 로드 완료 시 이미지 출력 함수 실행

  nextBtn.addEventListener("click", () => {
    scoreCount();
    currentQuestion++;
    let progress = (currentQuestion / totalQuestions) * 100;
    document.querySelector("progress").value = progress;
    showImage(); // 버튼 클릭 시 이미지 출력 함수 실행
    console.log("눌렷니");
  });
});

function showImage() {
  if (imgArrayCopy.length === 0) {
    // 이미지 배열이 비어있으면 새로 채운다
    imgArrayCopy = [...imgArray];
  }
  let imgNum = Math.floor(Math.random() * imgArrayCopy.length);
  let objImg = document.getElementById("randomImg");
  objImg.src = imgArrayCopy[imgNum].img;
  word.innerText = imgArrayCopy[imgNum].hint;
  imgArrayCopy.splice(imgNum, 1); // 선택한 이미지 제거
}

function scoreCount() {
  let resultCount = 0;
  let userInput = document.querySelector("input").value; // 사용자의 입력을 가져옴
  let currentAnswer = answerArray[currentQuestion].answer; // 현재 문제의 정답을 가져옴
  let userInputStr = userInput.toString();
  let currentAnswerStr = currentAnswer.toString();
  if(userInputStr === currentAnswerStr ){
    resultCount++
  }
  console.log("resultCount",resultCount)
  document.querySelector("input").value = "";
}
