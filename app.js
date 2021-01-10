// set high starting number for the targeting computer
// 036379

// break that num into an array, and then take that array and pull from the appropriate index to replace the img url of that slot

// Animate

// While num is > 0 keep decrementing the number, with a super tiny settimeout

// at the end of each iteration update the UI by changing img urls

let start = 36379;
let leadingZeros = 0;
let numArr;

const getNum = (index) => {
  return document.getElementById(`char${index}`);
}

function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    numArr = start.toString().split('');
    numArr.forEach((digit, i) => {
      getNum(i + (5 - numArr.length)).setAttribute('src', `assets/svg/targeting-nums/${digit}.svg`)
    })
    if(start < 100) {
      start -= 1;
    } else { 
      start -= 16;
    }
    if (start > 0) {
      if(start === 9995  || start === 987 || start === 91 || start === 11) {
        document.querySelectorAll('.numbers img').forEach((item) => {
          item.setAttribute('src', 'assets/svg/targeting-nums/0.svg');
        })
        if(start < 30) return;
      }         //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  })
}

myLoop(); 