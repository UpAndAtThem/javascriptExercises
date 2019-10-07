function triangle(height) {
  for (i = 1; i <= height; i += 1) {
    console.log(' '.repeat(height - i) + '*'.repeat(i));
  }
}

triangle(5);

triangle(9);

//     *
//    **
//   ***
//  ****
// *****