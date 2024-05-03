$(document).ready(function () {
    // 스크롤 양 확인
    // $(document.body).scroll(function () {
    //     var window = $(this).scrollTop();
    //     console.log(window);
    // });

        // 오른쪽 고정 문의 네비게이션
        $(document.body).scroll(function () {
            if ($(this).scrollTop() >= 300) {
                $('.nav').fadeIn();
            } else {
                $('.nav').fadeOut();
            }
        });

        // director > h6
        $(document.body).scroll(function () {
            if ($(this).scrollTop() >= 128) {
                $('#director>h6').css("animation", "slide 1s ease-in-out forwards");
            } else {
                $('#director>h6').css("animation", "0");
            }
        });

        // director > p
        $(document.body).scroll(function () {
            if ($(this).scrollTop() >= 240) {
                $('#director>p').css("animation", "slide 1s ease-in-out forwards");
            } else {
                $('#director>p').css("animation", "0");
            }
        });

        // info 이미지
        $(document.body).scroll(function () {
            if ($(this).scrollTop() >= 450) {
                $('#info>#info-img').css("animation", "img 1s linear forwards");
            } else {
                $('#info>#info-img').css("animation", "0");
            }
        });

        // explain > h4 (최상의 의료서비스를 제공하는 병원)
        $(document.body).scroll(function () {
            if ($(this).scrollTop() >= 450) {
                $('#explain>h4').css("animation", "slide 1s ease-in-out forwards");
            } else {
                $('#explain>h4').css("animation", "0");
            }
        });

        // explain > p (1)
        $(document.body).scroll(function () {
            if ($(this).scrollTop() >= 550) {
                $('#explain > p:nth-of-type(1)').css("animation", "slide 1s 0.5s ease-in-out forwards");
            } else {
                $('#explain > p:nth-of-type(1)').css("animation", "0");
            }
        });
        // explain > p (2)
        $(document.body).scroll(function () {
            if ($(this).scrollTop() >= 650) {
                $('#explain > p:nth-of-type(2)').css("animation", "slide 1s 0.5s ease-in-out forwards");
            } else {
                $('#explain > p:nth-of-type(2)').css("animation", "0");
            }
        });
        // explain > p (3)
        $(document.body).scroll(function () {
            if ($(this).scrollTop() >= 800) {
                $('#explain > p:nth-of-type(3)').css("animation", "slide 1s 0.5s ease-in-out forwards");
            } else {
                $('#explain > p:nth-of-type(3)').css("animation", "0");
            }
        });
        // explain > p (4)
        $(document.body).scroll(function () {
            if ($(this).scrollTop() >= 940) {
                $('#explain > p:nth-of-type(4)').css("animation", "slide 1s 0.5s ease-in-out forwards");
            } else {
                $('#explain > p:nth-of-type(4)').css("animation", "0");
            }
        });

        // name
        $(document.body).scroll(function () {
            if ($(this).scrollTop() >= 1040) {
                $('#name').css("animation", "slide 1s 0.5s ease-in-out forwards");
            } else {
                $('#name').css("animation", "0");
            }
        });

}); // ready 끝