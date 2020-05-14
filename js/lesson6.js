// P.230 値の変化をより厳密に検知する。
Vue.directive('highlight', function (el, binding, vnode, oldVnode) {
    // 現在の属性値をログ出力
    console.log(binding.value);
    el.style.backgroundColor = binding.value;

});

new Vue({
    el: '#app',
    data: {
        name: "アルバス・ダンブルドア",
        color: 'yellow'
    }
})