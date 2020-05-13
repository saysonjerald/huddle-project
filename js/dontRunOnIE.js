function getInternetExplorerVersion()

{
  var rv = -1; 
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}
function checkVersion()
{
    var body = document.querySelector('body');
    var ver = getInternetExplorerVersion();

  if ( ver > -1 )
  {
        body.innerHTML = "<div  style='text-align:center;'><h1>Don't use Internet Explorer</h1><hr><p>Sorry, We prevent our website to be run on Internet Explorer due to lack of features and updates. </p><p>Updgrade it now and visit our website again.</p><br>" +
        "<p style='font-style:italic;'>if you dont have any of this broswers below you can choose one and click to download it</p>" +
        "<p style='font-weight:bold;'>Supported Browsers for Windows and Mac users:</p>" +
        "<a style='display: block' href='https://www.google.com/chrome/'>Google Chrome</a>" +
        "<a style='display: block' href='https://brave.com/'>Brave</a>" +
        "<a style='display: block' href='https://www.mozilla.org/en-US/firefox/new/'>Mozilla Firefox</a>" +
        "<a style='display: block' href='https://www.opera.com/'>Opera</a>" +
        "<a style='display: block' href='https://www.microsoft.com/en-us/edge'>Microsoft Edge</a>" +
        "<br>" +
        "<p style='font-weight:bold;'>For Android Mobile Users:</p>" +
        "<a style='display: block' href='https://play.google.com/store/apps/details?id=com.android.chrome'>Google Chrome</a>" +
        "<a style='display: block' href='https://play.google.com/store/apps/details?id=com.brave.browser'>Brave</a>" +
        "<a style='display: block' href='https://play.google.com/store/apps/details?id=org.mozilla.firefox'>Mozilla Firefox</a>" +
        "<a style='display: block' href='https://play.google.com/store/apps/details?id=com.opera.browser'>Opera</a>" +
        "<a style='display: block' href='https://play.google.com/store/apps/details?id=com.microsoft.emmx'>Microsoft Edge</a>" +
        "<br>" +
        "<p style='font-weight:bold;'>For IOS Mobile Users:</p>" +
        "<a style='display: block' href='https://apps.apple.com/us/app/google-chrome/id535886823'>Google Chrome</a>" +
        "<a style='display: block' href='https://apps.apple.com/us/app/brave-private-web-browser/id1052879175'>Brave</a>" +
        "<a style='display: block' href='https://apps.apple.com/us/app/firefox-private-safe-browser/id989804926'>Mozilla Firefox</a>" +
        "<a style='display: block' href='https://apps.apple.com/us/app/opera-touch-web-browser/id1411869974'>Opera</a>" +
        "<a style='display: block' href='https://apps.apple.com/us/app/microsoft-edge/id1288723196'>Microsoft Edge</a>" +
        "</div>";
  }
}

checkVersion();