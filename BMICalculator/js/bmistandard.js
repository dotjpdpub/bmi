function ClearStandard() {
    document.getElementById("height").value = '';
    document.getElementById("weight").value = '';
    document.getElementById("output").innerText = '';
    document.getElementById("comment").innerText = '';
}

function ClearMetric() {
    document.getElementById("height1").value = '';
    document.getElementById("weight1").value = '';
    document.getElementById("outputmet").innerText = '';
    document.getElementById("commentmet").innerText = '';
}

function validateStandard() {
    if (document.getElementById("height").value == "") {
        alert("Must enter your height in inches.");
    } else if (document.getElementById("weight").value == "") {
        alert("Must enter your weight in pounds.");
    }
}

function validateMetric() {
    if (document.getElementById("height1").value == "") {
        alert("Must enter your height in centimeters.");
    } else if (document.getElementById("weight1").value == "") {
        alert("Must enter your weight in kilograms.");
    }
}



function computeStandardBMI() {
    
    var height = Number(document.getElementById("height").value);
    var weight = Number(document.getElementById("weight").value);
   
    var USBMI = Math.round((703 * (weight / (height * height))) * 100) / 100;
 
    document.getElementById("output").innerText = USBMI;
   
    var output = USBMI;
   
    //US 
    if (output < 16) {
        document.getElementById("comment").innerText = "Severe Thinness";
        document.getElementById("comment").style.color = '#4169E1';
        document.getElementById("output").style.color = '#4169E1';
        

    }
    if (output >= 16 && output <= 16.99) {
        document.getElementById("comment").innerText = "Moderate Thinness";
        document.getElementById("comment").style.color = '#4169E1';
        document.getElementById("output").style.color = '#4169E1';
       
    }
    if (output >= 17 && output <= 18.49) {
        document.getElementById("comment").innerText = "Mild Thinness";
        document.getElementById("comment").style.color = '#4169E1';
        document.getElementById("output").style.color = '#4169E1';
        
    }
    if (output >= 18.5 && output <= 22.99) {
        document.getElementById("comment").innerText = "Normal Lower Range";
        document.getElementById("comment").style.color = '#008000';
        document.getElementById("output").style.color = '#008000';
        
    }
    if (output >= 23 && output <= 24.99) {
        document.getElementById("comment").innerText = "Normal Upper Range";
        document.getElementById("comment").style.color = '#008000';
        document.getElementById("output").style.color = '#008000';
        
    }
    if (output >= 25 && output <= 27.49) {
        document.getElementById("comment").innerText = "Overweight Lower Range";
        document.getElementById("comment").style.color = '#FFA500';
        document.getElementById("output").style.color = '#FFA500';
       
    }
    if (output >= 27.5 && output <= 29.99) {
        document.getElementById("comment").innerText = "Overweight Upper Range";
        document.getElementById("comment").style.color = '#FFA500';
        document.getElementById("output").style.color = '#FFA500';
       
    }
    if (output >= 30 && output <= 34.99) {
        document.getElementById("comment").innerText = "Obese Class I";
        document.getElementById("comment").style.color = '#FF0000';
        document.getElementById("output").style.color = '#FF0000';

    }
    if (output >= 35 && output <= 39.99) {
        document.getElementById("comment").innerText = "Obese Class II";
        document.getElementById("comment").style.color = '#FF0000';
        document.getElementById("output").style.color = '#FF0000';

    }
    if (output >= 40) {
        document.getElementById("comment").innerText = "Obese Class III";
        document.getElementById("comment").style.color = '#FF0000';
        document.getElementById("output").style.color = '#FF0000';
    }
}




function computeMetricBMI() {
   
    var height1 = Number(document.getElementById("height1").value);
    var weight1 = Number(document.getElementById("weight1").value);

    var METRICBMI = Math.round((weight1 / (height1 * height1)) * 100000) / 10;
   
    document.getElementById("outputmet").innerText = METRICBMI;

    var outputmet = METRICBMI;

    //Metric
    if (outputmet < 16) {
        document.getElementById("commentmet").innerText = "Severe Thinness";
        document.getElementById("commentmet").style.color = '#4169E1';
        document.getElementById("outputmet").style.color = '#4169E1';
    }
    if (outputmet >= 16 && outputmet <= 16.99) {
        document.getElementById("commentmet").innerText = "Moderate Thinness";
        document.getElementById("commentmet").style.color = '#4169E1';
        document.getElementById("outputmet").style.color = '#4169E1';
    }
    if (outputmet >= 17 && outputmet <= 18.49) {
        document.getElementById("commentmet").innerText = "Mild Thinness";
        document.getElementById("commentmet").style.color = '#4169E1';
        document.getElementById("outputmet").style.color = '#4169E1';
    }
    if (outputmet >= 18.5 && outputmet <= 22.99) {
        document.getElementById("commentmet").innerText = "Normal Lower Range";
        document.getElementById("commentmet").style.color = '#008000';
        document.getElementById("outputmet").style.color = '#008000';
    }
    if (outputmet >= 23 && outputmet <= 24.99) {
        document.getElementById("commentmet").innerText = "Normal Upper Range";
        document.getElementById("commentmet").style.color = '#008000';
        document.getElementById("outputmet").style.color = '#008000';
    }
    if (outputmet >= 25 && outputmet <= 27.49) {
        document.getElementById("commentmet").innerText = "Overweight Lower Range";
        document.getElementById("commentmet").style.color = '#FFA500';
        document.getElementById("outputmet").style.color = '#FFA500';
    }
    if (outputmet >= 27.5 && outputmet <= 29.99) {
        document.getElementById("commentmet").innerText = "Overweight Upper Range";
        document.getElementById("commentmet").style.color = '#FFA500';
        document.getElementById("outputmet").style.color = '#FFA500';
    }
    if (outputmet >= 30 && outputmet <= 34.99) {
        document.getElementById("commentmet").innerText = "Obese Class I";
        document.getElementById("commentmet").style.color = '#FF0000';
        document.getElementById("outputmet").style.color = '#FF0000';
    }
    if (outputmet >= 35 && outputmet <= 39.99) {
        document.getElementById("commentmet").innerText = "Obese Class II";
        document.getElementById("commentmet").style.color = '#FF0000';
        document.getElementById("outputmet").style.color = '#FF0000';
    }
    if (outputmet >= 40) {
        document.getElementById("commentmet").innerText = "Obese Class III";
        document.getElementById("commentmet").style.color = '#FF0000';
        document.getElementById("outputmet").style.color = '#FF0000';
    }
}