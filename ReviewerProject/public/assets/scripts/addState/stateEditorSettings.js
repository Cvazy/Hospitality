import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import InlineCode from '@editorjs/inline-code';
import ImageTool from '@editorjs/image';
import YoutubeEmbed from "editorjs-youtube-embed";
import Carousel from '@vtchinh/gallery-editorjs';

function stateNavigationScrolling() {
    const navItems = document.querySelectorAll('.blog_nav__item')

    navItems.forEach((el) => {
        el.addEventListener('click', () => {
            const navData = el.getAttribute('data-nav-block')
            const scrollingBlock = document.querySelector(`[data-nav-subtitle="${navData}"]`)

            navItems.forEach((e) => {
                e.classList.remove('blog_nav__active')
            })

            el.classList.add('blog_nav__active')
            scrollingBlock.scrollIntoView({behavior: 'smooth'})
        })
    })
}

const stateNavigation = document.querySelector('.blog_nav ul')

class CustomHeader2 extends Header {
    static get toolbox() {
        return {
            title: 'Title Nav',
            icon: Header.toolbox.icon,
        }
    }
}

class CustomHeader3 extends Header {
    static get toolbox() {
        return {
            title: 'Subtitle',
            icon: Header.toolbox.icon,
        }
    }
}

const editorTitle = new EditorJS({
    holder: 'editorTitle',
    minHeight: 0,
    placeholder: 'Заголовок',
})

const editorText = new EditorJS({
    holder: 'editorText',
    minHeight: 0,
    placeholder: 'Текст',

    tools: {
        header2: {
            class: CustomHeader2,
            inlineToolbar: true,
            config: {
                level: 2,
                defaultLevel: 2,
            },
        },
        header3: {
            class: CustomHeader3,
            inlineToolbar: true,
            config: {
                level: 3,
                defaultLevel: 3
            },
        },
        strikethrough: {
            class: InlineCode,
            inlineToolbar: true,
        },
        image: {
            class: ImageTool,
            config: {
                endpoints: {
                    byFile: 'http://localhost:8008/uploadFile',
                    byUrl: 'http://localhost:8008/fetchUrl',
                },
                captionPlaceholder: 'Введите описание изображения здесь',
            }
        },
        carousel: {
            class: Carousel,
            config: {
                endpoints: {
                    byFile: "URL_FETCH",
                    removeImage: "URL_FETCH",
                },
                additionalRequestHeaders: {
                    'authorization': 'Bearer eyJhbGciJ9...TJVA95OrM7h7HgQ',
                },
                field: 'image',
                types: 'image/*',
                additionalRequestData: {
                    name: 'your custom data name',
                    order_data: 'your order custom data',
                },
                galleryCallback: 'your_prefer_callback_data'
            }
        },
        youtubeEmbed: YoutubeEmbed,
    },

    onReady: () => {
        let editorText = document.getElementById('editorText')
        const title = document.querySelector('#editorTitle .ce-paragraph')
        const text = document.querySelector('#editorText .ce-paragraph')
        const toolbarPlus = document.querySelector('#editorText .ce-toolbar__plus')
        const oldSvg = toolbarPlus.querySelector('svg')

        let newSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        newSvg.setAttribute("viewBox", "0 0 512 512")

        let newSvgContent1 = document.createElementNS("http://www.w3.org/2000/svg", "path")
        newSvgContent1.setAttribute("d", "M311.18,78.008L32.23,356.958L0.613,485.716c-1.771,7.209,0.355,14.818,5.604,20.067 c5.266,5.266,12.88,7.368,20.067,5.604l128.759-31.617l278.95-278.95L311.18,78.008z M40.877,471.123l10.871-44.271l33.4,33.4 L40.877,471.123z")
        newSvgContent1.setAttribute("fill", "#000000")
        newSvgContent1.setAttribute("style", "fill: rgb(16, 30, 41);")

        let newSvgContent2 = document.createElementNS("http://www.w3.org/2000/svg", "path")
        newSvgContent2.setAttribute("d", "M502.598,86.818L425.182,9.402c-12.536-12.536-32.86-12.536-45.396,0l-30.825,30.825l122.812,122.812l30.825-30.825 C515.134,119.679,515.134,99.354,502.598,86.818z")
        newSvgContent2.setAttribute("fill", "#000000")
        newSvgContent2.setAttribute("style", "fill: rgb(16, 30, 41);")

        newSvg.appendChild(newSvgContent1)
        newSvg.appendChild(newSvgContent2)

        toolbarPlus.removeChild(oldSvg)
        toolbarPlus.appendChild(newSvg)

        const titleText = title.textContent
        const stateContent = text.textContent

        if (titleText) {
            counter++
        } else if (stateContent) {
            counter++
        }

        let observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.addedNodes) {
                    mutation.addedNodes.forEach(node => {
                        if (node.querySelector && node.querySelector('h2.ce-header')) {
                            stateNavigation.appendChild(createNavItem())

                            let lastStateNav = stateNavigation.querySelector('li:last-child')
                            let lastStateNavText = lastStateNav.querySelector('span')

                            let newNavItem = node.querySelector('h2.ce-header')

                            newNavItem.addEventListener('input', (event) => {
                                lastStateNavText.textContent = event.target.innerText

                                newNavItem.setAttribute('data-nav-subtitle', event.target.innerText)

                                lastStateNav.setAttribute('data-nav-block', event.target.innerText)

                                stateNavigationScrolling()
                            })
                        }
                    })
                }

                if (mutation.removedNodes) {
                    mutation.removedNodes.forEach(node => {
                        let subTitle = node.textContent
                        let headList = 'Nothing foundHeading 1Heading 2Heading 3Heading 4Heading 5Heading 6Move upDeleteMove down'

                        if (subTitle !== '' && subTitle !== 'Delete' && subTitle !== 'Click to delete' && subTitle !== headList) {
                            let navItem = document.querySelector(`[data-nav-block="${subTitle}"]`)

                            if (navItem) navItem.remove()
                        }

                        if (node.querySelector && node.querySelector('h2.ce-header')) {
                            console.log('Подзаголовок удален!')
                        }
                    });
                }
            })
        })

        let config = { childList: true, subtree: true }

        observer.observe(editorText, config)
    }
})