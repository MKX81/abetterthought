fetch("quotes.json")
    .then(response => response.json())
    .then(quotes => {

        const today = new Date();

        const day =
            Math.floor(today.getTime() / 86400000);

        const quote =
            quotes[day % quotes.length];


        document.getElementById("quote").textContent =
            quote.proverb;

        document.getElementById("meaning").textContent =
            quote.meaning;

        document.getElementById("author").textContent =
            "— " + quote.origin;

    })
    .catch(error => {
        console.error("Error loading quotes:", error);
    });
