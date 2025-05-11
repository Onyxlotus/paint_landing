function toggleCard(header) {
    const content = header.querySelector('.toggleText');
    const icon = header.querySelector('.toggleIcon');
    const isOpen = content.classList.toggle('open');
    const card = header;

    // Меняем src изображения
    icon.src = isOpen ? './images/minus.svg' : './images/plus.svg';
      // Плавная анимация через max-height (если хочешь фиксированную высоту — можно вернуть height)
    card.style.padding = isOpen ? '66px 60px 66px 90px' : '40px 60px 44px 90px';
    card.style.maxHeight = isOpen ? '272px' : '140px';
  }