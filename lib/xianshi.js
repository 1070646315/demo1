// 1. 找到输入的文本框
 var msgTxt = document.getElementById('msg');
 // 2. 获取文本框中的内容
 var userMsg = msgTxt.value;
 // 3. 清空文本框内容
 msgTxt.value = "";
 // 4. 创建自己的li标签
 var myLi = document.createElement('li');
 // 5. 设置类名
 myLi.className = "user";
 // 6. 设置内容
 myLi.innerHTML = "<p>"+ userMsg +"</p>";

 // 7. 把自己这部分聊天加到面板
 container.appendChild(myLi);