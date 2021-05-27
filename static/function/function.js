jQuery(function($) {
  $('#filtro').change(function() {
    var filtro = $('#filtro').val();
    switch (filtro) {
      case 'todos':
        console.log(filtro)
        break;
    }
    switch (filtro) {
      case 'fiction':
        console.log(filtro)
        break;
    }
    switch (filtro) {
      case 'acao':
        console.log(filtro)
        break;
    }
    switch (filtro) {
      case 'aventura':
        console.log(filtro)
        break;
    }
    if (filtro == 'todos'){
      $('.fiction , .action , .aventura').show();
    }else if (filtro == 'action'){
      $('.fiction , .aventura').hide();
      $('.action').show();
    }else if (filtro == 'fiction'){
      $('.action , .aventura').hide();
      $('.fiction').show();
    }else if (filtro == 'aventura'){
      $('.action , .fiction').hide();
      $('.aventura').show();
    }
  });
});