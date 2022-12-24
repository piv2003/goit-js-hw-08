import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
    

// Delay calling the function "onPlay" = 1000 ms
player.on('timeupdate', throttle(onPlay, 1000));

//Writing to "localStorage" the current time (every second)
function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);  
}

//Retrieving from "localStorage" the last saved time and setting it to "player"
player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);