document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});
function updateYear() {
    const yearSpan = document.querySelector('.copyright .year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Call the function when the page loads
updateYear();
function updateScrollbarColor() {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollPosition / documentHeight;

   
    const colors = ['#261aca', '#4ecdc4', '#ff6b6b'];
    
    
    const colorIndex = Math.floor(scrollPercentage * (colors.length - 1));
    const color1 = colors[colorIndex];
    const color2 = colors[Math.min(colorIndex + 1, colors.length - 1)];
    const colorPercentage = (scrollPercentage * (colors.length - 1)) % 1;

   
    const r = Math.round(parseInt(color1.slice(1, 3), 16) * (1 - colorPercentage) + parseInt(color2.slice(1, 3), 16) * colorPercentage);
    const g = Math.round(parseInt(color1.slice(3, 5), 16) * (1 - colorPercentage) + parseInt(color2.slice(3, 5), 16) * colorPercentage);
    const b = Math.round(parseInt(color1.slice(5, 7), 16) * (1 - colorPercentage) + parseInt(color2.slice(5, 7), 16) * colorPercentage);

    const newColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

    document.documentElement.style.setProperty('--scrollbar-color', newColor);
}


window.addEventListener('scroll', updateScrollbarColor);


updateScrollbarColor();

