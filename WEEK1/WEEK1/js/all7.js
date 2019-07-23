// todolist

// local儲存

// let todoCheck = document.querySelector('.rightIn P.item')

let todoCheck = document.querySelector('.todoCheck');
let ANALYTICS = document.querySelector('.ANALYTICS');
let setting = document.querySelector('.setting');
let NavItem = [setting, ANALYTICS, todoCheck]
let inputStr = document.querySelector('#add');
let orange = '#FFA500';


var NavContain = null;
console.log(NavContain);

let navTotal = document.querySelectorAll('.itemUL li');
// let navTotal = $('.itemUL li');
console.log(navTotal);
let navLength = navTotal.length;
console.log(navLength);






$("#item").children("li").on('click', function () {
    clearLiLine();
    this.style.borderBottom = '2px solid orange';
    this.style.color = orange;



    console.log(this.id);
    var NavId = this.id
    console.log(NavId);

    // NavId.css('display','show');

    ChangeContain(NavId);
    setLine(NavId);
    // this.style.display = 'block';
})

// navTotal[1].on('mouseenter', function(obj) {

//     this.style.borderBottom = '2px solid orange';
//     this.style.color = orange;
// })

// navTotal[1].mouseover(function() {
//     this.style.borderBottom = '2px solid orange';
//     this.style.color = orange;
// })

// function mouseoverChangeColor(obj) {
//     obj.style.borderBottom = '2px solid orange';
//     obj.style.color = orange;

// }

// $("#item").children("li").on('mouseenter', function () {
//     this.style.borderBottom = '2px solid orange';
//     this.style.color = orange;
// })

// $("#item").children("li").on('mouseout', function () {
//     this.style.borderBottom = 'inherit';
//     this.style.color = 'inherit';
// })



let itemTrue = null;


function ChangeContain(NavId) {
    console.log(NavId);
    itemTrue = false;
    if (NavId === 'setting') { NavContain = setting; itemTrue = 2; };
    if (NavId === 'ANALYTICS') { NavContain = ANALYTICS; itemTrue = 1; };
    if (NavId === 'todoCheck') { NavContain = todoCheck; itemTrue = 0; };
    console.log(NavContain);

    clearContain();
    NavContain.style.display = 'block';


}

// $('#item li').mouseenter(function() {
//     this.style.color = orange;
//     this.style.borderBottom = orange;
//     console.log(this);
    
// })

function setLine(NavId) {
    console.log(NavId);
    console.log(itemTrue);
    
    // $('#item').children('li').EventListener('mouseenter', function(){
    //     navTotal[2].style.color = orange;
    // })

    // $('#item li').mouseenter(function() {
    //     this.style.color = orange;
    //     this.style.borderBottom = orange;
    //     console.log(this);
        
    // })


    

}


function clearContain(obj) {
    // setting.style.display='none';
    // ANALYTICS.style.display='none';
    // todoCheck.style.display='none';

    for (let i = 0; i < NavItem.length; i++) {
        NavItem[i].style.display = 'none';

    }
}


function clearLiLine() {
    let li = $("#item").children("li");
    for (let i = 0; i < li.length; i++) {
        $("#item").children("li")[i].style.borderBottom = 'inherit';
        $("#item").children("li")[i].style.color = 'inherit';

    }

    setLine();
}




// function ChangeSetting(obj) {
//     console.log('setting success');
//     ANALYTICS.style.display = 'none';
//     todoCheck.style.display = 'none';
//     setting.style.display = 'block';
// }



// function ChangeANALYTICS(obj) {
//     console.log('ANALYTICS success');
//     ANALYTICS.style.display = 'block';
//     todoCheck.style.display = 'none';
//     setting.style.display = 'none';
// }

// function ChangeTodoList(obj) {
//     console.log('ChangeTodoList success');
//     ANALYTICS.style.display = 'none';
//     todoCheck.style.display = 'block';
//     setting.style.display = 'none';
// }

function fun1(obj) {
    // alert('success!!')
    console.log('success!!');
    // obj.style.color = '#aabbcc';

    console.log(obj.parentNode);

    let pp = document.querySelectorAll('.rightIn P.item');
    console.log(pp);




    console.log(obj.id);

    let itemId = obj.id.substr(7);
    console.log(itemId);

    // console.log(pp[itemId]);

    let strP = pp[itemId]

    console.log(strP.childNodes[3].innerHTML);

    letPdata = strP.childNodes[3].innerHTML;


    console.log();

    // obj.getElementsByTagName(input)

    // 新語法
    // $('input[name="item1"]')[itemId].checked = true;

    let leftInP = document.querySelector('.leftIn P');
    leftInP.innerHTML = '';

    let itemVal = obj

    $('.leftIn P').append(letPdata);
}
var total = 1500;

function setTime(obj) {
    console.log('setTime success');
    let toggle = true;


    console.log(total);

    if (total <= 0) {
        clearInterval(tId);
    }

    if (total > 0) {
        var tId = window.setInterval(fun2, 10);
        // console.log(tId);

        console.log(obj.src);
        console.log(total);

    }




    // obj.src="./images/clockPause.jpg";

    let imgSrc = obj.src;
    console.log(imgSrc);

    let clock2 = './images/clock2.jpg';

    // $('.leftIn img').attr('src','./images/clockPause.jpg');

    // $('.leftIn img').attr('src','./images/clock2.jpg');

    // obj.src=clock2;

    document.querySelector('.leftIn > img').src = clock2;
}

function fun2() {
    console.log('fun2');

    if (total === 0) {
        console.log('小於0  ' + total);
        // clearInterval(tId);
        // clearInterval(fun2);
        // total = total-1;

        stopTime();
        // return total;
        // break;


    }

    total = total - 1;
    console.log(total);

    let min = parseInt(total / 60);
    console.log(min);

    let sec = total % 60;
    console.log(sec);

    let secIn = document.querySelector('.sec');
    let minIn = document.querySelector('.min');



    if (sec <= 9) {
        var strSec = `0${sec}`;
    } else {
        var strSec = `${sec}`;
    }


    secIn.innerHTML = '';
    secIn.innerHTML = strSec;

    minIn.innerHTML = '';
    minIn.innerHTML = min;

    // console.log(tId);




}


function stopTime() {
    // clearInterval(tId);
    // alert('時間到了');
    let min = document.querySelector('.min');
    let sec = document.querySelector('.sec');
    min.style.color = 'red';
    sec.style.color = 'red';
    console.log(min.style.color);
    // min.style.color='black';
    timeChangeColor();
    clearInterval(tId);
    // break;


}
function timeChangeColor() {
    console.log('timeChangeColor');

    let min = document.querySelector('.min');
    let sec = document.querySelector('.sec');

    console.log(min.style.color);

    let minColor = min.style.color
    console.log(minColor);

    if (minColor == 'red') {

        min.style.color = 'inherit';
        sec.style.color = 'inherit';
    } else {
        min.style.color = 'red';
        sec.style.color = 'red';
    }
}



$('.scroll').mouseenter(function () {
    console.log(data.todo.length+data.todoEnd.length);
    todoALL = data.todo.length+data.todoEnd.length;

    if(todoALL >=5){
        // overflow-y: scroll;
        this.style.overflowY = 'scroll'; 
    }
});

$('.scroll').mouseleave(function () {
    this.style.overflowY = 'hidden'; 
})


