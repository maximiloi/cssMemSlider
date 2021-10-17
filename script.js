const items = document.querySelectorAll('.slider__item');
const bullets = document.querySelectorAll('.slider__bullet');
const texts = document.querySelectorAll('.slider__text');
let activeItem = 0;
let isEnabled = true;

function changeActiveItem(n) {
  activeItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnabled = false;
  items[activeItem].classList.add(direction);
  texts[activeItem].classList.add(direction);
  items[activeItem].addEventListener('animationend', function () {
    this.classList.remove('active', direction);
  });
  texts[activeItem].addEventListener('animationend', function () {
    this.classList.remove('active', direction);
  });
}

function showItem(direction) {
  items[activeItem].classList.add('next', direction);
  texts[activeItem].classList.add('next', direction);
  items[activeItem].addEventListener('animationend', function () {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
  });
  texts[activeItem].addEventListener('animationend', function () {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
  });
}

function changeBulletItem() {
  bullets.forEach(bullet => {
    bullet.classList.remove('active');
  });
  bullets[activeItem].classList.add('active');
}

bullets.forEach((bullet, bulletDot) => {
  bullet.addEventListener('click', () => {

    if (bulletDot > activeItem) {
      if ((isEnabled)) {
        hideItem('to-left');
        changeActiveItem(bulletDot);
        showItem('from-right');
        changeBulletItem();
      }
    } else if (bulletDot < activeItem) {
      if ((isEnabled)) {
        hideItem('to-right');
        changeActiveItem(bulletDot);
        showItem('from-left');
        changeBulletItem();
      }
    }
  });
});