let smallCardsSwiper, newReviewSwiper, reviewSwiper, statesSwiper, newsSwiper;

function checkResolution() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1440) {
        if (!smallCardsSwiper) {
            smallCardsSwiper = new Swiper(".small-cards", {
                slidesPerView: 1.1,
                spaceBetween: 16,
                freeMode: true,

                breakpoints: {
                    600: {
                        slidesPerView: 2,
                    },

                    767: {
                        slidesPerView: 3,
                    },

                    980: {
                        slidesPerView: 4,
                    },
                }
            });
        }

        if (!reviewSwiper) {
            reviewSwiper = new Swiper(".reviews", {
                slidesPerView: 1.1,
                spaceBetween: 0,
                freeMode: true,

                breakpoints: {
                    600: {
                        slidesPerView: 2,
                    },

                    980: {
                        slidesPerView: 3,
                    },
                }
            });
        }

        if (!newReviewSwiper) {
            newReviewSwiper = new Swiper(".new_reviews", {
                slidesPerView: 1.1,
                spaceBetween: 0,
                freeMode: true,

                breakpoints: {
                    600: {
                        slidesPerView: 2,
                    },

                    980: {
                        slidesPerView: 3,
                    },
                }
            });
        }

        if (!statesSwiper) {
            statesSwiper = new Swiper(".travel_blog", {
                slidesPerView: 1.1,
                spaceBetween: 0,
                freeMode: true,

                breakpoints: {
                    800: {
                        slidesPerView: 2,
                    },

                    1280: {
                        slidesPerView: 3,
                    },
                }
            });
        }

        if (!newsSwiper) {
            newsSwiper = new Swiper(".news", {
                slidesPerView: 1.1,
                spaceBetween: 0,
                freeMode: true,

                breakpoints: {
                    800: {
                        slidesPerView: 2,
                    },

                    1280: {
                        slidesPerView: 3,
                    },
                }
            });
        }
    } else {
        if (smallCardsSwiper && reviewSwiper && statesSwiper && newsSwiper) {
            if (smallCardsSwiper) {
                smallCardsSwiper.destroy();
                smallCardsSwiper = null;
            }

            if (reviewSwiper) {
                reviewSwiper.destroy();
                reviewSwiper = null;
            }

            if (newReviewSwiper) {
                newReviewSwiper.destroy();
                newReviewSwiper = null;
            }

            if (statesSwiper) {
                statesSwiper.destroy();
                statesSwiper = null;
            }

            if (newsSwiper) {
                newsSwiper.destroy();
                newsSwiper = null;
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', checkResolution);

window.addEventListener('resize', checkResolution);
