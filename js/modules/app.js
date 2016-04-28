define(function(require){
    
    var $ = require('jquery');
       
    (function adjustHeight (){
        var container = document.getElementsByClassName('container');
        var containerFluid = document.getElementsByClassName('container-fluid');
        var header = document.getElementsByClassName('header')[0];

        header.style.height = window.innerHeight + 'px';

        [].forEach.call(container, function (el) {

            var heightContainer = parseInt(window.getComputedStyle(el).height, 10);
            var sectionHeight = window.innerHeight;

            if (sectionHeight > heightContainer) {
                el.style.padding = (sectionHeight - heightContainer) / 2 + 50 + 'px 0px';
            } else {
                el.style.padding = (heightContainer - sectionHeight) / 2 + 50 + 'px 0px';
            }

        });

        containerFluid[0].style.padding = (window.innerHeight - parseInt(window.getComputedStyle(containerFluid[0]).height, 10)) / 2 + 50 + 'px 15px';

        var navbar = document.getElementsByClassName('navbar')[0];

        function getDistance() {
            var topDist = navbar.offsetTop;
            return topDist;
        }

        window.onscroll = function () {
            var distance = getDistance() - window.pageYOffset;
            var offsetY = window.pageYOffset;

            if (distance < offsetY) {
                navbar.classList.add('navbar-fixed-top');
            } else {
                navbar.classList.remove('navbar-fixed-top');
            }
        };
    }());
    
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
    
});
