// Toggle responsive navigation on small screens
function toggleNav() {
    const nav = document.querySelector('.nav');

    if (nav.className === 'nav') {
        nav.className += ' responsive';
    } else {
        nav.className = 'nav';
    }

    console.log('click');
}