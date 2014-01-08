$(document).ready(function(){
    //Startup Source
    $('.lp').hide();
    $('#builder').addClass('activebutton');
    $('.source').hide();
    $('.lphead').replaceWith('');
    //Navigation-Switch
    var version = "dark"
    $('#builder').click(function(){
        $(this).addClass('activebutton');
        $('#lp').removeClass('activebutton');
        $('#source').removeClass('activebutton');
        $('.builder').show();
        $('.lphead').replaceWith('');
        $('.source').hide();
        $('.lp').hide();
    })
    $('#lp').click(function(){
        $(this).addClass('activebutton');
        $('head').append('<link class="stylesheet lphead" href="css/stylesheet-'+version+'.css" rel="stylesheet">');
        $('head').append('<link class="sociallockercss lphead" href="css/jquery.op.sociallocker-'+version+'.css" rel="stylesheet">');
        $('head').append('<script class="socialockerjs lphead"src="js/jquery.op.sociallocker.min.js"></script>');
        $('head').append('<script class="javascript lphead" src="js/general.js" type="text/javascript"></script>');
        $('#source').removeClass('activebutton');
        $('#builder').removeClass('activebutton');
        $('.builder').hide();
        $('.lp').show();
        $('.source').hide();
    })
    $('#source').click(function(){
        $(this).addClass('activebutton');
        $('#lp').removeClass('activebutton');
        $('#builder').removeClass('activebutton');
        $('.builder').hide();
        $('.lp').hide();
        $('.lphead').replaceWith('');
        $('.source').show();
    })
    //jQuery code which toggles mobile nav bar on click of a
    $(function() {
        $('.nav a').on('click', function(){ 
            if($('.navbar-toggle').css('display') !='none'){
                $(".navbar-toggle").trigger( "click" );
            }
        });
    });
})