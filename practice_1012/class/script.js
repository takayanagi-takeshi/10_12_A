
//htmlの#appを変数appに代入
// let app = document.getElementById('app');
//htmlの#outPutFieldを変数outPutFieldに代入
let outPutField = document.getElementById('outPutField')
let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  let inputVal = document.getElementById('inputField').value;
  gokei(inputVal);
})
// クラスは巻き上げをしないので、クラス定義は先に行う
class Item {
  // コンストラクター定義（プロパティ）
  constructor(price) {
    // プロパティの定義
    this.price = price;
  }
  // 消費税を含む合計金額を算出するメソッドの定義
  getTax() {
    return Math.round(this.price * 1.10);
  }
}

let gokei = (val) => {
  let price = parseInt(val);
  // インスタンスの生成
  let item = new Item(price);
  console.log(item);
  outPutField.innerHTML = item.getTax();
}

// ------------------------------------------------------------
// let button = () => {
// let btn = document.getElementById('btn');
// btn.addEventListener('click', () => {

//   let tax = 1.1
//   let inputVal = document.getElementById('inputField').value;
//   outPutField.innerText = Math.round(inputVal) * tax;
//   //parseIntで整数化する
//   // outPutField.innerText = parseInt(inputVal) + 80;


// });
// }

// button();
// --------------------------------------------------------------
// --------------------------------------------------------------
// btn.addEventListener('click', () => {
//   let inputVal = document.getElementById('inputField').value;
//   getTax(inputVal);
// })

// let getTax = (price) => {
//   let taxIn = Math.round(price * 1.10);
//   outPutField.innerText = taxIn;
// }
// --------------------------------------------------------------



