$(document).ready(function () {
    var lang = $('html')[0].lang || 'en';
    setTimeout(function () {
        window.cookieconsent.initialise({
            "palette": {
                "popup": {
                    "background": "rgba(0, 0, 0, 0.7)",
                    "text": "#ddd"
                },
                "button": {
                    "background": "#ddd",
                    "text": "#00aa88"
                }
            },
            "content": content[lang],
            "position": "bottom-right"
        });
    }, 4000);
});

var content = {
    de: {
        message: "Diese Webseite verwendet Cookies, um Dienste und Funktionen bereitzustellen.",
        dismiss: "OK",
        link: "Mehr erfahren",
    },
    en: {
        message: "This website uses cookies to provide the best browsing experience.",
        dismiss: "OK",
        link: "Learn more",
    }
}