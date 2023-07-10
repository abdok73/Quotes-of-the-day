
var qouteArr = [
    {
        text: "“Be yourself; everyone else is already taken.”",
        writer: "― Oscar Wilde"
    },
    {
        text: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        writer: "― Marilyn Monroe"
    },
    {
        text: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        writer: "― Albert Einstein"
    },
    {
        text: "“So many books, so little time.”",
        writer: "― Frank Zappa"
    },
    {
        text: "“A room without books is like a body without a soul.”",
        writer: "― Marcus Tullius Cicero"
    },
    {
        text: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        writer: "― Bernard M. Baruch"
    },
    {
        text: `
“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”`,
        writer: "― William W. Purkey"
    },
    {
        text: `
“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
        writer: `― Dr. Seuss`
    },
    {
        text: `“You only live once, but if you do it right, once is enough.”`,
        writer: `― Mae West`
    },
    {
        text: `
“Be the change that you wish to see in the world.”`,
        writer: `― Mahatma Gandhi`
    },
    {
        text: `“In three words I can sum up everything I've learned about life: it goes on.”`,
        writer: `― Robert Frost`
    },
    {
        text: `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
        writer: `― J.K. Rowling`
    },
    {
        text: `“If you tell the truth, you don't have to remember anything.”`,
        writer: `― Mark Twain`
    },
    {
        text: `
“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`,
        writer: `― C.S. Lewis`
    },
    {
        text: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`,
        writer: `― Maya Angelou`
    },
    {
        text: `“A friend is someone who knows all about you and still loves you.”`,
        writer: `― Elbert Hubbard`
    },
    {
        text: `“To live is the rarest thing in the world. Most people exist, that is all.”`,
        writer: `― Oscar Wilde`
    },
    {
        text: `
“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”`,
        writer: `― Martin Luther King Jr.`
    },
    {
        text: `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
        writer: `― Mahatma Gandhi`
    },
    {
        text: `
“It is better to be hated for what you are than to be loved for what you are not.”`,
        writer: `― Andre Gide`
    },
]

showQuote()

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function showQuote() {
    x = getRndInteger(0, qouteArr.length)
    document.getElementById('qoute').innerHTML = qouteArr[x].text
    document.getElementById('writer').innerHTML = qouteArr[x].writer
}


