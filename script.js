

function load(){
    let activeradio = ''
    if (document.getElementById('r1').checked){
        activeradio = document.getElementById("r1").value
    }else if (document.getElementById('r2').checked){
        activeradio = document.getElementById("r2").value
    }
    const viewport_width = window.screen.width;
    if (activeradio == 'imperial'){
        document.getElementById("rightrect1").classList.add("hidden");
        document.getElementById("rightrect2").classList.remove("hidden");
        if (viewport_width > 768){
            document.getElementById("bluerect1").style.top= '575px';
            document.getElementById("bluerect2").style.top= '596px';
            console.log(activeradio,viewport_width)
        }else if (viewport_width<=768&&viewport_width>375){
             document.getElementById("bluerect1").style.top= '770px';
            document.getElementById("bluerect2").style.top= '780px';
        }else{
            document.getElementById("bluerect1").style.top= '839px';
            document.getElementById("bluerect2").style.top= '880px';
        }
    }else if (activeradio == 'metric'){
        document.getElementById("rightrect2").classList.add("hidden");
        document.getElementById("rightrect1").classList.remove("hidden");
        if (viewport_width > 768){
            console.log('aqui')
        document.getElementById("bluerect1").style.top= '452px';
        document.getElementById("bluerect2").style.top= '467px';
        }else if (viewport_width<=768&&viewport_width>375){
            document.getElementById("bluerect1").style.top= '640px';
            document.getElementById("bluerect2").style.top= '650px';
        }else{
            document.getElementById("bluerect1").style.top= '839px';
            document.getElementById("bluerect2").style.top= '880px';
        }
    }    

}



function calcMetric(){
    let h = document.getElementById("heightinput").value
    let w = document.getElementById("weightinput").value
    let bmi = (w/(h/100)**2).toFixed(2);
    let p1 = '';
    let w1 = (((h/100)**2) * 18.5).toFixed(1);
    let w2 = (((h/100)**2) * 24.9).toFixed(1);
    console.log(h, w)
    if (bmi < 18.5){
        p1 = "Underweight.";
    }else if (bmi < 24.9){
        p1 = "Healthy weight.";
    }else if (bmi < 29.9){
        p1 = "Overweight.";
    }else {
        p1 = "Obese.";
    }

    if ((h!=''&&h!=null)&&(w!=''&&w!=null)){
        document.getElementById("bluerect2").style.display = "none";
        document.getElementById("bluerect1").style.display = "block";
        document.getElementById("bmi3").innerHTML = bmi;
        document.getElementById("p1").innerHTML = p1;
        document.getElementById("p2").innerHTML = w1+'kgs - '+w2+'kgs';
    }
}

function calcImperial(){
    let hft = document.getElementById("heightinput-ft").value
    let hin = document.getElementById("heightinput-in").value
    let wst = document.getElementById("weightinput-st").value
    let wlbs = document.getElementById("weightinput-st").value
    h = 30.48 * hft + 2.54 * hin;
    w = wst * 6.35029 + 0.453592 * wlbs;
    let bmi = (w/(h/100)**2).toFixed(2);
    let p1 = '';
    let w1 = (((h/100)**2) * 18.5).toFixed(1);
    let w2 = (((h/100)**2) * 24.9).toFixed(1);
    if (bmi < 18.5){
        p1 = "Underweight.";
    }else if (bmi < 24.9){
        p1 = "Healthy weight.";
    }else if (bmi < 29.9){
        p1 = "Overweight.";
    }else {
        p1 = "Obese.";
    }

    if ((hft!=''&&hft!=null)&&(hin!=''&&hin!=null)&&(wst!=''&&wst!=null)&&(wlbs!=''&&wlbs!=null)){
        document.getElementById("bluerect2").style.display = "none";
        document.getElementById("bluerect1").style.display = "block";
        document.getElementById("bmi3").innerHTML = bmi;
        document.getElementById("p1").innerHTML = p1;
        document.getElementById("p2").innerHTML = w1+'kgs - '+w2+'kgs';
    }
}