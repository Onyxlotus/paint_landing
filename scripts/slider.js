const reviews = [
    {
      avatar: './images/commentAva.png',
      comment: 'Euismod magna id purus eget nunc ligula suspendisse...',
      name: 'Holly Davidson'
    },
    {
      avatar: './images/commentAva.png',
      comment: 'Lacus aenean egestas convallis vel amet vitae nulla.',
      name: 'James Miller'
    },
    {
      avatar: './images/commentAva.png',
      comment: 'Aliquet dignissim turpis placerat gravida feugiat suspendisse.',
      name: 'Sarah Connor'
    }
  ];

  let currentIndex = 0;

function showReview(index) {
  const avatar = document.querySelector('.avatar');
  const comment = document.querySelector('.comment');
  const name = document.querySelector('.name');

  // Добавляем fade-out
  avatar.classList.add('fade-out');
  comment.classList.add('fade-out');
  name.classList.add('fade-out');

  // После окончания fade-out (400 мс) меняем контент и показываем снова
  setTimeout(() => {
    avatar.src = reviews[index].avatar;
    comment.textContent = reviews[index].comment;
    name.textContent = reviews[index].name;

    // Убираем fade-out (возвращаем прозрачность)
    avatar.classList.remove('fade-out');
    comment.classList.remove('fade-out');
    name.classList.remove('fade-out');
  }, 400);
}

// Стрелки
document.querySelector('.leftArrow').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  showReview(currentIndex);
});

document.querySelector('.rightArrow').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % reviews.length;
  showReview(currentIndex);
});

// Инициализация с fade
document.addEventListener('DOMContentLoaded', () => {
  const avatar = document.querySelector('.avatar');
  const comment = document.querySelector('.comment');
  const name = document.querySelector('.name');

  avatar.classList.add('fade');
  comment.classList.add('fade');
  name.classList.add('fade');

  showReview(currentIndex);
});