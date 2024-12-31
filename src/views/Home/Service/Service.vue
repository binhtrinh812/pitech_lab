<template>
  <div>
    <div class="service-container">
      <h1 class="service-title">Sản phẩm và giải pháp</h1>
      <div class="service-home">
        <div class="service-item" v-for="(service, index) in services" :key="index">
          <div class="service-img">
            <img :src="service.image" />
          </div>
          <h2>{{ service.title }}</h2>
          <p>{{ service.description }}</p>
          <a :href="service.link">Xem thêm</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imageService1 from "@/assets/public/Home/Service/c.png";
import imageBanner from "@/assets/public/Home/Service/banner-01.png";

import "./Service.css";

export default {
  name: "Service",
  data() {
    return {
      imageBanner,
      services: [
        {
          image: imageService1,
          title: "Lập trình Web Backend với .NET",
          description: "Làm chủ ASP.NET Core, xây dựng ứng dụng web an toàn, nhanh chóng!",
          link: "/training/software-development"
        },
        {
          image: imageService1,
          title: "Khóa học lập trình C#",
          description: "Please add your content here. Keep it short and simple. And smile",
          link: "/training/software-development"
        },
        {
          image: imageService1,
          title: "Khóa học lập trình C#",
          description: "Please add your content here. Keep it short and simple. And smile",
          link: "/training/software-development"
        },
        {
          image: imageService1,
          title: "Khóa học lập trình C#",
          description: "Please add your content here. Keep it short and simple. And smile",
          link: "/training/software-development"
        },
        {
          image: imageService1,
          title: "Khóa học lập trình C#",
          description: "Please add your content here. Keep it short and simple. And smile",
          link: "/training/software-development"
        },
                {
          image: imageService1,
          title: "Khóa học lập trình C#",
          description: "Please add your content here. Keep it short and simple. And smile",
          link: "/training/software-development"
        },
      ]
    };
  }
};
</script>