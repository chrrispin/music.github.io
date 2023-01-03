const music = new Audio('MM.mp3');
 //  music.play();

//creating Array

const songs = [
    {
    id:'1',
    songName:`on my way <br>
    <div class="subtittle">Alan Walker</div>`,
    poster: "img/00.webp"
    },
    {
        id:'2',
        songName:` MM <br>
        <div class="subtittle">Alan Walker</div>`,
        poster: "img/00.webp"
    },
    // all object type
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0){
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    }
    else{
        music.paused();
        masterPlay.classList.add ('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})