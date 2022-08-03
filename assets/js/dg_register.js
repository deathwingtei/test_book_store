document.querySelector("#idcard_browse").onclick = function() {  
    document.querySelector("#idcard_file").click();
    return false;
};  

document.querySelector("#bookbank_browse").onclick = function() {  
    document.querySelector("#bookbank_file").click();
    return false;
};  

document.querySelector(".btn-save-form").onclick = function() {  

    return false;
};  

document.querySelector(".btn-cancel-form").onclick = function() {  

    document.querySelector("#mainform").reset();
    return false;
};  

var successModal = document.getElementById('successModal')

successModal.addEventListener('shown.bs.modal', function () {
  
});

document.querySelector(".btn-add-aka").onclick = function() {  
    const date = new Date().getTime(); 
    const randNum = Math.floor(Math.random() * 1000);
    const numofdiv = date+""+randNum;
    let app = document.querySelector('#aka_container');
    let nodes = "";
    nodes += '<div class="mb-3" id="aka_div_'+numofdiv+'">';
    nodes += '<input type="text" class="form-control form-control-register aka_input" data-id="'+numofdiv+'" id="aka_'+numofdiv+'">';
	nodes += '<div class="delete-item delete-aka" data-id="'+numofdiv+'" id="del_aka_'+numofdiv+'">-</div>';
    nodes += '</div>';
    app.innerHTML += nodes;

    let items = document.querySelectorAll('.delete-aka')

    items.forEach((el) => {
        el.addEventListener('click', function(){
            const del_id = this.getAttribute('data-id');
            document.querySelector('#aka_div_'+del_id).remove();

        })
    });

    return false;
};  


document.querySelector(".btn-add-publisher").onclick = function() {  
    const date = new Date().getTime(); 
    const randNum = Math.floor(Math.random() * 1000);
    const numofdiv = date+""+randNum;
    let app = document.querySelector('#publisher_container');
    let nodes = "";
    nodes += '<div class="mb-3"  id="publisher_div_'+numofdiv+'">';
    nodes += '<input type="text" class="form-control form-control-register publisher_input" data-id="'+numofdiv+'" id="publisher_'+numofdiv+'">';
	nodes += '<div class="delete-item delete-publisher" data-id="'+numofdiv+'" id="del_publisher_'+numofdiv+'">-</div>';
    nodes += '</div>';
    app.innerHTML += nodes;
    
    let items = document.querySelectorAll('.delete-publisher')

    items.forEach((el) => {
        el.addEventListener('click', function(){
            const del_id = this.getAttribute('data-id');
            document.querySelector('#publisher_div_'+del_id).remove();

        })
    });

    return false;
};  


var idcardToRead = document.querySelector("#idcard_file");
var bookbankToRead = document.querySelector("#bookbank_file");

idcardToRead.addEventListener("change", function(event) {
    var files = idcardToRead.files;
    if (files.length) {
        // console.log("Filename: " + files[0].name);
        // console.log("Type: " + files[0].type);
        // console.log("Size: " + files[0].size + " bytes");
        document.querySelector("#idcard").value = files[0].name;
    }
}, false);

bookbankToRead.addEventListener("change", function(event) {
    var files = bookbankToRead.files;
    if (files.length) {
        // console.log("Filename: " + files[0].name);
        // console.log("Type: " + files[0].type);
        // console.log("Size: " + files[0].size + " bytes");
        document.querySelector("#bookbank").value = files[0].name;
    }
}, false);

