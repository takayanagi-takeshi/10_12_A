
let outPutField = document.getElementById('outPutField');

import {clock} from './mdl_clock.js';

let outClock = () => {
  outPutField.innerHTML = clock();
}


setInterval(outClock, 500);

/*------------------------------
SlideShow
-------------------------------*/ 

// スライドショーで表示する画像パスを変数に格納
let setImage = [
  'slideshow/images/menu1.jpg',
  './slideshow/images/menu2.jpg',
  './slideshow/images/menu3.jpg',
  './slideshow/images/menu4.jpg',
  './slideshow/images/menu5.jpg',
  './slideshow/images/menu6.jpg'
];

// console.log(setImage);

// カウンター初期値の設定
let counter = 0;

// 上記で設定した画像パスを#mvのbackground-imageに設定する
// 設定した画像の数だけ繰り返す
function slideshow() {
  // カウンターが設定画像数より大きいか確認
  if (counter >= (setImage.length-1)) {
    counter = 0;
  }
  // 背景画像を設定
  let mv = document.getElementById('mv');
  mv.style.backgroundImage = `url(${setImage[counter]})`;
  counter++
}

setInterval(slideshow, 5000);