<template>
  <div>
    <div class="AboutUs-container">
      <div class="AboutUs-left">
        <div class="AboutUs-img">
          <img :src="imageCv3" alt="Core Values" class="AboutUs-image" />
        </div>
      </div>
      <div class="AboutUs-right">
        <div class="AboutUs-content">
          <h1>Giới thiệu về Pitech Lab</h1>
          <p>
            Viện nghiên cứu ứng dụng công nghệ Pitech Lab được thành lập từ năm 2014, là nơi nghiên cứu và tạo ra những giải pháp công nghệ đột phá theo xu thế phát triển toàn cầu. <br>
            Pitech Lab là một trong những đơn vị tiên phong nghiên cứu và ứng dụng các giải pháp công nghệ giúp giải quyết các bài toán chuyển đổi số, tạo ra các sản phẩm, dịch vụ phục vụ phát triển kinh tế số, xã hội số, công dân số. <br>
            Pitech Lab nghiên cứu ứng dụng những công nghệ mới nhất trong các lĩnh vực BigData, AI, Blockchain, IoT, Security… Tạo ra các sản phẩm hỗ trợ cho khách hàng là doanh nghiệp Việt Nam nâng cao năng lực cạnh tranh trong thời kỳ 4.0 hiện nay.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import imageCv3 from "@/assets/public/About/CoreValues/aboutus.png";
import "./AboutUs.css";

export default {
  name: "AboutUs",
  data() {
    return {
      imageCv3
    };
  }
};
</script>