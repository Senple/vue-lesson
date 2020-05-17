// P.262 ミックスインの基本。
let dataLoggle = {
    mounted: function () {
        console.log(this.$data);
    }
};

Vue.component('my-comp', {
    data: function () {
        return {
            current: new Date()
        }
    },
    template: `<div> 現在時刻：{{ current }} </div>`,
    // ミックスインを組み込み
    mixins: [dataLoggle]
});

new Vue({
    el: '#app',
});