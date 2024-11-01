let time = prompt("Введите текущее время: ");
if (time >= '0' && time <=6 ) {
    alert(`${time} часа ночи.` )
}else if(time >=7 && time <=10){
    alert(`${time} часов утра`)
}else if(time >= 11 && time <= 17){
    if(time>12){
        
        time-=12
        alert(`${time} часа дня`)
    }else{
    alert(`${time} часа дня`)
    }
}else if(time>= 18 && time <= 23) {
    if(time>12){
        time-=12
        alert(`${time} часов ночи`)
    }
}else if (time = ' '){
    alert("Введите корректное время!")
}


console.log(time);
