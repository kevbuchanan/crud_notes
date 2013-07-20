$(document).ready(function() {
  $('#create').on('submit', function(event){
    event.preventDefault();
    event.stopPropagation();
    var url = $(this).attr('action');
    $(this).hide();
    $.get(url, function(data){
      $('#top').append(data);
    });
  });

  $('#top').on('submit', 'form', function(event){
    event.preventDefault();
    event.stopPropagation();
    var url = $(this).attr('action');
    var data = $(this).serialize();
    $.post(url, data, function(response){
      $('#notes').prepend(response);
    });
    $(this).remove();
    $('#create').show();
  });
  // Delete
    $('.delete').on('submit', function(event){
    event.preventDefault();
    event.stopPropagation();
    var url = $(this).attr('action');
    $(this).hide();
    var that = $(this).parent();
    $.get(url, function(data){
      $(that).append(data);
    });
  });

  $('.note').on('submit', '#yes', function(event){
    event.preventDefault();
    event.stopPropagation();
    var url = $(this).attr('action');
    $.post(url);
    $(this).parent().remove();
  });
});
