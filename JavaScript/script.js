let rightslide=document.getElementById('rightslide').addEventListener('click', mover , true);
let leftslide=document.getElementById('leftslide').addEventListener('click', movel , true);
let movenum=0;
function mover(){
    movenum++;
    if(movenum==1 || movenum == -1){
        console.log(movenum);
        document.getElementById('backstyle_menyu').style.backgroundImage = "url('https://wallpapercave.com/wp/wp10450453.jpg')";
        document.getElementById('dot2').style.backgroundColor = "lawngreen";
        document.getElementById('dot1').style.backgroundColor = "whitesmoke";
        document.getElementById('dot3').style.backgroundColor = "whitesmoke";
        return movenum;
    }
    else if(movenum==2){
        console.log(movenum);
        document.getElementById('backstyle_menyu').style.backgroundImage = "url('https://wallpapercave.com/wp/wp10450478.png')";
        document.getElementById('dot2').style.backgroundColor = "whitesmoke";
        document.getElementById('dot3').style.backgroundColor = "lawngreen";
        document.getElementById('dot1').style.backgroundColor = "whitesmoke";
        return movenum;
    }
    else{
        console.log(movenum);
        document.getElementById('backstyle_menyu').style.backgroundImage = "url('https://wallpapercave.com/wp/wp8050750.jpg')";
        document.getElementById('dot1').style.backgroundColor = "lawngreen";
        document.getElementById('dot3').style.backgroundColor = "whitesmoke";
        document.getElementById('dot2').style.backgroundColor = "whitesmoke";
        return movenum=0;
    }
}
function movel(){
    movenum--;
    if(movenum== -1 || movenum == 1){
        console.log(movenum);
        document.getElementById('backstyle_menyu').style.backgroundImage = "url('https://wallpapercave.com/wp/wp10450453.jpg')";
        document.getElementById('dot2').style.backgroundColor = "lawngreen";
        document.getElementById('dot1').style.backgroundColor = "whitesmoke";
        document.getElementById('dot3').style.backgroundColor = "whitesmoke";
        return movenum;
    }
    else if(movenum== -2 ){
        console.log(movenum);
        document.getElementById('backstyle_menyu').style.backgroundImage = "url('https://wallpapercave.com/wp/wp10450478.png')";
        document.getElementById('dot2').style.backgroundColor = "whitesmoke";
        document.getElementById('dot3').style.backgroundColor = "lawngreen";
        document.getElementById('dot1').style.backgroundColor = "whitesmoke";
        return movenum;
    }
    else{
        console.log(movenum);
        document.getElementById('backstyle_menyu').style.backgroundImage = "url('https://wallpapercave.com/wp/wp8050750.jpg')";
        document.getElementById('dot3').style.backgroundColor = "whitesmoke";
        document.getElementById('dot1').style.backgroundColor = "lawngreen";
        document.getElementById('dot2').style.backgroundColor = "whitesmoke";
        return movenum=0;
    }
}
