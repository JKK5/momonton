const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS, text);  //USER_LS localStorage에 저장
}

function handleSubmit(event){
  event.preventDefault();  // 이벤트 취소
  const currentValue = input.value;  // input value 받기
  paintGreeting(currentValue);  
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_CN);  // form 보여주기
  form.addEventListener("submit", handleSubmit)  // submit 이벤트 -> handleSubmit 실행
}

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);  // form 숨기기
  greeting.classList.add(SHOWING_CN);  // h4 보여주기
  greeting.innerText = `Hello ${text}`;  // h4에 텍스트 넣기 
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);  //
  if (currentUser === null){  // currentUser 없다면
    askForName();  // 이름 물어보기
  } else {
    paintGreeting(currentUser);
  }
}

function init(){
  loadName();
}

init();