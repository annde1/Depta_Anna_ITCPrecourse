


const inputs = document.querySelectorAll('.must');
const btn = document.querySelector('.submit');
console.log(inputs)

function checkAll(){
    for(let i=0; i<inputs.length; i++){
        if (inputs[i].value == ""){
            btn.disabled = true;
            return;
        }
    }

    btn.disabled = false;
}

for (let i = 0; i < inputs.length; i++) {
    console.log("adding listener");
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
    inputs[i].addEventListener('keyup', function() {
        checkAll();
    });
}