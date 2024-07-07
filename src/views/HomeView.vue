<template>
  <div class="common-layout relative">
    <el-container class="bg-white">
      <el-header
        class="bg-white flex justify-between items-center overflow-hidden lg:px-20 xl:px-28"
      >
        <el-menu
          :default-active="activeHeaderMenuIndex"
          class="el-menu-demo w-full border-gray-200 border-0 gap-2 z-10"
          mode="horizontal"
          :ellipsis="false"
          @select="headerMenuSelect"
        >
          <el-menu-item style="background-color: transparent; padding: 0px" index="0">
            <a target="_self" href="/"
              ><img class="" src="@/assets/images/logo/logo.jpg" alt="logo" width="128px"
            /></a>
          </el-menu-item>
          <div class="flex-grow" />

          <el-sub-menu
            class="my-2.5 overflow-hidden transition-colors delay-75 ease-in hover:bg-[#0000000a]"
            index="1"
          >
            <template #title><span class="font-bold">联系我们</span></template>
            <div class="text-center">
              <div class="px-1 flex">
                <img src="@/assets/images/concat/qrcode.jpg" alt="qrcode" width="128px" />
                <img src="@/assets/images/concat/qrcode-qq.jpg" alt="qrcode" width="128px" />
              </div>
              <p>添加好友，了解更多</p>
            </div>
          </el-sub-menu>
          <el-sub-menu
            class="my-2.5 overflow-hidden transition-colors delay-75 ease-in hover:bg-[#0000000a]"
            index="2"
          >
            <template #title>
              <Icon class="mr-1.5" width="16px" height="16px" icon="mynaui:components" /><span
                class="font-bold"
                >产品</span
              ></template
            >
            <div class="p-2">敬请期待，我们的产品正在开发中...</div>
          </el-sub-menu>
          <el-menu-item class="border-0" index="3">
            <a
              class="flex items-center"
              target="_blank"
              href="https://github.com/yassine-zhang/itcox-official"
              ><Icon icon="simple-icons:github" width="26px" height="26px"
            /></a>
          </el-menu-item>
        </el-menu>
      </el-header>

      <!-- <el-alert class="lg:px-20 xl:px-28" center type="error">
        <template #default>
          <div class="flex gap-1 items-center">
            <Icon icon="unjs:knitwork" width="18px" height="18px" />
            <Icon icon="unjs:knitwork" width="18px" height="18px" />
            <Icon icon="unjs:knitwork" width="18px" height="18px" />
            <span>网站建设中，敬请期待~</span>
            <Icon icon="unjs:knitwork" width="18px" height="18px" />
            <Icon icon="unjs:knitwork" width="18px" height="18px" />
            <Icon icon="unjs:knitwork" width="18px" height="18px" />
          </div>
        </template>
      </el-alert> -->

      <el-container class="lg:px-16 xl:px-24 mt-6 flex items-start">
        <el-main class="p-3.5 pt-0">
          <el-carousel class="carousel-shadow" :height="carouselHeight">
            <el-carousel-item v-for="d in store.carouselData" :key="d">
              <img class="object-cover w-full h-full" :src="d.url" :alt="d.title" />
              <div class="absolute bottom-0 w-full h-24 bg-black/60">
                <h3 class="absolute font-bold text-lg text-white top-4 left-4">
                  {{ d.title }}
                </h3>
              </div>
            </el-carousel-item>
          </el-carousel>

          <div
            class="mt-12 h-[2px] bg-[url('@/assets/images/other/taxi-decorative-lines.png')] bg-repeat-x"
          ></div>

          <div ref="contentRef" class="font-bold mt-10 p-5">
            <h3 class="title title2 font-bold text-2xl text-center mb-5 mt-3">客户成品案例</h3>
            <div class="relative">
              <ul class="flex flex-wrap gap-4">
                <li
                  v-for="d in store.productList"
                  :key="d.url"
                  class="group relative w-[440px] h-72 overflow-hidden border shadow-md border-gray-300"
                >
                  <n-image
                    :src="d.url"
                    object-fit="cover"
                    width="100%"
                    class="w-full h-full cursor-zoom-in relative z-10"
                  />
                  <div
                    class="absolute z-10 w-full -bottom-16 bg-black/80 transition-all delay-100 ease-in-out group-hover:bottom-0 group-hover:bg-black/60 px-2"
                  >
                    <p class="text-sm font-bold text-white">
                      {{ d.title }}
                    </p>
                  </div>

                  <div
                    class="absolute rotate-45 -right-[190px] -top-[5px] w-full h-8 bg-[#fb3c3c] z-20"
                  >
                    <Icon
                      @click="openProductExternalLink(d.externalLink || '')"
                      class="absolute top-0.5 left-1/2 cursor-pointer z-20"
                      width="26px"
                      height="26px"
                      color="white"
                      icon="pepicons-print:open"
                    />
                  </div>
                </li>
              </ul>
              <img
                class="absolute right-0 -top-12 opacity-50 z-0"
                src="@/assets/images/other/haze-handshake.png"
                alt="haze-handshake.png"
                width="256px"
              />
            </div>

            <h3 class="title title2 font-bold text-2xl text-center mb-5 mt-20">开发者叙述</h3>
            <div class="relative">
              <p class="relative leading-6 indent-8 mb-1.5 font-bold z-20">
                开发者（张永鑫）曾在中职阶段参加过省级和国家级《物联网技能大赛》，获得省赛一等奖和国赛二等奖。在学习物联网技能期间，他意识到各学校间学习资源分配不均，无法真正筛选出所有有实力的选手。为此，他编写了一整套面向全国中高职师生的系列竞赛笔记。笔记包含Python、Android、STM32、SQL、CC2530以及配置笔记等六部分。据不完全统计，全国累计有350余名师生学习了这些笔记，获奖选手约有110人。
              </p>
              <p>
                <n-image
                  src="/static/other/newlandiot.jpg"
                  class="w-9/12 max-w-[800px] cursor-zoom-in"
                />
              </p>
              <p class="font-bold mt-4 ml-4">
                参考主页：<a
                  class="font-bold underline text-blue-600"
                  target="_blank"
                  href="https://www.yuque.com/newlandiot"
                  >NewlandIOT · 语雀</a
                >
              </p>

              <p class="font-bold text-lg mt-4 gradient-text gradient-text-cyan">
                从初中阶段开始学习计算机编程，至今已有五年多的时间。通过系统的学习和参与实际项目，我们已经积累了丰富的专业知识和实践经验，能够为您提供优质的服务！
              </p>

              <img
                class="absolute right-0 -top-12 opacity-50 z-0"
                src="@/assets/images/other/haze-envelope.png"
                alt="haze-envelope"
                width="256px"
              />
            </div>

            <h3 class="title title2 font-bold text-2xl text-center mb-5 mt-20">更多问题</h3>
            <div class="relative min-h-56">
              <el-collapse
                class="relative z-10"
                v-model="activeCollapseNames"
                @change="handleCollapseChange"
              >
                <el-collapse-item title="我们是做什么的？" name="1">
                  <div>
                    我们是济宁市若森软件开发中心，致力于为更多有Web网站开发需求的群体提供帮助，我们提供网站从零开发，
                    到网站上线运营，再到网站维护升级等一站式服务。
                  </div>
                </el-collapse-item>
                <el-collapse-item title="我们目前有哪些不足？" name="2">
                  <div>
                    目前缺少UI设计，我们只有一名UI设计小哥在一起共事，
                    我们需要更多的UI设计人员，来满足客户的需求。
                  </div>
                </el-collapse-item>
              </el-collapse>

              <img
                class="absolute right-0 -top-12 opacity-50 z-0"
                src="@/assets/images/other/haze-question-with-keyhole.png"
                alt="haze-question-with-keyhole"
                width="156px"
              />
            </div>
          </div>
        </el-main>

        <el-aside class="ml-4 p-2 pb-20 pt-0">
          <div class="relative overflow-hidden shadow-md p-3 border border-gray-300">
            <div class="flex gap-1 items-center">
              <Icon icon="unjs:db0" width="22px" height="22px" />
              <span class="font-bold text-lg">网站公告</span>
            </div>
            <el-divider class="my-2" border-style="double" />
            <div class="text-sm">
              <p class="leading-6 indent-8">
                <span class="font-bold gradient-text gradient-text-purple"
                  >济宁市若森软件开发中心</span
                >
                致力于为更多有<span class="bg-yellow-200">Web网站开发需求的群体</span
                >提供帮助，我们提供网站从零开发， 到网站上线运营，再到网站维护升级等一站式服务。
                <Icon :inline="true" icon="unjs:destr" />
                <Icon :inline="true" icon="unjs:destr" />
                <Icon :inline="true" icon="unjs:destr" />
              </p>
              <p class="mt-4 leading-6 indent-8">
                我们的服务理念是<span class="font-bold gradient-text gradient-text-red"
                  >“客户至上，诚信为本”</span
                >，我们将不断努力，为用户提供最优质的服务。
              </p>
            </div>
            <el-divider class="my-2" border-style="dotted" />
            <div class="text-sm">
              <n-image src="/static/license/dzyyzz.jpg" class="w-full cursor-zoom-in" />
              <div class="flex gap-1 items-center pl-3">
                <Icon icon="unjs:ufo" />
                <p>
                  ICP备案号:
                  <a
                    class="underline text-blue-600"
                    target="_blank"
                    href="https://beian.miit.gov.cn/"
                    >鲁ICP备2024099705号-1</a
                  >
                </p>
              </div>
            </div>
            <img
              src="@/assets/images/other/yellow-line.png"
              width="128px"
              class="absolute -right-4 bottom-4"
            />
          </div>
          <div class="mt-4 p-3 border shadow-md border-gray-300">
            <div class="flex gap-1 items-center">
              <Icon icon="unjs:nypm" width="22px" height="22px" />
              <span class="font-bold text-lg">技术标签云</span>
            </div>
            <el-divider class="my-2" border-style="double" />
            <n-image src="/static/other/tag-cloud.png" class="w-full cursor-zoom-in" />
          </div>
          <div class="mt-4 p-3 border shadow-md border-gray-300">
            <div class="flex gap-1 items-center">
              <Icon icon="unjs:ipx" width="22px" height="22px" />
              <span class="font-bold text-lg">媒体官方账号</span>
            </div>
            <el-divider class="my-2" border-style="double" />
            待定
          </div>
        </el-aside>
      </el-container>

      <!-- 底部footer区域，包含友情链接+联系信息 -->
      <el-footer
        class="footer h-auto px-6 pb-10 pt-6 md:px-12 md:pb-20 md:pt-12 bg-[#313131] text-gray-200 text-sm flex flex-wrap gap-32 justify-between items-start"
      >
        <div class="max-w-[800px]" v-if="store.friendshipLink.length > 0">
          <p class="font-bold">友情链接</p>
          <ul class="mt-6 flex flex-wrap">
            <li class="mr-6 mb-3" v-for="d in store.friendshipLink" :key="d.url">
              <a target="_blank" :href="d.url">{{ d.title }}</a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col justify-center gap-1">
          <div class="overflow-hidden flex items-center">
            <img
              src="@/assets/images/logo/logo-transparent.png"
              class="animated-background-loading"
              alt="logo"
              width="138px"
            />
          </div>
          <div class="pl-0.5">
            <p class="mt-3.5">© 2024 济宁市若森软件开发中心</p>
            ( Illustration by
            <a class="underline" href="https://icons8.com/illustrations/author/zD2oqC8lLBBA"
              >Icons 8</a
            >
            from <a class="underline" href="https://icons8.com/illustrations">Ouch!</a> )
            <p class="mt-0.5">有开发网站需求，或者有合作意向，欢迎联系我们。</p>
            <p class="mt-1.5">联系方式：165-9999-9215 | QQ: 57878778</p>
          </div>
        </div>
      </el-footer>

      <!-- 右侧悬浮模块 -->
      <div class="fixed top-1/2 right-8">
        <el-popover placement="left" :width="165" trigger="hover">
          <img src="@/assets/images/concat/qrcode.jpg" alt="qrcode" class="w-full" />
          <template #reference>
            <div class="bg-white border border-gray-300 cursor-pointer">
              <div
                class="grid grid-cols-1 gap-0.5 p-3 transition-colors delay-75 ease-in hover:bg-[#0000000a]"
              >
                <Icon icon="simple-line-icons:earphones" />
                <div class="leading-tight mt-1">现</div>
                <div class="leading-tight">在</div>
                <div class="leading-tight">咨</div>
                <div class="leading-tight">询</div>
              </div>
            </div>
          </template>
        </el-popover>

        <el-tooltip
          content="返回顶部"
          :visible="tooltipPromptVisible"
          placement="left"
          effect="light"
        >
          <div
            @click="backToTop"
            id="back-to-top"
            @mouseenter="tooltipPromptVisible = true"
            @mouseleave="tooltipPromptVisible = false"
            class="hidden mt-3 bg-white cursor-pointer border border-gray-300"
          >
            <div
              class="p-3 flex items-center justify-center transition-colors delay-75 ease-in hover:bg-[#0000000a]"
            >
              <Icon icon="simple-line-icons:arrow-up" />
            </div>
          </div>
        </el-tooltip>
      </div>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useHomeViewStore } from '@/stores/home-view'
import { scrollToTop } from '@/utils/scrollToTop'
import { openLink } from '@/utils/openLink'
import { useMessage } from 'naive-ui'

const message = useMessage()

const store = useHomeViewStore()

const activeHeaderMenuIndex = ref('0')
const headerMenuSelect = (i: number, path: string) => {
  console.log(i, path)
}

const carouselMinHeight = 490.74
const carouselFactor = 0.515
const contentRef = ref<HTMLElement>(document.body)
const carouselHeight = ref(carouselMinHeight + 'px')

const activeCollapseNames = ref(['1'])
const handleCollapseChange = (val: string[]) => {
  console.log(val)
}

function openProductExternalLink(externalLink: string) {
  if (externalLink != '') openLink(externalLink)
  else message.error('该客户产品并不允许向外展示网站，敬请谅解！')
}

const tooltipPromptVisible = ref(false)
function backToTop() {
  // window.scroll({
  //   top: 0,
  //   left: 0,
  //   behavior: 'smooth'
  // })
  scrollToTop(800)
}

function calcFooterHeight(): number {
  // 获取 .footer 元素
  const footer = document.querySelector('.footer') as HTMLElement

  // 获取元素的高度（包括内边距和边框，但不包括外边距）
  const rect = footer.getBoundingClientRect()
  const height = rect.height
  return height
}

function footerModule() {
  const root = document.documentElement

  // 通过屏幕高度减去body元素高度，获取剩余
  const bodyHeight = document.body.clientHeight
  const screenHeight = window.innerHeight
  const remainingHeight = Math.max(screenHeight - bodyHeight + calcFooterHeight(), 48)

  // 设置变量的值为外边距
  root.style.setProperty('--itcox-footer-margin', remainingHeight + 'px')
}

// 生命周期内的一些事件
function lifeCycleEvents() {
  let lastScrollTop = 0 // 记录上一次滚动的位置

  // 监听滚动事件
  window.addEventListener('scroll', () => {
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

    const backToTop = document.getElementById('back-to-top')!
    if (scrollTop > 500) {
      // 显示返回顶部按钮
      backToTop.classList.remove('hidden')
    } else {
      // 隐藏返回顶部按钮
      backToTop.classList.add('hidden')
      tooltipPromptVisible.value = false
    }

    // 检测用户不断向上下滑动时设置不同的背景色达到最优效果
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop

    // 200是一个阈值，检测是在顶部或底部边缘超出后反向滑动，这时颜色不允许变化
    if (currentScroll > lastScrollTop && currentScroll > 200) {
      // 向下滚动
      document.body.style.backgroundColor = '#3a3a3a'
    } else if (currentScroll < lastScrollTop && currentScroll < 200) {
      // 向上滚动
      document.body.style.backgroundColor = '#f7f8fa'
    }

    lastScrollTop = currentScroll // 更新上一次滚动的位置
  })

  // 监听窗口大小变化事件，调整carousel高度，最低carouselMinHeight
  window.addEventListener('resize', () => {
    // 通过style获取contentRef.value的元素宽度
    const contentWidth = contentRef.value.offsetWidth

    carouselHeight.value = `${Math.max(contentWidth * carouselFactor, carouselMinHeight)}px`
  })
}

onMounted(() => {
  footerModule()
  lifeCycleEvents()
})
</script>
<style scoped>
@keyframes placeHolderShimmer {
  0% {
    background-position: -265px 0;
  }

  100% {
    background-position: 265px 0;
  }
}
.animated-background-loading {
  animation-duration: 1.85s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #a9a9a9;
  background: linear-gradient(
    to right,
    rgb(255 255 255 / 5%) 10%,
    rgb(255 255 255 / 19%) 18%,
    rgb(255 255 255 / 5%) 33%
  );
  background-size: 520px 104px;
}
/* .animated-background-loading:after {
  position: absolute;
  content: 'Loading...';
} */

.carousel-shadow {
  box-shadow:
    0 1px 1px rgba(0, 0, 0, 0.1),
    0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1),
    0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);
}

.title {
  height: 32px;
  font-weight: 600;
  line-height: 32px;
  padding-left: 5px;
  position: relative;
  color: #000;
  z-index: 0;
}
.title1 {
  color: #fff;
  padding-left: 50px;
  background: linear-gradient(-210deg, transparent 1.5em, #fe6c6f 0);
}
.title1::before {
  content: '';
  display: block;
  width: 1.73em;
  height: 3em;
  position: absolute;
  background: linear-gradient(-60deg, #f18384 50%, transparent 0);
  left: -3px;
  top: 0;
  border-bottom-left-radius: inherit;
  transform: translateY(-0.5em) rotate(30deg);
  transform-origin: bottom right;
  box-shadow: 0.2em 0.2em 0.3em -0.1em rgba(0, 0, 0, 0.15);
}

.title2 {
  display: block;
  position: relative;
  width: 180px;
  height: 32px;
  line-height: 32px;
  background: #fb3c3c;
  color: #fff;
}

.title2::before {
  content: '';
  position: absolute;
  height: 0;
  width: 0;
  border-bottom: 8px solid #cd2b2b;
  border-left: 8px solid transparent;
  top: -8px;
  left: 0;
}
.title2::after {
  content: '';
  position: absolute;
  height: 0;
  width: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 8px solid #fb3c3c;
  right: -8px;
}

.gradient-text {
  -webkit-background-clip: text; /* 仅裁剪文本的背景 */
  color: transparent; /* 将文字颜色设为透明 */
}
.gradient-text-cyan {
  background-image: linear-gradient(
    93.2deg,
    rgba(24, 95, 246, 1) 14.4%,
    rgba(27, 69, 166, 1) 90.8%
  );
}
.gradient-text-purple {
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(151, 41, 247, 1) 0%,
    rgba(24, 22, 39, 1) 90%
  );
}
.gradient-text-red {
  background-image: radial-gradient(
    circle farthest-corner at 17.1% 22.8%,
    rgba(226, 24, 24, 1) 0%,
    rgba(160, 6, 6, 1) 90%
  );
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 0px;
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
