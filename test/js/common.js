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
        // let scroll = window.scrollY ;
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



    // //縦スクロールページネーション
    // function pagenation(){

    //     //要素の取得
    //     const target = document.document.getElementById('js-pager');
    //     const section01 = document.document.getElementById("section01");
    //     const section02 = document.getElementById("section02");
    //     const section03 = document.getElementById("section03");
    //     const profile = document.getElementById("profile");
    //     const youso = document.getElementById("js-youso").clientWidth;
    //     const yousoHeight = document.getElementById("js-youso").clientHeight;
    //     // const yousoR = youso / 2 - 5;
    //     const yousoH = (yousoHeight / 3) *2 ;

    //     //ページャー
    //     const pager01 = document.getElementById("pager01");
    //     const pager02 = document.getElementById("pager02");
    //     const pager03 = document.getElementById("pager03");

    //     //要素までのY値
    //     const section01Top = section01.getBoundingClientRect().top;
    //     const section02Top = section02.getBoundingClientRect().top;
    //     const section03Top = section03.getBoundingClientRect().top;
    //     const profileTop = profile.getBoundingClientRect().top;

    //     //画面からのページネーションの位置。
    //     // const targetTop = 
    //     const lastTop = profileTop - 400;
    //     console.log(profileTop - yousoHeight);

    //     window.addEventListener('scroll', function(){
    //         const scrollY = window.pageYOffset;
    //         //ページネーション要素の取得

    //         //ブラウザの高さを取得
    //         const windowH = window.innerHeight;
    //         const windowW = window.innerWidth;
    //         const targetTop = windowH / 2 + 27 + 'px';
    //         const targetRight = (windowW - youso) / 2  + 'px';
    //         console.log(scrollY);

    //         if(scrollY > profileTop - yousoHeight){
    //             target.style.display = 'none';
    //             target.style.position = 'absolute';
    //             target.style.top = 0;
    //             target.style.right = '253px';
    //             pager01.classList.remove('active');
    //             pager02.classList.remove('active');
    //             pager03.classList.remove('active');
                
    //         }else if(scrollY > section03Top - yousoH){
    //             target.style.position = 'absoute';
    //             target.style.display = 'block';
    //             target.style.top = 0;
    //             target.style.right = 0;
    //             pager01.classList.remove('active');
    //             pager02.classList.remove('active');
    //             pager03.classList.add('active');

    //         }else if(scrollY > section02Top - yousoH){
    //             target.style.position = 'fixed';
    //             target.style.display = 'block';
    //             target.style.top = targetTop;
    //             target.style.right = targetRight;
    //             pager01.classList.remove('active');
    //             pager02.classList.add('active');
    //             pager03.classList.remove('active');

    //         }else if(scrollY > section01Top - yousoH){
    //             target.style.position = 'fixed';
    //             target.style.display = 'block';
    //             target.style.top = targetTop;
    //             target.style.right = targetRight;
    //             pager01.classList.add('active');
    //             pager02.classList.remove('active');
    //             pager03.classList.remove('active');
    //         }
    //         // }else{
    //         //     target.style.display = 'none';
    //         //     target.style.position = 'absolute';
    //         //     pager01.classList.add('active');
    //         //     pager02.classList.remove('active');
    //         //     pager03.classList.remove('active');
    //         // }
    //     });
    // }

    //たてスライド
    // function slide(){

    //     //要素の高さを取得
    //     const slide = document.querySelectorAll("#js-slide > li");
    //     for( let i = 0; i < slide.length; i++){
    //         h = slide[i].clientHeight;
    //     }
    // }

    // $(function){
    //     const getScrollVerticalPosition = e => {
    //         const {
    //           scrollHeight, scrollTop, clientHeight
    //         } = e.target;
          
    //         const isScrollTop = scrollTop === 0;
    //         const isScrollBottom = scrollHeight - clientHeight === scrollTop;
            
    //         if (isScrollTop) {
    //           return 'top';
    //         } else if (isScrollBottom) {
    //           return 'bottom';
    //         } else {
    //           return 'scrolling';
    //         }
    //       }
          
    //     $('.scroll-area').on('scroll', function(e) => {
            
    //     const scrollPosition = getScrollVerticalPosition(e);
    //     // ログに出力
    //     console.log(e);
    //     });
    // }

//     function slide(){
//         const slides = document.getElementById("js-slide");
//         const slide01 = document.getElementById('section01');
//         const slide02 = document.getElementById('section02');
//         const slide03 = document.getElementById('section03');
//         const slideTop = slides.getBoundingClientRect().top;
//         const slide01Top = slide01.getBoundingClientRect().top;
//         const slide02Top = slide02.getBoundingClientRect().top;
//         const slide03Top = slide03.getBoundingClientRect().top;

          
//         const slideHeight = slides.clientHeight;
//         console.log(slideTop);
//         console.log(slideHeight);

//         window.addEventListener('scroll', function(){
//             const scrollY = window.pageYOffset;
//             if(scrollY > slide03Top){
//                 slide03.classList.add('static');
//             }else if(scrollY > slide02Top){
//                 slide02.classList.add('static');
//             }else if(scrollY > slide01Top){
//                 slide01.classList.add('static');

//             }else{
//                 slide01.classList.remove('static');
//                 slide02.classList.remove('static');
//                 slide03.classList.remove('static');

//             }
//             });
//     }



// window.addEventListener('load', function(){
//     // pagenation();
//     slide();
// });
// window.addEventListener( 'resize', function() {
//     // リサイズ時に行う処理 
//     // pagenation();
//     slide();
// }, false );

window.onload = function() {
    var elements = document.querySelectorAll(".sticky");
    Stickyfill.add(elements);
  }
  