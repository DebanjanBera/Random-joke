const jokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why did the math book look sad? Because it had too many problems.",
];
function joke(){
    const calculate=Math.floor(Math.random()*jokes.length);
    const randomjoke=jokes[calculate];
    document.getElementById("joke").innerHTML=randomjoke;
}
