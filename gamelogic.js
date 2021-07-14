function displayWordSoFar( word, guesses ) {
  let string = ""
  const array = word.split( "" )
//  console.log( array )
  for( let i = 0; i < array.length; i++ ) {
//    console.log( array[ i ]);
    if( guesses.includes( array[ i ])) {
      string += array[ i ] + " "
    } else string += "_ "
  }
//  console.log(string)
  return string
}
//  * Hoe kan ik iedere letter afzonderlijk bekijken
//  * Hoe kan ik automatisch over alle letters van het woord itereren
//  * Zit deze letter in de guesses array, zo ja print letter zelf
//  * Anders underscore

function isGameWon( word, guesses ) {
  // Stap 1: maak een array met unieke letters in word
  // const uniekeLetters = []  vul dit met unieke letters
  const uniqueLetters = []
  for( let i = 0; i < word.length; i++ ) {
    if( uniqueLetters.includes( word[ i ])) {
      // Doe niks, hij zit er al in
    } else {
      // Voeg hem toe, hij zit er nog niet in
      uniqueLetters.push( word[ i ])
    }
  }
//  console.log(uniqueLetters);
  // Store guessed letters (the acrual letters, not the count)
  let guessedLetters = []
  for( let i = 0; i <guesses.length; i++ ) {
    // If this guess is correct AND the guess is a new one (not yet recorded as  correct)
    if( uniqueLetters.includes( guesses[ i ]) && !guessedLetters.includes( guesses[ i ])) {
      // Record the correct letter in the correct letter array
      guessedLetters.push( guesses[ i ])
//      console.log( `Letter ${ guesses[i] } is corrent, count is now ${ guessedLetters.length } of ${uniqueLetters.length  }` )
    }
  }
  if( guessedLetters.length == uniqueLetters.length ) {
//    console.log(`You win because ${ guessedLetters.length } is equal to than ${ uniqueLetters.length }`)
    return true
  } else {
    return false
  }

  // Stap 2: kijk hoeveel letters in guesses zitten in de array met unieke letters
  // const hoeveelheidGoedGeraden = 0 increment deze voor elke letter in word die in uniekeLetters zit
  // Stap 3: als geraden letters == 0 dan return false, else return true
  // Als hoeveelheidGoedGeraden.lentgh is 0, dan false, else true
}
function isGameLost( word, guesses ) {
  // WRITE ME
  // houdt het aantal verkeerd geraden letters bij
  let wrongLetters = 0
  for( let i = 0; i <guesses.length; i++ ) {
    if( word.includes(guesses[ i ])) {
      // Doe niks, dit was een goede gok
    } else {
      wrongLetters += 1
    }
  }
  if( wrongLetters >= 7 ) {
    return true
  } else {
    return false
  }
}

// wat is dat? dat moet nog even kijken.

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
}
