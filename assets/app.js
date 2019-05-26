// Toggle responsive navigation on small screens
function toggleNav(e) {
    const nav = document.querySelector('.nav');

    if (nav.className === 'nav') {
        nav.className += ' responsive';
    } else {
        nav.className = 'nav';
    }

    e.preventDefault();
}

// Toggle active class
const menuItem = document.querySelectorAll('.language-btn');

for(let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', function() {
        const current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
    });
}