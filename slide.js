let prev=document.getElementsByClassName("previous")[0];
let next=document.getElementsByClassName("next")[0];

let arr=["./images/Lamborghini-Aventador-Front-view-52648.webp","./images/Lamborghini-Aventador-Left-Front-Three-Quarter-52647.webp","./images/Lamborghini-Aventador-Front-view-52649.webp","./images/Lamborghini-Aventador-Right-Front-Three-Quarter-52645.webp","./images/Lamborghini-Aventador-Rear-view-52650.webp"];
let i=0;

next.addEventListener("click",function(){
    i++;
    if(i > arr.length - 1){
        i=0;
    }
    document.getElementById("slidepic").src=arr[i];
})

prev.addEventListener("click",function(){
    i--;
    if(i<0){
        i = arr.length-1;
    }
    document.getElementById("slidepic").src=arr[i];
})