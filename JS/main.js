





let arrayy = [];



function calcFunc(num){
    arrayy.push(num);
    document.querySelector('.input').innerHTML = arrayy;
}

console.log(arrayy)


function calcFuncPlus(){
    if(typeof(arrayy[0]) === 'number'){
        arrayy.push('+');
        document.querySelector('.plus').disabled = true
        document.querySelector('.minus').disabled = false
        document.querySelector('.time').disabled = false
        document.querySelector('.divade').disabled = false
    }
    document.querySelector('.input').innerHTML = arrayy;
}
function calcFuncMinus(){
    if(typeof(arrayy[0]) === 'number'){
        arrayy.push('-');
        document.querySelector('.minus').disabled = true
        document.querySelector('.plus').disabled = false
        document.querySelector('.time').disabled = false
        document.querySelector('.divade').disabled = false
    }
    document.querySelector('.input').innerHTML = arrayy;
}
function calcFuncTime(){
    if(typeof(arrayy[0]) === 'number'){
        arrayy.push('*');
        document.querySelector('.time').disabled = true
        document.querySelector('.divade').disabled = false
        document.querySelector('.plus').disabled = false
        document.querySelector('.minus').disabled = false
    }
    document.querySelector('.input').innerHTML = arrayy;
}
function calcFuncDivade(){
    if(typeof(arrayy[0]) === 'number'){
        arrayy.push('/');
        document.querySelector('.divade').disabled = true
        document.querySelector('.time').disabled = false
        document.querySelector('.plus').disabled = false
        document.querySelector('.minus').disabled = false
    }
    document.querySelector('.input').innerHTML = arrayy;
}
function calcFuncDott(){
    if(arrayy[0] === calcFuncDott()){
        arrayy.push(0);
        arrayy.push('.');
    }
    document.querySelector('.input').innerHTML = arrayy;

}



