'use strict';
const categories = document.querySelectorAll('.item');
const title = document.querySelectorAll('h2');
console.log(`Number of categories: ${categories.length}`);
title.forEach(el => {
  console.log(`Category: ${el.textContent}`);
  console.log(el.nextElementSibling.children.length);
});
