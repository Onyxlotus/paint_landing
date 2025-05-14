function updateCheckCardText() {
    const isMobile = window.innerWidth <= 768;

    document.querySelectorAll('.checkCardMob').forEach(card => {
        const p = card.querySelector('p');
        if (!p) return;

        const mobileText = card.getAttribute('data-mobile');
        const desktopText = card.getAttribute('data-desktop');

        if (isMobile && mobileText) {
            p.textContent = mobileText;
        } else if (!isMobile && desktopText) {
            p.textContent = desktopText;
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Сохраняем изначальный текст как data-desktop
    document.querySelectorAll('.checkCardMob').forEach(card => {
        const p = card.querySelector('p');
        if (p && !card.hasAttribute('data-desktop')) {
            card.setAttribute('data-desktop', p.textContent.trim());
        }
    });

    updateCheckCardText();
});

window.addEventListener("resize", updateCheckCardText);