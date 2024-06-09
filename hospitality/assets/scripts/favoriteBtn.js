const favoriteBtns = document.querySelectorAll('.favourites')

function toggle_favorite(listImages) {
    if (listImages[0].style.display !== 'none') {
        listImages[0].style.display = 'none'
        listImages[1].style.display = 'block'
    } else {
        listImages[1].style.display = 'none'
        listImages[0].style.display = 'block'
    }
}

favoriteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if ($(btn).hasClass("non-active")) {
            return;
        }
        const listImages = btn.querySelectorAll('img')

        let to_favorite = listImages[0].style.display !== 'none';
        $(btn).find("img").addClass("blink");
        $.ajax({
            url: "/catalog/favorite.php",
            method: "post",
            data: {
                "action": to_favorite ? "add" : "remove",
                "hotel": $(btn).data("id"),
            },
            dataType: 'json',
            success: function(data){
                setTimeout(function(){
                    $(btn).find("img").removeClass("blink");
                    if(data.status == 'success'){
                        toggle_favorite(listImages);
                    }
                }, 500)
            },
            error: function(data){
                setTimeout(function(){$(btn).find("img").removeClass("blink");}, 500)
            }
        });
    })
})
