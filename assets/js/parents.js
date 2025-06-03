document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
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

    // Form đăng ký tìm gia sư
    const findTutorForm = document.getElementById('find-tutor-form');
    if (findTutorForm) {
        findTutorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('student-name').value,
                email: document.getElementById('student-email').value,
                phone: document.getElementById('student-phone').value,
                birthday: document.getElementById('student-birthday').value,
                grade: document.getElementById('student-grade').value,
                school: document.getElementById('student-school').value,
                subject: document.getElementById('required-subject').value,
                address: document.getElementById('student-address').value,
                time: document.getElementById('student-time').value,
                requirements: document.getElementById('tutor-requirements').value
            };
            
            if (!formData.name || !formData.email || !formData.phone || !formData.grade || !formData.subject || !formData.address) {
                alert('Vui lòng điền đầy đủ các thông tin bắt buộc!');
                return;
            }
            
            console.log('Find Tutor Form Data:', formData);
            alert('Đăng ký tìm gia sư thành công! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.');
            findTutorForm.reset();
        });
    }

    // Form đăng ký làm gia sư
    const registerTutorForm = document.getElementById('register-tutor-form');
    if (registerTutorForm) {
        registerTutorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('tutor-name').value,
                email: document.getElementById('tutor-email').value,
                phone: document.getElementById('tutor-phone').value,
                birthyear: document.getElementById('tutor-birthyear').value,
                education: document.getElementById('tutor-education').value,
                address: document.getElementById('tutor-address').value,
                subject: document.getElementById('tutor-subject').value,
                time: document.getElementById('tutor-time').value,
                area: document.getElementById('tutor-area').value
            };
            
            if (!formData.name || !formData.email || !formData.phone || !formData.education || !formData.address || !formData.subject || !formData.area) {
                alert('Vui lòng điền đầy đủ các thông tin bắt buộc!');
                return;
            }
            
            if (formData.birthyear && (formData.birthyear < 1900 || formData.birthyear > new Date().getFullYear())) {
                alert('Năm sinh không hợp lệ!');
                return;
            }
            
            console.log('Register Tutor Form Data:', formData);
            alert('Đăng ký làm gia sư thành công! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.');
            registerTutorForm.reset();
        });
    }

    // Highlight current section in navigation
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.querySelector('a').getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
});