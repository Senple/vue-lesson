// P.205 複数のアニメーションを同居させる 
new Vue({
    el: '#app',
    data: {
        flag: true
    },
    methods: {
        onclick: function () {
            this.flag = !this.flag;
        }
    }
});