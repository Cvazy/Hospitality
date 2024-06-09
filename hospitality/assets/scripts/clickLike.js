const likes = document.querySelectorAll('.like')

likes.forEach((btn) => {
    const heart = btn.querySelector('.no_like')
    const heartClick = btn.querySelector('.click_like')

    btn.addEventListener('click', () => {
        if ($(btn).hasClass("non-active")) {
            return;
        }

        const itemId = btn.getAttribute('data-btn-id')
        const clickedItem = document.querySelector(`[data-item-id="${itemId}"]`)

        let to_favorite = true;
        if (heart.classList.contains('d-none-imp')) {
            to_favorite = false;
        }

        $(btn).find("img").addClass("blink");
        $.ajax({
            url: "/catalog/favorite.php",
            method: "post",
            data: {
                "action": to_favorite ? "add" : "remove",
                "hotel": itemId,
            },
            dataType: 'json',
            success: function(data){
                setTimeout(function(){
                    $(btn).find("img").removeClass("blink");
                    if(data.status == 'success'){
                        if (to_favorite) {
                            btn.classList.add('heart_click')
                            btn.classList.remove('heart')
                
                            heart.classList.add('d-none-imp')
                            heartClick.classList.remove('d-none-imp')
                
                            clickedItem.setAttribute('data-liked', 'true')
                        } else {
                            btn.classList.add('heart')
                            btn.classList.remove('heart_click')
                
                            heart.classList.remove('d-none-imp')
                            heartClick.classList.add('d-none-imp')
                
                            clickedItem.setAttribute('data-liked', 'false')
                        }
                    }
                }, 500)
            },
            error: function(data){
                setTimeout(function(){$(btn).find("img").removeClass("blink");}, 500)
            }
        });
    })
})
