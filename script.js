var registrationModal = document.getElementById('bookclubrego');
var modalgrey = document.getElementById('modal-grey');
var regoOpen = document.getElementById('trigger-modal');
var regoClose = document.getElementById('close-cross');

function triggerModal() {
    console.log('triggerModal');
    registrationModal.style.display = "block";
    modalgrey.style.display = "block";
}

function closeModal() {
    console.log('triggerModal');
    registrationModal.style.display = "none";
    modalgrey.style.display = "none";
}