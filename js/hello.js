let app = new Vue({
    el: '#app',
    data: {
        message: '皆さん、こんにちは！',
        url: 'https://wings.msn.to/',
        flag: false,
        result: '',
        screenX: 0,
        screenY: 0,
        pageX: 0,
        pageY: 0,
        clientX: 0,
        clientY: 0,
        offsetX: 0,
        offsetY: 0,
        // P.67 双方向データバインティング
        myName: "匿名",
        // P.70 チェックボックス 
        agree: true,
        // P.79 バインドの動作オプションを設定する。
        temperature: 0,
        // P.87 制御関連のディレクティブ
        pay: "credit",
    },
    methods: {
        onclick: function () {
            this.message = new Date().toLocaleString();
        },
        // p.58 mouse in/outの使い方
        // mouseenter/mouseleaveイベントの情報をresultに反映
        onmousein: function (e) {
            this.result += 'Enter:' + e.target.id + '<br />';
        },
        onmouseout: function (e) {
            this.result += 'Leave:' + e.target.id + '<br />';
        },
        // P.64 mouse位置を取得して、マウス位置を可視化する。
        onmousemove: function (e) {
            this.screenX = e.screenX;
            this.screenY = e.screenY;
            this.pageX = e.pageX;
            this.pageY = e.pageY;
            this.clientX = e.clientX;
            this.clientY = e.clientY;
            this.offsetX = e.offsetX;
            this.offsetY = e.offsetY;
        },
        // P.65 イベントハンドラーに任意の引数を渡す。 
        onclick65: function (message, e) {
            console.log(message);
            console.log(e);
        },
        // P.79 バインドの動作オプションを設定する。
        onchange79: function () {
            // 入力値を小数点第一位に丸めて、ログ表示
            console.log(this.temperature.toFixed(1));
            console.log(this.temperature.toFixed(2));
        }
    }
})