// Smooth scrolling for navigation links
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

        // Add scroll effect to navigation
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('.nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(255,255,255,0.98)';
                nav.style.boxShadow = '0 2px 30px rgba(0,0,0,0.15)';
            } else {
                nav.style.background = 'rgba(255,255,255,0.95)';
                nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            }
        });

        // Add intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });

        // Add hover effects to product categories
        document.querySelectorAll('.product-category').forEach(category => {
            category.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            category.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // JavaScript para el catálogo PDF
function toggleCatalog() {
    const container = document.getElementById('pdf-container');
    const button = document.querySelector('.catalog-toggle');
    
    if (container.classList.contains('active')) {
        container.classList.remove('active');
        button.textContent = '📱 Ver Catálogo Completo';
        button.style.background = 'linear-gradient(135deg, #f156ac 0%, #af78e6 100%)';
    } else {
        container.classList.add('active');
        button.textContent = '❌ Cerrar Catálogo';
        button.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
        
        // Smooth scroll al PDF
        setTimeout(() => {
            container.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 100);
    }
}

function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'Catalogo/Catalogo_Productos_Naturales.pdf';
    link.download = 'Catalogo_Belleza_Natural.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function openFullscreen() {
    const modal = document.getElementById('pdf-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
    const modal = document.getElementById('pdf-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function hidePDFLoading() {
    const loading = document.getElementById('pdf-loading');
    const viewer = document.getElementById('pdf-viewer');
    
    loading.style.display = 'none';
    viewer.style.display = 'block';
}

// Cerrar modal con ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeFullscreen();
    }
});

// Cerrar modal haciendo clic fuera del contenido
document.getElementById('pdf-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeFullscreen();
    }
});