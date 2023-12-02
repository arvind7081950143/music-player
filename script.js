let progress=document.getElementById('progress');
let song=document.getElementById('song');
let ctricon=document.getElementById('ctricon');
let image=document.getElementById('image');
let playlist_button=document.getElementById('playlist_song_button')
let imge=document.getElementById('imageplay');
let controlicon=document.getElementById('play');
let title=document.getElementById('title');
progress.max=song.duration;


song.onloadedmetadata=function(){
    progress.max=song.duration
    progress.value=song.currentTime
}


function play(){
    var clse=controlicon.alt;
    if(clse=="2"){
        song.pause();
        controlicon.src="image/play.png"
        controlicon.alt="1"  
        image.setAttribute("id","image") 
    }
    else{
        if(clse=="1"){
        song.play();
        controlicon.src="image/pause.png"
        controlicon.alt="2"
        image.setAttribute("id","motion")
        if(song.play()){
            setInterval(() => {
                progress.value=song.currentTime;
                
            }, 500);
        }
        }
    }
}

if(progress.max==song.currentTime){
    var clse=controlicon.alt
    if(clse=="2"){
        song.pause();
        controlicon.src="image/play.png"
        controlicon.alt="1"
    }
}


progress.onchange=function(){
    clse=controlicon.alt;
    song.currentTime=progress.value
    if(clse=="2"){
        song.play()
    }
    else{
        song.pause()
    }
}



const list=['music/Shaabaashiyaan_-_Lyrical___Mission_Mangal.mp3',
'music/Galliyan_Song___Ek_Villain.mp3',
'music/Ram_Siya_Ram__Lyrical__Adipurush.mp3',
'music/Teri_Mitti_-_Lyrical___Kesari.mp3',
'music/KHAIRIYAT__BONUS_TRACK__CHHICHHORE.mp3',
'music/Dil_Ko_Karaar_Aaya_-_Sidharth.mp3',
'music/Jitni_Dafa_-_Lyrical___PARMANU.mp3',
'music/BOL_DO_NA_ZARA_Full_Video_Song.mp3',
'music/Lyrical__Thodi_Jagah_Video.mp3']




var song_title=["Shaabaashiyaan_-_Lyrical___Mission_Mangal",
"Galliyan_Song___Ek_Villain",
"Ram_Siya_Ram__Lyrical__Adipurush",
"Teri_Mitti_-_Lyrical___Kesari",
"KHAIRIYAT__BONUS_TRACK__CHHICHHORE",
"Dil_Ko_Karaar_Aaya_-_Sidharth",
"Jitni_Dafa_-_Lyrical___PARMANU",
"BOL_DO_NA_ZARA_Full_Video_Song",
"Lyrical__Thodi_Jagah_Video"]


const img=['image/mangle.jpg',
'image/playlist1.jpg',
'image/playlist4.jpg',
'image/teri metty.jpg',
'image/playlist5.jpg',
'image/playlist6.jpg',
'image/playlist9.jpg',
'image/playlist8.jpg',
'image/playlist10.jpg']
index=-1;

function play_next(){
    var clse=controlicon.alt
    index=index+1;
    song.src=list[index];
    image.src=img[index];
    title.innerText=song_title[index];
    if(clse=="2"){
        song.play();

    }
    else{
        song.pause();
    }
    if(index==list.length){
        if(clse=='2'){
        index=0
        image.src=img[index];
        title.innerText=song_title[index];
        song.src=list[index]
        song.play();
        }
        else{
        index=0
        image.src=img[index];
        title.innerText=song_title[index];
        song.src=list[index]
        song.pause()
        }
        
    }
    
    
}

function play_previous(){
    var clse=controlicon.alt
    index-=1;
    song.src=list[index];
    image.src=img[index];
    title.innerText=song_title[index];
    if(clse=="2"){
        song.play();
    }
    else{
        song.pause();
    }
    if(index==-2){
        if(clse=='2'){
        index=list.length-1
        image.src=img[index];
        title.innerText=song_title[index];
        song.src=list[index]
        song.play();
        }
        else{
        index=list.length-1
        image.src=img[index];
        title.innerText=song_title[index];
        song.src=list[index]
        song.pause()
        }
        
    }
}

function playsong(){
    if(playlist_button.innerText=='Play'){
        song.play();
        playlist_button.innerText='Pause'
        controlicon.src="image/pause.png"
        controlicon.alt="2"


        if(song.play()){
            setInterval(() => {
                progress.value=song.currentTime;
                if(progress.max==song.currentTime){
                    playlist_button.innerText='Play'
                    song.pause();
                    controlicon.src="image/play.png"
                    controlicon.alt="1"

                }
                
            }, 500);
        }
    }
    else{
        if(playlist_button.innerText=='Pause'){
            song.pause();
            playlist_button.innerText='Play'
            controlicon.src="image/play.png"
            controlicon.alt="1"

        }
    }
    
}






function scroll_to_newsong(){
    window.scrollTo(0,400);
}
function scroll_to_oldsong(){
    window.scrollTo(0,750);
}





