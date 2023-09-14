// ==UserScript==
// @name         自动关闭腾讯会议页面
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  每次点会议邀请链接都要手动关闭这个浏览器的页面，烦死人。
// @author       You
// @match        https://meeting.tencent.com/dm/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tencent.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  setTimeout(function() {
      window.close()
  }, 3000)
})();
