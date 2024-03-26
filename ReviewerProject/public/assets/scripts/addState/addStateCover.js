const addStateCover = document.getElementById('addStateCover')

const imageContainerBlock = document.querySelector('.image_contain')
const imageContainer = imageContainerBlock.querySelector('img')

addStateCover.addEventListener('click', () => {
    const coverInput = addStateCover.previousElementSibling

    coverInput.click()
})

document.addEventListener('DOMContentLoaded', (event) => {
    let dropArea = document.querySelector('.add_cover__image');

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false)
    });

    function preventDefaults (e) {
        e.preventDefault()
        e.stopPropagation()
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false)
    });

    function highlight(e) {
        dropArea.classList.add('highlight')
    }

    function unhighlight(e) {
        dropArea.classList.remove('highlight')
    }

    dropArea.addEventListener('drop', handleDrop, false)

    function handleDrop(e) {
        let dt = e.dataTransfer
        let files = dt.files

        handleFiles(files)
    }

    function handleFiles(files) {
        ([...files]).forEach(previewFile);
    }

    function previewFile(file) {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = function() {
            let img = document.querySelector('.add_cover__image img')
            img.src = reader.result

            imageContainerBlock.classList.add('w-full-imp')
            imageContainer.classList.add('w-full-imp')
            imageContainer.classList.add('h-full-imp')
        }
    }
});

