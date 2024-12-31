<template>
  <div>
    <div class="product-container">
      <Face />
    </div>
  </div>
</template>
  
  <script>
import Face from "./Ai/Face/Face.vue";

export default {
  name: "Product",
  components: {
    Face,
  }
};
</script>
  