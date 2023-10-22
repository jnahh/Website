function reply_click(clicked_id) {
    if(clicked_id == "t1-more") {
        document.getElementById('sec-two').scrollIntoView({
            behavior: 'smooth'
        });
    }
}

const sections = document.querySelectorAll('.sec');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (rect.top >= 0 && rect.bottom <= window.innerHeight);
}

function handleScroll() {
    alert("1")
    sections.forEach((section, index) => {
        alert("2")
        if (isInViewport(section)) {
            alert("3")
            // Fügen Sie hier Ihre Animationslogik für die jeweilige Sektion hinzu
            console.log(`Sektion ${index + 1} ist im Viewport.`);
        }
    });
}