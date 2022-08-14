import {Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <script> window.fbAsyncInit = function() {
          FB.init({
            appId      : '506623680873242',
            xfbml      : true,
            version    : 'v14.0'
          });
          FB.AppEvents.logPageView();
        };

        (function(d, s, id){
          
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
      </script>
  
      </body>
    </Html>
  )
}
