const songs = [
    {
        title:"Fire",
        artist:"Franz Ferdinand",
        cover: "imagens/capa-1.gif",
        src: "assets/Fire.mp3"
    },


{
    title: "I Really Want To Stay At Your House",
    artist:"Rosa Weldon",
    cover: "imagens/capa-2.gif",
    src: "assets/stay-at-your-house.mp3"

},


{
    title:"Let You Down",
    artist:"Dawid",
    cover:"imagens/capa-3.gif",
    src: "assets/Let You Down.mp3"
}

];

let songIndex= 0;
let isCurrentlyPlaying = false;

const title= document.getElementById("title");
const cover = document.getElementById("cover");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("play");
const prevBtn= document.getElementById("prev")
const nextBtn = document.getElementById("next");
const progressBar = document.getElementById("progress-bar");
const progressBarContainer = document.getElementById("progress-bar-container")



const audio = new Audio();

    function loadSong(song){
    title.textContent = song.title;
    artist.textContent = song.artist;
    cover.src = song.cover;
    audio.src = song.src;
    }   


loadSong(songs[songIndex]);
function playSong(){
    isCurrentlyPlaying= true;
    playBtn.textContent = "⏸"
    audio.play();
    
}

function pauseSong(){
    isCurrentlyPlaying= false;
    playBtn.textContent = "⏯"
    audio.pause();
}

playBtn.addEventListener("click", () => {
  if (isCurrentlyPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});


nextBtn.addEventListener("click", () => {
   songIndex = (songIndex+1) % songs.length;
    

    loadSong(songs[songIndex])
    playSong();
    
});


audio.addEventListener("timeupdate", () => {
    const progressBarPercentage =(audio.currentTime) / audio.duration* 100;
    progressBar.style.width = progressBarPercentage + "%";
});


progressBarContainer.addEventListener("click", (e) => {
    const width = progressBarContainer.clientWidth; 
    const clickX = e.offsetX;
    const duration = audio.duration;
    if(duration){
        audio.currentTime = (clickX / width) * duration;
    }
});

audio.addEventListener("ended", () => {
    nextBtn.click();
})

