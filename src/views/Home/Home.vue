<template>
  <div>
    <div class="home-container">
      <Banner />
      <AboutUsHome />
      <Statistic />
      <Service />
      <Moment />
      <BlogHome />
    </div>
  </div>
</template>

<script>
import Banner from './Banner/Banner.vue';
import AboutUsHome from './AboutUsHome/AboutUsHome.vue';
import Statistic from './Statistic/Statistic.vue';
import Service from './Service/Service.vue';
import Moment from './Moment/Moment.vue';
import BlogHome from './BlogHome/BlogHome.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    AboutUsHome,
    Statistic,
    Service,
    Moment,
    BlogHome,
  }
};
</script>