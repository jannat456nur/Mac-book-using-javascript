
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
})