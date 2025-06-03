
document.addEventListener('DOMContentLoaded', function() {
    // Hiệu ứng khi scroll
    const cards = document.querySelectorAll('.level-card, .tutor-team-card, .service-card');
    
    function checkCards() {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            if (cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Khởi tạo trạng thái ban đầu
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', checkCards);
    checkCards(); // Kiểm tra ngay khi load trang

    // Hiệu ứng hover cho các thẻ nhóm gia sư
    const groupCards = document.querySelectorAll('.group-card');
    groupCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });

    // Hiệu ứng cho các dịch vụ
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.service-icon');
            icon.style.transform = 'scale(1.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.service-icon');
            icon.style.transform = 'scale(1)';
        });
    });

    // Làm nổi bật thẻ khi click
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.boxShadow = '0 0 0 3px rgba(52, 152, 219, 0.5)';
            setTimeout(() => {
                this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
            }, 500);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // ... (phần JS trước giữ nguyên) ...

    // Hiệu ứng cho các bước quy trình
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        step.style.transitionDelay = `${index * 0.1}s`;
        step.style.opacity = '0';
        step.style.transform = 'translateX(-20px)';
    });

    function animateSteps() {
        steps.forEach(step => {
            const stepTop = step.getBoundingClientRect().top;
            if (stepTop < window.innerHeight - 100) {
                step.style.opacity = '1';
                step.style.transform = 'translateX(0)';
            }
        });
    }

    window.addEventListener('scroll', animateSteps);
    animateSteps(); // Chạy ngay khi load trang

    // Hiệu ứng cho các cam kết
    const commitments = document.querySelectorAll('.commitment-item');
    commitments.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px)';
    });

    function animateCommitments() {
        commitments.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < window.innerHeight - 100) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    }

    window.addEventListener('scroll', animateCommitments);
    animateCommitments(); // Chạy ngay khi load trang
});