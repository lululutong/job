(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: true,
        pagination:".swiper-pagination",
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    })

        var music = document.querySelector(".music");
        var musicGif = document.querySelector(".music-gif");
        var audio = document.querySelector("audio");
        music.addEventListener("click",function () {
            if(audio.paused){
                audio.play();
                musicGif.style.zIndex = 2;
                music.firstElementChild.style.animationPlayState = "running";
            }else {
                musicGif.style.zIndex = 1;
                audio.pause();
                music.firstElementChild.style.animationPlayState = "paused";
            }
        })
    })();