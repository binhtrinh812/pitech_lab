<template>
  <div>
    <div class="coreValues-container">
      <div class="coreValues-title">#pitech_lab</div>
      <div class="coreValues-item">
        <div class="coreValues-img">
          <div class="img-1">
            <img :src="imageCv1" alt />
          </div>
          <div class="img-2">
            <img :src="imageCv2" alt />
          </div>
        </div>
        <div class="coreValues-text">
          <h6>#pitech_lab</h6>
          <h2>"Giá trị cốt lõi"</h2>
          <p>
            Mọi hành động của Pitech Lab đều xuất phát
            từ trái tim hướng tới khách hàng. Bằng khát
            khao và đam mê sáng tạo không ngừng nghỉ,
            Pitech Lab quyết tâm “nhanh nhất có thể,
            nhanh như ánh sáng” trong cả tư duy
            và hành động để truyền cảm hứng
            và thực hiện tốt những cam kết của mình.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imageCv1 from "@/assets/public/About/CoreValues/core-values-1.png";
import imageCv2 from "@/assets/public/About/CoreValues/core-values-2.png";
import "./CoreValues.css";

export default {
  name: "CoreValues",
  data() {
    return {
      imageCv1,
      imageCv2
    };
  }
};
</script>