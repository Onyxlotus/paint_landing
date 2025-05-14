function toggleCard(header) {
  const content = header.querySelector('.toggleText');
  const icon = header.querySelector('.toggleIcon');
  const isOpen = content.classList.toggle('open');
  const card = header;

  // Меняем иконку
  icon.src = isOpen ? './images/minus.svg' : './images/plus.svg';

  // Добавляем/удаляем класс для управления стилями
  card.classList.toggle('bigWhiteCard--open', isOpen);
}