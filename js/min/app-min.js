! function ($, i, e) {
    $(i).ready(function () {
        $(".mobile-navigation").append($(".main-navigation .menu").clone()), $(".menu-toggle").click(function () {
            $(".mobile-navigation").slideToggle()
        }), $(".hero-slider").flexslider({
            controlNav: !1,
            directionNav: !0,
            animation: "fade",
            prevText: '<i class="fa fa-angle-left"></i>',
            nextText: '<i class="fa fa-angle-right"></i>'
        }), $(".testimonial-slider").flexslider({
            controlNav: !0,
            directionNav: !1,
            animation: "slide"
        }), $(".map").length && $(".map").gmap3({
            map: {
                options: {
                    maxZoom: 14
                }
            },
            marker: {
                address: "40 Sibley St, Detroit"
            }
        }, "autofit")
    }), $(e).load(function () {
        var i = $(".filterable-items");
        i.isotope({
            filter: "*",
            layoutMode: "fitRows",
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), $(".filterable-nav a").click(function (e) {
            e.preventDefault(), $(".filterable-nav .current").removeClass("current"), $(this).addClass("current");
            var a = $(this).attr("data-filter");
            return i.isotope({
                filter: a,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: !1
                }
            }), !1
        }), $(".mobile-filter").change(function () {
            var e = $(this).val();
            return i.isotope({
                filter: e,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: !1
                }
            }), !1
        })
    })
}(jQuery, document, window);