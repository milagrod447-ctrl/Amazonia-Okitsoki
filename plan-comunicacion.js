    <!-- SCRIPT JS SEPARADO -->
    <script src="script.js"></script>

    <!-- SCRIPT DE NAVEGACIÓN Y PROGRESO INTERNO -->
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            
            window.addEventListener("scroll", function () {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                document.getElementById("scroll-progress").style.width = scrolled + "%";
            });

            const navItems = document.querySelectorAll('.plan-nav-item');
            
            navItems.forEach(item => {
                item.addEventListener('click', function (e) {
                    e.preventDefault();
                    navItems.forEach(i => i.classList.remove('active'));
                    this.classList.add('active');

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

            document.querySelectorAll('.back-to-top').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            });

        });