status="";
    function setup(){
        canvas=createCanvas(600,500);
        canvas.center();
        video=createVideo(VIDEO);
        video.hide();
        }
    function start(){
        objectDectector=ml5.objectDetector("cocossd" , modelLoaded);
        document.getElementById("status").innerHTML="Status: Detecting Objects";
        input_value=document.getElementById("Id_Of_The_Input_Box").value;
    }
function modelLoaded(){
console.log("model loaded");
status=true;
}
function draw(){
    image(video,0,0,600,500);
}
