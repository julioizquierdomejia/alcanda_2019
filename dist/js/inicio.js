$(document).ready(function() {
  // SideNav Button Initialization
  // $(".button-collapse").sideNav({
  //   //slim: true,
  //   console.log('welcome world'),
    
  // });

  $('.link-edit').click(function(){
  	$( ".pill-options" ).append('<span class="badge badge-pill boton-badge">Amigo / conocido <a href="#"><i class="fas fa-times-circle"></i></a></span><span class="badge badge-pill boton-badge">Familiar <a href="#"><i class="fas fa-times-circle"></i></a></span><span class="badge badge-pill boton-badge">Cliente de Alcanda Matchmaking <a href="#"><i class="fas fa-times-circle"></i></a></span><span class="badge badge-pill boton-badge">Empleado / colaborador de Alcanda Matchmaking <a href="#"><i class="fas fa-times-circle"></i></a></span>');
  })


  console.log('welcome world x2')

	var tl = gsap.timeline({repeatDelay: 1});
		tl.from("#logoNav", {opacity: 0, y: -50, duration: .64});
		tl.from("#menuBar", {opacity: 0, y: -50, duration: .64});
		tl.from("#fotoGrande", {opacity: 0, x: -500, duration: .64});
		tl.from("#titulo", {opacity: 0, y: -50, duration: .32});
		tl.from("#parrafo", {opacity: 0, y: -50, duration: .32});
		tl.from("#callHome", {opacity: 0, y: -50, duration: .32});

});