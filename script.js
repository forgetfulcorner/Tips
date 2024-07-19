function calculateTotal() {
    const itemPrices = document.querySelectorAll('.item-price');
    const itemSplits = document.querySelectorAll('.item-split');
    const taxRate = parseFloat(document.getElementById('tax').value);
    const tipPercentage = parseFloat(document.getElementById('tip').value);

    let subtotal = 0;
    itemPrices.forEach((item, index) => {
        const price = parseFloat(item.value);
        const split = parseInt(itemSplits[index].value);
        if (!isNaN(price) && split > 0) {
            subtotal += price / split;
        }
    });

    const tipAmount = subtotal * (tipPercentage / 100);
    const taxAmount = subtotal * (taxRate / 100);
    const total = subtotal + tipAmount + taxAmount;

    document.getElementById('total').innerText = `Total: $${total.toFixed(2)}`;
}

document.querySelectorAll('.item-price, .item-split, #tax, #tip').forEach(element => {
    element.addEventListener('input', calculateTotal);
});

calculateTotal();  // Initial calculation on page load
