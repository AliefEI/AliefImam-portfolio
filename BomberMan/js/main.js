
let person=document.querySelector('#blueMan')
document.addEventListener('keydown',move)
let upDown =0
let leftRight =0




function move(e){
    if (e.code=='ArrowLeft'){
        leftRight -=50
    }else if (e.code=='ArrowUp'){
        upDown-=50
    }else if (e.code=='ArrowRight'){
        leftRight+=50
    }else if(e.code=='ArrowDown'){
        upDown+=50
    }
    person.style.transform=`translate(${leftRight}%,${upDown}%)`
}


