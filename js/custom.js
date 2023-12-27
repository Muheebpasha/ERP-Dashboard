// JavaScript source code




//////////// modal ////////////

$('#exampleModal').on('shown.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var recipient = button.data('whatever');
    var width = button.data('width');
    var height = button.data('height');
    // Extract info from data-* attributes

    //$(this).find('iframe').attr('src', recipient);
    var modal = $(this);
    $(' > .modal-dialog', modal).attr('class', 'modal-dialog ' + width);
    $(' iframe', modal).attr('src', recipient);
    $(' iframe', modal).css('height', height);
});




//////////// feather icon ////////////

$(window).on('load', function () {
    if (feather) {
        feather.replace({ width: 14, height: 14 });
    }
});






/////////// datepicker ///////////

$('.datepicker').datetimepicker({
    // format: 'DD MMM YYYY HH:mm',
    format: 'DD MMM YYYY',
    // showClear:true,
    showClose: true,
    // maxDate: new Date().setHours(new Date().getHours() + 1),
    ignoreReadonly: true
});


$('.timepicker').datetimepicker({
    format: 'HH:mm'
    //format: 'LT'
});

$('.datetimepicker').datetimepicker({
    format: 'DD MMM YYYY HH:mm',
    icons: {
        time: "far fa-clock",
        date: "far fa-calendar-alt"
        //up: "fa fa-arrow-up",
        //down: "fa fa-arrow-down"
    }
});




