// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let a = document.querySelector('button#kaitou');
a.addEventListener('click',hantei);
let b = document.querySelector('p#result');
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let c = document.querySelector('input[name="seisu"]');
  let yoso = Number(c.value);

 
  let d = document.querySelector('span#kaisu');
  d.textContent = kaisu + 1;
  let e = document.querySelector('span#answer');
  e.textContent = yoso ;
  if(kaisu>=3){
    b.textContent = '答え' + kotae + 'でした。すでにゲームは終わっています';
  }else{
    if(kaisu==2){
      if(yoso==kotae){
        b.textContent = ("正解おめでとう！");
      }else{
        b.textContent =("まちがい,残念でした答えは " + kotae + "です.");
      }
    }else{
      if(kotae==yoso){
        b.textContent = ("正解おめでとう!");
      }else if(yoso < kotae){
        b.textContent = ("まちがい.答えはもっと大きいです.");
      }else{
        b.textContent = ("まちがい.答えはもっと小さいです.");

      }
    }
  }
  kaisu = kaisu + 1;
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  
  }
