/*
# initialize object literal to var resultObj
# split str into wordsArr sort small to big word length
# iterate over words array
  # if (resultObj[word.length]) resultObj[word.lenth] += 1
  # else resultObj[word.length] = 1;
# return resultObj
*/

// 

function wordSizes(wordsStr) {
  var wordsArr = wordsStr.replace(/[^a-z0-9 ]/gi, '').split(" ");
  var resultObj = {};

  for (var i = 0; i < wordsArr.length; i += 1) {
    word = wordsArr[i];

    if (word.length === 0) { continue; }

    if (resultObj[word.length]) {
      resultObj[word.length] += 1;
    } else {
      resultObj[word.length] = 1;
    }
  }
  

  return resultObj;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}