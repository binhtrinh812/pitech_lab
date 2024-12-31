<template>
  <div>
    <div class="aboutUs-container">
      <div class="aboutUs-home">
        <div class="aboutUs-img">
          <div class="aboutUs-img-item">
            <div class="aboutUs-img-1">
              <img :src="imageAb3" />
            </div>
            <div class="aboutUs-img-2">
              <img :src="imageAb1" />
            </div>
          </div>
          <div class="aboutUs-img-item">
            <div class="aboutUs-img-3">
              <img :src="imageAb4" />
            </div>
            <div class="aboutUs-img-4">
              <img :src="imageAb2" />
            </div>
          </div>
        </div>
        <div class="aboutUs-content">
          <h6>Về chúng tôi</h6>
          <h1>Giải pháp phần mềm</h1>
          <p>
            Pitech Lab mang sứ mệnh đem đến những sản phẩm
            dịch vụ công nghệ mới, có hàm lượng khoa học, phù hợp
            với tư thế chuyển đổi số cách mạng công nghệ 4.0,
            giúp đẩy mạnh tiến độ phát triển, tạo ra bước tiến vượt bậc.
          </p>
          <a href="/about">Tìm hiểu thêm</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imageAb1 from "@/assets/public/Home/AboutUs/about-1.png";
import imageAb2 from "@/assets/public/Home/AboutUs/about-2.png";
import imageAb3 from "@/assets/public/Home/AboutUs/about-3.png";
import imageAb4 from "@/assets/public/Home/AboutUs/about-4.png";

import "./AboutUsHome.css";

export default {
  name: "AboutUsHome",
  data() {
    return {
      imageAb1,
      imageAb2,
      imageAb3,
      imageAb4
    };
  }
};
</script>
