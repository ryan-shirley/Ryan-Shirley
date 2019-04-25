if (process.browser) {
  window.addEventListener("load", function(){
    window.cookieconsent.initialise({
      "palette": {
        "popup": {
          "background": "#4A90E2",
          "text": "#ffffff"
        },
        "button": {
          "background": "#ffffff",
          "text": "#4A90E2"
        }
      },
      "theme": "classic",
      "position": "bottom-right",
      "content": {
        "message": "I use those internet cookie things on this site. Don't worry I will share it with you:",
        "link": "Privacy Policy",
        "href": "https://www.ryanshirley.ie/privacy-policy"
      }
    })});
}