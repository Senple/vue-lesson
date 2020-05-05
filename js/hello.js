let app = new Vue({
    el: '#app',
    data: {
        message: '皆さん、こんにちは！',
        url: 'https://wings.msn.to/',
        flag: false,
        result: '',

    },
    methods: {
        onclick: function () {
            this.message = new Date().toLocaleString();
        },
        // mouseenter/mouseleaveイベントの情報をresultに反映
        onmousein: function (e) {
            this.result += 'Enter:' + e.target.id + '<br />';
        },
        onmouseout: function (e) {
            this.result += 'Leave:' + e.target.id + '<br />';
        },
    }
})