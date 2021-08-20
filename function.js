function updateGbCase(isIncreasing) {
    const caseInput = document.getElementById('input-value');
    const caseNumber = caseInput.innerText;
    if (caseNumber <= 1 && isIncreasing == true) {
        caseInput.innerText = parseInt(caseNumber) + 180;
    }
    //error**********

    else if (caseNumber > 0) {
        caseInput.innerText = parseInt(caseNumber) - 180;
    }
    //update total
    const caseTotal = document.getElementById('total');
    if (isIncreasing == true && caseNumber < 1) {

        caseTotal.innerText = parseInt(caseNumber) + 180 + 1299;
    }
    else if (caseNumber > 0) {
        caseTotal.innerText = parseInt(caseNumber) + 1299 - 180;
    }

}

document.getElementById('case-up').addEventListener('click', function () {
    updateGbCase(true)
});

document.getElementById('case-down').addEventListener('click', function () {
    updateGbCase(false)

});
//for ssd
function updateSsdCase(isIncreasing) {
    const caseInput = document.getElementById('ssd');
    const caseNumber = caseInput.innerText;
    if (isIncreasing) {
        caseInput.innerText = parseInt(caseNumber) - 100 + 280;
    }
    else {
        caseInput.innerText = parseInt(caseNumber) - 180;
    }
    //update total
    const caseTotal = document.getElementById('total');
    if (isIncreasing == true && caseNumber < 1) {

        caseTotal.innerText = parseInt(caseNumber) + 180 + 180 + 1299;
    }
    else if (caseNumber > 0) {
        caseTotal.innerText = parseInt(caseNumber) + 1299 - 180 - 180;
    }
}
//for ssd 256
document.getElementById('memory-256').addEventListener('click', function () {
    updateSsdCase(false)

});
//for ssd 521
document.getElementById('memory-512').addEventListener('click', function () {

    caseInput.innerText = parseInt(caseNumber) + 100;
    //error ********
});
//for ssd 1TB
document.getElementById('memory-1TB').addEventListener('click', function () {
    updateSsdCase(true)

});
//for delivery
function updateDeliveryCase(isIncreasing) {
    const caseInput = document.getElementById('delivery');
    const caseNumber = caseInput.innerText;
    if (isIncreasing == true) {
        caseInput.innerText = parseInt(caseNumber) + 20;
    }
    else {
        caseInput.innerText = parseInt(caseNumber) - 20;
    }
    //update total
    const caseTotal = document.getElementById('total');
    if (isIncreasing == true && caseNumber < 1) {

        caseTotal.innerText = parseInt(caseNumber) + 180 + 180 + 1299 + 20;
    }
    else if (caseNumber > 0) {
        caseTotal.innerText = parseInt(caseNumber) + 1299 - 180 - 180 - 20;
    }
}
//for delivery cost 25 aug
document.getElementById('25-aug').addEventListener('click', function () {
    updateDeliveryCase(false)

});
//for 16aug

document.getElementById('16-aug').addEventListener('click', function () {

    updateDeliveryCase(true)
});
