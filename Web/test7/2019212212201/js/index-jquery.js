$(document).ready(function() {
    var $img = $(".selected");
    $(".select").hide();
    $img.hide();

    $(".box .row img").click(function(e) {
        e.stopPropagation();
        $img.attr("src", $(this).attr("src"));
        $(".select").show();
        // $img.show();
        $img.fadeIn(1000);
        $(".row img").css("filter", "blur(10px)");
    })

    $("body").click(function() {
            // $img.hide();
            $img.fadeOut(1000);
            $(".row img").css("filter", "blur(0px)");
            $(".select").fadeOut(1000);
            // $(".select").hide();
        })
        //第二部分
    $(".box-2 button").click(function() {
        $(this).css("background", "grey");
        $(this).css("color", "#fff");
        $(".box-2 button").not(this).css("background", "#fff");
        $(".box-2 button").not(this).css("color", "#000");
    })

    $(".box-2 button:eq(0)").click(function() {
        $(".content").text("");
        $(".content").css("background", "grey");
        $(".content").text("狮子座L７７的奥特曼。在拜访作为第二故乡的地球上，与赛文相遇的雷欧，变身为凤源，加入了宇宙巡逻队『MAC』。和宇宙人和怪兽战斗。必杀技是雷欧飞踢等。是『奥特兄弟』的一员，之后被赛文托付了赛罗的雷欧，与阿斯特拉一起成为其老师，锻炼赛罗。");
    })

    $(".box-2 button:eq(1)").click(function() {
        $(".content").text("");
        $(".content").css("background", "grey");
        $(".content").text("从Ｍ７８星云·光之国赶赴地球，完成了大的成长的奥特之父和奥特之母的亲生子。在地球上的身姿是防卫队『ＺＡＴ』的东光太郎队员。作为『奥特兄弟』的一员，『宇宙警备队』的首席教官的泰罗，也是梦比优斯奥特曼的老师。必杀技是斯特利姆光线等。");
    })

    $(".box-2 button:eq(2)").click(function() {
        $(".content").text("");
        $(".content").css("background", "grey");
        $(".content").text("在Ｍ７８星云·光之国拥有本部的，『宇宙警备队』的队长。优秀的指导力和行动力，受到大家的信赖。是『奥特兄弟』的一员，佐菲的必杀技，Ｍ８７光线，是被称为单独放出光线技在奥特兄弟中最强的。");
    })

    //第三部分
    $(".box-3 button").click(function() {
        var height = $(".box-3").height() + 38;
        $(".box-3").css("height", height);
        var num = $(".first:last").text() == "" ? 1 : parseInt($(".first:last").text()) + 1;
        $(".box-3 section").append("<div><span class=\"first\">" + num + "</span><span class=\"end\">Delete</span></div>");

    })

    $(document).on('click', ".box-3 .end", function() {
        $(this).parent().remove();
        var height = $(".box-3").height() - 38;
        $(".box-3").css("height", height);
        //删除时更新行号
        //for (var i = 0; i < $(".box-3 section div").length; i++) {
        //    $(".box-3 section div:eq(" + i + ") .first").text(i + 1);
        //}
    })

})