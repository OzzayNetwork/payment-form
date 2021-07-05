(function($) {
    'use strict';
    /*==================================================================
        [ Daterangepicker ]*/
    try {
        $('.js-datepicker').daterangepicker({
            "singleDatePicker": true,
            "showDropdowns": true,
            "autoUpdateInput": false,
            locale: {
                format: 'DD/MM/YYYY'
            },
        });

        var myCalendar = $('.js-datepicker');
        var isClick = 0;

        $(window).on('click', function() {
            isClick = 0;
        });

        $(myCalendar).on('apply.daterangepicker', function(ev, picker) {
            isClick = 0;
            $(this).val(picker.startDate.format('DD/MM/YYYY'));

        });

        $('.js-btn-calendar').on('click', function(e) {
            e.stopPropagation();

            if (isClick === 1) isClick = 0;
            else if (isClick === 0) isClick = 1;

            if (isClick === 1) {
                myCalendar.focus();
            }
        });

        $(myCalendar).on('click', function(e) {
            e.stopPropagation();
            isClick = 1;
        });

        $('.daterangepicker').on('click', function(e) {
            e.stopPropagation();
        });


    } catch (er) { console.log(er); }
    /*[ Select 2 Config ]
        ===========================================================*/

    try {
        var selectSimple = $('.js-select-simple');

        selectSimple.each(function() {
            var that = $(this);
            var selectBox = that.find('select');
            var selectDropdown = that.find('.select-dropdown');
            selectBox.select2({
                dropdownParent: selectDropdown
            });
        });

    } catch (err) {
        console.log(err);
    }

    $('body').on('change', 'input[name="mpesa-num"]', function() {
        var theVal = $(this).val();
        if (theVal == "yes") {
            $('.mpesa-number').removeClass('d-none')
        }
        if (theVal == "no") {
            $('.mpesa-number').addClass('d-none')
        }

    });

    $('body').on('change', 'input[name="disburse-payment"]', function() {
        var theVal = $(this).val();
        if (theVal == "yes") {
            $('.disburse-payment-div').removeClass('d-none')
        }
        if (theVal == "no") {
            $('.disburse-payment-div').addClass('d-none')
        }

    });

    $('body').on('change', 'input[name="sms-option"]', function() {
        var theVal = $(this).val();
        if (theVal == "yes") {
            $('.sms-option').removeClass('d-none');
            $('.sms-option-enable').addClass('d-none');
        }
        if (theVal == "no") {
            $('.sms-option').addClass('d-none')
            $('.sms-option-enable').removeClass('d-none');
        }

    });

    $('body').on('change', '.other-payment-method-checker', function() {
        var checkStatus = $(this).is(":checked");
        if (checkStatus == true) {
            $('.other-payment-method').removeClass('d-none')
        }

        if (checkStatus == false) {
            $('.other-payment-method').addClass('d-none')
        }

    });


})(jQuery);