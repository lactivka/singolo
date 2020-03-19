const NAVIGATION = document.getElementById('navigation');
const HREFS = NAVIGATION.querySelectorAll('a');
const LEFT = document.getElementById('left');
const RIGHT = document.getElementById('right');
const BTN_LEFT = document.getElementById('btn_left');
const BTN_RIGHT = document.getElementById('btn_right');
const SCREEN_LEFT = document.getElementById('screen_left');
const SCREEN_RIGHT = document.getElementById('screen_right');
const CLOSE_BUTTON = document.getElementById('close-btn');
const FORM = document.getElementById('form');
const LINKS = document.getElementById('links');
const COLLECTION = document.getElementById('collection');

let i = 0;

// change active navigation bar element on scroll
document.addEventListener('scroll', () => {
  const curPos = window.scrollY;
  const sections = document.querySelectorAll('section');

  sections.forEach((el) => {

    if ((el.offsetTop - 1) <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
      HREFS.forEach((a) => {
        a.classList.remove('active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('active');
        }
      });
    }
  });
});

// set active navigation bar element on click
NAVIGATION.addEventListener('click', (event) => {
  HREFS.forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');

});

// change slide when arrow clicked
RIGHT.addEventListener('click', () => {

  document.querySelectorAll('.slide').forEach(el => {
    if(el.classList.contains('opacity')) {
        el.classList.remove('opacity');
        setTimeout(() => {
          el.classList.add('z-index');
        }, 1200);

    } else {

      el.style.left = 1020 + 'px';
      setTimeout(() => {
        el.classList.remove('z-index');
        el.classList.add('opacity');
        el.style.left = 0 + 'px';
      }, 1000);
    }
  })
});

LEFT.addEventListener('click', () => {

  document.querySelectorAll('.slide').forEach(el => {
    if(el.classList.contains('opacity')) {
      el.classList.remove('opacity');
      setTimeout(() => {
        el.classList.add('z-index');
      }, 1200);

    } else {
      el.style.left = -1020 + 'px';
      setTimeout(() => {
        el.classList.remove('z-index');
        el.classList.add('opacity');
        el.style.left = 0 + 'px';
      }, 1000);
    }
  })
});

// turn on/off left phone screen
BTN_LEFT.addEventListener('click', () => {
  SCREEN_LEFT.classList.toggle('opacity');
});

// turn on/off right phone screen
BTN_RIGHT.addEventListener('click', () => {
  SCREEN_RIGHT.classList.toggle('opacity');
});

// send form and show popup window
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

// set active portfolio tag element on click
LINKS.addEventListener('click', (event) => {

  LINKS.querySelectorAll('a').forEach(el => el.classList.remove('link_selected'));
  event.target.classList.add('link_selected');

  if(COLLECTION.querySelector('.img_selected') != null) {
    COLLECTION.querySelector('.img_selected').classList.remove('img_selected');
  }

  i++;
  let length = 12;

  COLLECTION.querySelectorAll('.portfolio-image').forEach(el => {
    let n = length - (i % length);
    el.classList.remove(el.classList[1]);
    el.classList.add(`image${n}`);
    console.log(el.classList);
    i++;
  })
});

// make portfolio image selected
COLLECTION.addEventListener('click', (event) => {
  if(event.target.classList.contains('img_selected')) {
    event.target.classList.remove('img_selected');
  } else {
    if(event.target.classList.contains('portfolio-image')) {
      COLLECTION.querySelectorAll('span').forEach(el => el.classList.remove('img_selected'));
      event.target.classList.add('img_selected');
    }
  }
});



