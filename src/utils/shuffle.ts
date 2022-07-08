/* Randomize array in-place using Durstenfeld shuffle algorithm */
export function shuffle(array: any[]) {
  const arrayCopy = [...array];

  for (var i = arrayCopy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arrayCopy[i];
      arrayCopy[i] = arrayCopy[j];
      arrayCopy[j] = temp;
  }
  
  return arrayCopy;
}
