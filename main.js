// Remove loader when page is loaded
window.addEventListener('load', function() {
    const loader = document.querySelector('.cyber-loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500);
});

// Terminal typing effect for multiple elements
document.addEventListener('DOMContentLoaded', function() {
    // Terminal commands animation
    const commands = [
        "scanning network...",
        "checking firewall...",
        "analyzing protocols...",
        "system secure.",
        "access granted."
    ];
    
    const terminalLine = document.querySelector('.terminal-line .command');
    if (terminalLine) {
        let currentCommand = 0;
        let currentChar = 0;
        let isDeleting = false;
        
        function typeCommand() {
            const fullCommand = commands[currentCommand];
            
            if (isDeleting) {
                terminalLine.textContent = fullCommand.substring(0, currentChar - 1);
                currentChar--;
            } else {
                terminalLine.textContent = fullCommand.substring(0, currentChar + 1);
                currentChar++;
            }
            
            if (!isDeleting && currentChar === fullCommand.length) {
                isDeleting = true;
                setTimeout(typeCommand, 1000);
            } else if (isDeleting && currentChar === 0) {
                isDeleting = false;
                currentCommand = (currentCommand + 1) % commands.length;
                setTimeout(typeCommand, 500);
            } else {
                const typingSpeed = isDeleting ? 50 : 100;
                setTimeout(typeCommand, typingSpeed);
            }
        }
        
        setTimeout(typeCommand, 1000);
    }
    
    // Add hover effects to cyber cards
    const cyberCards = document.querySelectorAll('.cyber-card');
    cyberCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const hex = card.querySelector('.hex');
            if (hex) {
                hex.style.textShadow = '0 0 5px var(--neon-pink)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const hex = card.querySelector('.hex');
            if (hex) {
                hex.style.textShadow = 'none';
            }
        });
    });
    
    // Add active class to current page in navigation
    const currentPage = location.pathname.split('/').pop().replace('.html', '');
    const navLinks = document.querySelectorAll('.cyber-nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').replace('.html', '');
        if (currentPage === linkPage || 
            (currentPage === '' && linkPage === 'index')) {
            link.classList.add('active');
        }
    });
});

// Efeito de digitação para múltiplos elementos
function initTypewriterEffects() {
    const typewriterElements = document.querySelectorAll('.typewriter');
    
    typewriterElements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        el.style.borderRight = '3px solid var(--neon-blue)';
        
        let i = 0;
        function type() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(type, 100);
            } else {
                el.style.borderRight = 'none';
            }
        }
        
        // Inicia após um delay aleatório para efeito mais orgânico
        setTimeout(type, Math.random() * 1000);
    });
}

// Ativa cards com efeito de brilho
function activateCardEffects() {
    const cards = document.querySelectorAll('.cyber-card, .blog-post, .project-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', x);
            card.style.setProperty('--mouse-y', y);
        });
    });
}

// Scroll suave para seções
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Inicializa todos os efeitos quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Remove loader quando a página carrega
    const loader = document.querySelector('.cyber-loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500);
    
    // Inicializa efeitos
    initTypewriterEffects();
    activateCardEffects();
    initSmoothScrolling();
    
    // Efeito de terminal no footer
    const terminalLine = document.querySelector('.terminal-line .command');
    if (terminalLine) {
        const commands = [
            "scanning network...",
            "checking firewall...",
            "analyzing protocols...",
            "system secure.",
            "access granted."
        ];
        
        let currentCommand = 0;
        let currentChar = 0;
        let isDeleting = false;
        
        function typeCommand() {
            const fullCommand = commands[currentCommand];
            
            if (isDeleting) {
                terminalLine.textContent = fullCommand.substring(0, currentChar - 1);
                currentChar--;
            } else {
                terminalLine.textContent = fullCommand.substring(0, currentChar + 1);
                currentChar++;
            }
            
            if (!isDeleting && currentChar === fullCommand.length) {
                isDeleting = true;
                setTimeout(typeCommand, 1000);
            } else if (isDeleting && currentChar === 0) {
                isDeleting = false;
                currentCommand = (currentCommand + 1) % commands.length;
                setTimeout(typeCommand, 500);
            } else {
                const typingSpeed = isDeleting ? 50 : 100;
                setTimeout(typeCommand, typingSpeed);
            }
        }
        
        setTimeout(typeCommand, 1000);
    }
});

// Particle effect for background (to be implemented in particles.js)
// This would create floating binary code or network nodes in the background