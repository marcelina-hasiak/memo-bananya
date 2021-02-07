import '../scss/main.scss';
import LevelView from './LevelView'
import PlayersNumberView from './PlayersNumberView'

import BoardFactory from './BoardFactory'

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const levelView = new LevelView('.settings--js', '.settings__title--js')
const boardFactory = new BoardFactory()


levelView.subscribe((level) => {
  boardFactory.getBoard(level)
  const playersNumberView = new PlayersNumberView('.settings--js', '.settings__title--js')
  //który uruchomi kolejny widok 
})