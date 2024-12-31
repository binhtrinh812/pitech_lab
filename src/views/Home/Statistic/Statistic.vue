<template>
  <div>
    <div class="statistic-container">
      <div class="statistic-content">
        <div v-for="(item, index) in statistics" :key="index" class="statistic-items">
          <h1>{{ item.count }}</h1>
          <div class="statistic-text">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./Statistic.css"
export default {
  name: "Statistics",
  data() {
    return {
      statistics: [
        {
          count: "10+",
          title: "Chuyên gia và kỹ sư",
          description: "10 chuyên gia và kỹ sư trong lĩnh vực Công nghệ thông tin.",
        },
        {
          count: "10+",
          title: "Hình thành và phát triển",
          description: "Thời gian hình thành và phát triển với các dấu mốc.",
        },
        {
          count: "10+",
          title: "Dự án công nghệ hoàn thiện",
          description: "Với các dự án công nghệ hiện đại đã được hoàn thiện cũng như phát triển.",
        },
      ],
    };
  },
};
</script>