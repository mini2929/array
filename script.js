const btnReset = document.querySelectorAll("button")[0];
const btnActive = document.querySelectorAll("button")[1];
const box = document.querySelector("#box");

/*
DomEl.classList.add('클래스명') : 요소에 해당 클래스명 추가
DomEl.classList.remove('클래스명') : 요소에 해당 클래스명 제거
DomEl.classlist.remove('클래스명') : 요소에 있는 모든 클래스명 제거
DomEl.classlist.toggle('클래스명') : 해당 클래스명이 있으면 제거하고 없으면 추가
DomEl.classlist.contains('클래스명') 해당 클래스명이 있으면 true 반환 없으면 false 반환
*/

btnActive.addEventListener("click", () => {
    box.classList.add("on");
});

btnReset.addEventListener("click", () => {
    box.classList.remove("on");
});