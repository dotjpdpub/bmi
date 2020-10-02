$(document).ready(function () {
    //called when key is pressed in textbox
    $("#height").keypress(function (e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 46 || e.which > 57 || e.which == 47)) {
            //display error message
            $("#errmsg1").html("Numbers Only").show().fadeOut("slow");

            return false;
        }
    });
});


$(document).ready(function () {
    //called when key is pressed in textbox
    $("#weight").keypress(function (e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 46 || e.which > 57 || e.which == 47)) {
            //display error message
            $("#errmsg2").html("Numbers Only").show().fadeOut("slow");

            return false;
        }
    });
});

$(document).ready(function () {
    //called when key is pressed in textbox
    $("#height1").keypress(function (e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 46 || e.which > 57 || e.which == 47)) {
            //display error message
            $("#errmsg3").html("Numbers Only").show().fadeOut("slow");
            return false;
        }
    });
});

$(document).ready(function () {
    //called when key is pressed in textbox
    $("#weight1").keypress(function (e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 46 || e.which > 57 || e.which == 47)) {
            //display error message
            $("#errmsg4").html("Numbers Only").show().fadeOut("slow");
            return false;
        }
    });
});
