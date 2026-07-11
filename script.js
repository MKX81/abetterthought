fetch("quotes.json")
    .then(response => response.json())
    .then(quotes => {

        const today = new Date();

        const day =
            Math.floor(today.getTime() / 86400000);

        const quote =
            quotes[day % quotes.length];


        document.getElementById("quote").textContent =
            quote.quote;

        document.getElementById("author").textContent =
            "— " + quote.author;

    });
