// Thêm hiệu ứng cho submenu (tùy chọn)
const navItems = document.querySelectorAll('.nav-item.has-submenu');

navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.submenu').style.display = 'block';
        item.querySelector(".submenu").style.color = "red";
    });

    item.addEventListener('mouseleave', () => {
        item.querySelector('.submenu').style.display = 'none';
    });
});