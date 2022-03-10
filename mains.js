// Business logic
var add = function(number1, number2) {
    return number1 + number2;
};
var subtract = function(number1, number2) {
    return number1 - number2;
};
var multiply = function(number1, number2) {
    return number1 * number2;
};
var divide = function(number1, number2) {
    return number1 / number2;
};
// User Interface Logic

$(document).ready(function() {

    // add event handler to prevent form submission before the user actually submits

    $("form#add").submit(function(event) {
        event.preventDefault();

        // end of event handler

        var number1 = parseInt($("#add1").val());
        var number2 = parseInt($("#add2").val());
        // alert(add(number1, number2));
        // instead of displaying result in alert we display it on html
        var result = add(number1, number2);
        $("#output").text(result);
    });
});