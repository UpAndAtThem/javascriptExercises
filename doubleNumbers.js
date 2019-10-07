twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

function twice(int) {
  intStr = String(int);
  
  let firstHalf = intStr.substring(0, intStr.length / 2)
  let secondHalf = intStr.substring(intStr.length / 2)

  return firstHalf === secondHalf ? int : int * 2;
}