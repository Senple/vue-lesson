// P.234 引数付きのディレクティブを定義する。
Vue.directive('highlight', function (el, binding, vnode, oldVnode) {
    // 引数の値に応じてハイライト処理を分岐
    // v-highlightのbindの引数を変更すると、highlight方法が変化する。
    switch (binding.arg) {
        case 'bg':
            el.style.backgroundColor = binding.value;
            break;
        case 'border':
            el.style.borderStyle = 'solid';
            el.style.borderWidth = '1px';
            el.style.borderColor = binding.value;
            break;
        case 'text':
            el.style.fontweight = 'bold';
            el.style.color = binding.value;
            break;
        default:
            throw new Error('指定のハイライトを使えません。');
    }
});

new Vue({
    el: '#app',
    data: {
        color: 'red'
    }
})