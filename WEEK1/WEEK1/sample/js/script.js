// var time = 7000;//倒數7秒
//   !function MyCounter(){
//     if(time<=0){
//       console.log('finish');
//     }else{
//       console.log((time/1000) + " sec...");
//       setTimeout(MyCounter, 1000);
//     }
//     time-=1000; 
//   }();

$(function() {
  //step1. build jquery object  newItemButton newItemForm textInput
    var $newItemButton = $('#newItemButton'); //建立jQuery物件
    var $newItemForm = $('#newItemForm');
    var $textInput = $('input:text'); //:text 所有文字元件

  //step4. 當表單送出後的動作:1.當表單送出時，呼叫一匿名函式並傳入event事件 
  // 2.停止表單送出的動作 
  // 3.擷取使用者輸入文字並儲存於變數中 
  // 4.將一個新的清單項目利用.after()方法 
  // 5.加入至清單的尾端 
  // 6.送出後的畫面顯示:表單隱藏，按鈕顯示，textinput(文字框)的顯示內容
    $newItemForm.on('submit', function(e){   //submit 表單送出。當表單送出時，會呼叫一匿名函式並傳入event事件
      e.preventDefault();  //preventDefault() 停止表單送出的動作
      var newText = $textInput.val(); //$textInput = $('input:text')   :text 挑出所屬性質為text的<input>元件  .val()擷取使用者所輸入的文字，儲存於變數newText中
      $('ul.todolist li:last').after('<li>' + newText + '</li>');  //將一個新的清單項目利用.after()方法,加入至清單的尾端

      $textInput.val('');
    });
  
  });

  
  
  