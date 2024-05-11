function sum()
{
    var num1 = parseFloat(document.getElementById("input1").value);
    var num2 = parseFloat(document.getElementById("input2").value);

    var result = num1 + num2;

    document.getElementById("output").value = result;
}
