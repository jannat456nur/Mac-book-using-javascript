function updateGbCase(product, isIncreasing) {
    const caseInput = document.getElementById(product + '-value');
    let caseNumber = caseInput.innerText;
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
    updateGbCase('input', true)
});

document.getElementById('case-down').addEventListener('click', function () {
    updateGbCase('input', false)

});
//for ssd

function updateSsdCase(product, isIncreasing) {
    const caseInput = document.getElementById(product + '-ssd');
    let caseNumber = caseInput.innerText;
    if (isIncreasing) {
        caseInput.innerText = parseInt(caseNumber) - 100 + 280;
    }
    else {
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
//for ssd 256
document.getElementById('memory-256').addEventListener('click', function () {
    updateSsdCase('case', false)

});
//for ssd 521
document.getElementById('memory-512').addEventListener('click', function () {

    caseInput.innerText = parseInt(caseNumber) + 100;
    //error ********
});
//for ssd 1TB
document.getElementById('memory-1TB').addEventListener('click', function () {
    updateSsdCase('case', true)

});
//for delivery
function updateDeliveryCase(product, isIncreasing) {
    const caseInput = document.getElementById(product + '-delivery');
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

        caseTotal.innerText = parseInt(caseNumber) + 1299 + 20;
    }
    else if (caseNumber > 0) {
        caseTotal.innerText = parseInt(caseNumber) + 1299 - 20;
    }
}
//for delivery cost 25 aug
document.getElementById('25-aug').addEventListener('click', function () {
    updateDeliveryCase('case', false)

});
//for 16aug

document.getElementById('16-aug').addEventListener('click', function () {

    updateDeliveryCase('case', true)
});
