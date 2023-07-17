var paragraph = ""
var par_array = ""
let i = 0
var wpm = 200

function start_spreeding() {
    paragraph = document.getElementById("textarea1").value;
    par_array = paragraph.split(" ");
    document.getElementById("textarea1").style.display = "none";
    document.getElementById("start_button").style.display = "none";
    document.getElementById("play_button").style.display = "flex";
    document.getElementById("pause_button").style.display = "none";
    document.getElementById("display_text").style.display = "flex";
    document.getElementById("seeker").style.display = "flex";
    document.getElementById("slider").style.display = "flex";
    document.getElementById("settings").style.display = "block";
    document.getElementById("new").style.display = "block";
    document.getElementById("play_box").style.display = "block";


}

function play() {
    document.getElementById("play_button").style.display = "none";
    document.getElementById("pause_button").style.display = "flex";

    interval_id = setInterval(() => {
        document.getElementById("display_text").textContent = par_array[i];
        i++
        // if (index >= words.length) {
        //     clearInterval(interval_id);
        // }
    }, wpm);
}

function pause() {

}

