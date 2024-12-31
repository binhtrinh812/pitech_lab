<template>
  <div>
    <div class="courseMore-container">
      <h1 class="courseMore-title">Pitech Lab</h1>
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

import "./CourseMore.css";

export default {
  name: "CourseMore",
  data() {
    return {
      services: [
        {
          image: imageService1,
          title: "Khóa học lập trình C#",
          description:
            "Please add your content here. Keep it short and simple. And smile",
          link: "/training/software-development"
        },
        {
          image: imageService1,
          title: "Khóa học lập trình C#",
          description:
            "Please add your content here. Keep it short and simple. And smile",
          link: "/training/software-development"
        },
        {
          image: imageService1,
          title: "Khóa học lập trình C#",
          description:
            "Please add your content here. Keep it short and simple. And smile",
          link: "/training/software-development"
        },
      ]
    };
  }
};
</script>