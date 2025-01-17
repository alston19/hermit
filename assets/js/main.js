/**
 * Utils
 */

// Throttle
//
//const throttle = (callback, limit) => {
//  let timeoutHandler = null;
//  return () => {
//    if (timeoutHandler == null) {
//      timeoutHandler = setTimeout(() => {
//        callback();
//        timeoutHandler = null;
//      }, limit);
//    }
//  };
//};
//
// addEventListener Helper
//
const listen = (ele, e, callback) => {
  if (document.querySelector(ele) !== null) {
    document.querySelector(ele).addEventListener(e, callback);
  }
}

/**
 * Functions
 */

// Auto Hide Header by rolling up/down
//
let header = document.getElementById('site-header');
// let lastScrollPosition = window.pageYOffset;

// const autoHideHeader = () => {
//  let currentScrollPosition = Math.max(window.pageYOffset, 0);
//  if (currentScrollPosition > lastScrollPosition) {
//    header.classList.remove('slideInUp');
//    header.classList.add('slideOutDown');
//  } else {
//    header.classList.remove('slideOutDown');
//    header.classList.add('slideInUp');
//  }
//  lastScrollPosition = currentScrollPosition;
// }

// Auto Hide Header by click on page
const toggleHeader = () => {
    if (mobileMenuVisible == true) return;
    header.classList.toggle('slideInUp');
    header.classList.toggle('slideOutDown');
}


// Mobile Menu Toggle
//
let mobileMenuVisible = false;

const toggleMobileMenu = () => {
  let mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuVisible == false) {
    mobileMenu.style.animationName = 'bounceInRight';
    mobileMenu.style.webkitAnimationName = 'bounceInRight';
    mobileMenu.style.display = 'block';
    mobileMenuVisible = true;
  } else {
    mobileMenu.style.animationName = 'bounceOutRight';
    mobileMenu.style.webkitAnimationName = 'bounceOutRight'
    mobileMenuVisible = false;
  }
}

// Featured Image Toggle
//
const showImg = () => {
  document.querySelector('.bg-img').classList.add('show-bg-img');
}

const hideImg = () => {
  document.querySelector('.bg-img').classList.remove('show-bg-img');
}

// ToC Toggle
//
const toggleToc = () => {
  if(document.getElementById('toc').style.display == 'block'){
    document.getElementById('toc').style.display = 'none';  // classList.toggle('show-toc');
  } else {
    document.getElementById('toc').style.display = 'block';
  }
  document.getElementById('article').classList.toggle('article');
}


if (header !== null) {
  listen('#menu-btn', "click", toggleMobileMenu);
  listen('#toc-btn', "click", toggleToc);
  listen('#img-btn', "click", showImg);
  listen('.bg-img', "click", hideImg);
  // listen('main', "click", toggleHeader);
  listen('#mobile-menu', "click", toggleMobileMenu);

  document.querySelectorAll('.post-year').forEach((ele)=> {
    ele.addEventListener('click', () => {
      window.location.hash = '#' + ele.id;
    });
  });

  document.querySelectorAll('main, main :not(a)').forEach((ele)=> {
    ele.addEventListener('click', function(event){
      if (event.currentTarget !== event.target)
        return;
      toggleHeader();
    }, false);
  });

//  window.addEventListener('scroll', throttle(() => {
//    autoHideHeader();

//    if (mobileMenuVisible == true) {
//      toggleMobileMenu();
//    }
//  }, 250));
}
