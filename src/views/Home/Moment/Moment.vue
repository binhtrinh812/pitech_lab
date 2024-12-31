<template>
  <div>
    <div class="moment-container">
      <h1 class="moment-title">#pitech_lab</h1>
      <div class="moment-home">
        <div class="moment-flex">
          <div class="moment-img1">
            <img :src="imageMn1" alt="Moment Image" />
          </div>
          <div class="moment-img2">
            <img :src="imageMn2" alt="Moment Image" />
          </div>
        </div>
        <div class="moment-flex">
          <div class="moment-img3">
            <img :src="imageMn3" alt="Moment Image" />
          </div>
        </div>
        <div class="moment-flex">
          <div class="moment-img4">
            <img :src="imageMn4" alt="Moment Image" />
          </div>
          <div class="moment-img6">
            <img :src="imageMn6" alt="Moment Image" />
          </div>
        </div>
        <div class="moment-flex">
          <div class="moment-img5">
            <img :src="imageMn5" alt="Moment Image" />
          </div>
          <div class="moment-img7">
            <img :src="imageMn7" alt="Moment Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imageMn1 from "@/assets/public/Home/Moment/moment-1.png";
import imageMn2 from "@/assets/public/Home/Moment/moment-2.png";
import imageMn3 from "@/assets/public/Home/Moment/moment-3.png";
import imageMn4 from "@/assets/public/Home/Moment/moment-4.png";
import imageMn5 from "@/assets/public/Home/Moment/moment-5.png";
import imageMn6 from "@/assets/public/Home/Moment/moment-6.png";
import imageMn7 from "@/assets/public/Home/Moment/moment-7.png";

import "./Moment.css";

export default {
  name: "Moment",
  data() {
    return {
      imageMn1,
      imageMn2,
      imageMn3,
      imageMn4,
      imageMn5,
      imageMn6,
      imageMn7
    };
  }
};
</script>