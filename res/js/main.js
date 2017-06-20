$(document).ready(function() {
  //Hide dialog boxes
  $("#TUC-AV-01").dialog({
    autoOpen: false
  });
  $("#TUC-DC-10").dialog({
    autoOpen: false
  });

  //Box functionality
  //hover version
  $("#av01").hover(function () {
      $("#TUC-AV-01").dialog('open');
    }, function () {
      $("#TUC-AV-01").dialog('close');
    }).mousemove(function (mouse) {
      $("#TUC-AV-01").dialog({dialogClass: "no-close", position: {
        my: "left+10 bottom+100%",
        of: mouse,
        collision: "fit"}
      });
    });

    $("#dc10").hover(function () {
        $("#TUC-DC-10").dialog('open');
      }, function () {
        $("#TUC-DC-10").dialog('close');
      }).mousemove(function (mouse) {
        $("#TUC-DC-10").dialog({dialogClass: "no-close", position: {
          my: "left+10 bottom+100%",
          of: mouse,
          collision: "fit"}
        });
      });

    //on click version
    /*$( "#av01" ).click(function() {
      $( "#TUC-AV-01" ).dialog( "open" );
    });

    $( "#dc10" ).click(function() {
      $( "#TUC-DC-10" ).dialog( "open" );
    });*/

  });//End doc.ready
