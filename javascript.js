function calc(op)
{
    var num1 = parseFloat(document.getElementById("input1").value);
    var num2 = parseFloat(document.getElementById("input2").value);

    var result = 0;

    switch(op)
    {
        case '+' : result = num1 + num2; break;
        case '-' : result = num1 - num2; break;
        case '*' : result = num1 * num2; op = "×"; break;
        case '/' : result = num1 / num2; op = "÷"; break;
    }

    document.getElementById("output").value = result;

    var newHistory = "<div>" + num1 + " " + op + " " + num2 + " = " + result + "</div>";

    document.getElementById("history").innerHTML = newHistory + document.getElementById("history").innerHTML;
}