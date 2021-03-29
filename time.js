// 12:00:00AM
setTimeout(time,1000);
function time(){
    var oldtime=prompt("Enter Time in 12-hr AM/PM format");
    var half;
    for(var i=0;i<oldtime.length;i++){
        if(oldtime.charAt(i).match(/[A-Z]/i)){
            half=oldtime.charAt(i);
            break;
        }
    }
    var h,m,s;
    var i=0;
    for(;i<oldtime.length;i++){
        if(oldtime.charAt(i)===':'){
            break;
        }
    }
    h=parseInt(oldtime.slice(0,i));
    var x=i;
    i++;
    for(;i<oldtime.length;i++){
        if(oldtime.charAt(i)===':'){
            break;
        }
    }
    m=parseInt(oldtime.slice(x+1,i));
    x=i;
    i++;
    for(;i<oldtime.length;i++){
        if(oldtime.charAt(i).match(/[A-Z]/i)){
            break;
        }
    }
    s=parseInt(oldtime.slice(x+1,i));
    if(half==='A'){
        if(h==12){
            h=0;
        }
    }else{
        if(h!=12){
            h+=12;
        }
    }
    s+=45;
    if(s>59){
        s-=60;
        m++;
    }
    m+=45;
    if(m>59){
        h++;
        m-=60;
    }
    if(h==24){
        h=0;
    }
    var newtime="";
    if(h<=9){
        newtime+="0";
    }
    newtime+=h;
    newtime+=":";
    if(m<=9){
        newtime+="0";
    }
    newtime+=m;
    newtime+=":";
    if(s<=9){
        newtime+="0";
    }
    newtime+=s;
    console.log("Output ",newtime);
}