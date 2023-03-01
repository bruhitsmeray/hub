document.querySelectorAll('.imgContainer img').forEach(picture =>{
    picture.onclick = () => {
        document.querySelector('.popup-pic').style.display = 'block';
        document.querySelector('.popup-pic img').src = picture.getAttribute('src');
    }
})

document.querySelector('.popup-pic span').onclick = () => {
    document.querySelector('.popup-pic').style.display = 'none';
}