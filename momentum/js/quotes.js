const quotes = [
    {
        quote: "It is kind of fun to do the impossible.",
        author:"Walt Disney"
    },
    {
        quote: "There are better starters than me but I’m a strong finisher.",
        author:"Usain Bolt"
    },
    {
        quote: "Tough times never last, but tough people do.",
        author:"Robert H. Schuller"
    },
    {
        quote: "I’ve failed over and over and over again in my life and that is why I succeed.",
        author:"Michael Jordan"
    },
    {
        quote: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
        author:"Angelina Jolie"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const toDaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;