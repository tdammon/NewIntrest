$(document).ready(readyNow)

function readyNow(){
    $('#startingAmountIn').hide();
    $('#options').on('change', displayFields)
}

function displayFields() {
    console.log('option changed')
    if($(this).val()=='opt1'){
        console.log('opt1 selected')
        $('#startingAmountIn').hide();
        $('#durationNeededIn').show();
        $('#intrestEarnedIn').show();
        $('#annualWithdrawalAmountIn').show();
    } else if($(this).val()=='opt2'){
        console.log('opt2 selected')
        $('#startingAmountIn').show();
        $('#durationNeededIn').show();
        $('#intrestEarnedIn').show();
        $('#annualWithdrawalAmountIn').hide();
    } else if($(this).val()=='opt3'){
        console.log('opt3 selected')
        $('#startingAmountIn').show();
        $('#durationNeededIn').hide();
        $('#intrestEarnedIn').show();
        $('#annualWithdrawalAmountIn').show();
    }
}

