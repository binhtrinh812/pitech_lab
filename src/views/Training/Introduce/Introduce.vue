<template>
  <div>
    <div class="introduce-container">
      <div class="introduce-text">
        <div class="introduce-tag">Pitech Lab</div>
        <div class="introduce-title">
          Lập trình Web Backend với .NET
          <br />
          <span>(UNIT0002)</span>
        </div>
        <div
          class="introduce-content"
        >Khóa học nâng cao kỹ năng lập trình web backend và kiến thức chuyên sâu về .NET – công nghệ hàng đầu trong phát triển ứng dụng web!</div>
        <a href="/contact" class="introduce-button">Liên hệ tư vấn</a>
      </div>
      <div class="introduce-img">
        <img :src="imageBn1" alt="Trung tâm quản lý" />
      </div>
    </div>
    <div class="introduce-course">
      <div class="introduce-course-list">
        <div class="introduce-course-item">
          <h6>Tổng quan về khóa học</h6>
          <ul>
            <li>Tên khóa học: Lập trình Web Backend với .NET</li>
            <li>Thời lượng: 24 buổi (2h30p/buổi)</li>
            <li>Mã khóa học: UNIT0002</li>
            <li>Đối tượng: Sinh viên CNTT, ngành gần và người muốn phát triển kỹ năng Web</li>
          </ul>
        </div>
        <div class="introduce-course-item">
          <h6>Điểm nổi bật của khóa học</h6>
          <ul>
            <li>Được đào tạo bởi giảng viên có kinh nghiệm thực tế</li>
            <li>Học từ cơ bản đến nâng cao về backend</li>
            <li>Thực hành qua dự án thực tế</li>
            <li>Có bài kiểm tra định kỳ đánh giá năng lực</li>
            <li>Được cấp chứng chỉ sau khi hoàn thành khóa học</li>
          </ul>
        </div>
        <div class="introduce-course-item">
          <h6>Lợi ích khi tham gia</h6>
          <ul>
            <li>Nắm vững kiến thức nền tảng về lập trình web backend</li>
            <li>Thành thạo công nghệ .NET Core hiện đại</li>
            <li>Biết cách xây dựng Web API và tích hợp với frontend</li>
            <li>Có khả năng làm việc với cơ sở dữ liệu</li>
            <li>Hiểu và áp dụng được các giải pháp bảo mật</li>
          </ul>
        </div>
        <div class="introduce-course-item">
          <h6>Nội dung khóa học</h6>
          <div class="course-table">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Chủ đề</th>
                  <th>Miêu tả</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Tổng quan về lập trình web backend</td>
                  <td>Giới thiệu về lập trình backend và các công nghệ liên quan.</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Giao thức HTTP và Web API</td>
                  <td>Hiểu về HTTP, RESTful API và cách xây dựng Web API.</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Làm việc với cơ sở dữ liệu qua Entity Framework</td>
                  <td>Cách kết nối và thao tác với cơ sở dữ liệu sử dụng Entity Framework.</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Xử lý request/response và validation</td>
                  <td>Quản lý các request và response, xử lý dữ liệu đầu vào từ người dùng.</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Xác thực và phân quyền với JWT</td>
                  <td>Cách sử dụng JSON Web Tokens (JWT) để xác thực và phân quyền người dùng.</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Tích hợp frontend và triển khai website</td>
                  <td>Hướng dẫn tích hợp frontend và triển khai ứng dụng web lên server.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="introduce-course-item">
          <h6>Phương pháp đào tạo</h6>
          <ul>
            <li>Học lý thuyết kết hợp thực hành</li>
            <li>Làm dự án nhóm thực tế</li>
            <li>Kiểm tra đánh giá định kỳ</li>
            <li>Demo và bảo vệ dự án cuối khóa</li>
          </ul>
        </div>
        <div class="introduce-course-item">
          <h6>Yêu cầu đầu vào</h6>
          <ul>
            <li>Có kiến thức cơ bản về lập trình C#</li>
            <li>Hiểu biết về thiết kế web frontend là lợi thế</li>
            <li>Có laptop cá nhân để học tập</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imageBn1 from "@/assets/public/Training/banner-1.png";
import "./Introduce.css";

export default {
  name: "Introduce",
  data() {
    return {
      imageBn1
    };
  }
};
</script>