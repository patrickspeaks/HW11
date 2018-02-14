
$(document).ready(function () {
    $("#convert").click(function () {
        calculate();  
    });
     
});





function calculate() {    
    try {
        var inputvalue = document.getElementById("temp").value;
        
        if (isNaN(inputvalue))
            throw "You must enter a number!";

        if (document.getElementById("f").checked == true) {

            x = document.getElementById("temp").value * 9 / 5 + 32;
            document.getElementById("result").value = Math.round(x);
        }
        else
            getCelcius();
    }

    catch (err) {
        alert(err);
    } 
    
}


function getCelcius() {

    try {
        if (document.getElementById("c").checked == true) {
            x = (document.getElementById("temp").value - 32) * 5 / 9;
            document.getElementById("result").value = Math.round(x);
        }
    }

    catch (err) {
        throw (err);         
    }   
   
}



function clearfields() {
    document.getElementById("temp").value = "";
    document.getElementById("result").value = "";
    document.getElementById("c").checked = true;
    document.getElementById("f").checked = false;
    
}


//$("#getout").bind("click", function () {
//    getrandomNum()
//});


function fadeout () {
    $("#fadeout").fadeOut(1000).delay(1000);
    $("#goodbye").text("GoodBye").fadeIn(1000);
};

       








  
   
  






