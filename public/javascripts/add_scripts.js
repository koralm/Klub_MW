function sd(){
    var data = {};
    data.title = $('#WS_title').val();
    data.message = $('#WS_subtitle').val();
    data.message5 = "kol";

    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: 'http://localhost:3000/add',
        success: function(data) {
            console.log('success');
            console.log(JSON.stringify(data));
        }
    });
}