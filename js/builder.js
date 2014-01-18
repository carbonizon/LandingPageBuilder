$(document).ready(function(){
    //Startup Source
    $('head').append('<style id="blackbg">body {background-color: rgba(1,1,1,0.8);}</style>')
    $('.lp').hide();
    $('.source').hide();
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
        $('.title').replaceWith('<title class="title">Carbonizon</title>')
        $('#lp').removeClass('activebutton');
        $('#source').removeClass('activebutton');
        $('.builder').show();
        $('.lphead').replaceWith('');
        $('.source').hide();
        $('.lp').hide();
        if ($('#blackbg').length === 0) {
            $('head').append('<style id="blackbg">body {background-color: rgba(1,1,1,0.8);}</style>')
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
        if (bodyheader1.length > 0 || imageurl1.length > 0 || bodycontent1.length > 0) {
            if (bodyparagraph != 1) {
                $('.bodycontent2').remove();
                $('.bodycontentdivs').replaceWith('<div class="bodycontentdivs"><div class="bodycontent1"><div class="row"><div class="body1 col-sm-6"><h3 class="bodyheader">'+bodyheader1+'</h3><p class="bodycontent">'+bodycontent1+'</p></div><div class="body1 col-sm-6"><img class="img-responsive bodyimage" src="'+imageurl1+'"></div></div></div><div class="bodycontent2"><div class="row"><div class="body2 col-sm-6"><img class="img-responsive bodyimage" src="'+imageurl2+'"></div><div class="body2 col-sm-6"><h3 class="bodyheader">'+bodyheader2+'</h3><p class="bodycontent2">'+bodycontent2+'</p></div></div></div></div>')
            }
            else {
                $('.bodycontent2').remove();
                $('.bodycontentdivs').replaceWith('<div class="bodycontentdivs"><div class="bodycontent1"><div class="row"><div class="body1 col-sm-6"><h3 class="bodyheader">'+bodyheader1+'</h3><p class="bodycontent">'+bodycontent1+'</p></div><div class="body1 col-sm-6"><img class="img-responsive bodyimage" src="'+imageurl1+'"></div></div></div></div>')
                
            }
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
        //HEADER
        var title = document.getElementById("title").value;
        $('.title').replaceWith('<title class="title">'+title+'</title>')
        var keywords = document.getElementById("keywords").value;
        $('.keywords').replaceWith('<meta class="keywords" name="keywords" content="'+keywords+'">')
        var description = document.getElementById("description").value;
        $('.description').replaceWith('<meta class="description" name="description" content="'+description+'">')
        
        var downloadbutton = document.getElementById("downloadbutton").value;
            if (downloadbutton==="href") {
                var href = document.getElementById("href").value;
                var openclickappender = "window.open('"+href+"')";
                }
            else {
                var openclickappender = document.getElementById("onclick").value;
                }
        var viral = $('input[name="viral"]:checked').val();
        if (viral==="download") {
            $('.viraltoggle').replaceWith('<div class="viraltoggle"><div class="viralonoff download"><button type="button" class="btn btn-success btn-lg dlbttn" onclick="'+openclickappender+'">Click To Download</button><p class="lastupdated">Last Updated on <span class="date"></span></p></div></div>')
        }
        else {
            $('.viraltoggle').replaceWith('<div class="viraltoggle"><div class="viralonoff"><button type="button" class="btn btn-success btn-lg dlbttn" onclick="'+openclickappender+'">Click To Download</button><p class="lastupdated">Last Updated on <span class="date"></span></p></div></div>')
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
        
        $('.title').replaceWith('<title class="title">Get Source Code</title>')
        $(this).addClass('activebutton');
        //DECLARATION OF VARIABLES
        var title = document.getElementById("title").value;
        var head = document.getElementById("head").value;
        var keywords = document.getElementById("keywords").value;
        var description = document.getElementById("description").value;
        var style = document.getElementById("style").value;
        var videoid = document.getElementById("videoid").value;
        var viral = $('input[name="viral"]:checked').val();
        var downloadbutton = document.getElementById("downloadbutton").value;
            if (downloadbutton==="href") {
                var href = document.getElementById("href").value;
                var openclickappender = "window.open('"+href+"')";
                }
            else {
                var openclickappender = document.getElementById("onclick").value;
                }
        var headerone = document.getElementById("header").value;
        var subtext = document.getElementById("subtext").value;
        var bodyparagraph = document.getElementById("bodyparagraph").value;
        var bodyheader2 = document.getElementById("bodyheader2").value;
        var imageurl2 = document.getElementById("imageurl2").value;
        var bodycontent2 = document.getElementById("bodycontent2").value;
        var bodyheader1 = document.getElementById("bodyheader1").value;
        var imageurl1 = document.getElementById("imageurl1").value;
        var bodycontent1 = document.getElementById("bodycontent1").value;
        if (bodyparagraph != 1) {
                var bodyparas = '<div class="bodycontentdivs"><div class="bodycontent1"><div class="row"><div class="body1 col-sm-6"><h3 class="bodyheader">'+bodyheader1+'</h3><p class="bodycontent">'+bodycontent1+'</p></div><div class="body1 col-sm-6"><img class="img-responsive bodyimage" src="'+imageurl1+'"></div></div></div><div class="bodycontent2"><div class="row"><div class="body2 col-sm-6"><img class="img-responsive bodyimage" src="'+imageurl2+'"></div><div class="body2 col-sm-6"><h3 class="bodyheader">'+bodyheader2+'</h3><p class="bodycontent2">'+bodycontent2+'</p></div></div></div></div>'
            }
            else {
                var bodyparas = '<div class="bodycontentdivs"><div class="bodycontent1"><div class="row"><div class="body1 col-sm-6"><h3 class="bodyheader">'+bodyheader1+'</h3><p class="bodycontent">'+bodycontent1+'</p></div><div class="body1 col-sm-6"><img class="img-responsive bodyimage" src="'+imageurl1+'"></div></div></div></div>'
                
            }       
        //if href, then get onclock function for href, if not, then get onclick function supplied.
        //add openclick like onclick="'+openclickappender+'"
        var downloadbutton = document.getElementById("downloadbutton").value;
            if (downloadbutton==="href") {
                var href = document.getElementById("href").value;
                var openclickappender = "window.open('"+href+"')";
                }
            else {
                var openclickappender = document.getElementById("onclick").value;
                }
        
        //APPEND SOURCE replace head then append other
        var doge = '<!DOCTYPE html><html><head class="head"><title class="title">'+title+'</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="css/bootstrap.css" rel="stylesheet"><script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script><script src="js/bootstrap.min.js"></script><script class="javascript lphead" src="js/general.js" type="text/javascript"></script><link class="stylesheet lphead" href="css/stylesheet-'+style+'.css" rel="stylesheet"><link class="sociallockercss lphead" href="css/jquery.op.sociallocker-'+style+'.css" rel="stylesheet"><script class="socialockerjs lphead"src="js/jquery.op.sociallocker.min.js"></script><link href="http://fonts.googleapis.com/css?family=Bree+Serif" rel="stylesheet" type="text/css"><link href="http://fonts.googleapis.com/css?family=Lato:400,300italic" rel="stylesheet" type="text/css"><meta class="keywords" name="keywords" content="'+keywords+'"><meta class="description" name="description" content="'+description+'">'+head+' </head><body><div class="lp container light"><div class="body col-md-8 col-md-offset-2"><div class="header"><div class="row"><div class="jumbotron"><h1 id="headerh1">'+headerone+'</h1></div><div class="divider"></div></div></div><p class="lead centertext subtext" id="subtextp">'+subtext+'</p><div class="row videotoggle"><div class="videocontainer" style="margin-top:20px;margin-right: auto;margin-left:auto;"><iframe class="video" width="550" height="365" src="//www.youtube.com/embed/'+videoid+'?autoplay=0&showinfo=0&controls=0&modestbranding=1" frameborder="0" allowfullscreen></iframe></div></div><div class="viraltoggle"><div class="viralonoff '+viral+'"><button type="button" class="btn btn-success btn-lg dlbttn" onclick="'+openclickappender+'">Click To Download</button><p class="lastupdated">Last Updated on <span class="date"></span></p></div>'+bodyparas+' </div><div class="divider"></div><p class="footer-left inline">Copyright 2014</p><p class="footer-right inline">Designed by: Carbonizon</p></div></div></div></body></html>'
        console.log(doge)
        $(".codeoutput").focus(function() {
            var $this = $(this);
            $this.select();
        
            // Work around Chrome's little problem
            $this.mouseup(function() {
                // Prevent further mouseup intervention
                $this.unbind("mouseup");
                return false;
            });
        });
        
        $('.codeoutput').replaceWith('<xmp class="codeoutput">'+doge+'</xmp>')

        $('#lp').removeClass('activebutton');
        $('#builder').removeClass('activebutton');
        $('.builder').hide();
        $('.lp').hide();
        $('.lphead').replaceWith('');
        $('.source').show();
        if ($('#blackbg').length === 0) {
            $('head').append('<style id="blackbg">body {background-color: rgba(1,1,1,0.8);}</style>')
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