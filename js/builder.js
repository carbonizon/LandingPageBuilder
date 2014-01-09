$(document).ready(function(){
    //Startup Source
    $('head').append('<style id="blackbg">body {background-image: url("../images/bg.png");overflow-x: hidden;}</style>')
    $('.lp').hide();
    $('#builder').addClass('activebutton');
    $('.source').hide();
    $('.lphead').replaceWith('');
    $('.step2').hide();
    $('.step3').hide();
    $('.body2input').hide();
    $('.onclick').hide();
    $('.next1').click(function(){
        $('.step1').hide();
        $('.step2').show();
    })
    $('.next2').click(function(){
        $('.step2').hide();
        $('.step3').show();
    })
    $('.back2').click(function(){
        $('.step2').hide();
        $('.step1').show();
    })
    $('.back3').click(function(){
        $('.step3').hide();
        $('.step2').show();
    })
    $(function() {
        $('#bodyparagraph').change(function() {
            var bodyparagraph = document.getElementById("bodyparagraph").value;
            if (bodyparagraph==="1") {
                $('.body2input').hide();
                }
            else {
                $('.body2input').show();
                }
            })
    })
    $(function() {
        $('#downloadbutton').change(function() {
            var downloadbutton = document.getElementById("downloadbutton").value;
            if (downloadbutton==="href") {
                $('.onclick').hide();
                $('.href').show();
                }
            else {
                $('.onclick').show();
                $('.href').hide();
                }
            })
    })
    //Navigation-Switch
    $('#builder').click(function(){
        $(this).addClass('activebutton');
        $('#lp').removeClass('activebutton');
        $('#source').removeClass('activebutton');
        $('.builder').show();
        $('.lphead').replaceWith('');
        $('.source').hide();
        $('.lp').hide();
        $('head').append('<style id="blackbg">body {background-image: url("../images/bg.png");overflow-x: hidden;}</style>');
    })
    $('#lp').click(function(){
        $(this).addClass('activebutton');
        var style = document.getElementById("style").value;
        var videoid = document.getElementById("videoid").value;
        var videoid = document.getElementById("videoid").value;
        var virustotal = document.getElementById("virustotal").value;
        var viral = $('input[name="viral"]:checked').val();
        if (viral==="download") {
            $('.viraltoggle').replaceWith(' <div class="viraltoggle"><div class="viralonoff download"><button type="button" class="btn btn-success btn-lg dlbttn">Click To Download</button><p class="virusscan">Virus Scan: <span style="color:green;font-weight: bold;">Clean</span> (See <a class="viruslink" href="'+virustotal+'">Here</a>)</p><p class="lastupdated">Last Updated on <span class="date"></span></p></div></div>')
        }
        else {
            $('.viraltoggle').replaceWith(' <div class="viraltoggle"><div class="viralonoff"><button type="button" class="btn btn-success btn-lg dlbttn">Click To Download</button><p class="virusscan">Virus Scan: <span style="color:green;font-weight: bold;">Clean</span> (See <a class="viruslink" href="'+virustotal+'">Here</a>)</p><p class="lastupdated">Last Updated on <span class="date"></span></p></div></div>')
        }
        $('.video').replaceWith('<iframe class="video" width="550" height="365" src="//www.youtube.com/embed/'+videoid+'?autoplay=0&showinfo=0&controls=0&modestbranding=1" frameborder="0" allowfullscreen></iframe>')
        $('head').append('<link class="stylesheet lphead" href="css/stylesheet-'+style+'.css" rel="stylesheet">');
        $('head').append('<link class="sociallockercss lphead" href="css/jquery.op.sociallocker-'+style+'.css" rel="stylesheet">');
        $('head').append('<script class="socialockerjs lphead"src="js/jquery.op.sociallocker.min.js"></script>');
        $('head').append('<script class="javascript lphead" src="js/general.js" type="text/javascript"></script>');
        $('#source').removeClass('activebutton');
        $('#builder').removeClass('activebutton');
        $('.builder').hide();
        $('.lp').show();
        $('.source').hide();
        $('#blackbg').remove();
    })
    $('#source').click(function(){
        $(this).addClass('activebutton');
        $('#lp').removeClass('activebutton');
        $('#builder').removeClass('activebutton');
        $('.builder').hide();
        $('.lp').hide();
        $('.lphead').replaceWith('');
        $('.source').show();
        $('head').append('<style id="blackbg">body {background-image: url("../images/bg.png");overflow-x: hidden;}</style>')
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