function scrollToTop(scrollDuration: number) {
  const scrollHeight = window.scrollY
  const scrollStep = Math.PI / (scrollDuration / 15)
  const cosParameter = scrollHeight / 2
  let scrollCount = 0
  let scrollMargin
  requestAnimationFrame(step)

  function step() {
    if (window.scrollY != 0) {
      scrollCount = scrollCount + 1
      scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep)
      window.scrollTo(0, scrollHeight - scrollMargin)
      requestAnimationFrame(step)
    } else {
      window.scrollTo(0, 0)
    }
  }
}

export { scrollToTop }
