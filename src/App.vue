<template>
  <div id="app">
    <SideBar :class="{ collapsed }" :toggleSidebar="toggleSidebar" />
    <div :class="{ 'app-container': true, collapsed }">
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SideBar from './components/SideBar/SideBar.vue';
import Footer from './components/Footer.vue';

const collapsed = ref(false);

const toggleSidebar = () => {
  collapsed.value = !collapsed.value;
};
</script>

<style scoped>
.app-container {
    position: absolute;
    width: calc(100% - 290px);
    left: 290px;
    min-height: 100vh;
    transition: 0.3s;
    overflow: hidden;
}

.sidebar-container.collapsed ~ .app-container {
    width: calc(100% - 100px);
    left: 100px;
}
</style>
