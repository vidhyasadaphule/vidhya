var tickets = [
    {no:'r1' , amount:100},
    {no:'r2' , amount:200},
    {no:'r3' , amount:300},
    {no:'r4' , amount:400},
    {no:'r5' , amount:500},
    {no:'r6' , amount:600},
    {no:'r7' , amount:100},
    {no:'r8' , amount:200},
    {no:'r9' , amount:300},
    {no:'r10' , amount:400},
    {no:'r11' , amount:500},
    {no:'r12' , amount:600},
    {no:'r13' , amount:700},
    {no:'r14' , amount:2000}
];

console.log(tickets);


var str = ``;
for(val of tickets){
    console.log(val);
    var{no,amount} = val;
    console.log(no,amount);

    str = str + `
        <div for='${no}#${amount}' onclick=myfunc(this) class='col-xl-1 text-center border border-2 ticketdata'>
            ${no} <br /> ${amount}
        </div>
    `;
}
console.log(str);
document.querySelector('#result').innerHTML = str;

//////////////////////////////////////////////////////
var arr1 = []; //for ticket nos
var arr2 = []; // for ticket amount

function myfunc(el){
    console.log(el); //div 
    console.log(el.getAttribute('for')); //r13#300

    console.log( el.getAttribute('for').split("#") ); // [r13,300]

    var[tNo,tAmount] = el.getAttribute('for').split("#");

    console.log(tNo,tAmount);

    // console.log(arr1);
    // console.log(arr2);

    var ans_search = arr1.indexOf(tNo);
    console.log(ans_search);

    //ticket no does not exist (-1) in arr1 then push
    if(ans_search == -1){
        arr1.push(tNo);
        arr2.push(tAmount);
    }
    else{
        alert('exist');
    }

    console.log(arr1);
    console.log(arr2);

    document.getElementById('m1').innerHTML = arr1.join(",");
    // document.getElementById('m2').innerHTML = arr2.join("+");
    document.getElementById('m2').innerHTML = eval(arr2.join("+") );
    el.style.background = 'red';   
}
