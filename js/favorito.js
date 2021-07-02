const likes = document.querySelectorAll('.chamada__icon')




for (const like of likes){
  like.addEventListener('click', function() {
    if (like.classList.contains('fa-heart-o')){
      like.classList.remove('fa-heart-o')
      like.classList.add('fa-heart')
    }else {
      like.classList.add('fa-heart-o')
    }
  })
}
