// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {
//   getFirestore,
//   doc,
//   setDoc,
//   getDoc,
//   updateDoc,
//   increment,
// } from "firebase/firestore/lite";
// import { async } from "@firebase/util";

const word = document.getElementById("word");
const nextBtn = document.getElementById("answerBtn");
// var startBtn = document.getElementById("startBtn");
// var participantCount = document.getElementById("participantCount");
let quizArray = [
  {
    img: "/img/Bungeoppang.png",
    hint: "oooo의 oo! oo!",
    answer: "도라에몽의 팥붕! 슈붕!",
  },
  {
    img: "/img/PussinBoots.png",
    hint: "ooo ooo",
    answer: "엄마는 외계인",
  },
  {
    img: "/img/CheddarCheese.png",
    hint: "ooo ooo o",
    answer: "황치즈 드래곤 볼",
  },
  {
    img: "/img/Crispy_Rice.png",
    hint: "ooo ooo 아이스크림",
    answer: "구수한 누룽지 아이스크림",
  },
  {
    img: "/img/Rainbow.png",
    hint: "oooo ooo",
    answer: "레인보우 샤베트",
  },
  {
    img: "/img/Almond.png",
    hint: "ooo oo",
    answer: "아몬드 봉봉",
  },
  {
    img: "/img/LoveStruck.png",
    hint: "ooo oo oo",
    answer: "사랑에 빠진 딸기",
  },
  {
    img: "/img/Yogurt.png",
    hint: "ooooo",
    answer: "31요거트",
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
    window.location.href = "/html/resultPage.html?resultCount=" + resultCount;
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
  if (userInput === currentAnswer) {
    resultCount++;
  }
  console.log("resultCount", resultCount);
  document.querySelector("input").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  const resultCount = getParameterByName("resultCount");
  document.getElementById("result").innerText =
    resultCount + "개 맞추셨습니다!";

  // 링크공유하기 추가
  document
    .getElementById("link")
    .addEventListener("click", copyLinkToClipboard);
});

function copyLinkToClipboard() {
  const currentUrl = window.location.href;

  const tempInput = document.createElement("input");
  tempInput.value = currentUrl;
  document.body.appendChild(tempInput);

  tempInput.select();
  document.execCommand("copy");

  document.body.removeChild(tempInput);

  alert("🍀링크가 복사되었습니다🍀");
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// const firebaseConfig = {
//   apiKey: "AIzaSyBjQYsdLSevNNOS1jTywn1aAHv3B1jvnDk",
//   authDomain: "oz-miniproject-24f85.firebaseapp.com",
//   projectId: "oz-miniproject-24f85",
//   storageBucket: "oz-miniproject-24f85.appspot.com",
//   messagingSenderId: "194531623339",
//   appId: "1:194531623339:web:8d8cc72eb81007415d12ee",
//   measurementId: "G-Q7HCCQBHY9",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// startBtn.addEventListener('click', function() {
//   var count = localStorage.getItem('count');
//   count = count ? Number(count) + 1 : 1;
//   localStorage.setItem('count', count);
//   participantCount.innerText = count;
//   location.href='/html/icecreamPage.html';
// });

// window.onload = function() {
//   var count = localStorage.getItem('count');
//   participantCount.innerText = count ? count : 0;
// };

// 참가자 수를 업데이트하는 함수
// async function updateParticipantCount(db) {
//   const countRef = doc(db, "participants", "counter");

//   try {
//     // 참가자 수를 가져온다
//     const docSnap = await getDoc(countRef);

//     if (docSnap.exists()) {
//       // 문서가 존재하면 참가자 수를 1만큼 증가
//       await updateDoc(countRef, {
//         countRef: increment(1),
//       });
//     } else {
//       // 문서가 존재하지 않으면 새로 만들고, 참가자 수를 1로 설정
//       await setDoc(countRef, {
//         count: 1,
//       });
//     }
//   } catch (error) {
//     console.error("Error updating participant count: ", error);
//   }
// }

// async function displayParticipantCount(db) {
//   const countRef = doc(db, "participants", "counter");

//   try {
//     const docSnap = await getDoc(countRef);
//     if (docSnap.exists()) {
//       participantCount.innerText = docSnap.data().count;
//     } else {
//       participantCount.innerText = 0;
//     }
//   } catch (error) {
//     console.error("Error fetching participant count: ", error);
//   }
// }

// startBtn.addEventListener("click", function () {
//   updateParticipantCount(db);
//   location.href = "/html/icecreamPage.html";
// });

// window.onload = function () {
//   displayParticipantCount(db);
// };
