const NAVIGATION = document.getElementById('navigation');
const LEFT = document.getElementById('left');
const RIGHT = document.getElementById('right');
const IPHONE_VERTICAL = document.getElementById('iphone_vertical');
const IPHONE_HORIZONTAL = document.getElementById('iphone_horizontal');
const SCREEN_LEFT = document.getElementById('screen_left');
const SCREEN_RIGHT = document.getElementById('screen_right');
const CLOSE_BUTTON = document.getElementById('close-btn');
const FORM = document.getElementById('form');

// set active navigation bar element on click
NAVIGATION.addEventListener('click', (event) => {
  NAVIGATION.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});

// change slide after arrow click
LEFT.addEventListener('click', () => {
  document.querySelectorAll('.slide').forEach(el => el.classList.toggle('opacity'));
});

RIGHT.addEventListener('click', () => {
  document.querySelectorAll('.slide').forEach(el => el.classList.toggle('opacity'));
});

// turn on/off left phone screen
IPHONE_VERTICAL.addEventListener('click', () => {
  SCREEN_LEFT.classList.toggle('opacity');
});

SCREEN_LEFT.addEventListener('click', () => {
  SCREEN_LEFT.classList.toggle('opacity');
})

// turn on/off right phone screen
IPHONE_HORIZONTAL.addEventListener('click', () => {
  SCREEN_RIGHT.classList.toggle('opacity');
});

SCREEN_RIGHT.addEventListener('click', () => {
  SCREEN_RIGHT.classList.toggle('opacity');
});

FORM.addEventListener('submit', (event) => {
  event.preventDefault();

  const subject = document.getElementById('subject').value.toString();
  const describe = document.getElementById('describe').value.toString();
  console.log(subject, describe);
  subject === '' ?  document.getElementById('subject_result').innerText = 'Без темы' : document.getElementById('subject_result').innerText = 'Тема: ' + subject;
  describe === '' ?  document.getElementById('describe_result').innerText = 'Без описания' : document.getElementById('describe_result').innerText = 'Описание: ' + describe;
  document.getElementById('message-block').classList.remove('opacity');

  CLOSE_BUTTON.addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('subject_result').innerText = '';
  document.getElementById('message-block').classList.add('opacity');
})

  document.getElementById('form').reset();
});


