let app = new Vue({
    el: '#app',
    data: {
        message: '皆さん、こんにちは！',
        url: 'https://wings.msn.to/',
        flag: false,

    },
    methods: {
        onclick: function () {
            this.message = new Date().toLocaleString();
        }
    }
})