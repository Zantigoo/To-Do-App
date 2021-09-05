function newItem() {

    let inputValue = $('#input').val();
    let list = $('#list');
    let li = $('<li></li>');
    list.sortable();
    li.append(inputValue.trim());
    
    if (inputValue === '') {
        alert('No blank entries');
    } else {
        list.append(li);    
        $('#input').val('');
    }

    function strikeOff() {
        li.toggleClass('strike');
    }

    li.on('dblclick', () => {
        strikeOff();
        console.log('crossed off');
    });

    let deleteButton = $('<deleteButton></deleteButton>');
    deleteButton.append('❌');
    li.append(deleteButton);
    
    function remove() {
        li.addClass('delete');
    }
    deleteButton.on('click', () => {
        remove();
        console.log('deleted');
    })

    console.log(inputValue);
}
