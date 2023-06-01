//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム 
 let p6 = document.querySelector('h2#ex42');
 let j = document.createElement('p');
j.textContent = '写真表と都市の緯度経度のページです';
p6.insertAdjacentElement('afterend' ,j);
let p1 = document.querySelector('p');
p1.style.textEmphasis='sesame green';
// 練習4-3 写真表作成プログラム
//taro
 let div = document.querySelector('div#phototable');
 let img = document.createElement('img');
img.setAttribute('src','taro.png');
 let p = document.createElement('p');
p.insertAdjacentElement('beforeend',img);
div.insertAdjacentElement('beforeend',p);
//jiro
 let a = document.querySelector('div#phototable');
 let b= document.createElement('img');
b.setAttribute('src','jiro.png');
 let c = document.createElement('p');
c.insertAdjacentElement('beforeend',b);
a.insertAdjacentElement('beforeend',c);
//hanako
 let d = document.querySelector('div#phototable');
 let e = document.createElement('img');
e.setAttribute('src','hanako.png');
 let f = document.createElement('p');
f.insertAdjacentElement('beforeend',e);
d.insertAdjacentElement('beforeend',f);
// 練習4-4 箇条書き削除プログラム
let w = document.querySelectorAll('ul#location >li');
for(let y of w){
	y.remove();
}

// 練習4-5 箇条書き追加プログラム
 let l = document.querySelector('ul#location');
for( zahyo  of data){
	let risuto = document.createElement('li');
	risuto.textContent = zahyo.name + '・・・ 緯度:' + zahyo.lat + ', 緯度:' + zahyo.lng;
	l.insertAdjacentElement("beforeend", risuto);
}

