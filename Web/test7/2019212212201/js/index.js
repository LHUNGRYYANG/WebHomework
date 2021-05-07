window.onload = function() {
    //第一部分
    var imgs = document.getElementById("selected");
    var imgBox = document.getElementById("select");
    var imgSelected = document.querySelectorAll("#box .row img");

    imgs.style.display = "none";
    imgBox.style.display = "none";
    //点击放大
    for (let i = 0; i < imgSelected.length; i++) {
        imgSelected[i].addEventListener("click", function() {
            console.log(1);
            imgs.src = imgSelected[i].src;

            //背景虚化
            for (let j = 0; j < imgSelected.length; j++) {
                setTimeout(function() {
                    imgBox.style = "opacity: 1; transition : opacity 1s;";
                    imgs.style = "opacity: 1; transition : opacity 1s;";
                    imgBox.style.display = "block";
                    imgs.style.display = "block";
                    k = 5;
                    imgSelected[j].style = "filter: blur(" + k + "px);";
                    imgSelected[j].style = "filter: blur(15px); transition : filter 0.3s;";
                }, 100);
            }
        })
    }

    imgBox.addEventListener("click", function() {
        imgs.style = "opacity: 0; transition : opacity 1s;";
        imgBox.style = "opacity: 0; transition : opacity 1s;";
        imgBox.style.display = "none";

        for (let j = 0; j < imgSelected.length; j++) {
            setTimeout(function() {
                k = 15;
                imgSelected[j].style = "filter: blur(" + k + "px);";
                imgSelected[j].style = "filter: blur(0px); transition : filter 0.3s;";
            }, 30);
        }
    })

    //第二部分
    var button = document.querySelectorAll(".box-2 button");
    var content = document.querySelector(".content");

    function cssback(e) {
        e.style.background = "#fff";
        e.style.color = "#000";
    }

    function cssSet(e) {
        e.style.background = "grey";
        e.style.color = "#fff";
        content.style.background = "grey";
    }

    button[0].addEventListener("click", function() {
        cssback(button[1]);
        cssback(button[2]);
        cssSet(button[0]);
        content.textContent = "狮子座L７７的奥特曼。在拜访作为第二故乡的地球上，与赛文相遇的雷欧，变身为凤源，加入了宇宙巡逻队『MAC』。和宇宙人和怪兽战斗。必杀技是雷欧飞踢等。是『奥特兄弟』的一员，之后被赛文托付了赛罗的雷欧，与阿斯特拉一起成为其老师，锻炼赛罗。";
    })
    button[1].addEventListener("click", function() {
        cssback(button[0]);
        cssback(button[2]);
        cssSet(button[1]);
        content.textContent = "从Ｍ７８星云·光之国赶赴地球，完成了大的成长的奥特之父和奥特之母的亲生子。在地球上的身姿是防卫队『ＺＡＴ』的东光太郎队员。作为『奥特兄弟』的一员，『宇宙警备队』的首席教官的泰罗，也是梦比优斯奥特曼的老师。必杀技是斯特利姆光线等。";
    })
    button[2].addEventListener("click", function() {
        cssback(button[1]);
        cssback(button[0]);
        cssSet(button[2]);
        content.textContent = "在Ｍ７８星云·光之国拥有本部的，『宇宙警备队』的队长。优秀的指导力和行动力，受到大家的信赖。是『奥特兄弟』的一员，佐菲的必杀技，Ｍ８７光线，是被称为单独放出光线技在奥特兄弟中最强的。";
    })

    //第三部分
    var add = document.querySelector(".box-3 button");
    var del = document.querySelectorAll(".end");
    var section = document.querySelector(".box-3 section");
    var first = document.querySelectorAll(".first");
    var box_3 = document.querySelector(".box-3");

    add.addEventListener("click", function() {
        box_3.style.height = box_3.clientHeight + 38 + "px";
        var div = document.createElement("div");
        var num = parseInt(first[first.length - 1].textContent) + 1;
        div.innerHTML = "<span class=\"first\">" + num + "</span><span class=\"end\" >Delete</span>";
        section.appendChild(div);
        first = document.querySelectorAll(".first");
        del = document.querySelectorAll(".end");
    })


    document.querySelector("section").addEventListener("click", function(e) {

        if (e.target && e.target.innerHTML == 'Delete') {
            section.removeChild(e.target.parentNode);
            box_3.style.height = box_3.clientHeight + (-38) + "px";
            section = document.querySelector("section");
            //删除时更新行号
            // first = document.querySelectorAll(".first");
            // del = document.querySelectorAll(".end");
            // for (var k = 0; k < first.length; k++) {
            //     first[k].textContent = k + 1;
            // }
        }
    })
}