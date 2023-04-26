
function math_screen() {
    var name1 = document.getElementById("name1").value;
    localStorage.setItem("name1",name1);

    var name2 = document.getElementById("name2").value;
    localStorage.setItem("name2",name2);

    window.location = "game.html";
}
function send() {
    number1 =  document.getElementById("number1").value;
    number2 =  document.getElementById("number2").value;
    answer = parseInt(number1) * parseInt(number2);

    question_numbers = "<h4>" +  number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer :<input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn_info' onclick='check()'>Check</button>";
    row = question_numbers + input_box + check_button ;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}