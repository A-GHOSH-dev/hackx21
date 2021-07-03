function Timer() {
    var eT = new Date("16 May 2021 14:30:00 GMT+05:30");
    eT = (Date.parse(eT) / 1000);

    var nw = new Date();
    nw = (Date.parse(nw) / 1000);

    var tL = eT - nw;

    var d = Math.floor(tL / 86400);
    var h = Math.floor((tL - (d * 86400)) / 3600);
    var m = Math.floor((tL - (d * 86400) - (h * 3600 )) / 60);
    var s = Math.floor((tL - (d * 86400) - (h * 3600) - (m * 60)));

    if (h < "10") { h = "0" + h; }
    if (m < "10") { m = "0" + m; }
    if (s < "10") { s = "0" + s; }

    $("#dys").html(d + "<span>\n\n Days</span>");
    $("#hrs").html(h + "<span>\n\n Hours</span>");
    $("#mns").html(m + "<span>\n\n Minutes</span>");
    $("#sec").html(s + "<span>\n\n Seconds</span>");

}

