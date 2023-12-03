let progress=document.getElementById('progress');
let song=document.getElementById('song');
let ctricon=document.getElementById('ctricon');
let search_bar=document.getElementById('search_text')
let image=document.getElementById('image');
let playlist_button=document.getElementById('playlist_song_button')
let pl1=document.getElementById('ps2')
let pl2=document.getElementById('ps3')
let pl3=document.getElementById('ps4')
let pl4=document.getElementById('ps5')
let pl5=document.getElementById('ps6')
let pl6=document.getElementById('ps7')
let pl7=document.getElementById('ps8')
let pl8=document.getElementById('ps9')
let pl9=document.getElementById('ps10')

let imge=document.getElementById('imageplay');
let controlicon=document.getElementById('play');
let title=document.getElementById('title');
progress.max=song.duration;


song.onloadedmetadata=function(){
    progress.max=song.duration
    progress.value=song.currentTime
}


function search(){
    text=search_bar.value
    if(text!=null){
        search_bar.value="Hellow listener.."
    }   
}



function play(){
    var clse=controlicon.alt;
    if(clse=="2"){
        song.pause();
        controlicon.src="play.png"
        controlicon.alt="1"  
        image.setAttribute("id","image") 
    }
    else{
        if(clse=="1"){
        song.play();
        controlicon.src="pause.png"
        controlicon.alt="2"
        image.setAttribute("id","motion")
        if(song.play()){
            setInterval(() => {
                progress.value=song.currentTime;
                if(progress.max==song.currentTime){
                    var clse=controlicon.alt
                    if(clse=="2"){
                        song.pause();
                        controlicon.src="play.png"
                        controlicon.alt="1"
                        image.setAttribute('id','image')
                    }
                }
                
            }, 500);
        }
        }
    }
}

if(progress.max==song.currentTime){
    var clse=controlicon.alt
    if(clse=="2"){
        song.pause();
        controlicon.src="play.png"
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



const list=['Shaabaashiyaan_-_Lyrical___Mission_Mangal.mp3',
'Galliyan_Song___Ek_Villain.mp3',
'Ram_Siya_Ram__Lyrical__Adipurush.mp3',
'Teri_Mitti_-_Lyrical___Kesari.mp3',
'KHAIRIYAT__BONUS_TRACK__CHHICHHORE.mp3',
'Dil_Ko_Karaar_Aaya_-_Sidharth.mp3',
'Jitni_Dafa_-_Lyrical___PARMANU.mp3',
'BOL_DO_NA_ZARA_Full_Video_Song.mp3',
'Lyrical__Thodi_Jagah_Video.mp3']




var song_title=["Shaabaashiyaan_-_Lyrical___Mission_Mangal",
"Galliyan_Song___Ek_Villain",
"Ram_Siya_Ram__Lyrical__Adipurush",
"Teri_Mitti_-_Lyrical___Kesari",
"KHAIRIYAT__BONUS_TRACK__CHHICHHORE",
"Dil_Ko_Karaar_Aaya_-_Sidharth",
"Jitni_Dafa_-_Lyrical___PARMANU",
"BOL_DO_NA_ZARA_Full_Video_Song",
"Lyrical__Thodi_Jagah_Video"]


const img=['mangle.jpg',
'playlist1.jpg',
'playlist4.jpg',
'teri metty.jpg',
'playlist5.jpg',
'playlist6.jpg',
'playlist9.jpg',
'playlist8.jpg',
'playlist10.jpg']
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
        controlicon.src="pause.png"
        controlicon.alt="2"


        if(song.play()){
            setInterval(() => {
                progress.value=song.currentTime;
                if(progress.max==song.currentTime){
                    playlist_button.innerText='Play'
                    song.pause();
                    controlicon.src="play.png"
                    controlicon.alt="1"

                }
                
            }, 500);
        }
    }
    else{
        if(playlist_button.innerText=='Pause'){
            song.pause();
            playlist_button.innerText='Play'
            controlicon.src="play.png"
            controlicon.alt="1"

        }
    }
    
}




function ps2(){
    if(pl1.innerText=='Play'){
        song.play();
        pl1.innerText='Pause'
        controlicon.src="image/pause.png"
        controlicon.alt="2"
        image.src=img[0];
        title.innerText=song_title[0];
        song.src=list[0]
        image.setAttribute("id","motion")


        if(song.play()){
            setInterval(() => {
                progress.value=song.currentTime;
                if(progress.max==song.currentTime){
                    pl1.innerText='Play'
                    song.pause();
                    controlicon.src="image/play.png"
                    controlicon.alt="1"

                }
                
            }, 500);
        }
    }
    else{
        if(pl1.innerText=='Pause'){
            song.pause();
            pl1.innerText='Play'
            controlicon.src="image/play.png"
            controlicon.alt="1"
            image.setAttribute("id","image")

        }
    }
    
}


function ps3(){
    if(pl2.innerText=='Play'){
        song.play();
        pl2.innerText='Pause'
        controlicon.src="image/pause.png"
        controlicon.alt="2"
        image.src=img[1];
        title.innerText=song_title[1];
        song.src=list[1]
        image.setAttribute("id","motion")


        if(song.play()){
            setInterval(() => {
                progress.value=song.currentTime;
                if(progress.max==song.currentTime){
                    pl2.innerText='Play'
                    song.pause();
                    controlicon.src="image/play.png"
                    controlicon.alt="1"

                }
                
            }, 500);
        }
    }
    else{
        if(pl2.innerText=='Pause'){
            song.pause();
            pl2.innerText='Play'
            controlicon.src="image/play.png"
            controlicon.alt="1"
            image.setAttribute("id","image")


        }
    }
    
}




function ps4(){
    if(pl3.innerText=='Play'){
        song.play();
        pl3.innerText='Pause'
        controlicon.src="image/pause.png"
        controlicon.alt="2"
        image.src=img[2];
        title.innerText=song_title[2];
        song.src=list[2]
        image.setAttribute("id","motion")


        if(song.play()){
            setInterval(() => {
                progress.value=song.currentTime;
                if(progress.max==song.currentTime){
                    pl3.innerText='Play'
                    song.pause();
                    controlicon.src="image/play.png"
                    controlicon.alt="1"

                }
                
            }, 500);
        }
    }
    else{
        if(pl3.innerText=='Pause'){
            song.pause();
            pl3.innerText='Play'
            controlicon.src="image/play.png"
            controlicon.alt="1"
            image.setAttribute("id","image")


        }
    }
    
}



function ps5(){
    if(pl4.innerText=='Play'){
        song.play();
        pl4.innerText='Pause'
        controlicon.src="image/pause.png"
        controlicon.alt="2"
        image.src=img[3];
        title.innerText=song_title[3];
        song.src=list[3]
        image.setAttribute("id","motion")


        if(song.play()){
            setInterval(() => {
                progress.value=song.currentTime;
                if(progress.max==song.currentTime){
                    pl4.innerText='Play'
                    song.pause();
                    controlicon.src="image/play.png"
                    controlicon.alt="1"

                }
                
            }, 500);
        }
    }
    else{
        if(pl4.innerText=='Pause'){
            song.pause();
            pl4.innerText='Play'
            controlicon.src="image/play.png"
            controlicon.alt="1"
            image.setAttribute("id","image")


        }
    }
    
}



function ps6(){
    if(pl5.innerText=='Play'){
        song.play();
        pl5.innerText='Pause'
        controlicon.src="image/pause.png"
        controlicon.alt="2"
        image.src=img[4];
        title.innerText=song_title[4];
        song.src=list[4]
        image.setAttribute("id","motion")


        if(song.play()){
            setInterval(() => {
                progress.value=song.currentTime;
                if(progress.max==song.currentTime){
                    pl5.innerText='Play'
                    song.pause();
                    controlicon.src="image/play.png"
                    controlicon.alt="1"

                }
                
            }, 500);
        }
    }
    else{
        if(pl5.innerText=='Pause'){
            song.pause();
            pl5.innerText='Play'
            controlicon.src="image/play.png"
            controlicon.alt="1"
            image.setAttribute("id","image")


        }
    }
    
}




function ps7(){
    if(pl6.innerText=='Play'){
        song.play();
        pl6.innerText='Pause'
        controlicon.src="image/pause.png"
        controlicon.alt="2"
        image.src=img[5];
        title.innerText=song_title[5];
        song.src=list[5]
        image.setAttribute("id","motion")


        if(song.play()){
            setInterval(() => {
                progress.value=song.currentTime;
                if(progress.max==song.currentTime){
                    pl6.innerText='Play'
                    song.pause();
                    controlicon.src="image/play.png"
                    controlicon.alt="1"

                }
                
            }, 500);
        }
    }
    else{
        if(pl6.innerText=='Pause'){
            song.pause();
            pl6.innerText='Play'
            controlicon.src="image/play.png"
            controlicon.alt="1"
            image.setAttribute("id","image")


        }
    }
    
}


function ps8(){
    if(pl7.innerText=='Play'){
        song.play();
        pl7.innerText='Pause'
        controlicon.src="image/pause.png"
        controlicon.alt="2"
        image.src=img[6];
        title.innerText=song_title[6];
        song.src=list[6]
        image.setAttribute("id","motion")


        if(song.play()){
            setInterval(() => {
                progress.value=song.currentTime;
                if(progress.max==song.currentTime){
                    pl7.innerText='Play'
                    song.pause();
                    controlicon.src="image/play.png"
                    controlicon.alt="1"

                }
                
            }, 500);
        }
    }
    else{
        if(pl7.innerText=='Pause'){
            song.pause();
            pl7.innerText='Play'
            controlicon.src="image/play.png"
            controlicon.alt="1"
            image.setAttribute("id","image")


        }
    }
    
}



function ps9(){
    if(pl8.innerText=='Play'){
        song.play();
        pl8.innerText='Pause'
        controlicon.src="image/pause.png"
        controlicon.alt="2"
        image.src=img[7];
        title.innerText=song_title[7];
        song.src=list[7]
        image.setAttribute("id","motion")


        if(song.play()){
            setInterval(() => {
                progress.value=song.currentTime;
                if(progress.max==song.currentTime){
                    pl8.innerText='Play'
                    song.pause();
                    controlicon.src="image/play.png"
                    controlicon.alt="1"

                }
                
            }, 500);
        }
    }
    else{
        if(pl8.innerText=='Pause'){
            song.pause();
            pl8.innerText='Play'
            controlicon.src="image/play.png"
            controlicon.alt="1"
            image.setAttribute("id","image")


        }
    }
    
}



function ps10(){
    if(pl9.innerText=='Play'){
        song.play();
        pl9.innerText='Pause'
        controlicon.src="image/pause.png"
        controlicon.alt="2"
        image.src=img[8];
        title.innerText=song_title[8];
        song.src=list[8]
        image.setAttribute("id","motion")


        if(song.play()){
            setInterval(() => {
                progress.value=song.currentTime;
                if(progress.max==song.currentTime){
                    pl9.innerText='Play'
                    song.pause();
                    controlicon.src="image/play.png"
                    controlicon.alt="1"

                }
                
            }, 500);
        }
    }
    else{
        if(pl9.innerText=='Pause'){
            song.pause();
            pl9.innerText='Play'
            controlicon.src="image/play.png"
            controlicon.alt="1"
            image.setAttribute("id","image")


        }
    }
    
}







function scroll_to_newsong(){
    window.scrollTo(0,400);
}
function scroll_to_oldsong(){
    window.scrollTo(0,750);
}





