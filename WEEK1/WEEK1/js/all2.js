// todolist

// local儲存

// let todoCheck = document.querySelector('.rightIn P.item')

let todoCheck = document.querySelector('.todoCheck');
let ANALYTICS = document.querySelector('.ANALYTICS');
let setting = document.querySelector('.setting');

function clearLiLine(){
    let liLength = $("#item").children("li").length;
    for (let i = 0; i < liLength; i++) {
        $("#item").children("li")[i].style.borderBottom = 'inherit';
        
    }
}


function ChangeSetting(obj) {
    console.log('setting success');
    ANALYTICS.style.display = 'none';
    todoCheck.style.display = 'none';
    setting.style.display = 'block';

    // obj.style.borderBottom ='1px solid orange';
    
    // obj.parentNode.childNodes[0].borderBottom = 'inherit';
    // obj.parentNode.childNodes[1].borderBottom = '1px solid #ffffff';

    // console.log(obj.parentNode.children(expr));
    // $("#item").children("li")
    console.log($("#item").children("li"));
    $("#item").children("li")[0].style.borderBottom = 'inherit';
    $("#item").children("li")[1].style.borderBottom = 'inherit';
    
    obj.style.borderBottom = '1px solid orange';
    
    

}



function ChangeANALYTICS(obj) {
    console.log('ANALYTICS success');
    ANALYTICS.style.display = 'block';
    todoCheck.style.display = 'none';
    setting.style.display = 'none';

    clearLiLine()


    obj.style.borderBottom = '1px solid orange';

}

function ChangeTodoList(obj) {
    console.log('ChangeTodoList success');
    ANALYTICS.style.display = 'none';
    todoCheck.style.display = 'block';
    setting.style.display = 'none';
    clearLiLine()
    obj.style.borderBottom = '1px solid orange';
}

function fun1(obj) {
    // alert('success!!')
    console.log('success!!');
    // obj.style.color = '#aabbcc';

    console.log(obj.parentNode);

    let pp = document.querySelectorAll('.rightIn P.item');
    console.log(pp);




    console.log(obj.id);

    let itemId = obj.id.substr(4);
    console.log(itemId);

    // console.log(pp[itemId]);

    let strP = pp[itemId]

    console.log(strP.childNodes[3].innerHTML);

    letPdata = strP.childNodes[3].innerHTML;


    console.log();

    // obj.getElementsByTagName(input)

    $('input[name="item1"]')[itemId].checked = true;

    let leftInP = document.querySelector('.leftIn P');
    leftInP.innerHTML = '';

    let itemVal = obj

    $('.leftIn P').append(letPdata);
}
var total = 1500;

function setTime(obj) {
    console.log('setTime success');
    let toggle = true;



    setInterval(fun2, 1000);
    console.log(obj.src);

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

}