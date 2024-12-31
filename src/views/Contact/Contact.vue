<template>
  <div>
    <div class="contact-container">
      <FormContact />
      <div class="contact">
        <div class="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.630344341038!2d105.79641837486315!3d21.04747188060659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab24ade2c475%3A0x96ffd9fd50dfb1d1!2zMjUgTmcuIDI0IMSQLiBIb8OgbmcgUXXhu5FjIFZp4buHdCwgTmdoxKlhIMSQw7QsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1729838562595!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="contact-text">
          <h1>Thông tin liên hệ</h1>
          <p>
            Địa chỉ:
            <span>
              Pitech lab 24 Hoàng Quốc Việt, nhà số 25 (Tòa nhà RECON), phòng 502.
              <br />Trung tâm đào tạo lập trình viên và kỹ sư AI thực chiến đỉnh cao.
            </span>
          </p>
          <p>
            Email:
            <span>imt.pitech@gmail.com</span>
          </p>
          <p>
            Điện thoại:
            <span>0904140022</span>
          </p>
          <img :src="imageCt1" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./Contact.css";
import FormContact from "../../components/FormContact/FormContact.vue";

import imageCt1 from "@/assets/public/Contact/image.png";

export default {
  name: "Contact",
  components: {
    FormContact
  },
  data() {
    return {
      imageCt1
    };
  }
};
</script>
