// Location Detection and Display
function detectUserLocation() {
    const locationDisplay = document.getElementById('user-location');
    const locationServices = document.getElementById('location-services');
    
    if (navigator.geolocation) {
        locationDisplay.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Locatie detecteren...';
        
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    const { latitude, longitude } = position.coords;
                    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=nl`);
                    const data = await response.json();
                    
                    const city = data.city || data.locality || 'jouw locatie';
                    const province = data.principalSubdivision || '';
                    
                    const locationText = province ? `${city}, ${province}` : city;
                    locationDisplay.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${locationText}`;
                    locationServices.textContent = city;
                    
                    // Update service counts based on location
                    updateServiceCounts(city);
                } catch (error) {
                    console.error('Error getting location details:', error);
                    locationDisplay.innerHTML = '<i class="fas fa-map-marker-alt"></i> Nederland';
                    locationServices.textContent = 'jouw regio';
                }
            },
            (error) => {
                console.error('Geolocation error:', error);
                locationDisplay.innerHTML = '<i class="fas fa-map-marker-alt"></i> Nederland';
                locationServices.textContent = 'jouw regio';
            },
            { timeout: 10000, maximumAge: 300000 }
        );
    } else {
        locationDisplay.innerHTML = '<i class="fas fa-map-marker-alt"></i> Nederland';
        locationServices.textContent = 'jouw regio';
    }
}

// Update service counts based on location
function updateServiceCounts(city) {
    const serviceCards = document.querySelectorAll('.service-card');
    const baseCounts = {
        'boekhouder': 2400,
        'schilder': 3200,
        'dakdekker': 1800,
        'loodgieter': 2100,
        'makelaar': 1500,
        'aannemer': 2800
    };
    
    serviceCards.forEach(card => {
        const service = card.getAttribute('data-service');
        const countElement = card.querySelector('.service-count');
        if (countElement && baseCounts[service]) {
            // Add some randomization based on city
            const variation = Math.floor(Math.random() * 200) - 100;
            const localCount = Math.max(50, baseCounts[service] + variation);
            countElement.textContent = `${localCount.toLocaleString()}+ bedrijven`;
        }
    });
}

// Profession Animation Data
const professions = [
    {
        name: 'Boekhouder',
        tool: '<i class="fas fa-calculator"></i>',
        color: '#4285f4',
        armPosition: { left: 'rotate(-20deg)', right: 'rotate(20deg)' }
    },
    {
        name: 'Schilder',
        tool: '<i class="fas fa-paint-brush"></i>',
        color: '#34a853',
        armPosition: { left: 'rotate(-45deg)', right: 'rotate(10deg)' }
    },
    {
        name: 'Dakdekker',
        tool: '<i class="fas fa-hammer"></i>',
        color: '#ea4335',
        armPosition: { left: 'rotate(-10deg)', right: 'rotate(-30deg)' }
    },
    {
        name: 'Loodgieter',
        tool: '<i class="fas fa-wrench"></i>',
        color: '#fbbc04',
        armPosition: { left: 'rotate(-30deg)', right: 'rotate(-10deg)' }
    },
    {
        name: 'Makelaar',
        tool: '<i class="fas fa-key"></i>',
        color: '#9c27b0',
        armPosition: { left: 'rotate(-15deg)', right: 'rotate(25deg)' }
    },
    {
        name: 'Aannemer',
        tool: '<i class="fas fa-hard-hat"></i>',
        color: '#ff5722',
        armPosition: { left: 'rotate(-25deg)', right: 'rotate(-5deg)' }
    },
    {
        name: 'Elektricien',
        tool: '<i class="fas fa-bolt"></i>',
        color: '#ffc107',
        armPosition: { left: 'rotate(-20deg)', right: 'rotate(-20deg)' }
    },
    {
        name: 'Hovenier',
        tool: '<i class="fas fa-seedling"></i>',
        color: '#4caf50',
        armPosition: { left: 'rotate(-35deg)', right: 'rotate(15deg)' }
    },
    {
        name: 'Schoonmaker',
        tool: '<i class="fas fa-spray-can"></i>',
        color: '#2196f3',
        armPosition: { left: 'rotate(-15deg)', right: 'rotate(-25deg)' }
    },
    {
        name: 'Fotograaf',
        tool: '<i class="fas fa-camera"></i>',
        color: '#795548',
        armPosition: { left: 'rotate(-30deg)', right: 'rotate(-30deg)' }
    }
];

let currentProfessionIndex = 0;

// Animate Character Profession Changes
function animateCharacterProfession() {
    const character = document.getElementById('animated-character');
    const professionLabel = document.getElementById('profession-label');
    const professionTools = document.getElementById('profession-tools');
    const characterTorso = document.querySelector('.character-torso');
    const leftArm = document.querySelector('.left-arm');
    const rightArm = document.querySelector('.right-arm');
    
    if (!character || !professionLabel || !professionTools) return;
    
    const currentProfession = professions[currentProfessionIndex];
    
    // Add exit animation
    professionTools.classList.remove('active');
    character.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        // Update profession
        professionLabel.textContent = currentProfession.name;
        professionTools.innerHTML = currentProfession.tool;
        characterTorso.style.background = currentProfession.color;
        
        // Update arm positions
        leftArm.style.transform = currentProfession.armPosition.left;
        rightArm.style.transform = currentProfession.armPosition.right;
        
        // Add entrance animation
        professionTools.classList.add('active');
        character.style.transform = 'scale(1)';
        
        // Move to next profession
        currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
    }, 300);
}

// Smooth Scrolling Functions
function scrollToServices() {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
        servicesSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function showHowItWorks() {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
        howItWorksSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Service Card Interactions
function initializeServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            // Here you would typically navigate to the service page
            console.log(`Navigating to ${service} page`);
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
        
        // Add hover effect for character
        card.addEventListener('mouseenter', function() {
            const service = this.getAttribute('data-service');
            const profession = professions.find(p => 
                p.name.toLowerCase().includes(service) || 
                service.includes(p.name.toLowerCase())
            );
            
            if (profession) {
                const professionLabel = document.getElementById('profession-label');
                const professionTools = document.getElementById('profession-tools');
                const characterTorso = document.querySelector('.character-torso');
                
                if (professionLabel && professionTools && characterTorso) {
                    professionLabel.textContent = profession.name;
                    professionTools.innerHTML = profession.tool;
                    characterTorso.style.background = profession.color;
                    professionTools.classList.add('active');
                }
            }
        });
    });
}

// Header Scroll Effect
function initializeHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Intersection Observer for Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0s';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.trust-stat, .service-card, .step');
    animateElements.forEach(el => observer.observe(el));
}

// Add CSS for scroll animations
function addScrollAnimationCSS() {
    const style = document.createElement('style');
    style.textContent = `
        .trust-stat, .service-card, .step {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .service-card:nth-child(2) { transition-delay: 0.1s; }
        .service-card:nth-child(3) { transition-delay: 0.2s; }
        .service-card:nth-child(4) { transition-delay: 0.3s; }
        .service-card:nth-child(5) { transition-delay: 0.4s; }
        .service-card:nth-child(6) { transition-delay: 0.5s; }
        
        .step:nth-child(2) { transition-delay: 0.2s; }
        .step:nth-child(3) { transition-delay: 0.4s; }
        
        .trust-stat:nth-child(2) { transition-delay: 0.1s; }
        .trust-stat:nth-child(3) { transition-delay: 0.2s; }
        .trust-stat:nth-child(4) { transition-delay: 0.3s; }
    `;
    document.head.appendChild(style);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    detectUserLocation();
    initializeServiceCards();
    initializeHeaderScroll();
    initializeScrollAnimations();
    addScrollAnimationCSS();
    
    // Start character animation
    animateCharacterProfession();
    setInterval(animateCharacterProfession, 3000);
    
    // Add some interactive feedback
    console.log('Trustoo.nl - Nieuw design geladen! 🎉');
    
    // Performance optimization
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            // Initialize non-critical features
            console.log('Non-critical features initialized');
        });
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    // Recalculate any position-dependent elements
    if (window.innerWidth < 768) {
        // Mobile optimizations
        const character = document.querySelector('.character');
        if (character) {
            character.style.transform = 'scale(0.8)';
        }
    } else {
        const character = document.querySelector('.character');
        if (character) {
            character.style.transform = 'scale(1)';
        }
    }
});

// Add loading optimization
window.addEventListener('load', function() {
    // Hide loading spinner if exists
    const loadingElement = document.querySelector('.loading');
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
    
    // Initialize any heavy features after load
    console.log('Page fully loaded - All features active');
});