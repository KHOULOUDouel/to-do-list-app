$(document).ready(function() {
    // Event listener for adding a new item to the list
    $('#button').on('click', function() {
        var deleteButton = $('<button></button>').addClass('delete').text('X');
        var newItemValue = $('input[name="ListItem"]').val();
        if (newItemValue !== '') {
            var newItem = $('<li></li>').text(newItemValue).append(deleteButton);
            $('#list').append(newItem);
            $('input[name="ListItem"]').val('');
        }
    });

    // Event listener for marking an item off the list
    $('#list').on('dblclick', 'li', function() {
        $(this).toggleClass('strike');
    });

    // Event listener for deleting an item from the list
    $('#list').on('click', '.delete', function(event) {
        $(this).parent().remove();
        event.stopPropagation();
    });

    // Make list items sortable
    $('#list').sortable();
});

// Define the newItem function
function newItem() {
    var deleteButton = $('<button></button>').addClass('delete').text('X');
    var newItemValue = $('input[name="ListItem"]').val();
    if (newItemValue !== '') {
        var newItem = $('<li></li>').text(newItemValue).append(deleteButton);
        $('#list').append(newItem);
        $('input[name="ListItem"]').val('');
    }
}