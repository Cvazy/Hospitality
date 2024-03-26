const likeBlog = document.querySelector('.like_blog')
const dislikeBlog = document.querySelector('.dislike_blog')

const likeBlogFinger = likeBlog.querySelector('img')
const dislikeBlogFinger = dislikeBlog.querySelector('img')

likeBlogFinger.addEventListener('click', () => {
    const likes = likeBlog.querySelector('p')
    const dislikes = dislikeBlog.querySelector('p')
    let likesQnt = Number(likes.textContent)
    let dislikesQnt = Number(dislikes.textContent)
    const stateLike = likes.getAttribute('data-liked-blog')
    const stateDislike = dislikes.getAttribute('data-disliked-blog')

    if (stateLike !== 'true') {
        console.log(likesQnt++)
        likes.textContent = String(likesQnt++)

        likes.setAttribute('data-liked-blog', 'true')
        dislikes.setAttribute('data-disliked-blog', 'false')

        if (stateDislike === 'true') {
            console.log(dislikesQnt--)
            dislikes.textContent = String(dislikesQnt--)
        }
    }
})

dislikeBlogFinger.addEventListener('click', () => {
    const dislikes = dislikeBlog.querySelector('p')
    const likes = likeBlog.querySelector('p')
    let dislikesQnt = Number(dislikes.textContent)
    let likesQnt = Number(likes.textContent)
    const stateDislike = dislikes.getAttribute('data-disliked-blog')
    const stateLike = likes.getAttribute('data-liked-blog')

    if (stateDislike !== 'true' && dislikesQnt > 0) {
        console.log(dislikesQnt++)
        dislikes.textContent = String(dislikesQnt++)

        dislikes.setAttribute('data-disliked-blog', 'true')
        likes.setAttribute('data-liked-blog', 'false')

        if (stateLike === 'true') {
            console.log(likesQnt--)
            likes.textContent = String(likesQnt--)
        }
    }
})