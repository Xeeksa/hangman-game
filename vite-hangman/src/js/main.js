import '../css/style.css';
import { darkModeHandle } from './utils';
import { startGame } from './game';

darkModeHandle();

const StartGameButton = document.getElementById('startGame');
StartGameButton.addEventListener('click', startGame);