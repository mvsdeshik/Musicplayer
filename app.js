const myAudio = document.querySelector("audio")
const myPlay = document.getElementById("play")

isAudioPlaying = false

function playAudio()
{
    isAudioPlaying = true
    myAudio.play()
    myPlay.classList.replace("fa-play", "fa-pause")
}

function pauseAudio()
{
    isAudioPlaying = false
    myAudio.pause()
    myPlay.classList.replace("fa-pause", "fa-play")
}


myPlay.addEventListener("click", function()
{
    //Write the logic to play the audio and pause the audio
    if(isAudioPlaying)
    {
        pauseAudio()
    }
    else
    {
        playAudio()
    }
})

const data = [
    {
        singerName: "Sophie Devine",
        songName: "All the way in to the Desert",
        info: "image-1" 
    },
    {
        singerName: "Jemma Barbsy",
        songName: "In to the Sky",
        info: "image-2"
    },
    {
        singerName: "Ecclestone",
        songName: "Sing a Song",
        info: "image-3"
    }
]

// song = {
//     singerName: "Jemma Barbsy",
//     songName: "In to the Sky",
//     info: "image-2"
// }

const mySinger = document.getElementById("singer")
const mySong = document.getElementById("song")
const myImage = document.querySelector("img")

const myForward = document.getElementById("forward")
const myBackward = document.getElementById("backward")

function loadSong(song)
{
    mySinger.innerText = song.singerName
    mySong.innerText = song.songName
    myImage.src = `IMAGES/${song.info}.jpg`//IMAGES/image-2.jpg
    myAudio.src = `AUDIO/${song.info}.mp3`//MUSIC/image-2.mp3

}

let songIndex = 0



myBackward.addEventListener("click",function()
{
    songIndex-- //songIndex = 2

    if(songIndex < 0)
    {
       songIndex = data.length - 1 
    }

    console.log(songIndex)//1
    loadSong(data[songIndex])//data[1]
    playAudio()
})

myForward.addEventListener("click",function()
{
    songIndex++ //songIndex = 2
    //Logic to increae the songIndex
    if(songIndex > data.length - 1)//Last Song
    {
        songIndex = 0
    }
    console.log(songIndex)//1
    loadSong(data[songIndex])//data[1]
    playAudio()
})

// currentTime , duration -> audio

const myProgressBar = document.getElementById("progressbar")

const Duration = document.getElementById("duration")
const CurrentTime = document.getElementById("currenttime")

myAudio.addEventListener("timeupdate", function(event)
{
   if(isAudioPlaying)
   {
     //Logic to get the currentTime as the audio keeps playing, total duration
     let myCurrentTime = event.srcElement.currentTime
     let myDuration = event.srcElement.duration
 
    let myPercentage = (myCurrentTime / myDuration) * 100 //Percentage of the audio that is played
    myProgressBar.style.width = `${myPercentage}%`
    const durationInMinutes = Math.floor(myDuration / 60)
    console.log(durationInMinutes)//2
 
    let durationInSeconds = Math.floor(myDuration % 60)
    console.log(durationInSeconds)//6
 
     if(durationInSeconds < 10)
     {
         durationInSeconds = `0${durationInSeconds}`//06
     }
     let totalTime = `${durationInMinutes}:${durationInSeconds}`
     console.log(totalTime)
     Duration.innerText = totalTime

     //---------------------------
 
     const currentTimeInMinutes = Math.floor(myCurrentTime  / 60)
    //  console.log(durationInMinutes)//2
    console.log(currentTimeInMinutes)
 
     let currentTimeInSeconds = Math.floor(myCurrentTime % 60)
    //  console.log(durationInSeconds)//6
    console.log(currentTimeInSeconds)
 
     if(currentTimeInSeconds < 10)
     {
         currentTimeInSeconds = `0${currentTimeInSeconds}`//06
     }
 
     let totalCurrentTime = `${currentTimeInMinutes}:${currentTimeInSeconds}`
    //  console.log(totalTime)
    //  Duration.innerText = totalTime

    CurrentTime.innerText = totalCurrentTime



     



   }

})