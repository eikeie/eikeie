var bar = new ProgressBar.Line(splash_text, {//id名を指定
	easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
	duration: 1000,//時間指定(1000＝1秒)
	strokeWidth: 0.4,//進捗ゲージの太さ
	color: '#ffffff',//進捗ゲージのカラー
	trailWidth: 0.4,//ゲージベースの線の太さ
	trailColor: '#787878',//ゲージベースの線のカラー
	text: {//テキストの形状を直接指定				
		style: {//天地中央に配置
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',//バーより上に配置
			transform:'translate(-50%,-50%)',
			'font-size':'2rem',
			color: '#fff',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});

bar.animate(1.0, function () {
    $("#splash_text").delay(300).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
    $("body").addClass('appear');
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(850).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    
    //フェードアウト後bodyにappearクラス付与
    
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    
    //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg').on('animationend', function() { 
    //この中に動かしたいJSを記載
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
    
    });