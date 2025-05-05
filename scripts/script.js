function toggleCard(header) {
    const content = header.querySelector('.toggleText');
    const icon = header.querySelector('.toggleIcon');
    const isOpen = content.classList.toggle('open');

    // Меняем src изображения
    icon.src = isOpen ? './images/minus.svg' : './images/plus.svg';
  }