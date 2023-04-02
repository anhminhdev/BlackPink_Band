// Variable declaration get tag
const header = document.getElementById('header')
const mobileMenu = document.querySelector('.mobile-menu-btn')
const headerHeight = header.clientHeight

// Close-Open mobile menu
mobileMenu.onclick = function () {
  let isClose = header.clientHeight === headerHeight
  if (isClose) {
    header.style.height = 'auto'
  } else {
    header.style.height = null
  }
}

// Automatically close mobile menu when click concepts
const menuList = document.querySelectorAll('#nav li a[href*="#"]')
// Making 1:
// for (let i = 0; i < menuList.length; i++) {
//   let menuItem = menuList[i]
//   menuItem.onclick = function () {
//     header.style.height = null
//   }
// }

// Making 2:
menuList.forEach(item => item.addEventListener('click', function (e) {
  if (item.nextElementSibling && item.nextElementSibling.classList.contains('subnav')) {
    e.preventDefault()
  } else {
    header.style.height = null
  }
}))
