!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i"),i=document.querySelector(".form"),a=document.querySelector('[name="delay"]'),u=document.querySelector('[name="step"]'),c=document.querySelector('[name="amount"]');i.addEventListener("submit",(function(e){var n=function(e){var n,t;(n=e,t=o,new Promise((function(e,o){setTimeout((function(){Math.random()>.3?e({position:n,delay:t}):o({position:n,delay:t})}),t)}))).then((function(n){n.position;var o=n.delay;r.Notify.success("✅ Fulfilled promise ".concat(e," in ").concat(o,"ms"))})).catch((function(n){n.position;var o=n.delay;r.Notify.failure("❌ Rejected promise ".concat(e," in ").concat(o,"ms"))})),o+=u.valueAsNumber};e.preventDefault();for(var o=a.valueAsNumber,t=1;t<=c.valueAsNumber;t+=1)n(t)}))}();
//# sourceMappingURL=03-promises.ee3159ad.js.map
