// script.js
$(document).ready(function() {
    $('#calendario').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        events: [
            {
                title: 'Reserva Ocupada',
                start: '2024-12-05',
                end: '2024-12-07',
                color: 'red'
            }
        ],
        dayClick: function(date, jsEvent, view) {
            alert('Fecha seleccionada: ' + date.format());
        }
    });

    $('#form-reserva').on('submit', function(event) {
        event.preventDefault();
        alert('Reserva realizada con éxito. Nos pondremos en contacto contigo.');
    });
});
