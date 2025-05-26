
var color = "black"
let flag=true
function f1() {
    for (var i = 0; i < 40; i++) {
        document.getElementById("table").innerHTML += "<tr id ='row" + i + "'></tr>"
        for (var j = 0; j < 90; j++) {
            document.getElementById("row" + i).innerHTML += "<td></td>"
            document.getElementById("row" + i).style.border = " solid black 1px"
        }
    }
    let td = document.getElementsByTagName("td")
    for (var i = 0; i < td.length; i++) {
        td[i].style.border = 'solid black 1px ';
        td[i].style.height='10px'
        td[i].style.width='10px'
    }
}
function mouse_over(e){
    e.target.style.backgroundColor=color

}
function change_color(){
color=document.getElementsByTagName("input")[0].value}
function addcolor() {
    if (flag) {
        let td = document.getElementsByTagName("td");
        for (var i = 0; i < td.length; i++) {
            td[i].addEventListener("mouseover", mouseover);
        }
    }
    else {
        let td = document.getElementsByTagName("td");
        for (var i = 0; i < td.length; i++) {
            td[i].removeEventListener("mouseover", mouseover);
        }
    }
    flag = !flag;
}
function mouseover() {
    window.event.target.style.background = color;
}


