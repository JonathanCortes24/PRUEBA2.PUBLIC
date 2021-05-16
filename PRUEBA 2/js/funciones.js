

$("#btn_registrar").click(function() {
    rut = $("#txt_rut").val();
    nombre = $("#txt_nombre").val();
    apellidopaterno = $("#txt_paterno").val();
    apellidomaterno = $("#txt_materno").val();
    correo = $("#txt_correo").val();
    validador = true;

    $("#mensajes").empty();

    if(rut == "") {
        validador = false;
        $("#mensajes").append('<li> Debe ingresar un Rut </li>');
      
    }
    if(nombre == "") {
        validador = false;
        $("#mensajes").append('<li> Debe ingresar un Nombre </li>');
          
    }
    if(apellidopaterno == "") {
        validador = false;
        $("#mensajes").append('<li> Debe ingresar un Apellido Paterno </li>');
          
    }
    if(apellidomaterno == "") {
        validador = false;
        $("#mensajes").append('<li> Debe ingresar un Apellido Materno </li>');
          
    }
    if(correo == "") {
        validador = false;
        $("#mensajes").append('<li> Debe ingresar un Correo </li>');
          
    }

    

    if(validador) {
        $("#lbl_registro").text("Usuario registrado correctamente. Bienvenido a Banco Imperio Nacional");
       

      


        $("#lbl_registro").addClass('text-success');
        $("#lbl_registro").css("visibility", "visible");
    } else {
        $("#lbl_registro").css("visibility", "hidden");
    }


});





function fn_consultarclima() {
    $.getJSON('https://api.gael.cloud/general/public/clima', function(data) {
        var respuesta = data;
        $("#listaClimas").empty();
        
        for(x of respuesta) {
            $("#listaClimas").append("<li>" + x.Estacion
            + " - " + x.Estado + " - " + x.Temp + "°"
            + "</li>");
        }
    });
}
function fn_consultarclima2() {
    $.getJSON('https://api.gael.cloud/general/public/clima', function(data) {
        var respuesta = data;
        $('#txt_valor').val(respuesta.estacion);
    });
}

function fn_consultarDolar() {
    $.getJSON('https://mindicador.cl/api', function(data) {
        var respuesta = data;
        
        $('#txt_valor').val(respuesta.dolar.valor + " Pesos ");
        
    });
}
function fn_consultarEuro() {
    $.getJSON('https://mindicador.cl/api', function(data) {
        var respuesta = data;
        
        $('#txt_valor2').val(respuesta.euro.valor + " Pesos ");
        
    });
}
function fn_consultarUf() {
    $.getJSON('https://mindicador.cl/api', function(data) {
        var respuesta = data;
        
        $('#txt_valor3').val(respuesta.uf.valor + " Pesos ");
        
    });
}



$('#btn_Ingresar').click(function() {
    fn_consultarDolar();
})
$('#btn_Ingresar').click(function() {
    fn_consultarEuro();
})
$('#btn_Ingresar').click(function() {
    fn_consultarUf();
})

$('#btn_Ingresar').click(function() {
    fn_consultarclima();
})

