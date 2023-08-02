import quotes from './quotes.json'

export default function QuoteGenerator() {
    const [quote, setQuote] = useState(generateRandomQuote());

    function generateRandomQuote() {
        const randomQuote = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomQuote]);
    }

    return (
        <div>
            <blockquote>
                <p>{quote.quote}</p>
                <p>- {quote.author}</p>
            </blockquote>
            <button onCLick={generateRandomQuote}></button>
        </div>
    )


}