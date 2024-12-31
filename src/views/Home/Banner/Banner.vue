<template>
  <div>
    <div class="banner-container">
      <div 
        class="banner-slide" 
        v-for="(slide, index) in slides" 
        :key="index"
        :class="{
          active: currentSlide === index,
          'slide-enter': currentSlide === (index + 1) % slides.length,
          'slide-leave': currentSlide === (index - 1 + slides.length) % slides.length
        }"
      >
        <div class="banner-slide-content">
          <h6>{{ slide.title }}</h6>
          <h1>
            {{ slide.mainTitle }} 
            <span>{{ slide.subTitle }}</span>
          </h1>
          <h2>{{ slide.secondaryTitle }}</h2>
          <p>{{ slide.description }}</p>
          <div class="banner-slide-button">
            <a href="/contact" class="banner-slide-btn left">Liên hệ tư vấn</a>
            <a href="/training/software-development" class="banner-slide-btn right">Khám phá sản phẩm</a>
          </div>
        </div>
        <div class="banner-img">
          <img :src="slide.image" :alt="`Banner Image ${index + 1}`" />
        </div>
      </div>
      <div class="banner-navigation">
        <span class="banner-prev-btn" @click="prevSlide">
          <font-awesome-icon :icon="['fas', 'angle-left']" class="icon" />
        </span>
        <span class="banner-next-btn" @click="nextSlide">
          <font-awesome-icon :icon="['fas', 'angle-right']" class="icon" />
        </span>
      </div>
    </div>
  </div>
</template>


<script>
import imageStd1 from "@/assets/public/Home/Banner/student.png";
import imageStd2 from "@/assets/public/Home/Banner/student-1.png";
import imageStd3 from "@/assets/public/Home/Banner/student-2.png";
import imageStd4 from "@/assets/public/Home/Banner/student-3.png";

import "./Banner.css";

export default {
  name: "Banner",
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          title: "pitech lab",
          mainTitle: "Khám Phá Machi",
          subTitle: "AI", 
          secondaryTitle: "Đổi mới và sáng tạo", 
          description: "Khám phá tiềm năng của AI để tối ưu hóa quy trình kinh doanh và cải thiện dịch vụ khách hàng.",
          image: imageStd1
        },
        {
          title: "pitech lab",
          mainTitle: "Giải Pháp",
          subTitle: "Thông Minh",
          secondaryTitle: "Khách hàng là trung tâm",
          description: "Hãy cùng chúng tôi áp dụng AI để đưa ra những quyết định thông minh hơn trong kinh doanh.",
          image: imageStd2
        },
        {
          title: "pitech lab",
          mainTitle: "Nâng Cao",
          subTitle: "Trải Nghiệm",
          secondaryTitle: "Giải pháp toàn diện",
          description: "Sử dụng AI để cá nhân hóa trải nghiệm khách hàng và tối ưu hóa mọi quy trình.",
          image: imageStd3
        },
        {
          title: "pitech lab",
          mainTitle: "Đổi mới với",
          subTitle: "AI",
          secondaryTitle: "Sự chuyển mình mạnh mẽ",
          description: "Tham gia vào cuộc cách mạng công nghệ với giải pháp AI độc đáo và sáng tạo.",
          image: imageStd4
        }
      ]
    };
  },
methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    }
  }
};
</script>
