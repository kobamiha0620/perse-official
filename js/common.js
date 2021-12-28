var app = new Vue({
    //メニュー表示
    el: '#menu',
    data:{
        active: false,
        navi: false
    },
    methods: {
        naviOpen: function(){
            this.active = !this.active;
            this.navi = !this.navi;
        }
    }
})




//TOP 画像切り替え
let setImgFunc = (function(){
let imgList = ["mainVisual-01", "mainVisual-02", "mainVisual-03"];
let num = 0;
let imgPath;
return function() {
    num++;
    imgPath = "img/"+imgList[num];
    testImg = document.querySelector('#js-mainVisual img').src = imgPath;
    //3枚目の画像になったら１に戻る
    if (num === 2) {
    num = 0;
    }
}
})();


// タイピング Here we r
window.addEventListener('load', (event) => {
    let scroll =  document.getElementById('js-typing0');
    let here =  document.getElementById('js-typing');
    let targetElement = scroll.getBoundingClientRect();
    let y = targetElement.top;
    window.addEventListener('scroll', (event) => {
        let scroll = window.scrollY ;
        if( y - 300 < window.scrollY ) {
            here.style.display = 'block';
        }
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

    anchorLinksArr.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.hash;
        const targetElement = document.querySelector(targetId);
        const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
        window.scrollTo({
          top: targetOffsetTop,
          behavior: "smooth"
        });
      });
    });
  });