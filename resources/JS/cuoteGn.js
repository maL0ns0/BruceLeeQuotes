let leeCuotes = [
"If you spend too much time thinking about a thing, you’ll never get it done.",
"I’m not in this world to live up to your expectations and you’re not in this world to live up to mine.",
"Do not pray for an easy life, pray for the strength to endure a difficult one.",
"A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
"Absorb what is useful, discard what is useless and add what is specifically your own.",
"Mistakes are always forgivable, if one has the courage to admit them.",
"To hell with circumstances; I create opportunities.",
"I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
"Real living is living for others.",
"The more we value things, the less we value ourselves.",
"If you love life, don’t waste time, for time is what life is made up of.",
"Showing off is the fool’s idea of glory.",
"Life’s battles don’t always go to the stronger or faster man. But sooner or later the man who wins, is the man who thinks he can.",
"The successful warrior is the average man, with laser-like focus.",
"Knowing is not enough, we must apply. Willing is not enough, we must do.",
"In the middle of chaos lies opportunity.",
"For it is easy to criticize and break down the spirit of others, but to know yourself takes a lifetime.",
"Be happy, but never satisfied.",
"Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
"The key to immortality is first living a life worth remembering.",
"You must be shapeless, formless, like water. When you pour water in a cup, it becomes the cup. When you pour water in a bottle, it becomes the bottle. When you pour water in a teapot, it becomes the teapot. Water can drip and it can crash. Become like water my friend."
]



function getRandomCuote(){
    let inx = Math.floor( Math.random() * leeCuotes.length)
    return leeCuotes[inx]
}

let btnQuote = document.querySelector('#btnQuote')
let qtPrh = document.querySelector('#quote-prh')

btnQuote.addEventListener('click', () => {
    qtPrh.innerHTML = getRandomCuote()
})


