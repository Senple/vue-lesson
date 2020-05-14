// P.230 値の変化をより厳密に検知する。
Vue.directive('highlight', function (el, binding, vnode, oldVnode) {
    // 属性値に変化がなければ終了
    if (binding.value === binding.oldValue) { return; }
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