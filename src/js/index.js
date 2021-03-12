import "../scss/main.scss";
import GameController from "./controllers/GameController";

import {registerSW} from './pwa.js';
registerSW();

new GameController();


