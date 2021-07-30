let calculateTip = () => {
    let amount = document.getElementById('amount').value;
    let satisfaction = document.getElementById('survey').value;
    let numPeople = document.getElementById('num-people').value;
    let each = document.getElementById('each');
    let totalTip = document.getElementById('tip-total');

    if (amount === "" || satisfaction === 0) {
        alert('Please Enter Correct Information');
        return;
    }
    if (numPeople === "" || numPeople < 1) {
        numPeople = 1;
        each.style.display = 'none';
    }
    else {
        each.style.display = 'block';
    }

    let total = (amount * satisfaction) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    totalTip.style.display = "block";
    document.getElementById('tip').innerText = total;
}

document.getElementById('tip-total').style.display = 'none';
document.getElementById('each').style.display = 'none';

document.getElementById('btn').onclick = function() {
    calculateTip();
}