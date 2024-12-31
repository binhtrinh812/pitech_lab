<template>
  <div>
    <h1 class="blog-title">Tin tức</h1>
    <div class="home-blog">
      <div v-for="(blog, index) in blogs" :key="index" class="blog-home-item">
        <img :src="blog.image" alt="" class="blog-home-img">
        <div class="blog-home-text">
          <span>
            <font-awesome-icon :icon="['fas', 'calendar-check']" class="icon" />
             {{ blog.date }}
          </span>
          <h5>{{ blog.title }}</h5>
          <router-link :to="blog.link">Xem thêm</router-link>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import imageBl1 from "@/assets/public/Home/Blog/blog-1.jpg";

import "./BlogHome.css";

export default {
  name: "BlogHome",
  data() {
    return {
      blogs: [
        {
          image: imageBl1,
          date: "22 September 2024",
          title: "Đào tạo công nghệ thông tin",
          link: "/blog/1" // Đường dẫn tới bài viết chi tiết
        },
        {
          image: imageBl1,
          date: "22 September 2024",
          title: "Đào tạo công nghệ thông tin",
          link: "/blog/2"
        },
        {
          image: imageBl1,
          date: "22 September 2024",
          title: "Đào tạo công nghệ thông tin",
          link: "/blog/3"
        }
      ]
    };
  }
};
</script>