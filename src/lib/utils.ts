

export function to(promise: Promise<void>) {
  return promise
    .then((val): any => ([val, undefined]))
    .catch((err): any => ([undefined, err]));
}

export function shuffle(array: any) {
  const newArray = array
  let currentIndex = newArray.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex], newArray[currentIndex]];
  }

  return newArray;
}