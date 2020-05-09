// P.151 コンポーネント間の値の受け渡し
Vue.component('my-hello', {
    // プロパティを定義
    props: ['yourName'],
    template: '<div>こんにちは、{{ yourName }} さん !</div>',
});

// P.152 プロパティで受け取った値を更新する
// Vue componentは一つのcomponentごとに、vue.componentと書く必要がある。
Vue.component('my-counter', {
    props: ['init'],
    template: '<div>現在地は {{ current }} です！ \
    <input type="button" v-on:click="onclick" value="増やす" /></div>',
    // データオブジェクトを定義
    data: function () {
        return {
            current: this.init
        };
    },
    methods: {
        // クリック時にcurrentプロパティをインクリメント
        onclick: function () {
            this.current++;
        }
    }
});

// P.153 非props属性の値を渡す。
Vue.component('my-result', {
    template: '<div title="result" class="main">こんにちは、Vue.js !</div>',

});

new Vue({
    el: "#app",
});
