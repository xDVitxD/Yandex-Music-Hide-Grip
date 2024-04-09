// ==UserScript==
// @name           Yandex Music Hide Progress Bar Grip
// @version        v0.1
// @description    Hides progress bar grip on Yandex Music, by changing style display to 'none'
// @author         xDVitxD
// @match          https://music.yandex.ru/*
// @icon           https://music.yandex.ru/favicon32.png
// @homepageURL    https://github.com/ilyhalight/voice-over-translation/issues
// @updateURL      https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot.user.js
// @downloadURL    https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot.user.js
// @supportURL     https://github.com/ilyhalight/voice-over-translation/issues
// ==/UserScript==

(function() {
    'use strict';

     var Timer = setTimeout(function() {
         var Items = document.body.getElementsByClassName("progress__line__branding");
         if (Items.length > 0)
         {
		     Items[0].style.display = "none";
             clearTimeout(Timer);
         }
     }, 100);
})();
