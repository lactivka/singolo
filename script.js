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
const HEADER =document.getElementById('h1');
const MENU = document.getElementById('menu');
const MENU_ITEMS = document.getElementById('menu_items');
let  MENU_BAR = document.getElementById('menu_bar');

let i = 0;

let arr = [];
  for (let i = 0; i < 12; i++) {
    arr.push(i);
  }

// hide mobile menu when screen size increase to 768px and more
window.addEventListener('resize', () => {
  console.log(event);
  if (document.documentElement.clientWidth >= 768) {
    if (!MENU.classList.contains('opacity')) {
      MENU.classList.add('opacity');
      HEADER.classList.remove('opacity');
    }
  }
})

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

  if (event.target.getAttribute('href') !== null) {
    HREFS.forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
  }
});

// set active menu element on click
MENU_ITEMS.addEventListener('click', (event) => {

  if (event.target.getAttribute('href') !== null) {
    MENU_ITEMS.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    MENU.classList.add('opacity');
    HEADER.classList.remove('opacity');
  }
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
});

// set active portfolio tag element on click
LINKS.addEventListener('click', (event) => {

  LINKS.querySelectorAll('a').forEach(el => el.classList.remove('link_selected'));
  event.target.classList.add('link_selected');

  // shuffle images in portfolio block
  let imgArr = COLLECTION.querySelectorAll('.portfolio-image');
  shuffle(arr);
  arr.forEach(el => COLLECTION.appendChild(imgArr[el]));
});

function shuffle(arr) {

  var j, x, i;

  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }

  return arr;
}

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

// show menu
document.getElementById('menu_show').addEventListener('click', () => {
  MENU.classList.toggle('opacity');
  HEADER.classList.toggle('opacity');
});

// hide menu
document.getElementById('menu_hide').addEventListener('click', () => {
  MENU.classList.toggle('opacity');
  HEADER.classList.toggle('opacity');
});

// reset form when modal window close
CLOSE_BUTTON.addEventListener('click', () => {
  FORM.reset();
})

// hide menu when click is not on menu bar
MENU.addEventListener('click',(event) => {
  if (!MENU_BAR.contains(event.target) && !MENU.classList.contains('opacity')) {
    MENU.classList.add('opacity');
    HEADER.classList.remove('opacity');
  }
});


