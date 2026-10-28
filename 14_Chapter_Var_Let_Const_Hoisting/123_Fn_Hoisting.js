function getUserStatus(){
    //var status_code ;=> hoisted
    console.log(status_code); //underfined!
    var status_code= "200";
    console.log(status_code);
}
getUserStatus();