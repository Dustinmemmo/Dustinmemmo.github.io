function toggle(buttonID) {
    var m = document.getElementById("Main");
    var p = document.getElementById("Players");
    var s = document.getElementById("Standings");

    if (buttonID === "buttonHome") {
        m.style.display = "block";
        p.style.display = "none";
        s.style.display = "none";
    }
    else if (buttonID === "buttonStandings") {
        m.style.display = "none";
        p.style.display = "none";
        s.style.display = "block";
    }
    else if (buttonID === "buttonPlayers") {
        (document.getElementById("Main")).style.display = "none";
        (document.getElementById("Players")).style.display = "block";
        (document.getElementById("Standings")).style.display = "none";
    }
}