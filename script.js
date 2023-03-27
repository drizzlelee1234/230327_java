/*
let num = 1;
let num_2 = 10;

/* 배열객체 
let d = new Array();
d[0] = 10;
d[1] = "뚜뚜뚜";
d[2] = true;

let d = new Array(10, "뚜뚜뚜" , true);

let d = [10, "뚜뚜뚜" , true];

*/

/*
let arr = [30, "따르릉" , true];

document.write("<h3>배열값 가져오기-1</h3>");
document.write(arr[0], "<br />");
document.write(arr[1], "<br />");
document.write(arr[2], "<br />");

document.write("<h3>배열값 가져오기-2</h3>");
for(let i = 0; i < arr.length; i++) {
  document.write(arr[i], "<br />");
}

document.write("<h3>배열값 가져오기-3</h3>");
for(i in arr) {
  document.write(arr[i], "<br/>");
}
*/

/*
let arr_1 = ["사당", "교대", "방배", "강남"];
let arr_2 = ["신사", "압구정", "옥수"];

let result = arr_1.join("-");
document.write(result, "<br />");

result = arr_1.concat(arr_2);
document.write(result, "<br />");

result = arr_1.slice(1, 3);
document.write(result, "<br />");

arr_1.sort();
document.write(arr_1, "<br />");

arr_2.reverse();
document.write(arr_2, "<br />");
*/


let greenArr = ["교대" , "방배" , "강남"];
let yellowArr = ["미금" , "정자", "수서"];

greenArr.splice(2, 1, "서초" , "역삼");
document.write(greenArr, "<br />");

let data1 = yellowArr .pop(); //수서 삭제됨 
let data2 = yellowArr .shift(); //미금 삭제됨 

yellowArr.push(data2);
document.write(yellowArr, "<br />");

yellowArr.unshift(data1);
document.write(yellowArr, "<br />");



