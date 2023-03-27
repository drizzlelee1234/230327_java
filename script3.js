/*
prompt("당신의 연령은?", "");
*/

/*일정한 시간 간격으로 코드 실행하기 */

/*
let addNum = 0;
let subNum = 1000;

let auto_1 = setInterval(function(){
  addNum++;
  console.log("addNum: " + addNum)

}, 3000);

let auto_2 = setInterval(function(){
  subNum++;
  console.log("subNum: " + subNum)

}, 3000);
*/

const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function clock() {
  const now = new Date();

  hour.innerText = now.getHours();
  min.innerText = now.getMinutes();
  sec.innerText = now.getSeconds();
}

setInterval(clock, 1000);


