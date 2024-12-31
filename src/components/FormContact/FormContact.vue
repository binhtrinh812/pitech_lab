<template>
  <div>
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
import "./FormContact.css";

export default {
  name: "FormContact",
  data() {
    return {};
  }
};
</script>