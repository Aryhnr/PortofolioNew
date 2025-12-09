
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

