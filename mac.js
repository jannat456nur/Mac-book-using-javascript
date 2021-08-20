
//for 16gb
document.getElementById('case-up').addEventListener('click', function () {
    const caseInput = document.getElementById('input-value');
    const caseNumber = caseInput.innerText;
    console.log(caseNumber)
    caseInput.innerText = parseInt(caseNumber) + 180;
})
//for 8gb
document.getElementById('case-down').addEventListener('click', function () {
    const caseInput = document.getElementById('input-value');
    const caseNumber = caseInput.innerText;
    console.log(caseNumber)
    caseInput.innerText = parseInt(caseNumber) - 180;
});
//for ssd 256
document.getElementById('memory-256').addEventListener('click', function () {
    const caseInput = document.getElementById('ssd');
    const caseNumber = caseInput.innerText;
    console.log(caseNumber)
    caseInput.innerText = parseInt(caseNumber) - 180;
});
//for ssd 521
document.getElementById('memory-512').addEventListener('click', function () {
    const caseInput = document.getElementById('ssd');
    const caseNumber = caseInput.innerText;
    console.log(caseNumber)
    caseInput.innerText = parseInt(caseNumber) + 100;
});
//for ssd 1TB
document.getElementById('memory-1TB').addEventListener('click', function () {
    const caseInput = document.getElementById('ssd');
    const caseNumber = caseInput.innerText;
    console.log(caseNumber)
    caseInput.innerText = parseInt(caseNumber) - 100 + 280;
});
//for delivery cost 25 aug
document.getElementById('25-aug').addEventListener('click', function () {
    const caseInput = document.getElementById('delivery');
    const caseNumber = caseInput.innerText;
    console.log(caseNumber)
    caseInput.innerText = parseInt(caseNumber) - 20;
});
//for 16aug

document.getElementById('16-aug').addEventListener('click', function () {
    const caseInput = document.getElementById('delivery');
    const caseNumber = caseInput.innerText;
    console.log(caseNumber)
    caseInput.innerText = parseInt(caseNumber) + 20;
});