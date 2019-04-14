const cvButton = document.getElementById('cv-button');
const cvOptions = document.getElementById('cv-options');

cvButton.addEventListener('click', showCvOpt, false);
cvOptions.addEventListener('click', hideCvOpt, false)
window.addEventListener('keydown', hideCvOptEsc, false)

function showCvOpt(e) {    
    cvOptions.style.display = 'flex';    
}

function hideCvOpt(e) {
    cvOptions.style.display = 'none';   
    
}
function hideCvOptEsc(e) {    
    if (e.keyCode === 27){
        cvOptions.style.display = 'none'; 
    }
}
