!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(0);function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(t,r,n){var a,i,s,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s=function(e){if(null===o.temporaryRevealedTilesState.timeoutID){var t=o.temporaryRevealedTilesState.revealedTiles;if(o.revealTile(e.target,t),2===t.length){var r=o.subscribers.checkIsPair(t);o.subscribers.updatePlayerStats(r),o.delayRevealing(r,t,1e3)}}},(i="handleTileRevealing")in(a=this)?Object.defineProperty(a,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[i]=s,this.render(t,r,n),this.subscribers=null,this.temporaryRevealedTilesState={revealedTiles:[],timeoutID:null}}var t,r,a;return t=e,(r=[{key:"render",value:function(e,t,r){var n=document.querySelector(t);switch(e){case"first render":this.deleteNodeChildrenExeptLastOne(n),this.hideFooterImage();break;case"render from board":this.deleteNodeBySelector([".board--js"]);break;case"render from endgame":this.deleteNodeBySelector([".game-over--js"])}var a=this.createBoard();this.createTiles(a,r),this.attachToContainer(n,a)}},{key:"createBoard",value:function(){var e=document.createElement("section");return e.classList.add("board","board--js"),e.addEventListener("click",this.handleTileRevealing),e}},{key:"createTiles",value:function(e,t){var r=this;t.forEach((function(t){e.append(r.createTile(t))}))}},{key:"createTile",value:function(e){var t=e.tileId,r=e.srcImage,n=document.createElement("div");n.classList.add("board__tile-container"),n.setAttribute("data-id","".concat(t));var a=document.createElement("div");a.classList.add("board__tile","board__tile--back");var i=document.createElement("div");return i.classList.add("board__tile","board__tile--front"),i.style.backgroundImage="url(".concat(r,")"),n.append(a,i),n}},{key:"attachToContainer",value:function(e,t){e.prepend(t)}},{key:"hideFooterImage",value:function(){document.querySelector(".footer__images--js").classList.add("remove")}},{key:"deleteNodeChildren",value:function(e){for(var t=e.children.length;t>0;t--)e.children[t-1].remove()}},{key:"deleteNodeBySelector",value:function(e){for(var t=0;t<e.length;t++)document.querySelector(e[t]).remove()}},{key:"deleteNodeChildrenExeptLastOne",value:function(e){for(var t=e.children.length;t>0;t--)t!==e.children.length&&e.children[t-1].remove()}},{key:"delayRevealing",value:function(e,t,r){var n=this;this.temporaryRevealedTilesState.timeoutID=setTimeout((function(){e?(t.forEach((function(e){return n.fadeOutAnimation(e)})),n.subscribers.checkIsWinner()):(t.forEach((function(e){return e.classList.remove("is-flipped")})),n.subscribers.changeToNextPlayer()),t.length=0,clearInterval(n.temporaryRevealedTilesState.timeoutID),n.temporaryRevealedTilesState.timeoutID=null}),r)}},{key:"revealTile",value:function(e,t){var r=e.closest(".board__tile-container");this.canTileBeRevealed(r)&&(r.classList.add("is-flipped"),t.push(r))}},{key:"canTileBeRevealed",value:function(e){var t=null!==e,r=e&&e.classList.contains("is-flipped");return t&&!r}},{key:"fadeOutAnimation",value:function(e){var t=e.animate({opacity:[1,0]},500);t.onfinish=function(){Array.from(e.children).forEach((function(e){return e.remove()}))}}},{key:"subscribe",value:function(e){this.subscribers=e}}])&&n(t.prototype,r),a&&n(t,a),e}();function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}return r}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var y,v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.initialBoard=t,this.boardView=null,this.shuffledBoard=null,this.subscribers={}}var t,r,n;return t=e,(r=[{key:"renderBoard",value:function(e){var t=this;this.stopCoveringTilesAnimation(),this.shuffleTiles(),this.boardView=new a(e,".application--js",this.shuffledBoard),this.boardView.subscribe({checkIsPair:function(e){return t.checkIsPair(e)},updatePlayerStats:function(e){return t.updatePlayerStats(e)},changeToNextPlayer:function(){return t.changeToNextPlayer()},checkIsWinner:function(){return t.checkIsWinner()}})}},{key:"stopCoveringTilesAnimation",value:function(){this.boardView&&this.boardView.temporaryRevealedTilesState.timeoutID&&clearInterval(this.boardView.temporaryRevealedTilesState.timeoutID)}},{key:"shuffleTiles",value:function(){for(var e=l(this.initialBoard),t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}this.shuffledBoard=e}},{key:"checkIsPair",value:function(e){var t=c(e,2),r=t[0],n=t[1],a=this.findTile(r),i=this.findTile(n),s=a.isPair(i);return s&&this.deletePairedTilesFromBoard([a,i]),s}},{key:"findTile",value:function(e){return this.shuffledBoard.find((function(t){return t.tileId===e.dataset.id}))}},{key:"deletePairedTilesFromBoard",value:function(e){var t=this;e.forEach((function(e){var r=t.shuffledBoard.indexOf(e);t.shuffledBoard.splice(r,1)}))}},{key:"updatePlayerStats",value:function(e){this.subscribers.updatePlayerStats(e)}},{key:"changeToNextPlayer",value:function(){this.subscribers.changeToNextPlayer()}},{key:"checkIsWinner",value:function(){0===this.shuffledBoard.length&&this.subscribers.onGameOver()}},{key:"subscribe",value:function(e){this.subscribers=s(s({},this.subscribers),e)}}])&&f(t.prototype,r),n&&f(t,n),e}(),p=new Uint8Array(16);function h(){if(!y&&!(y="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(p)}var b=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var m=function(e){return"string"==typeof e&&b.test(e)},g=[],w=0;w<256;++w)g.push((w+256).toString(16).substr(1));var P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(g[e[t+0]]+g[e[t+1]]+g[e[t+2]]+g[e[t+3]]+"-"+g[e[t+4]]+g[e[t+5]]+"-"+g[e[t+6]]+g[e[t+7]]+"-"+g[e[t+8]]+g[e[t+9]]+"-"+g[e[t+10]]+g[e[t+11]]+g[e[t+12]]+g[e[t+13]]+g[e[t+14]]+g[e[t+15]]).toLowerCase();if(!m(r))throw TypeError("Stringified UUID is invalid");return r};var k=function(e,t,r){var n=(e=e||{}).random||(e.rng||h)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var a=0;a<16;++a)t[r+a]=n[a];return t}return P(n)};function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(e,t){var r=t.get(e);if(!r)throw new TypeError("attempted to get private field on non-instance");return r.get?r.get.call(e):r.value}function j(e,t,r){var n=t.get(e);if(!n)throw new TypeError("attempted to set private field on non-instance");if(n.set)n.set.call(e,r);else{if(!n.writable)throw new TypeError("attempted to set read only private field");n.value=r}return r}var S=new WeakMap,_=new WeakMap,C=new WeakMap,B=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),S.set(this,{writable:!0,value:void 0}),_.set(this,{writable:!0,value:void 0}),C.set(this,{writable:!0,value:void 0}),j(this,S,"./src/assets/img/tile-".concat(t,".png")),j(this,_,t),j(this,C,k())}var t,r,n;return t=e,(r=[{key:"isPair",value:function(e){return this.dataPair===e.dataPair}},{key:"srcImage",get:function(){return O(this,S)}},{key:"dataPair",get:function(){return O(this,_)}},{key:"tileId",get:function(){return O(this,C)}}])&&E(t.prototype,r),n&&E(t,n),e}();function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var T=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n;return t=e,(r=[{key:"getBoard",value:function(e){switch(e){case"easy":return new v(this.createBoard(2));case"medium":return new v(this.createBoard(30));case"hard":return new v(this.createBoard(40))}}},{key:"createBoard",value:function(e){return new Array(e/2).fill(null).map((function(e,t){return[new B(t+1),new B(t+1)]})).flat()}}])&&N(t.prototype,r),n&&N(t,n),e}();function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function V(e,t){var r=t.get(e);if(!r)throw new TypeError("attempted to get private field on non-instance");return r.get?r.get.call(e):r.value}function A(e,t,r){var n=t.get(e);if(!n)throw new TypeError("attempted to set private field on non-instance");if(n.set)n.set.call(e,r);else{if(!n.writable)throw new TypeError("attempted to set read only private field");n.value=r}return r}var I=new WeakMap,M=new WeakMap,x=new WeakMap,R=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),I.set(this,{writable:!0,value:void 0}),M.set(this,{writable:!0,value:void 0}),x.set(this,{writable:!0,value:void 0}),A(this,I,0),A(this,M,0),A(this,x,"")}var t,r,n;return t=e,(r=[{key:"addMoves",value:function(){A(this,I,+V(this,I)+1)}},{key:"addPoints",value:function(){A(this,M,+V(this,M)+1)}},{key:"playerMoves",set:function(e){A(this,I,e)},get:function(){return V(this,I)}},{key:"playerPoints",set:function(e){A(this,M,e)},get:function(){return V(this,M)}},{key:"playerName",set:function(e){A(this,x,e)},get:function(){return V(this,x)}}])&&L(t.prototype,r),n&&L(t,n),e}();function D(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var W=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.render(t,r),this.subscribers=null}var t,r,n;return t=e,(r=[{key:"render",value:function(e,t){switch(t){case"first render":var r=this.createNodes();this.attachToContainer(e,r);break;case"render from endgame":this.deleteNodeBySelector([".player-panel--js"]);var n=this.createNodes();this.attachToContainer(e,n)}}},{key:"createNodes",value:function(){var e=this.createPlayerPanelContainer();return this.createPlayerPanelController(e),e}},{key:"createPlayerPanelContainer",value:function(){var e=document.createElement("section");return e.classList.add("player-panel","player-panel--js"),e}},{key:"createPlayerPanelController",value:function(e){e.append(this.createEscapeButton()),e.append(this.createPlayerStats()),e.append(this.createRefreshButton())}},{key:"createPlayerStats",value:function(){var e=document.createElement("div");return e.classList.add("player-panel__stats-wrapper"),this.playerStatsActivePlayer=document.createElement("h2"),this.playerStatsActivePlayer.classList.add("player-panel__active-player"),this.playerStatsMoves=document.createElement("p"),this.playerStatsMoves.classList.add("player-panel__stats","player-panel__stats--points-js"),this.playerStatsRevealedPairs=document.createElement("p"),this.playerStatsRevealedPairs.classList.add("player-panel__stats","player-panel__stats--moves-js"),e.append(this.playerStatsActivePlayer,this.playerStatsMoves,this.playerStatsRevealedPairs),e}},{key:"createEscapeButton",value:function(){var e=this,t=document.createElement("button");t.classList.add("btn-back","btn-back--js"),t.addEventListener("click",(function(){return e.subscribers.onEscapeButtonEvent()}));var r=document.createElement("img");return r.classList.add("full-size"),r.setAttribute("src","./src/assets/img/btn-back.svg"),t.appendChild(r),t}},{key:"createRefreshButton",value:function(){var e=this,t=document.createElement("button");t.classList.add("btn-refresh","btn-refresh--js"),t.addEventListener("click",(function(){return e.subscribers.onRefreshButtonEvent()}));var r=document.createElement("img");return r.classList.add("full-size"),r.setAttribute("src","./src/assets/img/btn-refresh.svg"),t.appendChild(r),t}},{key:"deleteNodeBySelector",value:function(e){for(var t=0;t<e.length;t++)document.querySelector(e[t]).remove()}},{key:"updateStats",value:function(e,t,r){this.updateName(e),this.updateMoves(t),this.updatePoints(r)}},{key:"updateMoves",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.playerStatsMoves.textContent="MOVES: ".concat(e)}},{key:"updatePoints",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.playerStatsRevealedPairs.textContent="REVEALD PAIRS: ".concat(e)}},{key:"updateName",value:function(e){this.playerStatsActivePlayer.textContent="".concat(e," MOVES NOW")}},{key:"attachToContainer",value:function(e,t){document.querySelector(e).append(t)}},{key:"subscribe",value:function(e){this.subscribers=e}}])&&D(t.prototype,r),n&&D(t,n),e}();function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){H(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function U(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var Y=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.players=this.getPlayers(t),this.activePlayer=this.players[0],this.subscribeToBoardEvents(r),this.subscribers={}}var t,r,n;return t=e,(r=[{key:"getPlayers",value:function(e){for(var t=[],r=0;r<e;r++)t.push(new R);return t}},{key:"setPlayersNames",value:function(e){this.players.forEach((function(t,r){return t.playerName=e[r]}))}},{key:"renderPlayers",value:function(e){var t=this;this.playersView=new W(".application--js",e),this.playersView.updateStats(this.activePlayer.playerName),this.playersView.subscribe({onEscapeButtonEvent:function(){return t.onEscapeButtonEvent()},onRefreshButtonEvent:function(){return t.onRefreshButtonEvent()}})}},{key:"subscribeToBoardEvents",value:function(e){var t=this;e.subscribe({changeToNextPlayer:function(){return t.changeToNextPlayer()},updatePlayerStats:function(e){return t.updatePlayerStats(e)}})}},{key:"changeToNextPlayer",value:function(){if(this.players.length>1){var e=this.players.indexOf(this.activePlayer);this.activePlayer=e===this.players.length-1?this.activePlayer=this.players[0]:this.activePlayer=this.players[e+1],this.playersView.updateStats(this.activePlayer.playerName,this.activePlayer.playerMoves,this.activePlayer.playerPoints)}}},{key:"updatePlayerStats",value:function(e){this.activePlayer.addMoves(),this.playersView.updateMoves(this.activePlayer.playerMoves),e&&(this.activePlayer.addPoints(),this.playersView.updatePoints(this.activePlayer.playerPoints))}},{key:"onEscapeButtonEvent",value:function(){this.subscribers.onEscapeButtonEvent()}},{key:"onRefreshButtonEvent",value:function(){this.players.forEach((function(e){e.playerMoves=0,e.playerPoints=0})),this.activePlayer=this.players[0],this.playersView.updateStats(this.activePlayer.playerName),this.subscribers.onRefreshButtonEvent()}},{key:"getWinnerStats",value:function(){var e=[];this.players.forEach((function(t){return e.push(t.playerPoints)}));var t=Math.max.apply(Math,e);return this.players.filter((function(e){return e.playerPoints===t}))}},{key:"subscribe",value:function(e){this.subscribers=F(F({},this.subscribers),e)}}])&&U(t.prototype,r),n&&U(t,n),e}();function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){J(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function J(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var K=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.render(t,r),this.subscribers={}}var t,r,n;return t=e,(r=[{key:"render",value:function(e,t){switch(e){case"first render":this.createNodes(t);break;case"render from settings":var r=this.removeChildren(t);this.createSettingsButtons(r);break;case"render from board":this.revealFooterImage(),this.deleteNodeBySelector([".board--js",".player-panel--js"]),this.createNodes(t);break;case"render from endgame":this.revealFooterImage(),this.deleteNodeBySelector([".player-panel--js",".game-over"]),this.createNodes(t)}this.changeSettingsHeader()}},{key:"createNodes",value:function(e){var t=this.createAppHeader(),r=this.createSettingsHeader(),n=this.createSettingsBody();this.createSettingsButtons(n);var a=this.createSettingsContainer(r,n);this.attachToContainer(e,t,a)}},{key:"createAppHeader",value:function(){var e=document.createElement("header");e.classList.add("application__header","application__header--js");var t=document.createElement("h1");t.classList.add("application-heading");var r=document.createElement("img");r.classList.add("application-heading__logo"),r.setAttribute("src","./src/assets/img/bananya-title.svg"),r.setAttribute("alt","Bananya memo game.");var n=document.createElement("img");return n.classList.add("application-heading__subtitle"),n.setAttribute("src","./src/assets/img/bananya-subtitle.svg"),n.setAttribute("alt",""),t.append(r,n),e.append(t),e}},{key:"createSettingsHeader",value:function(){var e=document.createElement("div");e.classList.add("settings__header");var t=document.createElement("img");t.classList.add("settings__bananya","settings__bananya--js"),t.setAttribute("src","./src/assets/img/chatting-bananya.svg");var r=document.createElement("h2");return r.classList.add("settings__title","settings__title--js"),e.append(t,r),e}},{key:"createSettingsBody",value:function(){var e=document.createElement("div");return e.classList.add("settings__body","settings__body--js"),e}},{key:"removeChildren",value:function(e){var t=document.querySelector(e);return this.deleteNodeChildren(t),t}},{key:"createSettingsButtons",value:function(e){e.append(this.createSettingsButton("EASY","easy")),e.append(this.createSettingsButton("MEDIUM","medium")),e.append(this.createSettingsButton("HARD","hard",!0))}},{key:"createSettingsButton",value:function(e,t,r){var n=this,a=document.createElement("button");return a.classList.add("settings__button","settings__button--js"),a.setAttribute("data-level",t),a.textContent=e,r&&a.classList.add("settings__button--last"),a.addEventListener("click",(function(){n.subscribers.getCurrentBoard(t),n.subscribers.getPlayersNumberView()})),a}},{key:"createSettingsContainer",value:function(e,t){var r=document.createElement("section");return r.classList.add("application__body","application__body--js","settings"),r.append(e,t),r}},{key:"attachToContainer",value:function(e,t,r){document.querySelector(e).append(t,r)}},{key:"changeSettingsHeader",value:function(){document.querySelector(".settings__title--js").textContent=e.settingTitle,document.querySelector(".settings__bananya--js").setAttribute("alt","Bananya presenting heading in speech bubble. Choose your level.")}},{key:"revealFooterImage",value:function(){document.querySelector(".footer__images--js").classList.remove("remove")}},{key:"deleteNodeBySelector",value:function(e){for(var t=0;t<e.length;t++)document.querySelector(e[t]).remove()}},{key:"deleteNodeChildren",value:function(e){for(var t=e.children.length;t>0;t--)e.children[t-1].remove()}},{key:"subscribe",value:function(e){this.subscribers=z(z({},this.subscribers),e)}}])&&$(t.prototype,r),n&&$(t,n),e}();J(K,"settingTitle","CHOOSE YOUR LEVEL");var Q=K;function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){te(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ee(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function te(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var re=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.render(t,r),this.subscribers={}}var t,r,n;return t=e,(r=[{key:"render",value:function(e,t){var r=document.querySelector(t);switch(e){case"first render":this.deleteNodeChildren(r),this.createSettingsButtons(r),r.append(this.createEscapeButton());break;case"render from settings":var n=r.querySelector(".btn-back--js");this.deleteNodeChildrenExeptLastOne(r),this.createSettingsButtons(r),this.replaceEventListeners(n)}this.changeSettingsHeader()}},{key:"createSettingsButtons",value:function(e){return e.prepend(this.createSettingsButton("YES","2players",!0)),e.prepend(this.createSettingsButton("NO","1player")),e}},{key:"createSettingsButton",value:function(e,t,r){var n=this,a=document.createElement("button");return a.setAttribute("data-playersNumber",t),a.textContent=e,a.classList.add("settings__button","settings__button--js"),r&&a.classList.add("settings__button--last"),a.addEventListener("click",(function(){n.subscribers.getPlayersController(t),n.subscribers.getPlayersNameView(t)})),a}},{key:"createEscapeButton",value:function(){var e=this,t=document.createElement("button");t.classList.add("btn-back","settings__button-back","btn-back--js");var r=document.createElement("img");return r.classList.add("full-size"),r.setAttribute("src","./src/assets/img/btn-back.svg"),r.setAttribute("alt","Previous."),t.append(r),t.addEventListener("click",(function(){e.subscribers.onEscapeButtonEvent()})),t}},{key:"replaceEventListeners",value:function(e){var t=this,r=e.cloneNode(!0);return e.replaceWith(r),r.addEventListener("click",(function(){t.subscribers.onEscapeButtonEvent()})),r}},{key:"changeSettingsHeader",value:function(){document.querySelector(".settings__title--js").textContent=e.settingTitle,document.querySelector(".settings__bananya--js").setAttribute("alt","Bananya presenting heading in speech bubble. Any friends with you?")}},{key:"deleteNodeChildren",value:function(e){for(var t=e.children.length;t>0;t--)e.children[t-1].remove()}},{key:"deleteNodeChildrenExeptLastOne",value:function(e){for(var t=e.children.length;t>0;t--)t!==e.children.length&&e.children[t-1].remove()}},{key:"subscribe",value:function(e){this.subscribers=Z(Z({},this.subscribers),e)}}])&&ee(t.prototype,r),n&&ee(t,n),e}();te(re,"settingTitle","ANY FRIENDS WITH YOU?");var ne=re;function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){oe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function se(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function oe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ce=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.render(t,r),this.subscribers={}}var t,r,n;return t=e,(r=[{key:"render",value:function(e,t){var r=document.querySelector(e);this.deleteNodeChildrenExeptLastOne(r),this.createForm(r,t);var n=r.querySelector(".btn-back--js");this.replaceEventListeners(n),this.changeTitle(t)}},{key:"createForm",value:function(e,t){var r=this,n=document.createElement("form");n.classList.add("settings-form");for(var a=0;a<t;a++)n.appendChild(this.createInput("PLAYER ".concat(a+1," NAME")));n.append(this.createFormButton()),n.addEventListener("submit",(function(e){e.preventDefault();var t=Array.from(n.querySelectorAll(".settings-form__input--js")).map((function(e,t){return""===e.value?"Player ".concat(t+1):e.value}));r.subscribers.setPlayersNames(t),r.subscribers.getPlayersControllerView(),r.subscribers.getBoardView()})),e.prepend(n)}},{key:"createInput",value:function(e){var t=document.createElement("p");t.classList.add("settings-form__field");var r=document.createElement("label");r.textContent=e;var n=document.createElement("input");return n.setAttribute("type","text"),n.setAttribute("maxlength","8"),n.classList.add("settings-form__input","settings-form__input--js"),r.appendChild(n),t.appendChild(r),t}},{key:"createFormButton",value:function(){var e=document.createElement("button");return e.textContent="PLAY!",e.classList.add("btn-go"),e}},{key:"replaceEventListeners",value:function(e){var t=this,r=e.cloneNode(!0);return e.replaceWith(r),r.addEventListener("click",(function(){t.subscribers.onEscapeButtonEvent()})),r}},{key:"changeTitle",value:function(t){var r=document.querySelector(".settings__title--js"),n=document.querySelector(".settings__bananya--js");t>1?(r.textContent=e.settingTitleMultiplayer,n.setAttribute("alt","Bananya presenting heading in speech bubble. Gimmie your names!")):(r.textContent=e.settingTitle,n.setAttribute("alt","Bananya presenting heading in speech bubble. Gimmie your name!"))}},{key:"deleteNodeChildrenExeptLastOne",value:function(e){for(var t=e.children.length;t>0;t--)t!==e.children.length&&e.children[t-1].remove()}},{key:"subscribe",value:function(e){this.subscribers=ie(ie({},this.subscribers),e)}}])&&se(t.prototype,r),n&&se(t,n),e}();oe(ce,"settingTitle","GIMMIE YOUR NAME!"),oe(ce,"settingTitleMultiplayer","GIMMIE YOUR NAMES!");var le=ce;function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function de(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(r),!0).forEach((function(t){fe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function fe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ye(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var ve=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.render(t,r),this.subscribers={}}var t,r,n;return t=e,(r=[{key:"render",value:function(e,t){var r=document.querySelector(".btn-back--js"),n=document.querySelector(".btn-refresh--js"),a=document.querySelector(t);this.deleteNodeChildrenExeptLastOne(a),this.replaceEventListeners(r,"onEscapeButtonEvent"),this.replaceEventListeners(n,"onRefreshButtonEvent"),this.updateWinnerPanel(e),this.createWinnerCongrats(a)}},{key:"deleteNodeChildrenExeptLastOne",value:function(e){for(var t=e.children.length;t>0;t--)t!==e.children.length&&e.children[t-1].remove()}},{key:"replaceEventListeners",value:function(e,t){var r=this,n=e.cloneNode(!0);e.replaceWith(n),n.addEventListener("click",(function(){r.subscribers[t]()}))}},{key:"updateWinnerPanel",value:function(e){document.querySelector(".player-panel__active-player").textContent=this.printWinner(e),document.querySelector(".player-panel__stats--points-js").textContent=this.printPoints(e),document.querySelector(".player-panel__stats--moves-js").textContent=this.printPoints(e)}},{key:"printWinner",value:function(e){var t=e.length>1,r=e[0].playerName,n=e.reduce((function(e,t){return"".concat(e.playerName," and ").concat(t.playerName)}));return t?"".concat(n," WIN !!!"):"".concat(r," WINS !!!")}},{key:"printPoints",value:function(e){var t=e[0].playerPoints;return"WITH ".concat(t," POINTS")}},{key:"printMoves",value:function(e){var t=e[0].playerMoves;return"IN ".concat(t," MOVES")}},{key:"createWinnerCongrats",value:function(e){var t=document.createElement("section");t.classList.add("game-over","game-over--js");var r=document.createElement("h2");r.classList.add("game-over__congrats");var n=document.createElement("img");n.classList.add("full-size"),n.setAttribute("src","./src/assets/img/congrats.svg"),n.setAttribute("alt","Congrats.");var a=document.createElement("div");a.classList.add("game-over__poster"),r.append(n),t.append(r,a),this.attachToContainer(e,t)}},{key:"attachToContainer",value:function(e,t){e.prepend(t)}},{key:"subscribe",value:function(e){this.subscribers=de(de({},this.subscribers),e)}}])&&ye(t.prototype,r),n&&ye(t,n),e}();function pe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var he=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n;return t=e,(r=[{key:"getLevelView",value:function(e){return this.levelView=new Q(e,".application--js"),this.levelView}},{key:"getPlayersNumberView",value:function(e){var t=this;return this.playersNumber=new ne(e,".settings__body--js"),this.playersNumber.subscribe({onEscapeButtonEvent:function(){return t.levelView.render("render from settings",".settings__body--js")}}),this.playersNumber}},{key:"getPlayersNamesView",value:function(e){var t=this;return this.playersNamesView=new le(".settings__body--js",e),this.playersNamesView.subscribe({onEscapeButtonEvent:function(){return t.playersNumber.render("render from settings",".settings__body--js")}}),this.playersNamesView}},{key:"getWinnerView",value:function(e){var t=this;return this.winnerView=new ve(e,".application--js"),this.winnerView.subscribe({onEscapeButtonEvent:function(){return t.levelView.render("render from endgame",".application--js")}}),this.winnerView}}])&&pe(t.prototype,r),n&&pe(t,n),e}();function be(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.views=new he,this.getLevelView()}var t,r,n;return t=e,(r=[{key:"getLevelView",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"first render",r=this.views.getLevelView(t);r.subscribe({getCurrentBoard:function(t){return e.getCurrentBoard(t)},getPlayersNumberView:function(){return e.getPlayersNumberView()}})}},{key:"getCurrentBoard",value:function(e){var t=this,r=new T;this.board=r.getBoard(e),this.board.subscribe({onGameOver:function(){return t.getWinnerView()}})}},{key:"getWinnerView",value:function(){var e=this,t=this.playerController.getWinnerStats();this.views.getWinnerView(t).subscribe({onRefreshButtonEvent:function(){e.getBoardView("render from endgame"),e.getPlayersControllerView("render from endgame")}})}},{key:"getPlayersNumberView",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"first render",r=this.views.getPlayersNumberView(t);r.subscribe({getPlayersController:function(t){return e.getPlayersController(t)},getPlayersNameView:function(t){return e.getPlayersNameView(t)}})}},{key:"getPlayersController",value:function(e){var t=this,r=this.parsePlayersNumber(e);this.playerController=new Y(r,this.board),this.playerController.subscribe({onEscapeButtonEvent:function(){return t.getLevelView("render from board")},onRefreshButtonEvent:function(){t.getBoardView("render from board")}})}},{key:"getPlayersNameView",value:function(e){var t=this,r=this.parsePlayersNumber(e);this.views.getPlayersNamesView(r).subscribe({setPlayersNames:function(e){return t.setPlayersNames(e)},getBoardView:function(){return t.getBoardView()},getPlayersControllerView:function(){return t.getPlayersControllerView()}})}},{key:"setPlayersNames",value:function(e){this.playerController.setPlayersNames(e)}},{key:"getPlayersControllerView",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"first render";this.playerController.renderPlayers(e)}},{key:"getBoardView",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"first render";this.board.renderBoard(e)}},{key:"parsePlayersNumber",value:function(e){return parseInt(e[0])}}])&&be(t.prototype,r),n&&be(t,n),e}())}]);