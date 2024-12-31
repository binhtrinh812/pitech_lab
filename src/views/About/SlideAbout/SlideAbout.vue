<template>
  <div>
    <div class="slideAbout-container">
      <div class="slideAbout-list-item">
        <div class="slideAbout-item">
          <div class="slideAbout-img">
            <img :src="imageSda1" alt="camket" />
          </div>
          <p>Sáng tạo<br>(Creativity)</p>
        </div>
        <div class="slideAbout-item">
          <div class="slideAbout-img">
            <img :src="imageSda2" alt="camket" />
          </div>
          <p>Tốc độ<br>(C-speed)</p>
        </div>
        <div class="slideAbout-item">
          <div class="slideAbout-img">
            <img :src="imageSda3" alt="camket" />
          </div>
          <p>Cam kết<br>(Commitment)</p>
        </div>
        <div class="slideAbout-item">
          <div class="slideAbout-img">
            <img :src="imageSda4" alt="camket" />
          </div>
          <p>Hướng khách hàng<br>(Customer Centricity)</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import imageSda1 from "@/assets/public/About/SlideAbout/camket.png";
import imageSda2 from "@/assets/public/About/SlideAbout/cre.png";
import imageSda3 from "@/assets/public/About/SlideAbout/hd.png";
import imageSda4 from "@/assets/public/About/SlideAbout/speed.png";

import "./SlideAbout.css";

export default {
  name: "SlideAbout",
  data() {
    return {
      imageSda1,
      imageSda2,
      imageSda3,
      imageSda4
    };
  }
};
</script>