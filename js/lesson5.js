// P.201 key属性をトリガーとしたアニメーション
new Vue({
    el: "#app",
    data: {
        // 表示するパネル(インデックス番号)
        id: 0,
        // 表示パネルを配列として
        panels: [
            "WINGSプロジェクトはライター...",
            "山田氏の書籍に関するFAQのための",
            "環境設定に関しては、ページ上部に・・・"
        ]
    },
    methods: {
        // ボタンクリック時に表示状態をオンオフ
        onclick: function () {
            this.id = (this.id + 1) % this.panels.length;
        }
    },
});