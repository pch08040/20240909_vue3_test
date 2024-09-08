<template>
  <div id="app">
    <header class="flex justify-between items-center bg-white p-4 h-53">
      <img alt="logo" src="./assets/en-logo.png" class="ml-4" />

      <!-- 메뉴 -->
      <div class="flex">
        <div v-for="(a, i) in menu" :key="i" class="ml-4 mr-4">
          <button @click="modalconsole(i)" class="text-gray-800 no-underline">
            {{ a }}
          </button>
        </div>
      </div>
    </header>

    <main class="relative">
      <!-- 메인 이미지 -->
      <img
        alt="main-image"
        src="./assets/main.jpg"
        class="w-full h-[747px] object-cover"
      />

      <div
        class="absolute inset-0 bg-black bg-opacity-50 flex items-center p-32"
      >
        <div>
          <h1 class=" text-white text-6xl font-bold main-text">
            Lorem ipsum<br />
            dolor sit amet,
          </h1>
          <br />
          <span class="text-white text-2xl font-light mobile-hide"
            >Lorem ipsum dolor sit amet, consectetur<br />
            sed do eiusmod tempor incididunt ut<br />
            labore et dolore magna aliqua.
          </span>
        </div>
      </div>

      <!-- 왼쪽 화살표 -->
      <div class="absolute left-10 top-1/2 mobile-hide">
        <img alr="arrow-left" src="./assets/arrow-left.png" />
      </div>

      <!-- 오른쪽 화살표 -->
      <div class="absolute right-10 top-1/2 mobile-hide">
        <img alr="arrow-right" src="./assets/arrow-right.png" />
      </div>
    </main>

    <!-- 서브배너 -->
    <section class="flex flex-wrap justify-center mt-20 mb-20">
      <div
        v-for="(a, i) in section"
        :key="i"
        class="object-cover custom-width2 custom-width shadow-custom-lg m-4"
      >
        <img
          :alt="'section-image-' + (i + 1)"
          :src="require(`./assets/img${i + 1}.jpg`)"
        />
        <div class="p-5">
          <div class="font-bold text-3xl mb-3">
            Lorem ipsum<br />
            dolor sit amet,
          </div>
          <div>
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,
          </div>
          <div class="font-thin mt-10 text-gray-300">
            Lorem ipsum dolor sit amet,
          </div>
        </div>
      </div>
    </section>

    <!-- 슬라이드 배너 -->
    <section class="slide_wrap overflow-hidden w-screen flex">
      <div class="slide_list flex">
        <ul v-for="(img, i) in slide" :key="i" class="m-2 w-[300px]">
          <img
            :alt="'slide-image-' + (i + 1)"
            :src="slideImage(img)"
            class="shadow-custom-lg"
          />
        </ul>
      </div>
    </section>

    <!-- 푸터 -->
    <footer class="p-20 bg-neutral-900 mt-24">
      <img
        alt="enmedia-logo"
        src="./assets/logo-white.png"
        class="mb-5 w-[200px]"
      />
      <span class="text-white font-thin">
        Copyrights 2024.테스트 ALL Rights Reserved
      </span>
    </footer>
  </div>
</template>

<script>
import "./assets/style.css";
export default {
  name: "App",
  components: {},
  data() {
    return {
      menu: ["HOME", "ABOUT", "CONTACT"],
      modalname: "",
      section: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
      slide: [
        "slide1.png",
        "slide2.png",
        "slide3.png",
        "slide4.png",
        "slide5.png",
        "slide6.png",
        "slide7.png",
      ],
      modalCheck: false,
    };
  },
  methods: {
    // 이미지 bind
    slideImage(img) {
      return require(`@/assets/${img}`);
    },
    // 이미지 슬라이드를 위해 자식 옆에 복제본 생성
    rollban() {
      let roller = document.querySelector(".slide_list");
      roller.id = "roller1";

      let clone = roller.cloneNode(true);
      clone.id = "roller2";
      document.querySelector(".slide_wrap").appendChild(clone);

      document.querySelector("#roller1").style.left =
        "0px"; // roller1의 위치를 0으로 설정
        // ul의 길이를 구해서 roller2의 위치를 정함
      document.querySelector("#roller2").style.left =
        document.querySelector(".slide_list > ul").offsetWidth + "px";
    },
    modalconsole(i) {
      // 브라우저 콘솔에 찍힘
      if (i == 0) {
        console.log("Homelick");
      } else if (i == 1) {
        console.log("AboutClick");
      } else {
        console.log("ContactClick");
      }
    },
  },
  mounted() {
    this.rollban(); // 페이지 로드 후 슬라이더 초기화
  },
};
</script>

<style>
/* 슬라이드 애니메이션 로직 */
#roller1 {
  animation: rollingleft1 50s linear infinite;
}
#roller2 {
  animation: rollingleft2 50s linear infinite;
}

@keyframes rollingleft1 {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-100%);
  }
  50.01% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes rollingleft2 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200%);
  }
}

/* 태블릿 */
@media (max-width: 810px) {
  .custom-width {
    width: 290px;
  }
}

@media (min-width: 810px) {
  .custom-width2 {
    width: 362px;
  }
}

/* 모바일 */
@media (max-width: 375px) {
  .mobile-hide {
    display: none;
  }
}

@media (max-width: 375px){
  .main-text{
    text-align: center;
    font-size: 4rem;
  }
}
</style>
