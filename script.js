// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({
behavior: 'smooth',
block: 'start'
});
}
});
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
const navbar = document.querySelector('.navbar');
if (window.scrollY > 50) {
navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
} else {
navbar.style.boxShadow = 'none';
}
});

// 页面加载动画
window.addEventListener('load', () => {
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.6s ease';
setTimeout(() => {
document.body.style.opacity = '1';
}, 100);
});

// 元素进入视口动画
const observerOptions = {
threshold: 0.1,
rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('animate-in');
observer.unobserve(entry.target);
}
});
}, observerOptions);

// 观察所有section
document.querySelectorAll('section').forEach(section => {
observer.observe(section);
});

// 观察卡片
document.querySelectorAll('.about-block, .sidebar-card, .project-card-mag, .timeline-item-mag, .education-card-mag, .award-card-mag, .contact-link-mag').forEach(card => {
observer.observe(card);
});

// 导航链接高亮
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
let current = '';
sections.forEach(section => {
const sectionTop = section.offsetTop;
if (scrollY >= sectionTop - 200) {
current = section.getAttribute('id');
}
});

navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
        link.style.color = '#e07b39';
    }
});
});

// 添加初始动画样式
document.addEventListener('DOMContentLoaded', () => {
const animatedElements = document.querySelectorAll('.about-block, .sidebar-card, .project-card-mag, .timeline-item-mag, .education-card-mag, .award-card-mag, .contact-link-mag');
animatedElements.forEach((element, index) => {
element.style.opacity = '0';
element.style.transform = 'translateY(30px)';
element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
element.style.transitionDelay = ${index * 0.05}s;
});

// 当元素进入视口时显示
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

animatedElements.forEach(card => cardObserver.observe(card));
