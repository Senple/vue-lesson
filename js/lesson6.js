// // P.238 markedライブラリをラップする。
// Vue.directive('markdown', function (el, binding, vnode, oldVnode) {
//     // markdown文字列をHTML文字列に変換する。
//     el.innerHTML = marked(el.textContent, binding.value);
// });

// new Vue({
//     el: '#app',
//     data: {
//         options: {
//             gfm: true,
//             breaks: true,
//             xhtml: true,
//         }
//     },
// });

Vue.directive('markdown', function (el, binding, vnode, oldVnode) {
    el.innerHTML = marked(el.textContent, binding.value);
});

new Vue({
    el: '#app',
    data: {
        options: {
            gfm: true,
            breaks: true,
            xhtml: true,
        }
    },
});