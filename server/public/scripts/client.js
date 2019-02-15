$(document).ready(function () {
    console.log('JQ');
    // Establish Click Listeners

    // load existing koalas on page load
    getTasks();
    $('#viewTasks').on('click', '.done-button', completeClickListener);
    $('#viewTasks').on('click', '.remove-button', killTask);

}); 
function getTasks() {
    console.log('in getTasks');
    // ajax call to server to get koalas

    $.ajax({
        method: 'GET',
        url: '/list'
    }).then(function (response) {
        $('input').val('');

        $('#viewTasks').empty();

        //conditional statment for transfer button

        response.forEach(function (task) {
            if (task.done == 'no') {
                $('#viewTasks').append(`
          <tr>
          <td>${task.description}</td>
          <td>${task.motivation}</td>
          <td>${task.done}</td>
          <td><button class="done-button" data-id="${task.id}">Complete</button>
          <td><button class="remove-button" data-id="${task.id}">Remove</button>
          </tr>
          `)
            }
            else {
                $('#viewTasks').append(`
 <tr>
          <td>${task.description}</td>
          <td>${task.motivation}</td>
          <td>${task.done}</td>
          
          <td><button class="remove-button" data-id="${task.id}">Remove</button>
          </tr>`)
            }

        })// end of forEach loop
    }).catch
}