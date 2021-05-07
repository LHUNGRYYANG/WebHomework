var h1 = document.querySelector(".m-box h1");
var p1 = document.getElementById("p1");
var lis = document.querySelectorAll("li");
var box = document.querySelector(".m-box");
var data = new Date();
var str = "p";



//1
p1.addEventListener("click", function() {
    p1.style.color = "red";
})

//2
lis[1].addEventListener("click", function() {
    var mon = "";
    var day = "";

    if (data.getMonth() + 1 < 10) {
        mon = "0" + (data.getMonth() + 1);
    } else {
        mon = data.getMonth();
    }

    if (data.getDate() < 10) {
        day = "0" + data.getDate();
    } else {
        day = data.getDate();
    }

    h1.innerHTML = data.getFullYear() + "-" + mon + "-" + day;
})

//3 
lis[2].addEventListener("click", function() {
    var a = this.parentNode.querySelectorAll("li");
    for (var i = 0; i < a.length; i++) {
        a[i].classList.add("fn-active");
    }
})

//4
lis[3].addEventListener("click", function() {
    document.querySelector("ul").removeChild(lis[lis.length - 1]);
    lis = document.querySelectorAll("li");
})

//5
lis[4].addEventListener("click", function() {
    window.open("https://www.taobao.com");
})

//6
lis[5].addEventListener("click", function() {
    var li = document.createElement("li");
    li.innerHTML = "p" + (lis.length + 1);
    document.querySelector("ul").appendChild(li);
    lis = document.querySelectorAll("li");
})

//7
document.querySelector("ul").addEventListener("click", function(e) {
    if (e.target && e.target.tagName == "LI") {
        for (var i = 0; i < lis.length; i++) {
            if (e.target.innerHTML == lis[i].innerHTML)
                alert(i + 1);
        }

    }
})

//8 
lis[6].addEventListener("click", function() {
    var w = screen.availWidth + "px";
    box.style.width = w;
})