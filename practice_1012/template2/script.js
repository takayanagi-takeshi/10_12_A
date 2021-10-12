
//htmlの#appを変数appに代入
let app = document.getElementById('app');
//htmlの#outPutFieldを変数outPutFieldに代入
let outPutField = document.getElementById('outPutField')


let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  let inputVal = document.getElementById('inputField').value;
  outPutField.innerText = inputVal;
  //parseIntで整数化する
  // outPutField.innerText = parseInt(inputVal) + 80;

})









