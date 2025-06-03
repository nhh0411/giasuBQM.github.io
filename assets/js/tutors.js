document.addEventListener('DOMContentLoaded', function () {
    const tutorForm = document.getElementById('tutorForm');

    tutorForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validate form
        if (validateForm()) {
            // Form is valid, proceed with submission
            submitForm();
        }
    });

    function validateForm() {
        let isValid = true;
        const requiredFields = tutorForm.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#f44336';

                // Add error message
                if (!field.nextElementSibling || !field.nextElementSibling.classList.contains('error-message')) {
                    const errorMsg = document.createElement('small');
                    errorMsg.className = 'error-message';
                    errorMsg.style.color = '#f44336';
                    errorMsg.textContent = 'Vui lòng điền thông tin này';
                    field.parentNode.insertBefore(errorMsg, field.nextSibling);
                }
            } else {
                field.style.borderColor = '#ddd';

                // Remove error message if exists
                if (field.nextElementSibling && field.nextElementSibling.classList.contains('error-message')) {
                    field.nextElementSibling.remove();
                }
            }
        });

        // Validate phone number
        const phoneInput = document.getElementById('phone');
        const phoneRegex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
            isValid = false;
            phoneInput.style.borderColor = '#f44336';

            if (!phoneInput.nextElementSibling || !phoneInput.nextElementSibling.classList.contains('error-message')) {
                const errorMsg = document.createElement('small');
                errorMsg.className = 'error-message';
                errorMsg.style.color = '#f44336';
                errorMsg.textContent = 'Số điện thoại không hợp lệ';
                phoneInput.parentNode.insertBefore(errorMsg, phoneInput.nextSibling);
            }
        }

        return isValid;
    }

    function submitForm() {
        // In a real application, you would send data to server here
        // For demo, we'll just show a success message

        const submitBtn = tutorForm.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Đang gửi...';

        // Simulate API call
        setTimeout(() => {
            alert('Đăng ký thành công! Trung tâm sẽ liên hệ với bạn trong thời gian sớm nhất.');
            tutorForm.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'GỬI';
        }, 1500);
    }

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
});