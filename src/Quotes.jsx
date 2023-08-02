import { useState } from "react";
import quotes from "./irohquotes.json";


export default function QuoteGenerator() {
  function generateRandomQuote() {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuote];
  }

  const [quote, setQuote] = useState(generateRandomQuote());

  function chooseQuote() {
    setQuote(generateRandomQuote());
  }

  return (
    <div>
      <blockquote>
        <p>{quote.quote}</p>
        <p>- {quote.author}</p>
      </blockquote>

      <button onClick={chooseQuote} className="bg-blue-500 p-6 m-4">Click for Iroh wisdom</button>
     
<div>
      <iframe
        width="100%"
        height="150"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/832707832&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div style={{fontSize: "10px", color: "#cccccc", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: "100"}}>
        <a
          href="https://soundcloud.com/jacnez305"
          title="Uncle Iroh"
          target="_blank"
          rel="noopener noreferrer"
          style={{color: "#cccccc", textDecoration: "none"}}
        >
          Uncle Iroh
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/jacnez305/little-soldier-boy-uncle-iroh"
          title="Little Soldier Boy (Leaves From The Vine) - Uncle Iroh (Mako)"
          target="_blank"
          rel="noopener noreferrer"
          style={{color: "#cccccc", textDecoration: "none"}}
        >
          Little Soldier Boy (Leaves From The Vine) - Uncle Iroh (Mako)
        </a>
      </div>
</div>
    </div>
  );
}
