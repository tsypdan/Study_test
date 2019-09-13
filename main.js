"use strict";

//Получим в строку все css-правила
const cssRules = document.styleSheets[0].cssRules;
const textCss = Object.keys(cssRules).map(key => cssRules[key].cssText).join(',\n\r');

let reg = /(#(?:[\da-f]{3}){1,2}|rgb\((?:\d{1,3},\s*){2}\d{1,3}\)|rgba\((?:\d{1,3},\s*){3}\d*\.?\d+\)|hsl\(\d{1,3}(?:,\s*\d{1,3}%){2}\)|hsla\(\d{1,3}(?:,\s*\d{1,3}%){2},\s*\d*\.?\d+\))/gi;
console.log( textCss.match(reg));

