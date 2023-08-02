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
        <div className="flex flex-col justify-center items-center mt-32 font-merri">
      <blockquote className="bg-slate-600/50 mx-6 max-w-2xl p-6 rounded-xl shadow-lg">
        <p className="md:text-lg lg:text-xl mb-3">{quote.quote}</p>
        <p>- {quote.author}</p>
      </blockquote>

      <button onClick={chooseQuote} className="bg-blue-500 py-3 px-4 m-8 rounded-3xl shadow-lg bg-orange-800 ease-in-out duration-200 hover:cursor-pointer hover:bg-orange-900">Click for Iroh wisdom</button>
      </div>

<div className="fixed bottom-0 w-full">
      <iframe
        width="100%"
        height="150"
        scrolling="no"
        frameBorder="no"
        
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/832707832&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
</div>
    </div>
  );
}
