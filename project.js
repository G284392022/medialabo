let data = {
    "coord": {
      "lon": -0.1257,
      "lat": 51.5085
    },
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "曇りがち",
        "icon": "04d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 3.63,
      "feels_like": 0.43,
      "temp_min": 2.7,
      "temp_max": 4.59,
      "pressure": 1027,
      "humidity": 79,
    "visibility": 10000,
    },
    "wind": {
      "speed": 3.6,
      "deg": 50,
    },
    "clouds": {
      "all": 75,
    "dt": 1646542356
    },  
    "sys": {
      "type": 2,
      "id": 2019646,
      "country": "GB",
      "sunrise": 1646548519,
      "sunset": 1646588915
    },
    "timezone": 0,
    "id": 2643743,
    "name": "ロンドン",
    "cod": 200
  };
  
  ////////// 課題3-2 ここからプログラムを書こう
  ////////// 課題3-2 ここからプログラムを書こう
  console.log(data.name);
  for(let a of "name"){
    console.log(a.name);
  }
  
  let aa1 = document.querySelector('buttom#suichi');
  aa1.addEventListener('click', hantei);
  
  function hantei() {
    let aa2= document.querySelector('select#mati');
    let aa3 = aa2.selectedIndex;  // idx 番目の option が選択された
  
    let aa4 = aa2.querySelectorAll('option');  // s の子要素 option をすべて検索
    let aa5 = aa4.item(a3);       // os の idx 番目の要素
  
      let kensaku=aa5.value;
      let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/"+kensaku+".json";
      console.log(url);
      
  
    
  
      axios.get(url)
          .then(showResult)   // 通信成功
          .catch(showError)   // 通信失敗
          .then(finish);      // 通信の最後の処理
      
  }
  // 通信が成功した時の処理
  function showResult(resp) {
      // サーバから送られてきたデータを出力
      let data = resp.data;
  
      // data が文字列型なら，オブジェクトに変換する
      if (typeof data === 'string') {
          data = JSON.parse(data);
      }
  
      // data をコンソールに出力
      let wet1=document.querySelector("span#a");
      wet1.textContent=data.name;

      let wet2=document.querySelector("span#b");
      wet2.textContent=data.weather[0].description;

      let wet3=document.querySelector("span#c");
      wet3.textContent=data.coord.lon;

      let wet4=document.querySelector("span#d");
      wet4.textContent=data.coord.lat;

      let wet5=document.querySelector("span#e");
      wet5.textContent=data.main.temp_max;

      let wet6=document.querySelector("span#f");
      wet6.textContent=data.main.temp_min;

      let wet7=document.querySelector("span#g");
      wet7.textContent=data.main.temp;
      
      let wet8 = document.querySelector("span#h");
      wet8.textContent=data.main.humidity; 
      let wet9 = document.querySelector("span#i");
      wet9.textContent=data.main.humidity;
  }
  
  // 通信エラーが発生した時の処理
  function showError(err) {
      console.log(err);
  }
  
  // 通信の最後にいつも実行する処理
  function finish() {
      console.log('Ajax 通信が終わりました');
  }
  
  console.log(data.name);
  console.log(data.weather[0].description);
  console.log(data.main.temp_max);
  console.log(data.main.temp_min);
  console.log(data.wind.deg);
  console.log(data.wind.speed);
  
  
  