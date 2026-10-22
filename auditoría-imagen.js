       // CONFIGURACIÓN DE ANIMACIÓN AL SCROLLEAR (SCROLLREVEAL)
            if (typeof ScrollReveal !== 'undefined') {
                const sr = ScrollReveal({
                    origin: 'bottom',
                    distance: '30px',
                    duration: 800,
                    delay: 150,
                    easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
                    reset: false
                });

                sr.reveal('.reveal-item', { interval: 100 });
            }

            // BARRA DE PROGRESO DE LECTURA
            window.addEventListener("scroll", function () {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                document.getElementById("scroll-progress").style.width = scrolled + "%";
            });

            // DESPLAZAMIENTO SUAVE Y RESALTADO ACTIVO EN EL SUB-NAV
            const navItems = document.querySelectorAll('.auditoria-nav-item');
            const sections = document.querySelectorAll('.auditoria-section');

            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 150;
                    if (pageYOffset >= sectionTop) {
                        current = section.getAttribute('id');
                    }
                });

                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href').includes(current)) {
                        item.classList.add('active');
                    }
                });
            });

            navItems.forEach(item => {
                item.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 130;
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // BOTÓN VOLVER ARRIBA
            document.querySelectorAll('.back-to-top').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            });
