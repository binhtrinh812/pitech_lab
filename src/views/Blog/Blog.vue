<template>
  <div>
    <div class="blog-container">
      <div class="blog-top">
        <div class="blog-top-img">
          <img :src="imageBlt" alt="Blog Top Image" />
        </div>
        <div class="blog-top-text">
          <h6>Technology</h6>
          <h1>Các khóa học của phòng Pitech Lab</h1>
          <p>
            Các khóa học bao gồm nhiều ngôn ngữ và những
            tính ứng dụng cao: VueJs, C#, Nghiên cứu phần
            mềm, ...
          </p>
          <h5>01 October 2024</h5>
        </div>
      </div>
      <div class="blog-list">
        <h1 class="blog-list-title">Pitech Lab</h1>
        <div class="home-blog">
          <div v-for="(blog, index) in blogs" :key="index" class="blog-home-item">
            <img :src="blog.image" alt class="blog-home-img" />
            <div class="blog-home-text">
              <span>
                <font-awesome-icon :icon="['fas', 'calendar-check']" class="icon" />
                {{ blog.date }}
              </span>
              <h5>{{ blog.title }}</h5>
              <router-link :to="`/blog/${index}`">Xem thêm</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./Blog.css";
import imageBlt from "@/assets/public/Blog/blog-top.png";
import imageBl1 from "@/assets/public/Home/Blog/blog-1.jpg";

export default {
  name: "Blog",
  data() {
    return {
      imageBlt,
      blogs: [
        {
          image: imageBl1,
          date: "22 September 2024",
          title: "Đào tạo công nghệ thông tin",
        },
        {
          image: imageBl1,
          date: "22 September 2024",
          title: "Đào tạo công nghệ thông tin",
        },        {
          image: imageBl1,
          date: "22 September 2024",
          title: "Đào tạo công nghệ thông tin",
        },        {
          image: imageBl1,
          date: "22 September 2024",
          title: "Đào tạo công nghệ thông tin",
        },        {
          image: imageBl1,
          date: "22 September 2024",
          title: "Đào tạo công nghệ thông tin",
        },        {
          image: imageBl1,
          date: "22 September 2024",
          title: "Đào tạo công nghệ thông tin",
        },        {
          image: imageBl1,
          date: "22 September 2024",
          title: "Đào tạo công nghệ thông tin",
        },        {
          image: imageBl1,
          date: "22 September 2024",
          title: "Đào tạo công nghệ thông tin",
        },        {
          image: imageBl1,
          date: "22 September 2024",
          title: "Đào tạo công nghệ thông tin",
        },
      ]
    };
  }
};
</script>
