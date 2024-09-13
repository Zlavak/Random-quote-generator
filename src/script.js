const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.gameofthronesquotes.xyz/v1/random"

const get_quote = async (url) => {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data)
    quote.innerHTML = data.sentence;
    author.innerHTML = data.character.name;
}

get_quote(api_url);