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