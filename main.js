const colors = ["red", "orange", "yellow", "green", "blue", "purple", "gold", "white", "silver", "black"]
const numbers = [1, 7, 13, 26, 19, 11, 9, 3, 69]
const fortunes = ["You are having a bad hair day.", "You will meet your soulmate.", "You will get a dog.", "The next game you play, you will win!", "Go back to sleep.", "Error."]

const randomizer = arr => {
    return Math.floor(Math.random() * arr.length)
}

let luckyColor = colors[randomizer(colors)]
let luckyNumber = numbers[randomizer(numbers)]
let luckyFortune = fortunes[randomizer(fortunes)]

const yourfortune = () => {
    console.log(`Today's lucky color is ${luckyColor}. Today's lucky number is ${luckyNumber}. Your fortune today is: ${luckyFortune} 
    
    Thanks for playing. - Madame Omu`)

}

yourfortune();