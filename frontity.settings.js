const settings = {
  "name": "Mecharaf",
  "state": {
    "frontity": {
      "url": "mecharaf.wordpress.com",
      "title": "Mechraf Frontity Blog",
      "description": "Mechraf for Frontity development"
    }
  },
  "packages": [
    {
      "name": "wc-sevilla-theme",
      "state": {
        "theme": {
          "menu": [
      
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://public-api.wordpress.com/wp/v2/sites/mecharaf.wordpress.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
