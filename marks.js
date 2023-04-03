// console.log('File Loaded');

'use strict';
function myfunc(){
    // console.log('Func Called');

    // console.log(document.getElementById('x1'));

    // console.log(document.getElementById('x1').value);

    var P = document.getElementById('x1').value;
    // console.log(P);
    console.log(typeof P);
    console.log(isNaN(P)); // is not a number string--true ,, number---false
    var C = document.getElementById('x2').value;
    var M = document.getElementById('x3').value;

    // console.log(P,C,M);
    var err = "";

    if(P == "" || C=="" || M==""){
        err = 'All values R Required';
    }
    else if( isNaN(P) || isNaN(C) || isNaN(M) ){
        err = 'All values must be Number';
    }
    else if( P<0 || P>100 || C<0 || C>100 || M<0 || M>100)
    {
        err = 'Marks Must be in between 0 and 100';
    }
    else{
        P = parseInt(P);
        C = parseInt(C);
        M = parseInt(M);
        

        var sum = P + C + M;
        console.log(sum);

        var percentage = sum/300 * 100;

        var classValue ='';

        if(percentage>=70){
            classValue = 'Distinction';
        }
        else if(percentage>=60){
            classValue = 'I class';
        }
        else{
            classValue = 'II class';
        }

        err = `Total Mark : ${sum}/300 , Percentage : ${percentage.toFixed(2)}%  Class:${classValue}  `;

        //////////////////////////////
        
        Highcharts.chart('container', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'PCM Marks',
                align: 'left'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'Physics',
                    y: P,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Chemistry',
                    y: C
                },  {
                    name: 'Maths',
                    y: M
                }]
            }]
        });
        

        //////////////////////////////
    }
    console.log(err);
    console.log(document.getElementById('message'));

    document.getElementById('message').innerHTML = err;
    document.getElementById('message').className = 'text-danger';
}

function myfunc2(){
    console.log('test');
    var ans = document.getElementById('h2').value;
    console.log(ans);
    document.getElementById('h1').value = ans;
}