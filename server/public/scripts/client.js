$(document).ready(function () {
    console.log('JQ');
    // Establish Click Listeners
    setupClickListeners()
    // load existing koalas on page load
    getTasks();
    $('#viewTasks').on('click', '.done-button', transferClickListener);
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

        response.forEach(function (koala) {
            if (koala.ready_to_transfer == 'N') {
                $('#viewKoalas').append(`
          <tr>
          <td>${koala.name}</td>
          <td>${koala.age}</td>
          <td>${koala.gender}</td>
          <td>${koala.ready_to_transfer}</td>
          <td>${koala.notes}</td>
          <td><button class="transfer-button" data-id="${koala.id}">Transfer</button>
          <td><button class="remove-button" data-id="${koala.id}">Remove</button>
          </tr>
          `)
            }
            else {
                $('#viewKoalas').append(`
          <tr>
          <td>${koala.name}</td>
          <td>${koala.age}</td>
          <td>${koala.gender}</td>
          <td>${koala.ready_to_transfer}</td>
          <td>${koala.notes}</td>
          <td></td>
          <td><button class="remove-button" data-id="${koala.id}">Remove</button>
          </tr>
          `)
            }

        })// end of forEach loop
    }).catch
}