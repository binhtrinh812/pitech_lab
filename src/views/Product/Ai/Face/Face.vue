<template>
  <div class="face-container">
    <div class="introduce-container">
      <div class="introduce-text">
        <div class="introduce-tag">Pitech Lab</div>
        <div class="introduce-title">
          Hệ thống quản lý nhân sự tích hợp chấm bằng
          <br />
          <span>Nhận dạng khuôn mặt</span>
        </div>
        <div
          class="introduce-content"
        >Giải pháp chấm công toàn diện, không cần thẻ, không cần chạm mùa Covid?</div>
        <a href class="introduce-button">Liên hệ tư vấn</a>
      </div>
      <div class="introduce-img">
        <img :src="imageBn1" alt="Trung tâm quản lý" class="face-img" />
      </div>
    </div>
    <div>
      <div class="interest-container">
        <div class="interest-top">
          <div class="interest-img">
            <img :src="imageBn2" alt="Banner 2" />
          </div>
          <div class="interest-content">
            <h1>Giá trị mang lại</h1>
            <p>Sau khi hoàn thành khóa học, các bạn sẽ có khả năng:</p>
            <div class="interest-list-item">
              <div class="interest-item">
                <font-awesome-icon :icon="['fas', 'square-check']" class="icon" />
                <span>Thành Thạo Khái Niệm Cơ Bản C# và .NET</span>
              </div>
              <div class="interest-item">
                <font-awesome-icon :icon="['fas', 'square-check']" class="icon" />
                <span>Thành Thạo Khái Niệm Cơ Bản C# và .NET</span>
              </div>
              <div class="interest-item">
                <font-awesome-icon :icon="['fas', 'square-check']" class="icon" />
                <span>Thành Thạo Khái Niệm Cơ Bản C# và .NET</span>
              </div>
            </div>
          </div>
        </div>
        <div class="interest-bottom">
          <div class="interest-content">
            <div class="interest-list-item">
              <div class="interest-item">
                <font-awesome-icon :icon="['fas', 'square-check']" class="icon" />
                <span>Thành Thạo Khái Niệm Cơ Bản C# và .NET</span>
              </div>
              <div class="interest-item">
                <font-awesome-icon :icon="['fas', 'square-check']" class="icon" />
                <span>Thành Thạo Khái Niệm Cơ Bản C# và .NET</span>
              </div>
              <div class="interest-item">
                <font-awesome-icon :icon="['fas', 'square-check']" class="icon" />
                <span>Thành Thạo Khái Niệm Cơ Bản C# và .NET</span>
              </div>
            </div>
          </div>
          <div class="interest-img">
            <img :src="imageBn3" alt="Banner 3" />
          </div>
        </div>
      </div>
    </div>
    <div class="form-contact-container">
      <div class="form-contact">
        <h2>Liên hệ ngay</h2>
        <form action="#">
          <div class="form-contact-row">
            <div class="form-contact-group">
              <label for="ho">HỌ *</label>
              <input type="text" id="ho" name="ho" required />
            </div>
            <div class="form-contact-group">
              <label for="ten">TÊN *</label>
              <input type="text" id="ten" name="ten" required />
            </div>
          </div>
          <div class="form-contact-row">
            <div class="form-contact-group">
              <label for="email">EMAIL *</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="form-contact-group">
              <label for="phone">SỐ ĐIỆN THOẠI *</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
          </div>
          <div class="form-contact-group">
            <label for="message">LỜI NHẮN *</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <div class="form-contact-group">
            <button type="submit">GỬI THÔNG TIN</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
  <script>
import imageBn2 from "@/assets/public/Training/banner-2.png";
import imageBn3 from "@/assets/public/Training/banner-3.png";
import imageIc1 from "@/assets/public/Training/icon1.png";
import imageIc2 from "@/assets/public/Training/icon2.png";
import imageBn1 from "@/assets/public/Training/1.png";
import "./Face.css";
export default {
  name: "Face",
  data() {
    return {
      imageBn1,
      imageBn2,
      imageBn3,
      imageIc1,
      imageIc2
    };
  }
};
</script>
  