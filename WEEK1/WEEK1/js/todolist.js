console.log('todolist js');

let todo = document.querySelector('.todo');
let todoEnd = document.querySelector('.todoEnd');

// let btnAdd = document.querySelector('#StrAdd');
// console.log(strAdd);


$('#add').keypress(function (e) {
    // console.log(inputStr.value);
    // enter 輸出
    code = (e.keyCode ? e.keyCode : e.which);
    // console.log(this.value);
    if (code == 13) {
        console.log('enter success');
        
        addItem();

    }
})

$('#StrAdd').on('click',addItem)

function addItem(obj) {
    let strInput = document.querySelector('#add').value;
    console.log(strInput);

    // let obj = {'text':strInput};
    data.todo.unshift({ text: strInput });

    load();

}


function todoDONE(obj) {
    console.log('todoDONE');

    console.log(obj.parentNode.id.substr(7));

    let itemId = obj.parentNode.id.substr(7);
    // 取出id 算索引幾
    // let itemId = obj.id.substr(7);
    console.log(itemId);

    console.log(data.todo[itemId].text);
    let strTodo = data.todo[itemId].text;
    console.log(strTodo);


    // 移除todo的索引x

    data.todo.splice(itemId, 1);


    // 新增到todoEnd最前面
    data.todoEnd.unshift({ text: strTodo });

    load();
}


function toTodoStart(obj){
    console.log('toTodoStart');
    let itemId = obj.parentNode.id.substr(7);
    // 取出id 算索引幾
    // let itemId = obj.id.substr(7);
    console.log(itemId);
    console.log(data.todoEnd[itemId].text);
    let strTodo = data.todoEnd[itemId].text;
    console.log(strTodo);

    // 移除todoEnd的索引x

    data.todoEnd.splice(itemId, 1);


    // 新增到todo最前面
    data.todo.unshift({ text: strTodo });

    


    load();
}

function delItem(obj){
    console.log('toTodoStart');
    
    let itemId = obj.parentNode.id.substr(7);
    // 取出id 算索引幾
    // let itemId = obj.id.substr(7);
    console.log(itemId);
    console.log(data.todoEnd[itemId].text);
    let strTodo = data.todoEnd[itemId].text;
    console.log(strTodo);

    // 移除todoEnd的索引x

    data.todoEnd.splice(itemId, 1);

    load();
}

// let total 

// 
// alex say  (age>18) ? 'yes':'no';
// 將JSON解壓縮成json
var data = (localStorage.getItem('todolist')) ? JSON.parse(localStorage.getItem('todolist')) : {
    todo: [
        { text: 'THE FIRST THING TO DO' },
        { text: 'THE SECOND THING TO DO' },
        { text: 'THE THIRD THING TO DO' },
        { text: 'THE FOUR THING TO DO' },
    ],
    todoEnd: [
        { text: '123' }
    ]
};

let str = '';
let obj = { text: str };
let str2 = '123'
let obj2 = { text: str2 }




data.todo.push(obj);
data.todo.pop();
// data.todo.push();
// console.log(data);
data.todoEnd.push(obj2);
data.todoEnd.pop();

console.log(data.todo);

// data.todoEnd.splice(data.todo.indexOf({obj}),1)  // ??1是修改 0是新增

//方法將JavaScript值轉換為JSON'字符'串
localStorage.setItem('todolist', JSON.stringify(data));



console.log(data);

load();

function load() {

    todo.innerHTML = '';
    todoEnd.innerHTML = '';

    for (let i = 0; i < data.todo.length; i++) {
        console.log('測試長度');

        todo.innerHTML += `<p class="item" onclick="fun1(this)" id="itemOne${i}">
                                <input type="checkbox" name="item1" id="" onclick="todoDONE(this)">
                                <span>${data.todo[i].text}</span>
                            </p>`;

    }

    for (let i = 0; i < data.todoEnd.length; i++) {
        todoEnd.innerHTML += `<p class="item" onclick="fun1(this)" id="itemTwo${i}">
                                <input type="checkbox" name="item1" id="" onclick="toTodoStart(this)" checked>
                                <span onclick="delItem(this)">${data.todoEnd[i].text}</span>
                            </p>`;

    }

    localStorage.setItem('todolist', JSON.stringify(data));
}


function del() {
    localStorage.removeItem('todolist')
}





