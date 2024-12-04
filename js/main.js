let closeModal = document.getElementById('close');
let modalContainer = document.getElementById('modalContainer');
let modalItem = document.getElementById('modalItem');
let recentShowedImage = document.querySelector('#modalItem img')
let modalItems = Array.from(document.getElementsByClassName('madal-item'));
let next = document.getElementById('next');
let imageArrayContainer = document.getElementById('imageArrayContainer');
let prev = document.getElementById('prev');
let index = 0;
function closeTheModal(){
    modalContainer.style.display= "none";
}
closeModal.addEventListener('click', closeTheModal)
document.addEventListener("keydown", function(e){
    switch(e.key){
        case 'Escape' : closeTheModal(); break;
        case 'ArrowRight' : nextItem(); break;
        case 'ArrowLeft' : prevItem(); break;
    }
})
modalContainer.addEventListener('click', function(e){
    e.stopPropagation();
    if(e.target.id == 'modalContainer') closeTheModal();
});

imageArrayContainer.addEventListener('click', function(e){
    if(e.target.tagName === "IMG"){
        modalContainer.style.display= "flex";
        recentShowedImage.setAttribute('src', e.target.getAttribute('src'));
        index = modalItems.indexOf(e.target)
    } 
})

function nextItem(){
    index++;
    if(index == modalItems.length) index = 0;
    recentShowedImage.setAttribute('src', modalItems[index].getAttribute('src'));
};

next.addEventListener('click', nextItem);

function prevItem(){
    index--;
    if(index == -1) index = modalItems.length-1;
    recentShowedImage.setAttribute('src', modalItems[index].getAttribute('src'));
};
prev.addEventListener('click', prevItem);





