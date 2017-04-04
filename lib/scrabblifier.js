export default function scrabblifier(word) {
  const scrabbleWord =  word
    .replace(/[^\w\s\*]/gi, "")
    .split('')
    .map(letter => {
      let word;
      if (['_', '*'].find(x => x === letter)) {
        word = `:blank:`
      } else if (letter === ' ') {
        word = `   `;
      } else {
        word = `:${letter}${letter}:`;
      }
      return word;
    })
    .join('')
  return scrabbleWord;
}
