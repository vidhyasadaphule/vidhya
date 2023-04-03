'use strict';
function ppf_calc_func(){
    // console.log('TESTing Func');
    // console.log(document);

    // console.log(document.getElementById('x1'));
    // console.log(document.getElementById('x2'));
    // console.log(document.getElementById('x3'));

    var amount = document.getElementById('x1').value;
    var roi = document.getElementById('x2').value;
    var duration = document.getElementById('x3').value;

    var para = document.getElementById('x4');
    // console.log(para);

    // console.log(amount , typeof amount);
    // console.log(roi);
    // console.log(duration);

    // console.log(isNaN(amount)); //true false

    var errmsg = '';

    if(amount == '' || roi =='' || duration ==''){
        errmsg = 'All values are required';
    }
    else if( isNaN(amount) || isNaN(roi)){
        errmsg = 'Only Numbers Allowed';
    }
    else{

        amount = +amount;
        roi = +roi;

        duration = +duration;

        // console.log(amount , typeof amount);

        var opening_balance = 0;

        var i=1;

        // console.log(Math);
        // Math.round(1.4)=>1
        // Math.round(1.5)=>2

        while(i<=duration){
            var interest = Math.round( (opening_balance + amount) * roi/100 );
            var closing_balance =  opening_balance + amount +  interest ;

            console.log(i , opening_balance , amount , interest , closing_balance);

            var trTag = document.createElement('tr');
            // console.log(trTag);

            var tdTag1 = document.createElement('td');
            // console.log(tdTag1);
            var tdTag2 = document.createElement('td');
            // console.log(tdTag2);
            var tdTag3 = document.createElement('td');
            // console.log(tdTag3);
            var tdTag4 = document.createElement('td');
            // console.log(tdTag4);
            var tdTag5 = document.createElement('td');
            // console.log(tdTag5);

            tdTag1.innerText = i;
            tdTag2.innerText = opening_balance;
            tdTag3.innerText = amount;
            tdTag4.innerText = interest;
            tdTag5.innerText = closing_balance;

            // console.log(tdTag5);

            trTag.append(tdTag1);
            trTag.append(tdTag2);
            trTag.append(tdTag3);
            trTag.append(tdTag4);
            trTag.append(tdTag5);

            // console.log(trTag);

            document.getElementById('result').append(trTag);

            opening_balance = closing_balance;

            i++;
        }
    }

    para.innerText = errmsg;
}
