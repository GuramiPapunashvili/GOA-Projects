function calculateMortgage() {
    const amount = Number(document.getElementById('mortgage_amount').value);
    const interestRate = Number(document.getElementById('interest_rate').value)
    const mortgageTerm = Number(document.getElementById('mortgage_term').value)
    const repayment = document.getElementById('repayment_radio').checked;
    let totalRepay;
    let monthlyRepay;
    if (repayment) {
        const monthlyInterestRate = interestRate / 12;
        const numberOfPayments = mortgageTerm;
        monthlyRepay = amount * (monthlyInterestRate * (1 + monthlyInterestRate) ** numberOfPayments) / ((1 + monthlyInterestRate) ** numberOfPayments - 1);
        totalRepay = monthlyRepay * numberOfPayments;
    } else {
        monthlyRepay = amount * (interestRate / 12);
        totalRepay = (amount * interestRate * (mortgageTerm / 12)) + amount;
    }
    
    document.getElementById('monthly_repayments').textContent = monthlyRepay
    document.getElementById('total_repay').textContent = totalRepay

    return false;
}


