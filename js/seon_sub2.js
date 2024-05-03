$(document).ready(function () {
            // 오른쪽 고정 문의 네비게이션
            $(document.body).scroll(function () {
                if ($(this).scrollTop() >= 300) {
                    $('.nav').fadeIn();
                } else {
                    $('.nav').fadeOut();
                }
            });
}); // ready 끝