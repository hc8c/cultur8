function handleBtnClick(e) {
  const btn = e.currentTarget
  const targetId = btn.dataset.targetId
  const textToCopy = document.getElementById(targetId)?.textContent

  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy)
    btn.textContent = "Copied!"
    setTimeout(() => (btn.textContent = "Copy \u{1F4CB}"), 800)
  }
}

const copyBtns = document.querySelectorAll(".widget-example-copy")

copyBtns.forEach((btn) => {
  btn.addEventListener("click", handleBtnClick)
})

function indicateActiveLink(e) {
  const activeLink = e.currentTarget
  const targetId = activeLink.dataset.targetAid

  activeLink.classList.add("activeLink")
  setTimeout(() => activeLink.classList.remove("activeLink"), 800)

  const activeSection = document.getElementById(targetId)
  const firstHeading = activeSection?.querySelector("h2")
  firstHeading.classList.add("activeSection")
  setTimeout(() => firstHeading.classList.remove("activeSection"), 800)
}

const navLinksList = document.querySelectorAll("nav a")
navLinksList.forEach((el) => {
  el.addEventListener("click", indicateActiveLink)
})
