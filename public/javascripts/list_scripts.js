
function row_delete(row_data){
    $.ajax({
        type: 'POST',
        data: JSON.stringify(row_data),
        contentType: 'application/json',
        url: '/list',
        success: function(data) {
            alert("Karta usunięta pomyślnie");
            window.location.replace('/list');
        }
    })};