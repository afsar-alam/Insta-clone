let storyHighlight;
let storyHighlightAddElement;
let profile;
let isMsgOpen = false;

window.onload = ()=>{


    setTimeout(function(){
        document.querySelector('.insta-logo').style.display = 'none';
    },5000)

    selectedPostInProfile(0);
    changeWindow(0);

    storyHighlight = document.querySelector('.first-label');
    storyHighlightAddElement = document.querySelector('.highlightstory');
    profile = document.querySelector('.profile-main-container');

    profile.style.display = 'none';

    storyHighlight.addEventListener('click',()=>{
        if(storyHighlightAddElement.style.display === 'block')
            storyHighlightAddElement.style.display = 'none';
        else
            storyHighlightAddElement.style.display = 'block';
    })
}

function selectedPostInProfile(index){
    for(var i = 0 ; i < 2 ;i++){
        document.getElementsByClassName('see-post-btn')[i].style.borderBottom = '1px solid transparent' ;
        document.getElementsByClassName('collage-photo-grid')[i].style.display = 'none' ;
    }
    document.getElementsByClassName('see-post-btn')[index].style.borderBottom = '1px solid  #000' ;
    document.getElementsByClassName('collage-photo-grid')[index].style.display = 'grid';
}


function changeWindow(index, handlingMsg){
    var ele = document.getElementsByClassName('change-window');

    for(var i = 0 ; i < ele.length ;i++){
        ele[i].style.display = 'none' ;
    }

    setTimeout(function(){
        ele[index].style.display = 'block';
    },10);

    if(handlingMsg)
        toggleMsg();

}

function toggleMsg(){

    const msg_container = document.querySelector(".msg-container");
    const msg_top = document.querySelector(".msg-container .top-fixed");
    const msg_bottom = document.querySelector(".msg-container .bottom-fixed");
    const home = document.querySelector(".home-main-container");

    if(!isMsgOpen){
        isMsgOpen=true;
        msg_top.style.display="flex";
        msg_bottom.style.display="flex";

        setTimeout(()=>{
            msg_container.style.left=0;
            msg_top.style.left=0;
            msg_bottom.style.left=0;
        },100);

    }else{
        isMsgOpen=false;
        msg_container.style.display='block';
        setTimeout(()=>{
           home.style.display='none'; 
        },20);

        setTimeout(()=>{
            msg_container.style.left="105vw";
            msg_top.style.left="105vw";
            msg_bottom.style.left="105vw";
        },50);

        setTimeout(()=>{
            msg_container.scrollTop = 0;
            msg_container.style.display='none';
            msg_top.style.display="none";
            msg_bottom.style.display="none";
            home.style.display='block';
        },700);
    }
}





