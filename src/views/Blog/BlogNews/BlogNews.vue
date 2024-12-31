<template>
  <div>
    <div class="blog-news-container">
      <div class="blog-background"></div>
      <div class="blog-news-head">
        <div class="blog-news-tag">Technology</div>
        <div class="blog-news-title">Pitech Lab: Đơn Vị Tiên Phong Trong Đào Tạo và Phát Triển Sản Phẩm Công Nghệ Thông Tin</div>
        <div class="blog-news-time">01 October 2024</div>
      </div>
      <div class="blog-news-content">
        <div class="blog-news-img">
          <img :src="imageBd1" alt />
        </div>
        <div
          class="blog-news-description">Pitech Lab là đơn vị hàng đầu trong đào tạo và phát triển sản phẩm CNTT, với phương châm "Tiên phong công nghệ, dẫn đầu sáng tạo," cung cấp kiến thức chuyên sâu và phát triển kỹ năng toàn diện cho học viên.</div>
        <div class="blog-news-text">
          <h6>Đào Tạo Chuyên Sâu Về Công Nghệ Thông Tin</h6>
          <p>Pitech Lab tự hào sở hữu đội ngũ giảng viên giàu kinh nghiệm, là những chuyên gia hàng đầu trong ngành công nghệ. Các khóa học của trung tâm bao gồm nhiều lĩnh vực hot như lập trình phần mềm, trí tuệ nhân tạo (AI), phân tích dữ liệu (Data Science), và phát triển ứng dụng web. Học viên khi tham gia vào các khóa học tại Pitech Lab không chỉ được tiếp cận với lý thuyết mà còn được thực hành trực tiếp thông qua các dự án thực tế.</p>
        </div>
        <div class="blog-news-img">
          <img :src="imageBd2" alt />
        </div>
        <div class="blog-news-text">
          <h6>Phát Triển Sản Phẩm Công Nghệ Thực Tế</h6>
          <p>Không chỉ dừng lại ở việc đào tạo, Pitech Lab còn là nơi phát triển các sản phẩm công nghệ tiên tiến. Trung tâm đã triển khai thành công nhiều dự án, từ các hệ thống quản lý thông minh đến các sản phẩm ứng dụng trí tuệ nhân tạo. Một trong những thành công tiêu biểu là các sản phẩm sử dụng AI để nhận diện khuôn mặt và phân tích hình ảnh, giúp nâng cao khả năng bảo mật và quản lý tại các tổ chức, doanh nghiệp.</p>
        </div>
      </div>
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
          <a :href="blog.link">Xem thêm</a>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
</template>
  
<script>
import imageBl1 from "@/assets/public/Home/Blog/blog-1.jpg";
import "./BlogNews.css";

import imageBd1 from "@/assets/public/Blog/BlogNews/blogdetail-1.png";
import imageBd2 from "@/assets/public/Blog/BlogNews/blogdetail-2.png";

export default {
  name: "BlogNews",
  data() {
    return {
      imageBd1,
      imageBd2,
      blogs: [
        {
          image: imageBl1,
          date: "22 September 2024",
          title: "Đào tạo công nghệ thông tin",
          link: "#"
        },
        {
          image: imageBl1,
          date: "22 September 2024",
          title: "Đào tạo công nghệ thông tin",
          link: "#"
        },
        {
          image: imageBl1,
          date: "22 September 2024",
          title: "Đào tạo công nghệ thông tin",
          link: "#"
        }
      ]
    };
  }
};
</script>
