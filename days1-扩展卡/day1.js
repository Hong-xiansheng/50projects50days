const PhotoStyles = document.querySelectorAll('.PhotoStyle');

PhotoStyles.forEach(PhotoStyle =>{
    PhotoStyle.addEventListener('click',() => {
        removeActiveClasses()
        PhotoStyle.classList.add('active')
    })
})

function removeActiveClasses(){
    PhotoStyles.forEach(PhotoStyle =>{
        PhotoStyle.classList.remove('active')
    })
}