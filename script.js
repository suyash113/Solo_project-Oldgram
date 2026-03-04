const vangogh = document.querySelector('.main-post.vangogh')

const courbet = document.querySelector('.main-post.courbet')

const ducreux = document.querySelector('.main-post.ducreux')

console.log(vangogh)


let ducreuxLikes = document.querySelector('.bold-para.likes.ducreux-likes')

let courbetLikes = document.querySelector('.bold-para.likes.courbet-likes')

let vanLikes = document.querySelector('.bold-para.likes.van-likes')


vangogh.addEventListener("dblclick", function() {
    vanLikes.textContent = `${(21493).toLocaleString()} likes`  
})

courbet.addEventListener("dblclick", function() {
    courbetLikes.textContent = `${(15503).toLocaleString()} likes`  
})

ducreux.addEventListener("dblclick", function() {
    ducreuxLikes.textContent = `${(15138).toLocaleString()} likes`  
})