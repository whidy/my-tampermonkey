// ==UserScript==
// @name         APEUNI
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  隐藏logo，偷偷学习
// @author       You
// @match        https://www.apeuni.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=apeuni.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  setTimeout(() => {
      const logo = document.querySelector('.Header__MenuMain-sc-1oxa4vc-22 > a')
      const ad = document.querySelector('._3-ThuGWKBsyGLsIYug-lyE')
      logo.style.display = 'none'
      ad.style.display = 'none'
  }, 1000)
  // Your code here...
})();
