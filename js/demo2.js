var obj={
    name: "Nam",
    age: 18,
    tel: "0987654321",
    girlFriends:['Nguyễn Vân Anh','Lê Ngọc Anh'],
    eat: function(){
        console.log(this.name+" đang ăn mì tôm...");
    }
};
console.log(obj.tel);
obj.eat();
obj.name = "Huy";//đổi tên obj thành Huy
obj.eat();
var obj={
    name: "Nam",
    age: 18,
    tel: "0987654321",
    girlFriends:['Nguyễn Vân Anh','Lê Ngọc Anh'],
    eat: function(){
        console.log(this.name+" đang ăn mì tôm...");
    }
};

var a = document.getElementById("abc");
console.log(a.innerText);
var x = 15;
function changeText(){
    //a.innerText = "Xin chao cac ban"; điều chỉnh chữ
    //a.innerHTML = x+"<p>Xin chao cac ban</p>"; điều chỉnh giao diện
    a.style.fontSize = x+"px";//điều chỉnh style
    a.style.color = "green";
    x++;
    a.classList.add("classnaodo");//điều chỉnh thuộc tính
    a.style.transform = "rotate("+x+"deg)";
}
setInterval(changeText,30);
