$(document).ready(function(){
    //Startup Source
    $('head').append('<style id="blackbg">body {background-image: url("images/bg.png");overflow-x: hidden;}</style>')
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
            $('#onclick').val("");
            $('#href').val("");
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
        if ($('#blackbg').length === 0) {
            $('head').append('<style id="blackbg">body {background-image: url("images/bg.png");overflow-x: hidden;}</style>')
        }
        else {
            
        }
    })
    $('#lp').click(function(){
        $(this).addClass('activebutton');
        var bodyparagraph = document.getElementById("bodyparagraph").value;
        var bodyheader2 = document.getElementById("bodyheader2").value;
        var imageurl2 = document.getElementById("imageurl2").value;
        var bodycontent2 = document.getElementById("bodycontent2").value;
        var bodyheader1 = document.getElementById("bodyheader1").value;
        var imageurl1 = document.getElementById("imageurl1").value;
        var bodycontent1 = document.getElementById("bodycontent1").value;
        if (bodyparagraph != 1) {
            $('.bodycontent2').remove();
            $('.bodycontentdivs').replaceWith('<div class="bodycontentdivs">div class="bodycontent1"><div class="row"><div class="body1 col-sm-6"><h3 class="bodyheader">'+bodyheader1+'</h3><p class="bodycontent">'+bodycontent1+'</p></div><div class="body1 col-sm-6"><img class="img-responsive bodyimage" src="'+imageurl1+'"></div></div></div><div class="bodycontent2"><div class="row"><div class="body2 col-sm-6"><img class="img-responsive bodyimage" src="'+imageurl2+'"></div><div class="body2 col-sm-6"><h3 class="bodyheader">'+bodyheader2+'</h3><p class="bodycontent2">'+bodycontent2+'</p></div></div></div></div>')
        }
        else {
            $('.bodycontent2').remove();
            $('.bodycontentdivs').replaceWith('<div class="bodycontentdivs"><div class="bodycontent1"><div class="row"><div class="body1 col-sm-6"><h3 class="bodyheader">'+bodyheader1+'</h3><p class="bodycontent">'+bodycontent1+'</p></div><div class="body1 col-sm-6"><img class="img-responsive bodyimage" src="'+imageurl1+'"></div></div></div></div>')
            
        }
        
        
        var headerone = document.getElementById("header").value;
        if (headerone.length > 1) {
            $('#headerh1').replaceWith('<h1 id="headerh1">'+headerone+'</h1>');
        }
        var subtext = document.getElementById("subtext").value;
        if (subtext.length > 1) {
            $('#subtextp').replaceWith('<p class="lead centertext subtext" id="subtextp">'+subtext+'</p>');
        }
        var style = document.getElementById("style").value;
        var videoid = document.getElementById("videoid").value;
        var videoid = document.getElementById("videoid").value;
        var virustotal = document.getElementById("virustotal").value;
        var downloadbutton = document.getElementById("downloadbutton").value;
            if (downloadbutton==="href") {
                var href = document.getElementById("href").value;
                var openclickappender = 'window.open("'+href+'")';
                }
            else {
                var openclickappender = document.getElementById("onclick").value;
                }
        var viral = $('input[name="viral"]:checked').val();
        if (viral==="download") {
            $('.viraltoggle').replaceWith(' <div class="viraltoggle"><div class="viralonoff download"><button type="button" class="btn btn-success btn-lg dlbttn">Click To Download</button><p class="virusscan">Virus Scan: <span style="color:green;font-weight: bold;">Clean</span> (See <a class="viruslink" href="'+virustotal+'" target="_blank">Here</a>)</p><p class="lastupdated">Last Updated on <span class="date"></span></p></div></div>')
        }
        else {
            $('.viraltoggle').replaceWith("<div class='viraltoggle'><div class='viralonoff'><button type='button' class='btn btn-success btn-lg dlbttn' onclick='"+openclickappender+"'>Click To Download</button><p class='virusscan'>Virus Scan: <span style='color:green;font-weight: bold;'>Clean</span> (See <a class='viruslink' href=''+virustotal+'' target='_blank'>Here</a>)</p><p class='lastupdated'>Last Updated on <span class='date'></span></p></div></div>")
        }
        $('.video').replaceWith('<iframe class="video" width="550" height="365" src="//www.youtube.com/embed/'+videoid+'?autoplay=0&showinfo=0&controls=0&modestbranding=1" frameborder="0" allowfullscreen></iframe>')
        if ($('.lphead').length === 0) {
            $('head').append('<link class="stylesheet lphead" href="css/stylesheet-'+style+'.css" rel="stylesheet">');
            $('head').append('<link class="sociallockercss lphead" href="css/jquery.op.sociallocker-'+style+'.css" rel="stylesheet">');
            $('head').append('<script class="socialockerjs lphead"src="js/jquery.op.sociallocker.min.js"></script>');
            $('head').append('<script class="javascript lphead" src="js/general.js" type="text/javascript"></script>');
        }
        else {
            
        }
        $('#source').removeClass('activebutton');
        $('#builder').removeClass('activebutton');
        $('.builder').hide();
        $('.lp').show();
        $('.source').hide();
        $('#blackbg').remove();
    })
    $('#source').click(function(){
        $(this).addClass('activebutton');
        var title = document.getElementById("title").value;
        var head = document.getElementById("head").value;
        var keywords = document.getElementById("keywords").value;
        var description = document.getElementById("description").value;
        $('#lp').removeClass('activebutton');
        $('#builder').removeClass('activebutton');
        $('.builder').hide();
        $('.lp').hide();
        $('.lphead').replaceWith('');
        $('.source').show();
        if ($('#blackbg').length === 0) {
            $('head').append('<style id="blackbg">body {background-image: url("images/bg.png");overflow-x: hidden;}</style>')
        }
        else {
            
        }
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