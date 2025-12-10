
document.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    const download1 = document.getElementById("download");

    if (window.scrollY > 50) {

        nav.classList.add(
            "max-w-[90%]",
            "rounded-2xl",
            // "shadow-xl",
            "-translate-y-2",
            "bg-[#006466]/15",
            "backdrop-blur-xl",
            "top-4",
        );

        nav.classList.remove(
            "max-w-full",
            "rounded-none",
            "translate-y-0",
            "bg-white",
            "bg-[#131d2e]"
        );

        download1.classList.add(
            "text-black"
        );
        download1.classList.remove(
            "text-white"
        );

        // items.forEach(el => {
        //     el.classList.remove(
        //         "text-black",
        //     );
        //     el.classList.add(
        //         "text-white",
        //     );
        // });

    } else {

        nav.classList.add(
            "max-w-full",
            // "rounded-none",
            "translate-y-0",
        );

        nav.classList.remove(
            "max-w-[90%]",
            "rounded-2xl",
            "-translate-y-2",
            "bg-black/70",
            "backdrop-blur-xl",
            "top-4",
            "bg-[#006466]/15"
            
        );

        // items.forEach(el => {
        //     el.classList.remove("text-white");
        //     el.classList.add("text-black");
        // });
    }
});



const btn = document.getElementById('mobileMenuBtn');
const sidebar = document.getElementById('sidebar');
const backdrop = document.getElementById('sidebarBackdrop');
const iconMenu = document.getElementById('iconMenu');
const iconClose = document.getElementById('iconClose');

// buka sidebar
function openSidebar() {
    sidebar.classList.remove('hidden');
    sidebar.classList.add('flex'); // Tambahkan flex saat buka

    backdrop.classList.remove('hidden');

    setTimeout(() => {
        sidebar.classList.remove('-translate-x-full');
        backdrop.classList.remove('opacity-0');
        backdrop.classList.add('opacity-100');
    }, 10);

    iconMenu.classList.add('hidden');
    iconClose.classList.remove('hidden');
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    backdrop.classList.remove('opacity-100');
    backdrop.classList.add('opacity-0');

    setTimeout(() => {
        sidebar.classList.add('hidden');
        sidebar.classList.remove('flex'); // hilangkan flex saat tutup
        backdrop.classList.add('hidden');
    }, 300);

    iconMenu.classList.remove('hidden');
    iconClose.classList.add('hidden');
}


btn.addEventListener('click', () => {
    const isHidden = sidebar.classList.contains('hidden');
    isHidden ? openSidebar() : closeSidebar();
});

// klik backdrop → tutup
backdrop.addEventListener('click', closeSidebar);


const roles = [
    "Web Developer",
    "Machine Learning Engineer"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector(".typing-text");

function typeEffect() {
    const current = roles[index];
    let displayed = current.substring(0, charIndex);

    typingElement.textContent = displayed;

    if (!isDeleting) {
        // sedang mengetik
        if (charIndex < current.length) {
            charIndex++;
            setTimeout(typeEffect, 80);
        } else {
            // setelah selesai mengetik, jeda sebentar
            setTimeout(() => {
                isDeleting = true;
                typeEffect();
            }, 1000);
        }
    } else {
        // sedang menghapus
        if (charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 50);
        } else {
            // lanjut ke role berikutnya
            isDeleting = false;
            index = (index + 1) % roles.length;
            setTimeout(typeEffect, 300);
        }
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);


const cards = document.querySelectorAll('.experience-card');
const btns = document.getElementById('show-more-btn');

// Hide cards after the first 3
cards.forEach((card, index) => {
    if (index >= 3) card.classList.add('hidden');
});

btns.addEventListener('click', () => {
    const isHidden = cards[3].classList.contains('hidden');

    if (isHidden) {
        // Show all
        cards.forEach(card => card.classList.remove('hidden'));
        btns.textContent = "Show Less";
    } else {
        // Hide again
        cards.forEach((card, index) => {
            if (index >= 3) card.classList.add('hidden');
        });
        btns.textContent = "Show More";
    }
});



const projectCards = document.querySelectorAll('.project-card');
const projectBtn = document.getElementById('show-more-projects');

// Default: sembunyikan setelah 3 card
projectCards.forEach((card, index) => {
    if (index >= 3) card.classList.add('hidden');
});

projectBtn.addEventListener('click', () => {
    const isHidden = projectCards[3].classList.contains('hidden');

    if (isHidden) {
        // Show all
        projectCards.forEach(card => card.classList.remove('hidden'));
        projectBtn.textContent = "Show Less";
    } else {
        // Hide again (sisakan 3)
        projectCards.forEach((card, index) => {
            if (index >= 3) card.classList.add('hidden');
        });
        projectBtn.textContent = "Show More";
    }
});

document.getElementById("year").textContent = new Date().getFullYear();




document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);

    /* ============================
       HOME SECTION ANIMATION
       ============================ */
    
    // Judul utama
    gsap.from(".home-title", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out"
    });

    // Setiap span judul
    gsap.from(".title-part", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.2,
        stagger: 0.15,
        ease: "power3.out"
    });

    // Paragraf home
    gsap.from(".home-subtext", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out"
    });

    // Tombol home
    gsap.from(".home-btn-container", {
        opacity: 0,
        scale: 0.8,
        duration: 1.1,
        delay: 0.8,
        ease: "back.out(1.7)"
    });

    // Ikon scroll home
    gsap.from(".home-scroll", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.1,
        ease: "power2.out"
    });

    /* ============================
       ABOUT SECTION ANIMATION
       ============================ */

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%"
        }
    });

    // Foto
    tl.from(".about-photo", {
        scale: 0.7,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });

    // Glow
    tl.from(".about-glow", {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "power2.out"
    }, "-=1");

    // Ring glossy
    tl.from(".about-ring", {
        opacity: 0,
        rotate: 80,
        duration: 1.2,
        ease: "power2.out"
    }, "-=1");

    // Icon skill
    tl.from(".about-icon", {
        opacity: 0,
        y: -40,
        rotate: 60,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)"
    }, "-=0.8");

    // Text kanan
    tl.from(".about-text p", {
        x: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.5");

    // Tombol kanan
    tl.fromTo(".about-btn",
        { opacity: 0, y: 20 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        }
    );


    // Sosial media
    tl.fromTo(".about-social",
        { opacity: 0, y: 20 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out"
        }
    );


    // Ring animasi berputar infinite
    gsap.to(".about-ring", {
        rotate: 360,
        duration: 25,
        repeat: -1,
        ease: "linear"
    });
    // TIMELINE SKILLS SECTION
    const skillsTL = gsap.timeline({
        scrollTrigger: {
            trigger: "#skills",
            start: "top 80%", // mulai animasi saat top section muncul di 80% viewport
        }
    });

    // Fade-in judul utama
    skillsTL.from("#skills h2", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out"
    });

    // Fade-in subtitle
    skillsTL.from("#skills h3", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out"
    }, "-=0.6"); // overlap dengan judul

    // Fade-in paragraf
    skillsTL.from("#skills p", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out"
    }, "-=0.6");

    // Marquee stack masuk dari kiri
    skillsTL.from(".marquee .track", {
        x: "-100%", // start dari kiri
        opacity: 0.5,
        duration: 1.5,
        ease: "power2.out"
    }, "-=0.5");

    // Optional: shimmer / glow untuk teks subtitle
    gsap.to("#skills h3", {
        backgroundPosition: "200% 0%",
        duration: 3,
        repeat: -1,
        ease: "linear"
    });
    
    const expTL = gsap.timeline({
        scrollTrigger: {
            trigger: "#pengalaman",
            start: "top 80%",
        }
    });

    // Fade-in judul
    expTL.from("#pengalaman h2", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out"
    });

    // Fade-in subtitle
    expTL.from("#pengalaman h3", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out"
    }, "-=0.6");

    // Fade-in paragraf
    expTL.from("#pengalaman p", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out"
    }, "-=0.6");

    // Animasi 3 stats box
    expTL.from("#pengalaman .grid.grid-cols-3 > div", {
        opacity: 0,
        y: 40,
        scale: 0.8,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.5)"
    }, "-=0.5");

    // Animasi card experience
    expTL.from("#experience-wrapper .experience-card", {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    }, "-=0.5");

    // Optional: hover animasi download icon tetap jalan
    gsap.to("#experience-wrapper .experience-card span i", {
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
        paused: true,
        scrollTrigger: {
            trigger: "#pengalaman",
            start: "top 80%",
        }
    });
    const projectsTL = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects",
            start: "top 80%",
        }
    });

    // Fade-in judul
    projectsTL.from("#projects h2", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out"
    });

    // Fade-in subtitle
    projectsTL.from("#projects h3", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out"
    }, "-=0.6");

    // Fade-in paragraph
    projectsTL.from("#projects p", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out"
    }, "-=0.6");

    // Animasi project cards
    projectsTL.from("#project-list", {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    }, "-=0.5");

    const contactTL = gsap.timeline({
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
        }
    });

    // Fade-in judul
    contactTL.from("#contact h2", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out"
    });

    // Fade-in subtitle
    contactTL.from("#contact h3", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out"
    }, "-=0.6");

    // Fade-in contact info (left)
    contactTL.from("#contact .grid > div:first-child .flex", {
        opacity: 0,
        x: -40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    }, "-=0.5");

    // Fade-in contact form (right)
    contactTL.from("#contact .grid > div:last-child form > div", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
    }, "-=0.4");

    // Fade-in submit button
    contactTL.from("#contact button", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "back.out(1.7)"
    }, "-=0.4");


});

