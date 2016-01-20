$(function () {
    $(".lab-list").select2({
        placeholder: "Proszę wybrać labolatoria których dotyczy karta pracy",
        allowClear: true
    });
});

function post_WS(){

    add_data = {};

    var  WS_data = {};
    WS_data.WS_title = $('#WS_title').val();
    WS_data.WS_subtitle = $('#WS_subtitle').val();
    WS_data.WS_reagent = $('#WS_reagent').val();
    WS_data.WS_equipment = $('#WS_equipment').val();
    WS_data.WS_accesories = $('#WS_accesories').val();
    WS_data.WS_description = $('#WS_description').val();
    WS_data.WS_duration_time = $('#WS_duration_time').val();
    WS_data.WS_author = $('#WS_author').val();
    WS_data.WS_labolatory = $('.lab-list').val();


    add_data = {WS_data: WS_data};

    $.ajax({
        type: 'POST',
        data: JSON.stringify(add_data),
        contentType: 'application/json',
        url: '/add',
        success: function(data) {
            alert("Karta dodana pomyślnie");
            window.location.replace('' +
                '/add');
        }
    });
}

function dupa() {
    var data = $('.lab-list').val();
    alert(data);
}


    Dropzone.options.myAwesomeDropzone = {
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 2, // MB
    addRemoveLinks: "true",
    dictRemoveFile: "Usuń plik",
    createImageThumbnails: "true",
    dictDefaultMessage: "Aby dodać pliki przeciągnij je lub klinij na pole"}