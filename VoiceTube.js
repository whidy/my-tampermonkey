// ==UserScript==
// @name         VoiceTube
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  上班摸鱼学英语，屏蔽视频的div，保留字幕，边听边看。
// @author       You
// @match        https://*.voicetube.com/videos/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=voicetube.com
// @grant        none
// ==/UserScript==

(function() {
  "use strict";
  const videoIframe = document.querySelector(".video-iframe");
  videoIframe.style.opacity = 0;
  document.querySelector("header").style.display = "none";
  document.querySelector("aside").style.marginTop = "600px";
  document.querySelector(".video-subtitles").style.marginTop = "730px";
  document.querySelector(".container").style.marginTop = "-600px";
  document.querySelector(".controls").style.position = "absolute";
  document.querySelector(".controls").style.bottom = "-240px";
  document.querySelector(".controls").style.width = "600px";
})();


