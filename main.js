
function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/OG8dNC_76/model.json",modelReady)


}
function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;
        document.getElementById("sound_name").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("accuracy").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("sound_name").innerHTML= "I can hear -" + results[0].label;
        document.getElementById("accuracy").innerHTML= "Accuracy -" + (results[0].confidence*100).toFixed(2);
        img1=document.getElementById("aliens01");
        img2=document.getElementById("aliens02");
        img3-document.getElementById("aliens03");
        img4=document.getElementById("aliens04");
        
        if (results[0].label == "Clap" ){
            img1.src="aliens-01.gif";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
            
        }
        if (results[0].label == "Bell" ){
            img1.src="aliens-01.png";
            img2.src="aliens-02.gif";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
            
        }
        if (results[0].label == "Snap" ){
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.gif";
            img4.src="aliens-04.png";
            
        }
        else{
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.gif"; 
        }

    }


}