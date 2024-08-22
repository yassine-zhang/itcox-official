import { ref } from 'vue'
import { defineStore } from 'pinia'

interface CarouselDataI {
  title: string
  url: string
}
interface FriendshipLinkI {
  title: string
  url: string
}
interface ProductListI {
  title: string
  url: string
  externalLink?: string
}

export const useHomeViewStore = defineStore('home-view', () => {
  const carouselData = ref<CarouselDataI[]>([
    {
      title: '【更专业】 - 人物头像算法编写',
      url: 'https://cdn.itcox.cn/%40/wallpaper/1.jpg'
    },
    {
      title: '【更细节】 - 从草图到原型UI设计再到前端开发',
      url: 'https://cdn.itcox.cn/%40/wallpaper/2.jpg'
    }
  ])

  const friendshipLink = ref<FriendshipLinkI[]>([
    // {
    //   title: '百度',
    //   url: 'https://www.baidu.com'
    // }
  ])

  const productList = ref<ProductListI[]>([
    {
      title: 'H5 AIGC聊天绘图网站 / AIGC生成式AI / 智慧无限，数字赋能',
      url: 'https://cdn.itcox.cn/%40/product/ydai-web.png',
      externalLink: 'https://aidesign.org.cn/'
    },
    {
      title: 'H5 AIGC聊天绘图网站后台管理 / AIGC生成式AI / 智慧无限，数字赋能',
      url: 'https://cdn.itcox.cn/%40/product/ydai-management.png'
    }
  ])

  return { carouselData, friendshipLink, productList }
})
