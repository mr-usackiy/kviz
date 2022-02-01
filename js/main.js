window.onload = function () {
    const progress = document.querySelector('.kviz_progress-scale');
    const percent = document.querySelector('.percent');
    const number = document.querySelector('.number');
    const number_2 = document.querySelector('.number_2');
    const time = 1000;
    const step = 1;

    let num__2 = 100 / number_2.textContent;
    let offset = num__2;
    let num = 0;
    progress.style.width = num__2 + '%';
    percent.textContent = parseFloat(num__2.toFixed(0));

    //кнопки
    $(document).on('click', '#btn', function (event) {
        if (offset < 99) {
            offset = offset + num__2;
            num = num + 1;
            progress.style.width = offset + '%';
            percent.textContent = parseFloat(offset.toFixed(0));
            number.textContent = " " + (num + 1) + " ";
            if (offset >= 99) {
                progress.style.backgroundColor = "green";
            }
        } else {
            progress.style.width = 100 + '%';
            percent.textContent = 100;
        }
    })

    $(document).on('click', '#btn2', function (event) {
        if (offset <= 0) {
            return (false);
        } else {
            num = num - 1;
            offset = offset - num__2;
            progress.style.width = offset + '%';
            percent.textContent = parseFloat(offset.toFixed(0));

            number.textContent = " " + (number.textContent - 1) + " ";
            if (offset <= num__2) {
                number.textContent = " " + 1 + " ";
                progress.style.width = num__2 + '%';
                percent.textContent = parseFloat(num__2.toFixed(0));
            }
            if (offset < 100) {
                progress.style.backgroundColor = "yellow";
            }
            
        }


    });
    //чеkбоксы привязка к блоку
    $.each($('.kviz__gallery-column'), function (index, val) {
        if ($(this).find('input').prop('checked') == true) {
            $(this).addClass('active');
            $(this).find('.kviz_img-icon').addClass('active');
        }
    })
    $(document).on('click', '.kviz__gallery-column', function (event) {
        if ($(this).hasClass('active')) {
            $(this).find('input').prop('checked', false);
            /* $(this).find('.kviz_img-icon').addClass('active'); */
        } else {
            $(this).find('input').prop('checked', true);
            /* $(this).find('.kviz_img-icon').removeClass('active'); */
        }
        $(this).toggleClass('active');
    })
    $(document).on('click', '.kviz__gallery-column', function (event) {
        if ($(this).hasClass('active')) {
            $(this).find('.kviz_img-icon').addClass('active');
        } else {
            $(this).find('.kviz_img-icon').removeClass('active');
        }
    })
};