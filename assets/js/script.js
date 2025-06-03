document.addEventListener('DOMContentLoaded', function () {
    // Banner động với nhiều ảnh
    const bannerImages = [
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    ];

    const bannerContainer = document.querySelector('.banner-images');

    // Tạo các phần tử hình ảnh
    bannerImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Banner image ' + (index + 1);
        img.style.opacity = index === 0 ? '1' : '0';
        bannerContainer.appendChild(img);
    });

    // Chuyển đổi ảnh banner
    let currentImage = 0;
    const images = document.querySelectorAll('.banner-images img');

    function changeBannerImage() {
        images[currentImage].style.opacity = '0';
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].style.opacity = '1';
    }

    const bannerInterval = setInterval(changeBannerImage, 3000);

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Xử lý responsive
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    });

    // Dừng banner khi hover
    bannerContainer.addEventListener('mouseenter', () => {
        clearInterval(bannerInterval);
    });

    bannerContainer.addEventListener('mouseleave', () => {
        bannerInterval = setInterval(changeBannerImage, 3000);
    });
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    } else {
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});
