$(document).ready(function() {

    $('form').on('submit', function(event) {
        event.preventDefault();
        var item = document.getElementById("item");
        var remark = document.getElementById("remark");
        var deadline = document.getElementById("deadline");
        var priority = document.getElementById('priority');
        var todo = { item: item.value.trim(), remark: remark.value.trim(),
            deadline: deadline.value.trim(),
            done: false,
            priority: priority.value
        };

        $.ajax({
            type: 'POST',
            url: '/todo',
            data: todo,
            success: function(data) {
                //do something with the data via front-end framework
                location.reload();
            }
        });

        return false;

    });

    $('li button').on('click', function() {
        var item = $(this).text().trim().replace(/ /g, "-");
        $.ajax({
            type: 'DELETE',
            url: '/todo/' + item,
            success: function(data) {
                //do something with the data via front-end framework
                location.reload();
            }
        });
    });

});
