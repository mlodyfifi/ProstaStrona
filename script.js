function changeColorScroll() {
    const textElement = document.querySelector('.service-h1');
    const arrowElements = document.querySelectorAll('.arrow-icon');
    const arrowElementMains = document.querySelectorAll('.arrow');
    const nextArrows = document.querySelectorAll('.next-arrow');
    const mainHeader = document.querySelector('.main-h1');

    const scrollThreshold = 300;

    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > scrollThreshold;

        if (textElement) {
            textElement.style.setProperty('color', isScrolled ? 'white' : 'black', 'important');
        }

        arrowElements.forEach(arrow => {
            arrow.style.setProperty('color', isScrolled ? 'white' : 'black', 'important');
        });

        arrowElementMains.forEach(arrowMain => {
            arrowMain.style.setProperty('border', isScrolled ? '1px solid white' : '1px solid black', 'important');
        });

        nextArrows.forEach(nextArrow => {
            nextArrow.style.setProperty('color', isScrolled ? 'white' : 'black', 'important');
            nextArrow.style.setProperty('border', isScrolled ? '1px solid white' : '1px solid black', 'important');
        });

        if (mainHeader) {
            mainHeader.style.setProperty('color', isScrolled ? 'white' : 'black', 'important');
        }
    });
}

changeColorScroll();