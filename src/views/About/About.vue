<template>
  <div>
    <div class="about-container">
      <CoreValues />
      <SlideAbout />
      <AboutUs />
      <Times />
      <BlogHome />
    </div>
  </div>
</template>

<script>
import CoreValues from "./CoreValues/CoreValues.vue";
import SlideAbout from "./SlideAbout/SlideAbout.vue";
import AboutUs from "./AboutUs/AboutUs.vue";
import Times from "./Times/Times.vue";
import BlogHome from '../Home/BlogHome/BlogHome.vue';

export default {
  name: "About",
  components: {
    CoreValues,
    SlideAbout,
    AboutUs,
    Times,
    BlogHome,
  }
};
</script>
