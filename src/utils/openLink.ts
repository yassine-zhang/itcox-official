function openLink(url: string) {
  // 创建一个<a>标签
  const a = document.createElement('a')
  a.href = url
  a.target = '_target' // 在新窗口/标签页中打开

  // 模拟点击<a>标签
  a.click()
}

export { openLink }
