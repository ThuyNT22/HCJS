function loadingMenu(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        var data = JSON.parse(this.responseText);
        var list = data.data;
        for(var i=0;i<list.length;i++){
            var name = list[i].name;
            var str = "<li>"+name+"</li>";
            var ul = document.getElementById("menu");
            ul.innerHTML += str;
        }
    }
    xhttp.open("GET","https://foodgroup.herokuapp.com/api/menu",true);
    xhttp.send();
}