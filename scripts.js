const articles = [
    {
        "source": "Bloomberg",
        "logo": "img/bloomberg-logo.png",
        "alt": "Bloomberg logo",
        "title": "How EasyPost Handles Rise in Delivery Service Demand",
        "link": "http://www.bloomberg.com/news/videos/2015-11-30/how-easypost-handles-rise-in-delivery-service-demand"
    },
    {
        "source": "NY Times",
        "logo": "img/nytimes-logo.png",
        "alt": "New York Times logo",
        "title": "Software That Helps Small Businesses Ship Like Amazon",
        "link": "http://boss.blogs.nytimes.com/2014/04/16/software-that-helps-small-businesses-ship-like-amazon/"
    },
    {
        "source": "Bloomberg",
        "logo": "img/bloomberg-logo.png",
        "alt": "Bloomberg logo",
        "title": "Will Walmart Be a Threat to Amazon?",
        "link": "http://www.bloomberg.com/news/videos/2015-05-14/will-walmart-be-a-threat-to-amazon"
    },
    {
        "source": "TechCrunch",
        "logo": "img/techcrunch-logo.png",
        "alt": "TechCrunch logo",
        "title": "TechCrunch's Picks: The Top 8 Startups From Y Combinator's Summer '13 Demo Day",
        "link": "https://techcrunch.com/2013/08/20/y-combinator-demo-day-summer-2013/"
    }
];

function carouselNavLength () {
    for (let i = 0; i < articles.length; i++) {
        // create a nav dot for each article for mobile and half the number of dots for desktop
        if (screen.width <= 600 || screen.width > 600 && i % 2 === 0) {
            let dot = document.createElement("LI");
            document.getElementById("article-list").appendChild(dot);
        }
    }
};

function carouselArticles () {
    for (let article of articles) {
        document.getElementById("carousel-article-list").insertAdjacentHTML("beforeend", `<div class='col-1-of-2'><div class='card'><div class='logo-headline'><img src=${article.logo} alt=${article.alt}><div class='headline'>${article.title}</div></div><div class='content-source'>— ${article.source}</div><div class='content-link'><a href=${article.link} target='_blank'>Read story</a></div></div></div>`);
    }
}

carouselNavLength();
carouselArticles();