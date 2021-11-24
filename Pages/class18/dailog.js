const name = document.getElementById("txtName");
const submitButton = document.getElementById("txtSubmit");
const para = document.getElementById("alertBoxContent");
const alertBox = document.getElementById("alertBox");




submitButton.addEventListener('click', function(){
    let msg = `Hello,  '${name.value.toUpperCase()}' from event listener `;
    //window.alert(msg);
    para.innerText = msg;
    alertBox.style.display = "block";
});

function onSubmitClick(){
    let msg = `Hello,  '${name.value.toUpperCase()}' `;
    window.alert(msg);
}
