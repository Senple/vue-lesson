// P.151 コンポーネント間の値の受け渡し
Vue.component('my-hello', {
    // プロパティを定義
    props: ['yourName'],
    template: '<div>こんにちは、{{ yourName }} さん !</div>',
});

new Vue({
    el: "#app",
});
