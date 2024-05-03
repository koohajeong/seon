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

    view();
    function view(){
        var windowWidth = $(document.body).width();
        if(windowWidth > 1600){
            $("#checkup-wrap").css("padding-top", "8%");
            $("#title").css("margin-bottom", "40px");
        }
    };

            // checkup > title
            $(document.body).scroll(function () {
                if ($(this).scrollTop() >= 440) {
                    $('#title').css("animation", "slide 1.2s ease-in-out forwards");
                } else {
                    $('#title').css("animation", "0");
                }
            });

            //checkup > content
            $(document.body).scroll(function () {
                if ($(this).scrollTop() >= 440) {
                    $('#content').css("animation", "slide 1.2s 0.5s ease-in-out forwards");
                } else {
                    $('#content').css("animation", "0");
                }
            });

            //checkup > list
            $(document.body).scroll(function () {
                if ($(this).scrollTop() >= 440) {
                    $('#list').css("animation", "slide 1.2s 1s ease-in-out forwards");
                } else {
                    $('#list').css("animation", "0");
                }
            });

            // director_span
            $(document.body).scroll(function () {
                if ($(this).scrollTop() >= 900) {
                    $('#director_span').css("animation", "seon 2.2s ease-in-out forwards");
                } else {
                    $('#director_span').css("animation", "seon-re 2.2s ease-in-out forwards");
                }
            });
            // director-data > h2
            $(document.body).scroll(function () {
                if ($(this).scrollTop() >= 800) {
                    $('#director-data>h2').css("animation", "slide 1s ease-in-out forwards");
                } else {
                    $('#director-data>h2').css("animation", "0");
                }
            });

            // director-data > p, career
            $(document.body).scroll(function () {
                if ($(this).scrollTop() >= 900) {
                    $('#director-data>p').css("animation", "slide 1s 0.5s ease-in-out forwards");
                    $('#career').css("animation", "slide 1s 1s ease-in-out forwards");
                } else {
                    $('#director-data>p').css("animation", "0");
                    $('#career').css("animation", "0");
                }
            });

            // notice_span
            $(document.body).scroll(function () {
                if ($(this).scrollTop() >= 1480) {
                    $('#notice_span').css("animation", "notice 2.2s ease-in-out forwards");
                } else {
                    $('#notice_span').css("animation", "notice-re 2.2s ease-in-out forwards");
                }
            });

            // notice > h2
            $(document.body).scroll(function () {
                if ($(this).scrollTop() >= 1400) {
                    $('#notice>h2').css("animation", "notice-h2 1s ease-in-out forwards");
                } else {
                    $('#notice>h2').css("animation", "0");
                }
            });

        }); // ready 끝