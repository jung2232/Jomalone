const btnClick = document.querySelector('.toggle-btn');
const menuShow = document.querySelector('header .mobile');
let toggleState = false;
btnClick.addEventListener('click', ()=>{
    toggleState = !toggleState;
    if(toggleState){
        btnClick.classList.add('active');
        menuShow.classList.add('active');
    }else{
        btnClick.classList.remove('active');
        menuShow.classList.remove('active');
    }
})


//MAIN SLIDER
new Swiper('.main-slider .swiper', {
    direction: 'horizontal', //방향
    loop: true,
    autoplay : true,
    slidesPerView: 1, //한 번에 보여지는 슬라이드 개수
    navigation : {
        prevEl : ".main-slider .swiper-prev",
        nextEl : ".main-slider .swiper-next"
    },
});


new Swiper('.best-item .swiper', {
    direction: 'horizontal', //방향
    loop: true, //무한반복
    autoplay : true, //자동시작
    slidesPerView: 3, //한 번에 보여지는 슬라이드 개수
    spaceBetween: 10, //슬라이드와 슬라이드 간격
    navigation : {
        prevEl : ".best-item .swiper-prev",
        nextEl : ".best-item .swiper-next"
    },
    breakpoints: { //반응형 조건 속성
    320: { //320 이상일 경우
      slidesPerView: 1, //레이아웃 1열
    },
    768: {
      slidesPerView: 2, //레이아웃 2열
    },
    1300: {
      slidesPerView: 3, //레이아웃 3열
    },
  }
});


function showMroe(){
    // 더보기로 보여줄 요소를 변수에 저장
    const hide = document.querySelectorAll('.hide');

    // 배열로 변경하고 3개씩 배열로 쪼개서 보이기
    // .from => .hide 배열로 변경
    // slice(0,4) => 3개씩 배열을 쪼개기
    const first = Array.from(hide).slice(0,3);
    first.forEach(item => {
        item.classList.remove('hide');
    });
    if(hide.length <= 3) {
        hideMoreBtn();
    }
}

function hideMoreBtn() {
    document.getElementById('moreBtn').classList.add('hide');
}