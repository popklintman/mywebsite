document.addEventListener('DOMContentLoaded', () => {
    // 3D Tilt Effect for Glass Cards
    const heroVisual = document.querySelector('.hero-visual');
    const mainCard = document.querySelector('.main-card');
    const floatCard1 = document.querySelector('.float-card-1');
    const floatCard2 = document.querySelector('.float-card-2');

    // Only apply hover effects on non-touch screens (desktop)
    if (window.matchMedia("(min-width: 1024px)").matches) {
        document.addEventListener('mousemove', (e) => {
            // Get mouse position relative to center of screen
            let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
            let yAxis = (window.innerHeight / 2 - e.pageY) / 40;

            // Apply slight rotation based on mouse position
            if (mainCard) {
                // Base rotation for the main card is rotateY(-15deg)
                mainCard.style.transform = `rotateY(${-15 + xAxis}deg) rotateX(${yAxis}deg)`;
            }
            
            // Apply a stronger parallax effect to the smaller floating cards
            if (floatCard1) {
                floatCard1.style.transform = `translateZ(80px) translateY(${yAxis * 1.5}px) translateX(${-xAxis * 1.5}px) rotateY(${xAxis * 1.2}deg)`;
            }
            
            if (floatCard2) {
                floatCard2.style.transform = `translateZ(120px) translateY(${yAxis * 2}px) translateX(${-xAxis * 2}px) rotateY(${xAxis * 1.5}deg)`;
            }
        });

        // Reset transform smoothly when mouse leaves the document
        document.addEventListener('mouseleave', () => {
            if (mainCard) {
                mainCard.style.transition = "transform 0.5s ease";
                mainCard.style.transform = `rotateY(-15deg) rotateX(5deg)`;
                
                // Remove transition after resetting to allow immediate follow on next mouseenter
                setTimeout(() => {
                    mainCard.style.transition = "transform 0.1s linear, box-shadow 0.3s ease";
                }, 500);
            }
            
            if (floatCard1) {
                floatCard1.style.transition = "transform 0.5s ease";
                floatCard1.style.transform = `translateZ(80px)`;
                setTimeout(() => floatCard1.style.transition = "transform 0.1s linear", 500);
            }
            
            if (floatCard2) {
                floatCard2.style.transition = "transform 0.5s ease";
                floatCard2.style.transform = `translateZ(120px)`;
                setTimeout(() => floatCard2.style.transition = "transform 0.1s linear", 500);
            }
        });
    }

    // Button Micro-interactions
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        btn.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1) translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.85)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
            navbar.style.padding = '16px 6%';
        } else {
            navbar.style.background = 'rgba(5, 5, 5, 0.7)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
            navbar.style.padding = '24px 6%';
        }
    });
});
