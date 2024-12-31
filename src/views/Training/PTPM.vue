<template>
  <div>
    <div class="pttm-container">
      <Introduce />
      <CourseMore />
      <FormContact />
    </div>
  </div>
</template>

<script>
import Introduce from "./Introduce/Introduce.vue";
import CourseMore from "./CourseMore/CourseMore.vue";
import FormContact from "../../components/FormContact/FormContact.vue";

export default {
  name: "PTTM",
  components: {
    Introduce,
    CourseMore,
    FormContact,
  }
};
</script>