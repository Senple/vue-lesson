// P.143 コンポーネントの基本
Vue.component('my-hello', {
    template: '<div>こんにちは、{{ name }} !</div>',
    data: function () {
        return {
            name: 'Vue.js'
        };
    }
});

new Vue({
    el: "#app"
});
