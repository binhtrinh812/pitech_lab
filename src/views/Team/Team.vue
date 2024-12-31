<template>
  <div>
    <div class="about-container">
      <Member />
      <BlogHome />
    </div>
  </div>
</template>

<script>
import Member from "./Member/Member.vue";
import BlogHome from '../Home/BlogHome/BlogHome.vue';

export default {
  name: "Team",
  components: {
    Member,
    BlogHome,
  }
};
</script>
