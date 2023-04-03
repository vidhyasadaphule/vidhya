// console.log(document.getElementById('btn'));

document.getElementById('btn').onclick = function(){
    // console.log('event called');
    // console.log(document.getElementsByName('txtData'));
    var amount = document.getElementsByName('txtData')[0].value;
    var roi = document.getElementsByName('txtData')[1].value;
    var duration = document.getElementsByName('txtData')[2].value;

    //the data got through  input textbox is always a string it needs to be converted to number so number function is used.
    //number function no matter whwether data in decimal or number it always returns the number.

    var P = Number(amount);
    var R = Number(roi);
    var N = Number(duration);

    //formula for calculation
    //P x R x (1+R)^N /[(1+R)^N-1]
    // loan tenure in months
    //monthly interest rate

    R = R/12/100;
    N = N*12;

    var EMI = P*R*((1+R)**N)/((1+R)**N);
    EMI = Math.round(EMI);
    console.log(EMI);

    var total_payable_amount = EMI * N;
    console.log(total_payable_amount);

    var interest = total_payable_amount - P;
    console.log(interest);

    document.getElementById('emi').innerHTML = EMI;
    document.getElementById('loan_amount').innerHTML = P;
    document.getElementById('interest').innerHTML = interest;
    document.getElementById('final_amount').innerHTML = total_payable_amount;
    
    //charts to display

    // Data retrieved from https://netmarketshare.com
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in May, 2020',
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
            name: 'Loan Amount',
            y: P,
            sliced: true,
            selected: true
        }, {
            name: 'interest amount',
            y: interest
        }]
    }]
});







}