<template>
  <section class="sidebar-container" id="sidebar" :class="{ collapsed }">
    <div class="sidebar-header" :class="{ collapsed }">
      <div class="sidebar-logo" v-if="!collapsed">
        <router-link to="/">
          <span>pitech lab</span>
        </router-link>
      </div>
      <div class="side-menu-btn" @click="toggleSidebar">
        <font-awesome-icon :icon="['fas', 'bars']" class="icon" />
      </div>
    </div>
    <div class="nav">
      <ul class="side-menu">
        <li v-for="(item, index) in menuItems" :key="index" :class="{ active: item.active }">
          <router-link :to="item.link" @click.prevent="toggleSubMenu(index)">
            <div class="icon-sidebar">
              <font-awesome-icon :icon="item.icon" class="icon" />
            </div>
            <span class="side-text">{{ item.text }}</span>
            <div v-if="item.subMenu" class="icon-down" :class="{ active: item.active }">
              <font-awesome-icon :icon="['fas', 'caret-down']" class="icon" />
            </div>
          </router-link>
          <ul v-if="item.subMenu && item.active" class="side-sub-menu">
            <li
              v-for="(subItem, subIndex) in item.subMenu"
              :key="subIndex"
              :class="{ active: subItem.active }"
            >
              <router-link :to="subItem.link" @click.prevent="toggleSubMenu2(index, subIndex)">
                <span class="side-text">{{ subItem.text }}</span>
                <div
                  v-if="subItem.subMenu2"
                  class="icon-down-2"
                  :class="{ 'rotate-icon': subItem.active }"
                >
                  <font-awesome-icon :icon="['fas', 'caret-down']" class="icon" />
                </div>
              </router-link>
              <ul v-if="subItem.subMenu2 && subItem.active" class="side-sub-menu-2">
                <li
                  v-for="(sub2Item, sub2Index) in subItem.subMenu2"
                  :key="sub2Index"
                  :class="{ active: sub2Item.active }"
                >
                  <router-link :to="sub2Item.link">
                    <span class="side-text">{{ sub2Item.text }}</span>
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <ul class="side-menu">
      <li :class="{ active: isContactActive }">
        <router-link to="/contact" @click="setActiveContact">
          <div class="icon-sidebar">
            <font-awesome-icon :icon="['fas', 'headset']" class="icon" />
          </div>
          <span class="side-text">Liên hệ</span>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import "./SideBar.css";

export default {
  name: "SideBar",
  data() {
    return {
      collapsed: false,
      isContactActive: false,
      menuItems: [
        {
          text: "Trang Chủ",
          link: "/",
          icon: ["fas", "house"],
          active: false
        },
        {
          text: "Về chúng tôi",
          link: "/about",
          icon:["fas", "synagogue"],
          active: false
        },
        {
          text: "Các gói đào tạo",
          link: "#",
          icon: ["fas", "file-lines"],
          active: false,
          subMenu: [
            {
              text: "Phát triển phần mềm",
              link: "/training/software-development",
              active: false
            },
            {
              text: "Khoa học dữ liệu",
              link: "/training/data-science",
              active: false
            },
            { text: "AI", link: "/training/ai", active: false }
          ]
        },
        {
          text: "Sản phẩm",
          link: "#",
          icon: ["fas", "box"],
          active: false,
          subMenu: [
            { text: "Web doc theo chuyên đề", link: "#", active: false },
            {
              text: "Chuyển đổi số cho trường học phổ thông",
              link: "#",
              active: false
            },
            {
              text: "Công nghệ AI",
              link: "#",
              active: false,
              subMenu2: [
                {
                  text: "Mô hình ngôn ngữ lớn",
                  link: "/product/large-language-model",
                  active: false
                },
                { text: "Dịch vụ nhận dạng văn bản", link: "#", active: false },
                {
                  text: "Điểm danh bằng khuôn mặt",
                  link: "/product/ai/face-recognition",
                  active: false
                },
                { text: "Nhận dạng biển số xe", link: "#", active: false },
                {
                  text: "Nhận dạng ảnh và xác nhận chữ ký",
                  link: "#",
                  active: false
                }
              ]
            }
          ]
        },
        {
          text: "Đội ngũ",
          link: "/team",
          icon: ["fas", "people-group"],
          active: false
        },
        {
          text: "Tin tức",
          link: "/blog",
          icon: ["fas", "square-pen"],
          active: false
        }
      ]
    };
  },
  methods: {
    toggleSidebar() {
      this.collapsed = !this.collapsed;
    },
    toggleSubMenu(index) {
      this.menuItems.forEach((item, i) => {
        if (item.subMenu) {
          item.active = i === index ? !item.active : false;
          if (!item.active) {
            item.subMenu.forEach(subItem => {
              subItem.active = false;
              if (subItem.text === "Công nghệ AI") {
                subItem.subMenu2.forEach(sub2Item => {
                  sub2Item.active = false;
                });
              }
            });
          }
        } else {
          item.active = false;
        }
      });
    },
    toggleSubMenu2(index, subIndex) {
      const subMenuItem = this.menuItems[index].subMenu[subIndex];
      subMenuItem.active = !subMenuItem.active;
      this.menuItems[index].subMenu.forEach((item, j) => {
        if (j !== subIndex) {
          item.active = false;
          if (item.subMenu2) {
            item.subMenu2.forEach(sub2Item => {
              sub2Item.active = false;
            });
          }
        }
      });

      if (subMenuItem.subMenu2) {
        subMenuItem.subMenu2.forEach(sub2Item => {
          sub2Item.active = false;
        });
      }
    },
    setActiveContact() {
      this.isContactActive = true;
      this.menuItems.forEach(item => {
        item.active = false;
      });
    }
  }
};
</script>
