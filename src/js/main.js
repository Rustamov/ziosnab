svg4everybody(); //for svg spite in ie
objectFitImages();

let $body,
    wWidth = 0,
    wHeight = 0,
    W_SM = 576,
    W_MD = 768,
    W_LG = 992,
    W_XL = 1200,
    LOADER_HTML =
        '<div class="overlay-loader"><div class="loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>';

$(document).ready(function () {
    $body = $("body");
});

window.globalOptions = {
    animationDuration: 200,
    sizes: {
        xl: 1920,
        lg: 1200,
        md: 992,
        sm: 768,
        xs: 576
    },
    freeze: function() {
        const h = $('html');

        if (h.css('position') !== 'fixed') {
            const top = h.scrollTop() ? h.scrollTop() : $body.scrollTop();

            if (window.innerWidth > h.width()) {
                h.css('overflow-y', 'scroll');
            }

            h.css({
                width: '100%',
                position: 'fixed',
                top: -top,
            });
        }
    },

    unfreeze: function() {
        const h = $('html');

        if (h.css('position') === 'fixed') {
            h.css('position', 'static');

            $('html, body').scrollTop(-parseInt(h.css('top'), 10));

            h.css({
                position: '',
                width: '',
                top: '',
                'overflow-y': '',
            });
        }
    },

    scrollToId: function(href, delay) {
        let scrollOnMenuBtn = false,
            scrollOnHeaderHide = false,
            scrollSpeed = 800;


        if ( href == '#interior' 
            || href == '#magazines'
        ) {
            scrollOnMenuBtn = true;
        }


        setTimeout(function() {
            scrollTo();
        }, delay)

        function scrollTo() {

            let targetOffset = $(href).offset().top;

            // if ( wWidth >= W_MD && scrollOnMenuBtn ) {
            //     targetOffset -= $('.side-nav__trigger-icon-line--1').offset().top - $('.header').offset().top;
            // } else if (wWidth < W_MD && !scrollOnHeaderHide) {
            //     targetOffset -= $('.header').outerHeight();
            // }

            try {
                scrollSpeed = Math.abs($window.scrollTop() - targetOffset) / Math.abs($body[0].scrollHeight) * 4000
            } catch(event) {
                console.error(event);
            }

            scrollSpeed = ( scrollSpeed < 500 ) ? 500 : scrollSpeed;
     
            $('html, body').animate({ scrollTop: targetOffset }, scrollSpeed);

            location.replace(href);
            
        }
    }
};
