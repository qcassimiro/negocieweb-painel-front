$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});

$(function() {
    $(document).ready(function() {
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'today',
            },
            defaultDate: moment().format("YYYY-MM-DD"),
            editable: true,
            eventLimit: true,
            events: {
                url: window.location.href + '/../eventos',
                type: 'GET'
            },
            eventClick: function(event, element) {
                $("#event-idacao").html('Ação: ' + event.idAcaoMascara);
                $("#event-tipoenvio").html('Tipo do Envio: ' + event.tipoEnvio);
                $("#event-status").html('Status: ' + event.statusAcao);
                $("#event-numclientes").html('Número de Clientes: ' + event.numClientes);
                $("#event-numpropostas").html('Número de Propostas: ' + event.numPropostas);
                $("#event-link").html('Detalhes');
                $("#event-link").attr('href', 'acoes/' + event.idAcaoMascara);
                $("#event-content").dialog({
                    title: event.title,
                    modal: true,
                    resizable: false,
                    dialogClass: 'no-close success-dialog',
                    open: function(event, ui) {
                        $('.ui-widget-overlay').bind('click', function() {
                            $(this).siblings('.ui-dialog').find('.ui-dialog-content').dialog('close');
                        });
                    } 
                });
            },
            eventRender: function eventRender(event, element, view) {
                return ['todos', event.tipoEvento].indexOf($('#tipo-selector').val()) >= 0
            }
        });
    });
});

$(function() {
    $('#tipo-selector').on('change', function() {
        $('#calendar').fullCalendar('rerenderEvents');
    });
});

window.onscroll = function() {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
$("#submit").click(function() {
    $(".data-font").each(function() {
        if ($(this).attr("id") == $("#search").val()) {

           $('html,body').animate({
               scrollTop: $(this).offset().top
           });
        }
    });
});
$(document).ready(function() {
    $("#filter").submit(function() {
        if($("#dei").val()=="") {
            $("#dei").remove();
        }
        if($("#def").val()=="") {
            $("#def").remove();
       }
        if($("#dvi").val()=="") {
            $("#dvi").remove();
       }
        if($("#dvf").val()=="") {
            $("#dvf").remove();
        }
        if($("#car").val()=="") {
            $("#car").remove();
        }
    });
 });