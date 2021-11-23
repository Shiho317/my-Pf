'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const JumpToContents = document.querySelectorAll('a[href^="#"]');
  const JumpToContentsArr = Array.prototype.slice.call(JumpToContents);

  JumpToContentsArr.forEach(content => {
    content.addEventListener('click', e => {
      e.preventDefault();
      const targetId = content.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = window.pageYOffset = targetElement.getBoundingClientRect().top;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth"
      });
    });
  });
});

const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navMenu = document.querySelector('.top-nav');
const container = document.querySelector('.container');

const OpenBtn = () => {
  navMenu.classList.remove('hidden');
  container.classList.remove('hidden');
}

const CloseBtn = () => {
  navMenu.classList.add('hidden');
  container.classList.add('hidden');
}

openBtn.addEventListener('click', OpenBtn);
closeBtn.addEventListener('click', CloseBtn);

const menuList = document.querySelectorAll('.top-nav li');

menuList.forEach(list => {
  list.addEventListener('click', CloseBtn);
});

