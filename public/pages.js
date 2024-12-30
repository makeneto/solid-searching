

// Mav bar para mobile
const navExpand = document.getElementById('nav-expand'),
    navExpandList = document.getElementById('nav-expand-list'),
    navExpandIcon = document.getElementById('nav-expand-icon')

navExpand.addEventListener('click', () => {
    navExpandList.classList.toggle('show-list')
    navExpandIcon.classList.toggle('rotate-icon')
})

const anoFooter = () => {
    const now = moment()
    const footerYear = document.querySelector('.year__footer')
    footerYear.textContent = now.year()
}

anoFooter()