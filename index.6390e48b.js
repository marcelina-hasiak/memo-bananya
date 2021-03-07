!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(0);function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(t,r,n){var a,i,s,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s=function(e){if(null===o.temporaryRevealedTilesState.timeoutID){var t=o.temporaryRevealedTilesState.revealedTiles;if(o.revealTile(e.target,t),2===t.length){var r=o.subscribers.checkIsPair(t);o.subscribers.updatePlayerStats(r),o.delayRevealing(r,t,1e3)}}},(i="handleTileRevealing")in(a=this)?Object.defineProperty(a,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[i]=s,this.render(t,r,n),this.subscribers=null,this.temporaryRevealedTilesState={revealedTiles:[],timeoutID:null}}var t,r,a;return t=e,(r=[{key:"render",value:function(e,t,r){var n=document.querySelector(t);switch(e){case"first render":this.deleteNodeChildrenExeptLastOne(n),this.hideFooterImage();break;case"render from board":this.deleteNodeBySelector([".board--js"]);break;case"render from endgame":this.deleteNodeBySelector([".game-over--js"])}var a=this.createBoard();this.createTiles(a,r),this.attachToContainer(n,a)}},{key:"createBoard",value:function(){var e=document.createElement("section");return e.classList.add("board","board--js"),e.addEventListener("click",this.handleTileRevealing),e}},{key:"createTiles",value:function(e,t){var r=this;t.forEach((function(t){e.append(r.createTile(t))}))}},{key:"createTile",value:function(e){var t=e.tileId,r=e.srcImage,n=document.createElement("div");n.classList.add("board__tile-container"),n.setAttribute("data-id","".concat(t)),n.setAttribute("tabindex","1");var a=document.createElement("div");a.classList.add("board__tile","board__tile--back");var i=document.createElement("div");return i.classList.add("board__tile","board__tile--front"),i.style.backgroundImage="url(".concat(r,")"),n.append(a,i),n}},{key:"attachToContainer",value:function(e,t){e.prepend(t)}},{key:"hideFooterImage",value:function(){document.querySelector(".footer__images--js").classList.add("remove")}},{key:"deleteNodeChildren",value:function(e){for(var t=e.children.length;t>0;t--)e.children[t-1].remove()}},{key:"deleteNodeBySelector",value:function(e){for(var t=0;t<e.length;t++)document.querySelector(e[t]).remove()}},{key:"deleteNodeChildrenExeptLastOne",value:function(e){for(var t=e.children.length;t>0;t--)t!==e.children.length&&e.children[t-1].remove()}},{key:"delayRevealing",value:function(e,t,r){var n=this;this.temporaryRevealedTilesState.timeoutID=setTimeout((function(){e?(t.forEach((function(e){return n.fadeOutAnimation(e)})),n.subscribers.checkIsWinner()):(t.forEach((function(e){return e.classList.remove("is-flipped")})),n.subscribers.changeToNextPlayer()),t.length=0,clearInterval(n.temporaryRevealedTilesState.timeoutID),n.temporaryRevealedTilesState.timeoutID=null}),r)}},{key:"revealTile",value:function(e,t){var r=e.closest(".board__tile-container");this.canTileBeRevealed(r)&&(r.classList.add("is-flipped"),t.push(r))}},{key:"canTileBeRevealed",value:function(e){var t=null!==e,r=e&&e.classList.contains("is-flipped");return t&&!r}},{key:"fadeOutAnimation",value:function(e){var t=e.animate({opacity:[1,0]},500);t.onfinish=function(){Array.from(e.children).forEach((function(e){return e.remove()}))}}},{key:"subscribe",value:function(e){this.subscribers=e}}])&&n(t.prototype,r),a&&n(t,a),e}();function i(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var o=function(e){for(var t=i(e),r=t.length-1;r>0;r--){var n=Math.floor(Math.random()*(r+1)),a=t[r];t[r]=t[n],t[n]=a}return t};function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var y,v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.initialBoard=t,this.boardView=null,this.shuffledBoard=null,this.subscribers={}}var t,r,n;return t=e,(r=[{key:"renderBoard",value:function(e){var t=this;this.stopCoveringTilesAnimation(),this.shuffledBoard=o(this.initialBoard),this.boardView=new a(e,".application--js",this.shuffledBoard),this.boardView.subscribe({checkIsPair:function(e){return t.checkIsPair(e)},updatePlayerStats:function(e){return t.updatePlayerStats(e)},changeToNextPlayer:function(){return t.changeToNextPlayer()},checkIsWinner:function(){return t.checkIsWinner()}})}},{key:"stopCoveringTilesAnimation",value:function(){this.boardView&&this.boardView.temporaryRevealedTilesState.timeoutID&&clearInterval(this.boardView.temporaryRevealedTilesState.timeoutID)}},{key:"checkIsPair",value:function(e){var t=d(e,2),r=t[0],n=t[1],a=this.findTile(r),i=this.findTile(n),s=a.isPair(i);return s&&this.deletePairedTilesFromBoard([a,i]),s}},{key:"findTile",value:function(e){return this.shuffledBoard.find((function(t){return t.tileId===e.dataset.id}))}},{key:"deletePairedTilesFromBoard",value:function(e){var t=this;e.forEach((function(e){var r=t.shuffledBoard.indexOf(e);t.shuffledBoard.splice(r,1)}))}},{key:"updatePlayerStats",value:function(e){this.subscribers.updatePlayerStats(e)}},{key:"changeToNextPlayer",value:function(){this.subscribers.changeToNextPlayer()}},{key:"checkIsWinner",value:function(){0===this.shuffledBoard.length&&this.subscribers.onGameOver()}},{key:"subscribe",value:function(e){this.subscribers=l(l({},this.subscribers),e)}}])&&p(t.prototype,r),n&&p(t,n),e}(),h=new Uint8Array(16);function b(){if(!y&&!(y="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(h)}var g=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var m=function(e){return"string"==typeof e&&g.test(e)},w=[],P=0;P<256;++P)w.push((P+256).toString(16).substr(1));var k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(w[e[t+0]]+w[e[t+1]]+w[e[t+2]]+w[e[t+3]]+"-"+w[e[t+4]]+w[e[t+5]]+"-"+w[e[t+6]]+w[e[t+7]]+"-"+w[e[t+8]]+w[e[t+9]]+"-"+w[e[t+10]]+w[e[t+11]]+w[e[t+12]]+w[e[t+13]]+w[e[t+14]]+w[e[t+15]]).toLowerCase();if(!m(r))throw TypeError("Stringified UUID is invalid");return r};var E=function(e,t,r){var n=(e=e||{}).random||(e.rng||b)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var a=0;a<16;++a)t[r+a]=n[a];return t}return k(n)};function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t){var r=t.get(e);if(!r)throw new TypeError("attempted to get private field on non-instance");return r.get?r.get.call(e):r.value}function S(e,t,r){var n=t.get(e);if(!n)throw new TypeError("attempted to set private field on non-instance");if(n.set)n.set.call(e,r);else{if(!n.writable)throw new TypeError("attempted to set read only private field");n.value=r}return r}var _=new WeakMap,C=new WeakMap,B=new WeakMap,N=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),_.set(this,{writable:!0,value:void 0}),C.set(this,{writable:!0,value:void 0}),B.set(this,{writable:!0,value:void 0}),S(this,_,r),S(this,C,t),S(this,B,E())}var t,r,n;return t=e,(r=[{key:"isPair",value:function(e){return this.dataPair===e.dataPair}},{key:"srcImage",get:function(){return j(this,_)}},{key:"dataPair",get:function(){return j(this,C)}},{key:"tileId",get:function(){return j(this,B)}}])&&O(t.prototype,r),n&&O(t,n),e}();function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var L=[r.p+"img/tile-1.4945c8fb.png",r.p+"img/tile-2.071d5015.png",r.p+"img/tile-3.3bb98337.png",r.p+"img/tile-4.4d95e843.png",r.p+"img/tile-5.009c6f16.png",r.p+"img/tile-6.aba2ad3b.png",r.p+"img/tile-7.fbfde16c.png",r.p+"img/tile-8.77cfc3d5.png",r.p+"img/tile-9.7aa02ec2.png",r.p+"img/tile-10.3cbd44ed.png",r.p+"img/tile-11.856cfba4.png",r.p+"img/tile-12.6469e58a.png",r.p+"img/tile-13.2160f7ae.png",r.p+"img/tile-14.2bfca864.png",r.p+"img/tile-15.7b3979f8.png",r.p+"img/tile-16.b0164f81.png",r.p+"img/tile-17.d3ecaf39.png",r.p+"img/tile-18.f003e9d5.png",r.p+"img/tile-19.3e7206ce.png",r.p+"img/tile-20.b3016ed1.png"],V=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n;return t=e,(r=[{key:"getBoard",value:function(e){switch(e){case"easy":return new v(this.createBoard(2));case"medium":return new v(this.createBoard(30));case"hard":return new v(this.createBoard(40))}}},{key:"createBoard",value:function(e){var t=new Array(e/2).fill(null),r=o(L);return t.map((function(e,t){return[new N(t+1,r[t]),new N(t+1,r[t])]})).flat()}}])&&T(t.prototype,r),n&&T(t,n),e}();function A(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e,t){var r=t.get(e);if(!r)throw new TypeError("attempted to get private field on non-instance");return r.get?r.get.call(e):r.value}function M(e,t,r){var n=t.get(e);if(!n)throw new TypeError("attempted to set private field on non-instance");if(n.set)n.set.call(e,r);else{if(!n.writable)throw new TypeError("attempted to set read only private field");n.value=r}return r}var x=new WeakMap,R=new WeakMap,D=new WeakMap,W=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),x.set(this,{writable:!0,value:void 0}),R.set(this,{writable:!0,value:void 0}),D.set(this,{writable:!0,value:void 0}),M(this,x,0),M(this,R,0),M(this,D,"")}var t,r,n;return t=e,(r=[{key:"addMoves",value:function(){M(this,x,+I(this,x)+1)}},{key:"addPoints",value:function(){M(this,R,+I(this,R)+1)}},{key:"playerMoves",set:function(e){M(this,x,e)},get:function(){return I(this,x)}},{key:"playerPoints",set:function(e){M(this,R,e)},get:function(){return I(this,R)}},{key:"playerName",set:function(e){M(this,D,e)},get:function(){return I(this,D)}}])&&A(t.prototype,r),n&&A(t,n),e}(),q=r.p+"img/btn-back.8268e4b1.svg",F=r.p+"img/btn-refresh.4739e5c1.svg";function H(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var U=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.render(t,r),this.subscribers=null}var t,r,n;return t=e,(r=[{key:"render",value:function(e,t){switch(t){case"first render":var r=this.createNodes();this.attachToContainer(e,r);break;case"render from endgame":this.deleteNodeBySelector([".player-panel--js"]);var n=this.createNodes();this.attachToContainer(e,n)}}},{key:"createNodes",value:function(){var e=this.createPlayerPanelContainer();return this.createPlayerPanelController(e),e}},{key:"createPlayerPanelContainer",value:function(){var e=document.createElement("section");return e.classList.add("player-panel","player-panel--js"),e}},{key:"createPlayerPanelController",value:function(e){e.append(this.createEscapeButton()),e.append(this.createPlayerStats()),e.append(this.createRefreshButton())}},{key:"createPlayerStats",value:function(){var e=document.createElement("div");return e.classList.add("player-panel__stats-wrapper"),this.playerStatsActivePlayer=document.createElement("h2"),this.playerStatsActivePlayer.classList.add("player-panel__active-player"),this.playerStatsMoves=document.createElement("p"),this.playerStatsMoves.classList.add("player-panel__stats","player-panel__stats--points-js"),this.playerStatsRevealedPairs=document.createElement("p"),this.playerStatsRevealedPairs.classList.add("player-panel__stats","player-panel__stats--moves-js"),e.append(this.playerStatsActivePlayer,this.playerStatsMoves,this.playerStatsRevealedPairs),e}},{key:"createEscapeButton",value:function(){var e=this,t=document.createElement("button");t.classList.add("btn-back","btn-back--js"),t.addEventListener("click",(function(){return e.subscribers.onEscapeButtonEvent()}));var r=document.createElement("img");return r.classList.add("full-size"),r.setAttribute("src",q),t.appendChild(r),t}},{key:"createRefreshButton",value:function(){var e=this,t=document.createElement("button");t.classList.add("btn-refresh","btn-refresh--js"),t.addEventListener("click",(function(){return e.subscribers.onRefreshButtonEvent()}));var r=document.createElement("img");return r.classList.add("full-size"),r.setAttribute("src",F),t.appendChild(r),t}},{key:"deleteNodeBySelector",value:function(e){for(var t=0;t<e.length;t++)document.querySelector(e[t]).remove()}},{key:"updateStats",value:function(e,t,r){this.updateName(e),this.updateMoves(t),this.updatePoints(r)}},{key:"updateMoves",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.playerStatsMoves.textContent="MOVES: ".concat(e)}},{key:"updatePoints",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.playerStatsRevealedPairs.textContent="REVEALD PAIRS: ".concat(e)}},{key:"updateName",value:function(e){this.playerStatsActivePlayer.textContent="".concat(e," MOVES NOW")}},{key:"attachToContainer",value:function(e,t){document.querySelector(e).append(t)}},{key:"subscribe",value:function(e){this.subscribers=e}}])&&H(t.prototype,r),n&&H(t,n),e}();function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function $(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var J=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.players=this.getPlayers(t),this.activePlayer=this.players[0],this.subscribeToBoardEvents(r),this.subscribers={}}var t,r,n;return t=e,(r=[{key:"getPlayers",value:function(e){for(var t=[],r=0;r<e;r++)t.push(new W);return t}},{key:"setPlayersNames",value:function(e){this.players.forEach((function(t,r){return t.playerName=e[r]}))}},{key:"renderPlayers",value:function(e){var t=this;this.playersView=new U(".application--js",e),this.playersView.updateStats(this.activePlayer.playerName),this.playersView.subscribe({onEscapeButtonEvent:function(){return t.onEscapeButtonEvent()},onRefreshButtonEvent:function(){return t.onRefreshButtonEvent()}})}},{key:"subscribeToBoardEvents",value:function(e){var t=this;e.subscribe({changeToNextPlayer:function(){return t.changeToNextPlayer()},updatePlayerStats:function(e){return t.updatePlayerStats(e)}})}},{key:"changeToNextPlayer",value:function(){if(this.players.length>1){var e=this.players.indexOf(this.activePlayer);this.activePlayer=e===this.players.length-1?this.activePlayer=this.players[0]:this.activePlayer=this.players[e+1],this.playersView.updateStats(this.activePlayer.playerName,this.activePlayer.playerMoves,this.activePlayer.playerPoints)}}},{key:"updatePlayerStats",value:function(e){this.activePlayer.addMoves(),this.playersView.updateMoves(this.activePlayer.playerMoves),e&&(this.activePlayer.addPoints(),this.playersView.updatePoints(this.activePlayer.playerPoints))}},{key:"onEscapeButtonEvent",value:function(){this.subscribers.onEscapeButtonEvent()}},{key:"onRefreshButtonEvent",value:function(){this.players.forEach((function(e){e.playerMoves=0,e.playerPoints=0})),this.activePlayer=this.players[0],this.playersView.updateStats(this.activePlayer.playerName),this.subscribers.onRefreshButtonEvent()}},{key:"getWinnerStats",value:function(){var e=[];this.players.forEach((function(t){return e.push(t.playerPoints)}));var t=Math.max.apply(Math,e);return this.players.filter((function(e){return e.playerPoints===t}))}},{key:"subscribe",value:function(e){this.subscribers=G(G({},this.subscribers),e)}}])&&$(t.prototype,r),n&&$(t,n),e}(),K=r.p+"img/chatting-bananya.7a7738c2.svg",Q=r.p+"img/bananya-title.da539836.svg",X=r.p+"img/bananya-subtitle.adc0eaa0.svg";function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){re(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function te(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function re(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ne=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.render(t,r),this.subscribers={}}var t,r,n;return t=e,(r=[{key:"render",value:function(e,t){switch(e){case"first render":this.createNodes(t);break;case"render from settings":var r=this.removeChildren(t);this.createSettingsButtons(r);break;case"render from board":this.revealFooterImage(),this.deleteNodeBySelector([".board--js",".player-panel--js"]),this.createNodes(t);break;case"render from endgame":this.revealFooterImage(),this.deleteNodeBySelector([".player-panel--js",".game-over"]),this.createNodes(t)}this.changeSettingsHeader()}},{key:"createNodes",value:function(e){var t=this.createAppHeader(),r=this.createSettingsHeader(),n=this.createSettingsBody();this.createSettingsButtons(n);var a=this.createSettingsContainer(r,n);this.attachToContainer(e,t,a)}},{key:"createAppHeader",value:function(){var e=document.createElement("header");e.classList.add("application__header","application__header--js");var t=document.createElement("h1");t.classList.add("application-heading");var r=document.createElement("img");r.classList.add("application-heading__logo"),r.setAttribute("src",Q),r.setAttribute("alt","Bananya memo game.");var n=document.createElement("img");return n.classList.add("application-heading__subtitle"),n.setAttribute("src",X),n.setAttribute("alt",""),t.append(r,n),e.append(t),e}},{key:"createSettingsHeader",value:function(){var e=document.createElement("div");e.classList.add("settings__header");var t=document.createElement("img");t.classList.add("settings__bananya","settings__bananya--js"),t.setAttribute("src",K);var r=document.createElement("h2");return r.classList.add("settings__title","settings__title--js"),e.append(t,r),e}},{key:"createSettingsBody",value:function(){var e=document.createElement("div");return e.classList.add("settings__body","settings__body--js"),e}},{key:"removeChildren",value:function(e){var t=document.querySelector(e);return this.deleteNodeChildren(t),t}},{key:"createSettingsButtons",value:function(e){e.append(this.createSettingsButton("EASY","easy")),e.append(this.createSettingsButton("MEDIUM","medium")),e.append(this.createSettingsButton("HARD","hard",!0))}},{key:"createSettingsButton",value:function(e,t,r){var n=this,a=document.createElement("button");return a.classList.add("settings__button","settings__button--js"),a.setAttribute("data-level",t),a.textContent=e,r&&a.classList.add("settings__button--last-without-margin"),a.addEventListener("click",(function(){n.subscribers.getCurrentBoard(t),n.subscribers.getPlayersNumberView()})),a}},{key:"createSettingsContainer",value:function(e,t){var r=document.createElement("section");return r.classList.add("application__body","application__body--js","settings"),r.append(e,t),r}},{key:"attachToContainer",value:function(e,t,r){document.querySelector(e).append(t,r)}},{key:"changeSettingsHeader",value:function(){document.querySelector(".settings__title--js").textContent=e.settingTitle,document.querySelector(".settings__bananya--js").setAttribute("alt","Bananya presenting heading in speech bubble. Choose your level.")}},{key:"revealFooterImage",value:function(){document.querySelector(".footer__images--js").classList.remove("remove")}},{key:"deleteNodeBySelector",value:function(e){for(var t=0;t<e.length;t++)document.querySelector(e[t]).remove()}},{key:"deleteNodeChildren",value:function(e){for(var t=e.children.length;t>0;t--)e.children[t-1].remove()}},{key:"subscribe",value:function(e){this.subscribers=ee(ee({},this.subscribers),e)}}])&&te(t.prototype,r),n&&te(t,n),e}();re(ne,"settingTitle","CHOOSE YOUR LEVEL");var ae=ne;function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){ce(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function oe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ce(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var le=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.render(t,r),this.subscribers={}}var t,r,n;return t=e,(r=[{key:"render",value:function(e,t){var r=document.querySelector(t);switch(e){case"first render":this.deleteNodeChildren(r),this.createSettingsButtons(r),r.append(this.createEscapeButton());break;case"render from settings":var n=r.querySelector(".btn-back--js");this.deleteNodeChildrenExeptLastOne(r),this.createSettingsButtons(r),this.replaceEventListeners(n)}this.changeSettingsHeader()}},{key:"createSettingsButtons",value:function(e){return e.prepend(this.createSettingsButton("YES","2players",!0)),e.prepend(this.createSettingsButton("NO","1player")),e}},{key:"createSettingsButton",value:function(e,t,r){var n=this,a=document.createElement("button");return a.setAttribute("data-playersNumber",t),a.textContent=e,a.classList.add("settings__button","settings__button--js"),r&&a.classList.add("settings__button--last-with-margin"),a.addEventListener("click",(function(){n.subscribers.getPlayersController(t),n.subscribers.getPlayersNameView(t)})),a}},{key:"createEscapeButton",value:function(){var e=this,t=document.createElement("button");t.classList.add("btn-back","settings__button-back","btn-back--js");var r=document.createElement("img");return r.classList.add("full-size"),r.setAttribute("src",q),r.setAttribute("alt","Previous."),t.append(r),t.addEventListener("click",(function(){e.subscribers.onEscapeButtonEvent()})),t}},{key:"replaceEventListeners",value:function(e){var t=this,r=e.cloneNode(!0);return e.replaceWith(r),r.addEventListener("click",(function(){t.subscribers.onEscapeButtonEvent()})),r}},{key:"changeSettingsHeader",value:function(){document.querySelector(".settings__title--js").textContent=e.settingTitle,document.querySelector(".settings__bananya--js").setAttribute("alt","Bananya presenting heading in speech bubble. Any friends with you?")}},{key:"deleteNodeChildren",value:function(e){for(var t=e.children.length;t>0;t--)e.children[t-1].remove()}},{key:"deleteNodeChildrenExeptLastOne",value:function(e){for(var t=e.children.length;t>0;t--)t!==e.children.length&&e.children[t-1].remove()}},{key:"subscribe",value:function(e){this.subscribers=se(se({},this.subscribers),e)}}])&&oe(t.prototype,r),n&&oe(t,n),e}();ce(le,"settingTitle","ANY FRIENDS WITH YOU?");var ue=le;function de(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function fe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?de(Object(r),!0).forEach((function(t){ye(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):de(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function pe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ye(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ve=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.render(t,r),this.subscribers={}}var t,r,n;return t=e,(r=[{key:"render",value:function(e,t){var r=document.querySelector(e);this.deleteNodeChildrenExeptLastOne(r),this.createForm(r,t);var n=r.querySelector(".btn-back--js");this.replaceEventListeners(n),this.changeTitle(t)}},{key:"createForm",value:function(e,t){var r=this,n=document.createElement("form");n.classList.add("settings-form");for(var a=0;a<t;a++)n.appendChild(this.createInput("PLAYER ".concat(a+1," NAME"),0===a));n.append(this.createFormButton()),n.addEventListener("submit",(function(e){e.preventDefault();var t=Array.from(n.querySelectorAll(".settings-form__input--js")).map((function(e,t){return""===e.value?"Player ".concat(t+1):e.value}));r.subscribers.setPlayersNames(t),r.subscribers.getPlayersControllerView(),r.subscribers.getBoardView()})),e.prepend(n)}},{key:"createInput",value:function(e,t){var r=document.createElement("p");r.classList.add("settings-form__field"),t&&r.classList.add("settings-form__field--take-all-space");var n=document.createElement("label");n.textContent=e;var a=document.createElement("input");return a.setAttribute("type","text"),a.setAttribute("maxlength","8"),a.classList.add("settings-form__input","settings-form__input--js"),n.appendChild(a),r.appendChild(n),r}},{key:"createFormButton",value:function(){var e=document.createElement("button");return e.textContent="PLAY!",e.classList.add("btn-go"),e}},{key:"replaceEventListeners",value:function(e){var t=this,r=e.cloneNode(!0);return e.replaceWith(r),r.addEventListener("click",(function(){t.subscribers.onEscapeButtonEvent()})),r}},{key:"changeTitle",value:function(t){var r=document.querySelector(".settings__title--js"),n=document.querySelector(".settings__bananya--js");t>1?(r.textContent=e.settingTitleMultiplayer,n.setAttribute("alt","Bananya presenting heading in speech bubble. Gimmie your names!")):(r.textContent=e.settingTitle,n.setAttribute("alt","Bananya presenting heading in speech bubble. Gimmie your name!"))}},{key:"deleteNodeChildrenExeptLastOne",value:function(e){for(var t=e.children.length;t>0;t--)t!==e.children.length&&e.children[t-1].remove()}},{key:"subscribe",value:function(e){this.subscribers=fe(fe({},this.subscribers),e)}}])&&pe(t.prototype,r),n&&pe(t,n),e}();ye(ve,"settingTitle","GIMMIE YOUR NAME!"),ye(ve,"settingTitleMultiplayer","GIMMIE YOUR NAMES!");var he=ve,be=r.p+"img/congrats.e810e6de.svg";function ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(r),!0).forEach((function(t){we(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ge(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function we(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Pe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var ke=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.render(t,r),this.subscribers={}}var t,r,n;return t=e,(r=[{key:"render",value:function(e,t){var r=document.querySelector(".btn-back--js"),n=document.querySelector(".btn-refresh--js"),a=document.querySelector(t);this.deleteNodeChildrenExeptLastOne(a),this.replaceEventListeners(r,"onEscapeButtonEvent"),this.replaceEventListeners(n,"onRefreshButtonEvent"),this.updateWinnerPanel(e),this.createWinnerCongrats(a)}},{key:"deleteNodeChildrenExeptLastOne",value:function(e){for(var t=e.children.length;t>0;t--)t!==e.children.length&&e.children[t-1].remove()}},{key:"replaceEventListeners",value:function(e,t){var r=this,n=e.cloneNode(!0);e.replaceWith(n),n.addEventListener("click",(function(){r.subscribers[t]()}))}},{key:"updateWinnerPanel",value:function(e){document.querySelector(".player-panel__active-player").textContent=this.printWinner(e),document.querySelector(".player-panel__stats--points-js").textContent=this.printPoints(e),document.querySelector(".player-panel__stats--moves-js").textContent=this.printPoints(e)}},{key:"printWinner",value:function(e){var t=e.length>1,r=e[0].playerName,n=e.reduce((function(e,t){return"".concat(e.playerName," and ").concat(t.playerName)}));return t?"".concat(n," WIN !!!"):"".concat(r," WINS !!!")}},{key:"printPoints",value:function(e){var t=e[0].playerPoints;return"WITH ".concat(t," POINTS")}},{key:"printMoves",value:function(e){var t=e[0].playerMoves;return"IN ".concat(t," MOVES")}},{key:"createWinnerCongrats",value:function(e){var t=document.createElement("section");t.classList.add("game-over","game-over--js");var r=document.createElement("h2");r.classList.add("game-over__congrats");var n=document.createElement("img");n.classList.add("full-size"),n.setAttribute("src",be),n.setAttribute("alt","Congrats.");var a=document.createElement("div");a.classList.add("game-over__poster"),r.append(n),t.append(r,a),this.attachToContainer(e,t)}},{key:"attachToContainer",value:function(e,t){e.prepend(t)}},{key:"subscribe",value:function(e){this.subscribers=me(me({},this.subscribers),e)}}])&&Pe(t.prototype,r),n&&Pe(t,n),e}();function Ee(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var Oe=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n;return t=e,(r=[{key:"getLevelView",value:function(e){return this.levelView=new ae(e,".application--js"),this.levelView}},{key:"getPlayersNumberView",value:function(e){var t=this;return this.playersNumber=new ue(e,".settings__body--js"),this.playersNumber.subscribe({onEscapeButtonEvent:function(){return t.levelView.render("render from settings",".settings__body--js")}}),this.playersNumber}},{key:"getPlayersNamesView",value:function(e){var t=this;return this.playersNamesView=new he(".settings__body--js",e),this.playersNamesView.subscribe({onEscapeButtonEvent:function(){return t.playersNumber.render("render from settings",".settings__body--js")}}),this.playersNamesView}},{key:"getWinnerView",value:function(e){var t=this;return this.winnerView=new ke(e,".application--js"),this.winnerView.subscribe({onEscapeButtonEvent:function(){return t.levelView.render("render from endgame",".application--js")}}),this.winnerView}}])&&Ee(t.prototype,r),n&&Ee(t,n),e}();function je(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.views=new Oe,this.getLevelView()}var t,r,n;return t=e,(r=[{key:"getLevelView",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"first render",r=this.views.getLevelView(t);r.subscribe({getCurrentBoard:function(t){return e.getCurrentBoard(t)},getPlayersNumberView:function(){return e.getPlayersNumberView()}})}},{key:"getCurrentBoard",value:function(e){var t=this,r=new V;this.board=r.getBoard(e),this.board.subscribe({onGameOver:function(){return t.getWinnerView()}})}},{key:"getWinnerView",value:function(){var e=this,t=this.playerController.getWinnerStats();this.views.getWinnerView(t).subscribe({onRefreshButtonEvent:function(){e.getBoardView("render from endgame"),e.getPlayersControllerView("render from endgame")}})}},{key:"getPlayersNumberView",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"first render",r=this.views.getPlayersNumberView(t);r.subscribe({getPlayersController:function(t){return e.getPlayersController(t)},getPlayersNameView:function(t){return e.getPlayersNameView(t)}})}},{key:"getPlayersController",value:function(e){var t=this,r=this.parsePlayersNumber(e);this.playerController=new J(r,this.board),this.playerController.subscribe({onEscapeButtonEvent:function(){return t.getLevelView("render from board")},onRefreshButtonEvent:function(){t.getBoardView("render from board")}})}},{key:"getPlayersNameView",value:function(e){var t=this,r=this.parsePlayersNumber(e);this.views.getPlayersNamesView(r).subscribe({setPlayersNames:function(e){return t.setPlayersNames(e)},getBoardView:function(){return t.getBoardView()},getPlayersControllerView:function(){return t.getPlayersControllerView()}})}},{key:"setPlayersNames",value:function(e){this.playerController.setPlayersNames(e)}},{key:"getPlayersControllerView",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"first render";this.playerController.renderPlayers(e)}},{key:"getBoardView",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"first render";this.board.renderBoard(e)}},{key:"parsePlayersNumber",value:function(e){return parseInt(e[0])}}])&&je(t.prototype,r),n&&je(t,n),e}())}]);