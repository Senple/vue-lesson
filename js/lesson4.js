// P.143 コンポーネントの基本
Vue.component('my-Hello', {
    template: '<div>こんにちは、{{ name }} !</div>',
    data: function () {
        return {
            name: 'Vue.js'
        };
    }
});

// P.147グローバル登録とローカル登録  
let MyHello = {
    template: '<div>こんにちは、Vue.js !</div>',
};

new Vue({
    el: "#app",
    // P.147グローバル登録とローカル登録 
    // コンポーネントをローカル登録
    components: {
        'my-hello': MyHello
    }
});
