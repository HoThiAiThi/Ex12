document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById("submitButton");
    var clearButton = document.getElementById("clearButton");

    submitButton.addEventListener("click", function() {
        var operantInput1 = document.getElementById("operantInput1").value.trim();
        var operantInput2 = document.getElementById("operantInput2").value.trim();
        var operatorInput = document.getElementById("operatorInput").value.trim();

        if (operantInput1 === "" || operantInput2 === "" || operatorInput === "") {
            alert("Vui lòng nhập đầy đủ thông tin");
            return;
        }
      
        if (isNaN(operantInput1) || isNaN(operantInput2)) {
            alert("Vui lòng nhập số vào các ô Input Operant");
            return;
        }
       
        var result;
        switch (operatorInput) {
            case '+':
                result = parseFloat(operantInput1) + parseFloat(operantInput2);
                break;
            case '-':
                result = parseFloat(operantInput1) - parseFloat(operantInput2);
                break;
            case '*':
                result = parseFloat(operantInput1) * parseFloat(operantInput2);
                break;
            case '/':
                result = parseFloat(operantInput1) / parseFloat(operantInput2);
                break;
            case '%':
                result = parseFloat(operantInput1) % parseFloat(operantInput2);
                break;
            case '^':
                result = Math.pow(parseFloat(operantInput1), parseFloat(operantInput2));
                break;
            default:
                alert("Phép toán không hợp lệ");
                return;
        }
       
        alert("Kết quả của phép tính là: " + result);
    });

    clearButton.addEventListener("click", function() {       
        document.getElementById("operantInput1").value = "";
        document.getElementById("operantInput2").value = "";
        document.getElementById("operatorInput").value = "";
    });
});
