function calc(op)
{
    var num1 = parseFloat(document.getElementById("input1").value);
    var num2 = parseFloat(document.getElementById("input2").value);

    if (Number.isNaN(num1))
    {
        num1 = 0
    }
    
    if (Number.isNaN(num2))
    {
        num2 = 0
    }
    
    var result = 0;

    switch(op)
    {
        case '+' : result = num1 + num2; break;
        case '-' : result = num1 - num2; break;
        case '*' : result = num1 * num2; op = "×"; break;
        case '/' : result = num1 / num2; op = "÷"; break;
    }

    if (Number.isNaN(result))
    {
        result = 0
    }

    if (Number.isFinite(result))
    {
        document.getElementById("output").value = result;        
    }

    else
    {
        result = "Inválido";
        document.getElementById("output").value = result;
    }

    var newHistory = "<p>" + num1 + " " + op + " " + num2 + " = " + result + "</p>";
    var history = document.getElementById("history");

    history.innerHTML = newHistory + history.innerHTML;

    if (history.children.length > 10)
    {
        history.removeChild(history.childNodes[10]);
    }
}