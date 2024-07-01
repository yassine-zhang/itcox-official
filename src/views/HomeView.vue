<template>
  <div class="common-layout">
    <el-container>
      <el-header
        class="header fixed z-50 top-0 inset-x-0 bg-white flex justify-between items-center overflow-hidden lg:px-20 xl:px-28"
      >
        <el-menu
          :default-active="activeHeaderMenuIndex"
          class="el-menu-demo w-full"
          style="border: 0px; padding: 0px"
          mode="horizontal"
          :ellipsis="false"
          @select="headerMenuSelect"
        >
          <el-menu-item style="background-color: transparent; padding: 0px" index="0">
            <a target="_self" href="/"><img src="@/assets/logo.jpg" alt="logo" width="128px" /></a>
          </el-menu-item>
          <div class="flex-grow" />
          <el-menu-item index="1"
            ><a target="_blank" href="https://github.com/yassine-zhang/itcox-official"
              >Github</a
            ></el-menu-item
          >
          <el-sub-menu index="2">
            <template #title>产品</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-header>

      <el-alert class="lg:px-20 xl:px-28 mt-[60px]" center type="error">
        <template #default>
          <div class="flex gap-1 items-center">
            <Icon icon="unjs:ohash" width="18px" height="18px" />
            <span>网站建设中，敬请期待~</span>
          </div>
        </template>
      </el-alert>

      <el-container class="lg:px-20 xl:px-28 mt-6 items-start">
        <el-main class="bg-white p-0">
          <el-carousel height="460px">
            <el-carousel-item v-for="d in carouselData" :key="d">
              <img class="object-cover w-full h-full" :src="d.url" :alt="d.title" />
              <h3 class="absolute font-bold text-lg text-white bottom-14 left-9">{{ d.title }}</h3>
            </el-carousel-item>
          </el-carousel>
        </el-main>

        <el-aside class="bg-white ml-4 p-3">
          <div class="flex gap-1 items-center">
            <Icon icon="unjs:db0" width="22px" height="22px" />
            <span class="font-bold text-lg">网站公告</span>
          </div>
          <el-divider class="my-2" border-style="double" />
          <div class="text-sm">
            <p class="leading-6 indent-8">
              <span class="font-bold">济宁市若森软件开发中心</span>
              致力于为更多有<span class="bg-yellow-200">Web网站开发需求的人</span
              >提供帮助，我们提供网站从零开发， 到网站上线运营，再到网站维护升级等一站式服务。
              <Icon :inline="true" icon="unjs:destr" />
              <Icon :inline="true" icon="unjs:destr" />
              <Icon :inline="true" icon="unjs:destr" />
            </p>
            <p class="mt-4 leading-6 indent-8">
              我们的服务理念是<span class="text-red-600">“客户至上，诚信为本”</span
              >，我们将不断努力，为用户提供最优质的服务。
            </p>
          </div>
          <el-divider class="my-2" border-style="dotted" />
          <div class="text-sm">
            <n-image src="/license/dzyyzz.jpg" class="w-full cursor-zoom-in" />
            <div class="flex gap-1 items-center pl-3">
              <Icon icon="unjs:ufo" />
              <p>
                ICP备案号:
                <a class="underline text-blue-600" target="_blank" href="https://beian.miit.gov.cn/"
                  >鲁ICP备2024099705号-1</a
                >
              </p>
            </div>
          </div>
        </el-aside>
      </el-container>

      <el-footer
        class="footer h-12 bg-[#393939] text-gray-200 text-sm flex items-center justify-center"
        >Copyright © 2024 济宁市若森软件开发中心 All Rights Reserved</el-footer
      >
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'

const activeHeaderMenuIndex = ref('0')
const headerMenuSelect = (i: number, path: string) => {
  console.log(i, path)
}

const carouselData = ref([
  {
    title: 'Wallpaper - 1',
    url: '/wallpaper/1.jpg'
  },
  {
    title: 'Wallpaper - 2',
    url: '/wallpaper/2.jpg'
  },
  {
    title: 'Wallpaper - 3',
    url: '/wallpaper/3.jpg'
  },
  {
    title: 'Wallpaper - 4',
    url: '/wallpaper/4.jpg'
  }
])

onMounted(() => {
  const root = document.documentElement

  // 通过屏幕高度减去body元素高度，获取剩余
  const bodyHeight = document.body.clientHeight
  const screenHeight = window.innerHeight
  const remainingHeight = Math.max(screenHeight - bodyHeight + 56, 24)

  // 设置变量的值为外边距
  root.style.setProperty('--itcox-footer-margin', remainingHeight + 'px')
})
</script>
<style scoped>
.header {
  box-shadow: 0 2px 16px rgba(54, 56, 79, 0.06);
}

.footer {
  margin-top: var(--itcox-footer-margin);
}

.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
