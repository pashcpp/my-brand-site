// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Пример: поведение кнопок «Купить»
  const buyButtons = document.querySelectorAll('.product-card .btn');
  buyButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Здесь будет оформление покупки или переход на корзину!');
    });
  });
});
