function openSideBar() {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'flex';
}

function closeSideBar() {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'none';
}

function fadeInHomeSection() {
    const homeElements = document.querySelectorAll('#home .fade-in, #home .fade-in-paragraph');
    homeElements.forEach(element => {
        element.classList.add('visible');
    });
}

function fadeInOnScroll() {
    const fadeElements = document.querySelectorAll('section:not(#home) .fade-in');
    const fadeParagraphs = document.querySelectorAll('section:not(#home) .fade-in-paragraph');

    fadeElements.forEach((element, index) => {
        const boundingRect = element.getBoundingClientRect();
        if (
            (boundingRect.top >= 0 && boundingRect.top <= window.innerHeight) ||
            (boundingRect.bottom >= 0 && boundingRect.bottom <= window.innerHeight)
        ) {
            element.classList.add('visible');

            const paragraph = fadeParagraphs[index];
            if (paragraph) {
                setTimeout(() => {
                    paragraph.classList.add('visible');
                }, 500);
            }
        }
    });
}

window.addEventListener('load', fadeInHomeSection);
window.addEventListener('scroll', fadeInOnScroll);
