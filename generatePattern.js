function generatePattern(end_length) {
  let intArr = Array.from({length: end_length}, (k, v) => v+1);

  for (let i = 0; i < intArr.length; i += 1) {
    let leadingNumbers = intArr.slice(0, i + 1).join('')
    let trailingStars = '*'.repeat(end_length - i - 1);

    console.log(leadingNumbers + trailingStars);
  }
  
}

generatePattern(9);

