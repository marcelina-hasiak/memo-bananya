import '../scss/main.scss';
import LevelView from './LevelView'

import BoardFactory from './BoardFactory'

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const levelView = new LevelView('.settings--js', '.settings__title--js')
const boardFactory = new BoardFactory()

levelView.subscribe((level) => {
  boardFactory.getBoard(level)
  //przekazujemy jakiś callback, 
  //który uruchomi kolejny widok + stworzy odpowiednią tablicę
})