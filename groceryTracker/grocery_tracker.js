function groceryTracker() {
    const grocery1 = parseFloat(document.getElementById('grocery1').value) || 0;
    const grocery2 = parseFloat(document.getElementById('grocery2').value) || 0;
    const grocery3 = parseFloat(document.getElementById('grocery3').value) || 0;
    const total = grocery1 + grocery2 + grocery3;
    document.getElementById('totalAmount').innerText = total.toFixed(2);
}