/*let msg="<h1> heeeeeey</h1>"
alert(msg);
document.writeln("helloworld");
document.getElementById("my contain").innerHTML =msg;
console.log(msg);
*/
/*let elen = document.getElementById("head");
alert(elen);
document.writeln(elen);
//document.getElementById("can").innerHTML =elen;
console.log(elen);

{
    var x=15;
}
document.getElementById("can").innerHTML =x;
*/
/*let x=6;
let y=7;
let s= "hello";

let z=x**y;
*/
/*let z=parseInt(prompt("hello   ....."));
let z=y*2;
*/
/*let x=5;
let y=4;
let z=x*y;
*/
//let i=5;
/*while(i<=10){

    document.getElementById("contain").innerHTML +=i + "<br>";

    i++
}
if(i==11){
    document.getElementById("contain").innerHTML +=i*2 + "<br>";

}
*/
/*let i=5;
let z="";
for(i=0; i<=10; i++){
    z+=i + "<br>"
}
document.getElementById("contain").innerHTML +=z;
*/

let a= parseFloat(prompt(" please Enter=a: "));

let b= parseFloat(prompt(" please Enter=b: "));

let c= parseFloat(prompt("please Enter=c: "));

let delta=(b**2)+ (4*a*c);
let msg="";
if (delta < 0){
    msg="no solution <br>";
}
else if(delta ==0){
    let x=(-1*b)/ (2*a);
    msg="this is one solution <br>";
    msg +="x="+x+"<br>";

}
else{
let x1=(-1*b - Math.sqrt(delta))/(2*a);
let x2=(-1*b + Math.sqrt(delta))/(2*a);
msg="x1 solution"+x1+"<br>";
msg="x2 solution"+x2+"<br>";

}

document.getElementById("contain").innerHTML =x;
document.getElementById("contain").innerHTML =x1;
document.getElementById("contain").innerHTML =x2;


