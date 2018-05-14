$(function() {
    $('#side-menu').metisMenu();
});

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
$(document).ready(function(){
	if(document.getElementById("car_result"))
    document.getElementById("car_result").value = localStorage.getItem("item_result");
	if(document.getElementById("car_acao"))
    document.getElementById("car_acao").value = localStorage.getItem("item_acao");
	if(document.getElementById("dei"))
	    document.getElementById("dei").value = localStorage.getItem("item_dei");
	if(document.getElementById("def"))
	    document.getElementById("def").value = localStorage.getItem("item_def");	
	if(document.getElementById("dvi"))
	    document.getElementById("dvi").value = localStorage.getItem("item_dvi");	
	if(document.getElementById("dvf"))
		$("#dvf").val($.cookie("teste"));
	   // document.getElementById("dvf").valueAsDate = localStorage.getItem("item_dvf");	
	if(document.getElementById("deid"))
	    document.getElementById("deid").value = localStorage.getItem("item_deid");	
	if(document.getElementById("defd"))
	    document.getElementById("defd").value = localStorage.getItem("item_defd");
	if(document.getElementById("deia"))
	    document.getElementById("deia").value = localStorage.getItem("item_deia");
	if(document.getElementById("defa"))
	    document.getElementById("defa").value = localStorage.getItem("item_defa");
	if(document.getElementById("dvia"))
	    document.getElementById("dvia").value = localStorage.getItem("item_dvia");
	if(document.getElementById("dvfa"))
	    document.getElementById("dvfa").value = localStorage.getItem("item_dvfa");
    });
  $(window).on('beforeunload', function() {
	localStorage.setItem("item_result",document.getElementById("car_result").value);
	localStorage.setItem("item_acao",document.getElementById("car_acao").value);
	localStorage.setItem("item_dei",document.getElementById("dei").value);
	localStorage.setItem("item_def",document.getElementById("def").value);
	localStorage.setItem("item_dvi",document.getElementById("dvi").value);
	localStorage.setItem("item_dvf",document.getElementById("dvf").valueAsDate);
	localStorage.setItem("item_deid",document.getElementById("deid").value);
	localStorage.setItem("item_defd",document.getElementById("defd").value);
	localStorage.setItem("item_deia",document.getElementById("deia").value);
	localStorage.setItem("item_defa",document.getElementById("defa").value);
	localStorage.setItem("item_dvia",document.getElementById("dvia").value);
	localStorage.setItem("dvfa",document.getElementById("dvfa").value);
	$.cookie("teste", $("#dvf").val());
    });
  
  var datas = document.querySelectorAll(".data");
  var acessos = document.querySelectorAll(".acesso");
  var propvisus = document.querySelectorAll(".prop_visu");
  var prop_aceitas = document.querySelectorAll(".prop_aceita");
  var boletos = document.querySelectorAll(".boleto");
  var contra_props = document.querySelectorAll(".contra_prop");
  var at_cadastrais = document.querySelectorAll(".at_cadastral");

  data1 = datas[0].textContent;
  data2 = datas[1].textContent;
  data3 = datas[2].textContent;
  data4 = datas[3].textContent;
  data5 = datas[4].textContent;
  data6 = datas[5].textContent;
  data7 = datas[6].textContent;
  data8 = datas[7].textContent;

  acesso1 = acessos[0].textContent;
  acesso2 = acessos[1].textContent;
  acesso3 = acessos[2].textContent;
  acesso4 = acessos[3].textContent;
  acesso5 = acessos[4].textContent;
  acesso6 = acessos[5].textContent;
  acesso7 = acessos[6].textContent;
  acesso8 = acessos[7].textContent;
  
  var acesso_1 = parseInt(acesso1, 10);
  var acesso_2 = parseInt(acesso2, 10);
  var acesso_3 = parseInt(acesso3, 10);
  var acesso_4 = parseInt(acesso4, 10);
  var acesso_5 = parseInt(acesso5, 10);
  var acesso_6 = parseInt(acesso6, 10);
  var acesso_7 = parseInt(acesso7, 10);
  var acesso_8 = parseInt(acesso8, 10);

  propvisu1 = propvisus[0].textContent;
  propvisu2 = propvisus[1].textContent;
  propvisu3 = propvisus[2].textContent;
  propvisu4 = propvisus[3].textContent;
  propvisu5 = propvisus[4].textContent;
  propvisu6 = propvisus[5].textContent;
  propvisu7 = propvisus[6].textContent;
  propvisu8 = propvisus[7].textContent;
  
  var prop_visu_2 = parseInt(propvisu2, 10);
  var prop_visu_3 = parseInt(propvisu3, 10);
  var prop_visu_4 = parseInt(propvisu4, 10);
  var prop_visu_5 = parseInt(propvisu5, 10);
  var prop_visu_6 = parseInt(propvisu6, 10);
  var prop_visu_7 = parseInt(propvisu7, 10);
  var prop_visu_8 = parseInt(propvisu8, 10);

  prop_aceita1 = prop_aceitas[0].textContent;
  prop_aceita2 = prop_aceitas[1].textContent;
  prop_aceita3 = prop_aceitas[2].textContent;
  prop_aceita4 = prop_aceitas[3].textContent;
  prop_aceita5 = prop_aceitas[4].textContent;
  prop_aceita6 = prop_aceitas[5].textContent;
  prop_aceita7 = prop_aceitas[6].textContent;
  prop_aceita8 = prop_aceitas[7].textContent;

  var prop_aceita_2 = parseInt(prop_aceita2, 10);
  var prop_aceita_3 = parseInt(prop_aceita3, 10);
  var prop_aceita_4 = parseInt(prop_aceita4, 10);
  var prop_aceita_5 = parseInt(prop_aceita5, 10);
  var prop_aceita_6 = parseInt(prop_aceita6, 10);
  var prop_aceita_7 = parseInt(prop_aceita7, 10);
  var prop_aceita_8 = parseInt(prop_aceita8, 10);
  
  boleto1 = boletos[0].textContent;
  boleto2 = boletos[1].textContent;
  boleto3 = boletos[2].textContent;
  boleto4 = boletos[3].textContent;
  boleto5 = boletos[4].textContent;
  boleto6 = boletos[5].textContent;
  boleto7 = boletos[6].textContent;
  boleto8 = boletos[7].textContent;
  
  var boleto_1 = parseInt(boleto1, 10);
  var boleto_2 = parseInt(boleto2, 10);
  var boleto_3 = parseInt(boleto3, 10);
  var boleto_4 = parseInt(boleto4, 10);
  var boleto_5 = parseInt(boleto5, 10);
  var boleto_6 = parseInt(boleto6, 10);
  var boleto_7 = parseInt(boleto7, 10);
  var boleto_8 = parseInt(boleto8, 10);

  contra_prop1 = contra_props[0].textContent;
  contra_prop2 = contra_props[1].textContent;
  contra_prop3 = contra_props[2].textContent;
  contra_prop4 = contra_props[3].textContent;
  contra_prop5 = contra_props[4].textContent;
  contra_prop6 = contra_props[5].textContent;
  contra_prop7 = contra_props[6].textContent;
  contra_prop8 = contra_props[7].textContent;
  
  var contra_prop_1 = parseInt(contra_prop1, 10);
  var contra_prop_2 = parseInt(contra_prop2, 10);
  var contra_prop_3 = parseInt(contra_prop3, 10);
  var contra_prop_4 = parseInt(contra_prop4, 10);
  var contra_prop_5 = parseInt(contra_prop5, 10);
  var contra_prop_6 = parseInt(contra_prop6, 10);
  var contra_prop_7 = parseInt(contra_prop7, 10);
  var contra_prop_8 = parseInt(contra_prop8, 10);

  at_cadastro1 = at_cadastrais[0].textContent;
  at_cadastro2 = at_cadastrais[1].textContent;
  at_cadastro3 = at_cadastrais[2].textContent;
  at_cadastro4 = at_cadastrais[3].textContent;
  at_cadastro5 = at_cadastrais[4].textContent;
  at_cadastro6 = at_cadastrais[5].textContent;
  at_cadastro7 = at_cadastrais[6].textContent;
  at_cadastro8 = at_cadastrais[7].textContent;

  var at_cadastro_1 = parseInt(at_cadastro1, 10);
  var at_cadastro_2 = parseInt(at_cadastro2, 10);
  var at_cadastro_3 = parseInt(at_cadastro3, 10);
  var at_cadastro_4 = parseInt(at_cadastro4, 10);
  var at_cadastro_5 = parseInt(at_cadastro5, 10);
  var at_cadastro_6 = parseInt(at_cadastro6, 10);
  var at_cadastro_7 = parseInt(at_cadastro7, 10);
  var at_cadastro_8 = parseInt(at_cadastro8, 10);
  
  Highcharts.chart('containergrafico', {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Resultados Semanais'
      },
      subtitle: {
          text: 'Atualizados diariamente'
      },
      xAxis: {
          categories: [data7, data6, data5, data4, data3, data2, data1],
          tickmarkPlacement: 'on',
          title: {
              enabled: false
          }
      },
      yAxis: {
          title: {
              text: ''
          },
          labels: {
              formatter: function () {
                  
              }
          }
      },
      tooltip: {
          split: true,
          valueSuffix: ''
      },
      plotOptions: {
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'Acessos',
          data: [acesso_8, (acesso_7 + acesso_8), (acesso_6 + acesso_7 + acesso_8), (acesso_5
        		  + acesso_6 + acesso_7 + acesso_8), (acesso_4 + acesso_5
                		  + acesso_6 + acesso_7 + acesso_8) , (acesso_3 + acesso_4 + acesso_5
                        		  + acesso_6 + acesso_7 + acesso_8)
                        		  , (acesso_2 + acesso_3 + acesso_4 + acesso_5
                                		  + acesso_6 + acesso_7 + acesso_8)]
      }, {
          name: 'Propostas Visualizadas',
          data: [prop_visu_8, (prop_visu_7 + prop_visu_8), (prop_visu_6 + prop_visu_7 + prop_visu_8), (prop_visu_5
        		  + prop_visu_6 + prop_visu_7 + prop_visu_8), (prop_visu_4 + prop_visu_5
                		  + prop_visu_6 + prop_visu_7 + prop_visu_8) , (prop_visu_3 + prop_visu_4 + prop_visu_5
                        		  + prop_visu_6 + prop_visu_7 + prop_visu_8)
                        		  , (prop_visu_2 + prop_visu_3 + prop_visu_4 + prop_visu_5
                                		  + prop_visu_6 + prop_visu_7 + prop_visu_8)]
      }, {
          name: 'Propostas Aceitas',
          data: [prop_aceita_8, (prop_aceita_7 + prop_aceita_8), (prop_aceita_6 + prop_aceita_7 + prop_aceita_8), (prop_aceita_5
        		  + prop_aceita_6 + prop_aceita_7 + prop_aceita_8), (prop_aceita_4 + prop_aceita_5
                		  + prop_aceita_6 + prop_aceita_7 + prop_aceita_8) , (prop_aceita_3 + prop_aceita_4 + prop_aceita_5
                        		  + prop_aceita_6 + prop_aceita_7 + prop_aceita_8)
                        		  , (prop_aceita_2 + prop_aceita_3 + prop_aceita_4 + prop_aceita_5
                                		  + prop_aceita_6 + prop_aceita_7 + prop_aceita_8)]
      }, {
          name: 'Boletos',
          data: [boleto_8, (boleto_7 + boleto_8), (boleto_6 + boleto_7 + boleto_8), (boleto_5
        		  + boleto_6 + boleto_7 + boleto_8), (boleto_4 + boleto_5
                		  + boleto_6 + boleto_7 + boleto_8) , (boleto_3 + boleto_4 + boleto_5
                        		  + boleto_6 + boleto_7 + boleto_8)
                        		  , (boleto_2 + boleto_3 + boleto_4 + boleto_5
                                		  + boleto_6 + boleto_7 + boleto_8)]
      }, {
          name: 'Contra Propostas',
          data: [contra_prop_8, (contra_prop_7 + contra_prop_8), (contra_prop_6 + contra_prop_7 + contra_prop_8), (contra_prop_5
        		  + contra_prop_6 + contra_prop_7 + contra_prop_8), (contra_prop_4 + contra_prop_5
                		  + contra_prop_6 + contra_prop_7 + contra_prop_8) , (boleto_3 + contra_prop_4 + contra_prop_5
                        		  + contra_prop_6 + contra_prop_7 + contra_prop_8)
                        		  , (contra_prop_2 + contra_prop_3 + contra_prop_4 + contra_prop_5
                                		  + contra_prop_6 + contra_prop_7 + contra_prop_8)]
      }]
  });