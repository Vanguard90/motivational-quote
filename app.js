const quotes = [
    'If you don\'t know where to start, start anywhere',
    'If it\'s important enough, you will make time for it',
    'The act of taking the first step seperates the winners from the losers',
    'Someone out there is getting stronger, smarter',
    'A champion is someone who gets up when we can\'t',
    'Yesterday you said tomorrow',
    'Do not pray for an easy life, pray for the strength to endure a difficult one',
    'The harder I work, the more successful I become',
    'The things you take for granted, someone else is praying for',
    'The worst thing I can be is the same as everybody else. I\'d hate that',
    'I may not be there yet, but I\'m closer than I was yesterday',
    'The lazier a man is, the more he plans to do tomorrow',
    'Every moment wasted is a moment the opponent trains. When you meet him, he will win',
    'Don\'t. Be. Average',
    'Ever tried. Ever failed. No matter. Try again. Fail again. Fail harder.',
    'Every advantage is temporary',
    'Today I will do what others will not, so that tomorrow I can do what other cannot',
    'Success is the sum of small efforts repeated day in and day out',
    'Make sure they don\'t outwork you',
    'Big men become big by doing what they didn\'t want to do when they didn\'t want to do it',
    'When you want to succeed as bad as you want to breathe, then you will be successful'
];

function getQuote(quoteArr) {
    const randomQuoteIndex = Math.floor(Math.random() * quoteArr.length);
    return quoteArr[randomQuoteIndex];
}

console.log(getQuote(quotes));