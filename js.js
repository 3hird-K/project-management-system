document.addEventListener("DOMContentLoaded", function () {
            const navLinks = document.querySelectorAll('.navbar-nav a');

            navLinks.forEach(link => {
                link.addEventListener('click', function () {
                    navLinks.forEach(otherLink => otherLink.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        });