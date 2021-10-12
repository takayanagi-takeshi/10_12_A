
let outPutField = document.getElementById('outPutField');

let timer = () => {
  //本日の日付オブジェクトを作る
  let today = new Date();
  let week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  // console.log(week[5]);

  //現在の時を取得
  let hour = ("0" + today.getHours()).slice(-2);
  //現在の分を取得
  let min = ("0" + today.getMinutes()).slice(-2);
  //現在の秒を取得 ０〜9秒に『01』などをつける※3桁表示させない
  let sec = ("0" + today.getSeconds()).slice(-2);
  //曜日を取得
  let day = today.getDay();
  // console.log(day);

  outPutField.innerHTML = `${hour}：${min}：${sec}（${week[day]}）`;
}

// timer();


setInterval(timer, 500);
