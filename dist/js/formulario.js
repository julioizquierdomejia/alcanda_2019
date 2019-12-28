$(document).ready(function() {

  $('.button-left').click(function(){
       $('.sidebar').toggleClass('fliph');
   });

  // VARIABLES //////////////////////////////
  // Array de opciones 
  var opciones = new Array("Amigo / conocido", "Familiar", "Cliente de Alcanda Matchmaking", "Empleado / colaborador de Alcanda Matchmaking");
  //Variable de contabilicacion de opciones seleccioandas
  var cant_opc = 0;
  //click de opciones del modal
  var opc = $('div.pill-options').find('a')
  var opc_aply = $('div.pill-options-select').find('a')

  //ELEMENTOS DINAMICOS /////////////////////
  //añadimos el input de personalizacion de prensa escrita
  $( ".input-publicacion" ).append('<label for="exampleFormControlInput1">¿En qué publicación? </label> <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="En que publicación">');
  
  //$("#check-referencia").prop('checked',true);

  opc.click(function(){
    hacerClick($(this))
  })

  function hacerClick(me){
    console.log($(this).attr('id'))
    me.off("click");

    gsap.to(me, {opacity:0.32})

    var elId = me.attr('id')
    $( ".pill-options-select" ).append('<span class="badge badge-pill boton-badge">'+ opciones[elId] +'<a href="#" id='+ elId +'><i class="fas fa-times-circle"></i></a>');

    opc_aply = $('div.pill-options-select').find('a')

    cant_opc += 1;

    //revisar Check
    review_check()

    //$(this).disable()
  }

  $('.pill-options-select').on('click', 'a', function(){
    console.log($(this).attr('id'))
    $(this).parent().remove()

    
    //opc.attr('id')
    elId = $(this).attr('id');
    id_c = '#' + String(elId);
    gsap.to($(id_c), {opacity:1})
    //$(id_c).on('click', function(){});
    $(id_c).off('click').on('click', function(){});

    console.log(id_c)

    cant_opc -= 1;

    //revisar Check
    review_check()


    // esto quiza hay que borrarlo
    $(id_c).click(function(){
      
      $(this).off("click");

      gsap.to($(this), {opacity:0.32})

      var elId = $(this).attr('id')
      $( ".pill-options-select" ).append('<span class="badge badge-pill boton-badge">'+ opciones[elId] +'<a href="#" id='+ elId +'><i class="fas fa-times-circle"></i></a>');

      opc_aply = $('div.pill-options-select').find('a')

      cant_opc += 1;

      //revisar Check
      review_check()

      //$(this).disable()

    })
    /// borrar hasta aquiiiiii

  });


  function review_check(){
    if (cant_opc > 0) {
      $('.link-edit').removeClass('d-none')
    }

    if (cant_opc == 0) {
      $('.link-edit').addClass('d-none')
      $("#check-referencia").prop('checked',false);
    }
  }

  /*
  opc_aply.click(function(){
    console.log('hizo click afuera')
  })
  */

  //Mostrar modal con las opciones
  $('#check-referencia').change(function(){
    if($(this).is(":checked")) {
        $('.modal').modal('show');
    } else {
        $('.link-edit').addClass('d-none')
        //revisar Check
        review_check()
    }
  });

  $('.link-edit').click(function(){
    $('.modal').modal('show');
  })

  $('.boton_modal').click(function(){
    $('.modal').modal('hide');
  })


  //mostrar Input de Prensa Escrita
  $('#check-prensa-escrita').change(function(){
    if($(this).is(":checked")) {
        $('#input-publicacion').addClass('d-block');
        $('#input-publicacion').removeClass('d-none');
        
        gsap.from("#input-publicacion", {opacity: 0, x:150, duration: .64});

    } else {

        $('#input-publicacion').removeClass('d-block');
        $('#input-publicacion').addClass('d-none');
    }
  });

  //al cerrar el modal
  $("#exampleModalCenter").on('hidden.bs.modal', function () {
    review_check()
  });

});