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
navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
} else {
navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
}
});

// 页面加载动画
window.addEventListener('load', () => {
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';
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
entry.target.classList.add('animate-fade-in');
observer.unobserve(entry.target);
}
});
}, observerOptions);

// 观察所有section
document.querySelectorAll('section').forEach(section => {
observer.observe(section);
});

// 观察时间线项目
document.querySelectorAll('.timeline-item').forEach(item => {
observer.observe(item);
});

// 观察项目卡片
document.querySelectorAll('.project-card').forEach(card => {
observer.observe(card);
});

// 导航链接高亮
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
let current = '';
sections.forEach(section => {
const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;
if (scrollY >= sectionTop - 200) {
current = section.getAttribute('id');
}
});

navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
        link.style.color = '#2563eb';
    }
});
});

// 添加页面加载完成后的样式
document.addEventListener('DOMContentLoaded', () => {
// 为所有卡片添加初始状态
const cards = document.querySelectorAll('.highlight-card, .project-card, .education-card, .award-item, .contact-item');
cards.forEach(card => {
card.style.opacity = '0';
card.style.transform = 'translateY(20px)';
card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
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

cards.forEach(card => cardObserver.observe(card));
