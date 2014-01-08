// -
    // Notice: read the documentation that comes with the plugins to get more details 

    // IMPORTANT: this is an obligatory wrapper, it runs after loading a page
    $(document).ready(function ($) {
      var today = new Date(); 
	today = today.toDateString(); 
	$('.date').replaceWith('<span class="date">'+today+'</span>')

        // use your own selector to choose content what you want to lock
        $(".download").sociallocker({
   
            // text that appears above the social buttons
            // any html tags available, for example: "<strong>My locker message</strong>"
            text: {
                header: "Click on any button below to start download"
            },

            // a theme name that will be used, 
            // by default available: secrets, dandyish, glass
            theme: "secrets",

            // the order of the social buttons
            // you can remove this option to use the default order
            // available buttons:
            // - facebook:  facebook-like, facebook-share, 
            // - twitter:   twitter-tweet, twitter-follow,
            // - google:    google-plus, google-share (experimental, doesn't work in IE and Opera).
            // - seporator: # (use it to add a new line)
            buttons: {
                order: ["twitter-tweet", "facebook-like", "google-plus"]
            },
            
            // twitter options
            // check out the documentation to learn more about twitter options
            twitter: {
                tweet: {
                    // url to tweet
                  
                    // text that will be preloaded to tweet
                    text: "Download HD Movies at killer speeds!"
                }
            },

            // facebook options
            // check out the documentation to learn more about facebook options
            facebook: {
                like: {
                    // url to like
                  
                },
                // facebook app id (get the one here: https://developers.facebook.com/apps
                // it's obligatory option, dont forget to set it
                appId: "650587051630946"
            },

            // google options
            google: {
                plus: {
                    // url to +1
                   
                }
            }
        });
    })