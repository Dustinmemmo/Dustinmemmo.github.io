function toggle(buttonID) {
    var m = document.getElementById("Main");
    var p = document.getElementById("Players");
    var s = document.getElementById("Standings");
    var l = document.getElementById("Log");

    if (buttonID === "buttonHome") {
        m.style.display = "block";
        p.style.display = "none";
        s.style.display = "none";
        l.style.display = "none";
    }
    else if (buttonID === "buttonStandings") {
        m.style.display = "none";
        p.style.display = "none";
        s.style.display = "block";
        l.style.display = "none";
    }
    else if (buttonID === "buttonPlayers") {
        m.style.display = "none";
        p.style.display = "block";
        s.style.display = "none";
        l.style.display = "none";
    }
    else if (buttonID === "buttonLog") {
        m.style.display = "none";
        p.style.display = "none";
        s.style.display = "none";
        l.style.display = "block";
    }
}