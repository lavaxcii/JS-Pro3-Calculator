// dissapear in pieces effect (html2canvas + disintegrate)
disintegrate.init();
let rndOutlineShadow = '0px 0px 20px 10px yellow';
const exploCrumble = document.querySelector('.exploCrumble');
const dissCalcBtn = document.querySelector('.dissCalc');

function boom() {
  function scatterButtons() {
    document.querySelectorAll('button').forEach((buttons) => {
      if (buttons.classList.contains('digitsOnly')) {
        buttons.style.translate = `0`;
      } else {
        let x = Math.floor(Math.random() * 200) - 100;
        let y = Math.floor(Math.random() * 200) - 100;
        buttons.style.translate = `${x}px ${y}px`;
      };
    });
  };
  const dBody = document.querySelector('.containerDiv');
  const aBody = document.querySelector('.animationBody');
  const cBody = document.querySelector('.calculatorBody');
  console.log(dBody.style.backgroundColor);
  if (dBody.style.backgroundImage === 'none') {
    return;
  };
  exploCrumble.play();
  scatterButtons();
  const disObj = disintegrate.getDisObj(aBody);
  disintegrate.createSimultaneousParticles(disObj);
  const disObj2 = disintegrate.getDisObj(cBody);
  disintegrate.createSimultaneousParticles(disObj2);
  aBody.style.opacity = '0%';
  cBody.style.opacity = '0%';
  dBody.style.backgroundImage = 'none';
};

document.querySelector('.dissCalc').addEventListener('click', boom);

function unscatterButtons() {
  document.querySelectorAll('button').forEach((buttons) => {
    if (buttons.classList.contains('digitsOnly')) {
      buttons.style.translate = `0`;
    } else {
      let x = 0;
      let y = 0;
      buttons.style.translate = `${x}px ${y}px`;
    };
  });
}
window.addEventListener('keydown', (keys) => {
  if (keys.key === 'z') {
    unscatterButtons();
  };
});

const ehem = document.querySelector('.ehem');
document.querySelector('.dissCalc').addEventListener('mouseenter', () => {
  ehem.play();
});

// calculator reappear
const whistleReborn = document.querySelector('.whistleReborn');
function calcReapear() {
  const aBody = document.querySelector('.animationBody');
  const cBody = document.querySelector('.calculatorBody');
  const containerDiv = document.querySelector('.containerDiv');
  if (aBody.classList.contains('powerOnC')) {
    aBody.style.boxShadow = `${rndOutlineShadow}`;
  };
  if (aBody.style.opacity === '0') {
    whistleReborn.play();
  };
  aBody.style.opacity = '100%';
  cBody.style.opacity = '100%';
  containerDiv.style.backgroundImage = 'linear-gradient(100deg, #555555, rgb(0, 0, 0))';
}
document.querySelector('.nC').addEventListener('click', calcReapear);

// upsize calc
const wDrop = document.querySelector('.wDrop');
const yawn = document.querySelector('.yawn');
const wow = document.querySelector('.wow');
function upsizeCalc() {

  const aBody = document.querySelector('.animationBody');
  const cBody = document.querySelector('.calculatorBody');
  const dBody = document.querySelector('.digits');
  if (aBody.style.opacity === '0') {
    return;
  }
  if (aBody.offsetHeight > 360) {
    if (aBody.offsetHeight > 510) {
      document.querySelector('#pResult').style.fontSize = '1.5rem';
      document.querySelector('#pDisplay').style.fontSize = '2rem';
      wow.play();
      return;
    };
    document.querySelector('#pResult').style.marginTop = '13px';
    document.querySelector('#pResult').style.marginBottom = '13px';
    document.querySelector('#pDisplay').style.marginTop = '21px';
    document.querySelector('#pDisplay').style.marginBottom = '21px';
    document.querySelector('.digits').style.marginBottom = '35px';
    if (aBody.offsetHeight > 400) {
      document.querySelector('.digits').style.marginBottom = '0px';
      document.querySelector('#pResult').style.fontSize = '1.3rem';
      document.querySelector('#pDisplay').style.fontSize = '1.8rem';
      document.querySelectorAll('button').forEach((button) => {
        if (button.classList.contains('digitsOnly')) {
          button.style.fontSize = '1.8rem';
          button.style.paddingTop = '8px';
        };
      });
    };
  };
  let aBmh = aBody.offsetHeight;
  let aBmw = aBody.offsetWidth;
  let cBmh = cBody.offsetHeight;
  let cBmw = cBody.offsetWidth;
  let dBmh = dBody.offsetHeight;
  let dBmw = dBody.offsetWidth;

  aBody.style.height = `${aBmh+30}px`;
  aBody.style.width = `${aBmw+30}px`;
  cBody.style.height = `${cBmh+30}px`;
  cBody.style.width = `${cBmw+30}px`;
  dBody.style.height = `${dBmh+30}px`;
  dBody.style.width = `${dBmw+30}px`;

  wDrop.play();
}
document.querySelector('.upszC').addEventListener('click', upsizeCalc);

// downsize calc
function downsizeCalc() {
  const aBody = document.querySelector('.animationBody');
  const cBody = document.querySelector('.calculatorBody');
  const dBody = document.querySelector('.digits');
  if (aBody.style.opacity === '0') {
    return;
  }
  if (aBody.offsetHeight < 450) {
    if (aBody.offsetHeight < 380) {
      yawn.play();
      return;
    };
    document.querySelector('#pResult').style.marginTop = '3px';
    document.querySelector('#pResult').style.marginBottom = '3px';
    document.querySelector('#pDisplay').style.marginTop = '3px';
    document.querySelector('#pDisplay').style.marginBottom = '3px';
    document.querySelector('.digits').style.marginBottom = '55px';
    if (aBody.offsetHeight < 480) {
    document.querySelector('.digits').style.marginBottom = '75px';
    };
    document.querySelector('#pResult').style.fontSize = '0.9rem';
    document.querySelector('#pDisplay').style.fontSize = '1.4rem';
    document.querySelectorAll('button').forEach((button) => {
      if (button.classList.contains('digitsOnly')) {
        button.style.fontSize = '1.4rem';
        button.style.paddingTop = '0px';
      };
    });
  };

  let aBmh = aBody.offsetHeight;
  let aBmw = aBody.offsetWidth;
  let cBmh = cBody.offsetHeight;
  let cBmw = cBody.offsetWidth;
  let dBmh = dBody.offsetHeight;
  let dBmw = dBody.offsetWidth;

  aBody.style.height = `${aBmh-30}px`;
  aBody.style.width = `${aBmw-30}px`;
  cBody.style.height = `${cBmh-30}px`;
  cBody.style.width = `${cBmw-30}px`;
  dBody.style.height = `${dBmh-30}px`;
  dBody.style.width = `${dBmw-30}px`;

  wDrop.play();
};
document.querySelector('.dwnszC').addEventListener('click', downsizeCalc);

// rnd calc outline
const upperLeftBorder = document.querySelector('.upperLeftBorder');
const upperRightBorder = document.querySelector('.upperRightBorder');
const lowerLeftBorder = document.querySelector('.lowerLeftBorder');
const lowerRightBorder = document.querySelector('.lowerRightBorder');
const aBody = document.querySelector('.animationBody');
const display = document.querySelector('.display');
const result = document.querySelector('.result');
const digitDisplay = document.querySelector('.digitDisplay');
const powerUpSound = document.querySelector('.powerUpSound');
const powerUpVoice = document.querySelector('.powerUpVoice');
const cDrop = document.querySelector('.cDrop');
const buttonImage = document.querySelector('.fa-border-style');

function rndCalcOutline() {
  if (aBody.classList.contains('powerOnC')) {
    if (aBody.style.opacity === '0') {
      return;
    };
    function rgbRng() {
      let randomRgbNr = Math.floor(Math.random() * 255) + 0;
      return randomRgbNr;
    };
    let rgb1 = rgbRng();
    let rgb2 = rgbRng();
    let rgb3 = rgbRng();
    cDrop.play();
    upperLeftBorder.style.borderTop = `10px solid rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    upperRightBorder.style.borderTop = `10px solid rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    upperRightBorder.style.borderRight = `10px solid rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    lowerRightBorder.style.borderRight = `10px solid rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    lowerRightBorder.style.borderBottom = `10px solid rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    lowerLeftBorder.style.borderBottom = `10px solid rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    aBody.style.boxShadow = `0px 0px 200px 1px rgb(${rgb1}, ${rgb2}, ${rgb3}`;
    rndOutlineShadow = aBody.style.boxShadow;
    return;
  };
};

document.querySelector('.rndColorOutline').addEventListener('click', rndCalcOutline);

//rotate colors on button icon
function rotateButtonImageColors() {
  function rgbRng() {
    let randomRgbNr = Math.floor(Math.random() * 255) + 0;
    return randomRgbNr;
  };
  let rgb1 = rgbRng();
  let rgb2 = rgbRng();
  let rgb3 = rgbRng();
  setTimeout(() => {
    buttonImage.style.color = `rgb(${rgb1}, ${rgb2}, ${rgb3}`;
  }, 1500);
  setTimeout(() => {
  rotateButtonImageColors();
  }, 1500);
}
rotateButtonImageColors();

// power up calc (= outline calc in radiant yellow and enable calc functionality)
const powerOn = document.querySelector('.fa-power-off');
function powerOnOff() {
  console.log(aBody.classList);
  if (aBody.classList.contains('powerOnC')) {
      if (aBody.style.opacity === '0') {
        return;
      };
      powerUpSound.play();
      powerOn.style.color = 'green';
      setTimeout(() => {
      upperLeftBorder.style.borderTop = '10px solid gray';
      }, 100)
      setTimeout(() => {
        upperRightBorder.style.borderTop = '10px solid gray';
      }, 200)
      setTimeout(() => {
        upperRightBorder.style.borderRight = '10px solid gray';
      }, 400)
      setTimeout(() => {
        lowerRightBorder.style.borderRight = '10px solid gray';
      }, 600)
      setTimeout(() => {
        lowerRightBorder.style.borderBottom = '10px solid gray';
      }, 800)
      setTimeout(() => {
        lowerLeftBorder.style.borderBottom = '10px solid gray';
      }, 1000)
      setTimeout(() => {
        aBody.classList.remove('powerOnC');
        aBody.style.boxShadow = 'none';
        result.style.backgroundImage = 'linear-gradient(100deg, rgb(0, 0, 0), #000000)';
        results.style.textShadow = 'none';
        digitDisplay.style.backgroundImage = 'linear-gradient(100deg, rgb(0, 0, 0), #000000)'; 
        digitDisplay.style.textShadow = 'none';
      }, 1200)
  } else {
    if (aBody.style.opacity === '0') {
      return;
      };
    powerUpSound.play();
    powerOn.style.color = 'red';
    setTimeout(() => {
      upperLeftBorder.style.borderTop = '10px solid yellow';

      }, 100)
      setTimeout(() => {
        upperRightBorder.style.borderTop = '10px solid yellow';
      }, 200)
      setTimeout(() => {
        upperRightBorder.style.borderRight = '10px solid yellow';
      }, 400)
      setTimeout(() => {
        lowerRightBorder.style.borderRight = '10px solid yellow';
      }, 600)
      setTimeout(() => {
        lowerRightBorder.style.borderBottom = '10px solid yellow';
      }, 800)
      setTimeout(() => {
        lowerLeftBorder.style.borderBottom = '10px solid yellow';
      }, 1000)
      setTimeout(() => {
        aBody.classList.add('powerOnC');
        aBody.style.boxShadow = '0px 0px 80px 20px yellow';
        result.style.backgroundImage = 'linear-gradient(100deg, rgb(81, 81, 81), rgb(166, 255, 184))';
        results.style.textShadow = '1px 1px 2px rgb(81, 0, 255)';
        digitDisplay.style.backgroundImage = 'linear-gradient(100deg, rgb(81, 81, 81), rgb(166, 255, 184))';
        digitDisplay.style.textShadow = '1px 1px 2px rgb(81, 0, 255)';
        powerUpVoice.play();
      }, 1200)
      setTimeout(() => {
        aBody.style.boxShadow = '0px 0px 20px 10px yellow';
      }, 2000);
  };
};

document.querySelector('.powerUpCalc2').addEventListener('click', powerOnOff);

// background swap
const bodyBody = document.querySelector('body');
const gallery = ['./bImages/hand.png', './bImages/forest.png', './bImages/waterfall.png', './bImages/traveler.png', ''];
let n = 0;

function backgroundSwap() {
  if (n >= 0) {
    bodyBody.style.backgroundImage = `url("${gallery[n]}"), linear-gradient(100deg, #555555, rgb(0, 0, 0))`;
    cDrop.play();
    n++;
    if (n === gallery.length) {
      n = 0;
    };
  };

}
document.querySelector('.pageBackgroundToggl').addEventListener('click', backgroundSwap);

//change display font
function fontSwap() {
  if (display.style.fontFamily = 'Press Start 2P') {
  display.style.fontFamily = 'Jura';
  cDrop.play();
  } else {
    display.style.fontFamily = 'Press Start 2P';
    cDrop.play();
  };
};

document.querySelector('.fontChange').addEventListener('click', fontSwap);

// music feature
const music = document.querySelectorAll('audio');
const musicArr = Array.from(music);
musicArr.splice(0, 11);
console.log(musicArr);
const allButtons = document.querySelectorAll('button')
function keyPressEffect(button) {
  button.style.backgroundColor = 'gray';
  button.style.border = '5px inset black';
  setTimeout(() => {
    if (button.style.backgroundColor = 'gray') {
      button.style.backgroundColor = 'white';
      button.style.border = '5px outset black';
    };
  }, 200)
}

function playMusic() {
  const pauseB = document.querySelector('.fa-pause');
  const playB = document.querySelector('.fa-play');
  let c = 0;

  function previous() {
    if (musicArr[c].paused === false) {
      musicArr[c].pause();
    };
    if (c <= 0) {
      c = musicArr.length - 1;
      musicArr[c].play();
      playB.style.opacity = '0%';
      pauseB.style.opacity = '100%';
      allButtons.forEach((button) => {
      if (button.classList.contains('previous')) {
        keyPressEffect(button)
      };
    });
      return;
    };
    c--
    musicArr[c].play();
    playB.style.opacity = '0%';
    pauseB.style.opacity = '100%';
    allButtons.forEach((button) => {
      if (button.classList.contains('previous')) {
        keyPressEffect(button)
      };
    });
  };

  function next() {
    if (musicArr[c].paused === false) {
      musicArr[c].pause();
    };
    if (c >= musicArr.length - 1) {
      c = 0;
      musicArr[c].play();
      playB.style.opacity = '0%';
      pauseB.style.opacity = '100%';
      allButtons.forEach((button) => {
        if (button.classList.contains('next')) {
          keyPressEffect(button)
        };
      });
      return;
    };
    c++
    musicArr[c].play();
    playB.style.opacity = '0%';
    pauseB.style.opacity = '100%';
    allButtons.forEach((button) => {
      if (button.classList.contains('next')) {
        keyPressEffect(button)
      };
    });
  };

  function playStop() {
    if (musicArr[c].paused === false) {
      musicArr[c].pause();
      playB.style.opacity = '100%';
      pauseB.style.opacity = '0%';
      allButtons.forEach((button) => {
        if (button.classList.contains('playStop')) {
          keyPressEffect(button)
        };
      });
      return;
    };
    musicArr[c].play();
    playB.style.opacity = '0%';
    pauseB.style.opacity = '100%';
    allButtons.forEach((button) => {
      if (button.classList.contains('playStop')) {
        keyPressEffect(button)
      };
    });
  };

  function random() {
    if (musicArr[c].paused === false) {
      musicArr[c].pause();
      playB.style.opacity = '100%';
      pauseB.style.opacity = '0%';
    };
    do {
      c = Math.floor(Math.random() * 5) + 0;
    } while (c === Math.floor((Math.random() * 5) + 0));
    musicArr[c].play();
    playB.style.opacity = '0%';
    pauseB.style.opacity = '100%';
    allButtons.forEach((button) => {
      if (button.classList.contains('random')) {
        keyPressEffect(button)
      };
    });
  }

  document.querySelector('.previous').addEventListener('click', previous);
  document.querySelector('.next').addEventListener('click', next);
  document.querySelector('.playStop').addEventListener('click', playStop);
  document.querySelector('.random').addEventListener('click', random);

  window.addEventListener('keydown', (keys) => {
    if (keys.key === 'q') {
      previous();
    } else if (keys.key === 'w') {
      playStop();
    } else if (keys.key === 'e') {
      next();
    } else if (keys.key === 'r') {
      random();
    };
  });
};
playMusic();

//keyboard feature for user options
window.addEventListener('keydown', (keys) => {
  if (keys.key === 'o') {
    powerOnOff();
    allButtons.forEach((button) => {
      if (button.classList.contains('powerUpCalc2')) {
        keyPressEffect(button)
      };
    });
  } else if (keys.key === 'k') {
    upsizeCalc();
    allButtons.forEach((button) => {
      if (button.classList.contains('upszC')) {
        keyPressEffect(button)
      };
    });
  } else if (keys.key === 'm') {
    downsizeCalc();
    allButtons.forEach((button) => {
      if (button.classList.contains('dwnszC')) {
        keyPressEffect(button)
      };
    });
  } else if (keys.key === 'i') {
    rndCalcOutline();
    allButtons.forEach((button) => {
      if (button.classList.contains('rndColorOutline')) {
        keyPressEffect(button)
      };
    });
  } else if (keys.key === 'j') {
    backgroundSwap();
    allButtons.forEach((button) => {
      if (button.classList.contains('pageBackgroundToggl')) {
        keyPressEffect(button)
      };
    });
  } else if (keys.key === 'n') {
    fontSwap();
    allButtons.forEach((button) => {
      if (button.classList.contains('fontChange')) {
        keyPressEffect(button)
      };
    });
  } else if (keys.key === 'u') {
    boom();
    allButtons.forEach((button) => {
      if (button.classList.contains('dissCalc')) {
        keyPressEffect(button)
      };
    });
  } else if (keys.key === 'h') {
    calcReapear();
    allButtons.forEach((button) => {
      if (button.classList.contains('nC')) {
        keyPressEffect(button)
      };
    });
  };
});

// random laugh feature
const giggleA = document.querySelector('.giggle');
function spookyGiggle() {
  setTimeout(() => {
    giggleA.play();
  }, `${Math.floor(Math.random() * 15000) + 5000}`);
  setTimeout(() => {
    spookyGiggle();
  }, `${Math.floor(Math.random() * 15000) + 5000}`);
};
spookyGiggle();

// digits click and key support
let results = document.querySelector('#pResult');
let operationResults;
let operationDisplay = document.querySelector('#pDisplay');
let operationDisplayCalc = '';
let commaState = false;
let operatorState = false;
console.log(operationDisplay);
let sumAll = 0;
let divideRes = 0;
let divideStatus = false;
let aDiv = 0;
let bDiv = 0;
let multiplyRes = 0;
let multiplyStatus = false;
let aMult = 0;
let bMult = 0;
let addRes = 0;
let aAdd = 0;
let bAdd = 0;
let subRes = 0;
let aSub = 0;
let bSub = 0;

document.querySelectorAll('button').forEach((buttons) => {
  buttons.addEventListener('click', (e) => {
    if (buttons.classList.contains('digitsOnly')) {
      let clickedNrOp = e.target.textContent;
      console.log(clickedNrOp)
      buttons.style.backgroundColor = 'gray';
      buttons.style.border = '5px inset black';
      setTimeout(() => {
        if (buttons.style.backgroundColor = 'gray') {
          buttons.style.backgroundColor = 'white';
          buttons.style.border = '5px outset black';
        };
      }, 200)

      if (aBody.classList[1] !== 'powerOnC') {
        return;
      };

      if (clickedNrOp === '0' && operationDisplay.textContent.length < 1) {        
        operationDisplay.textContent = `${clickedNrOp}`;
        operationDisplayCalc = `${clickedNrOp}`;
      } else if (clickedNrOp === '.' && operationDisplay.textContent.length === 1 && operationDisplay.textContent === '0') {
        operationDisplay.textContent = `0${clickedNrOp}`;
        operationDisplayCalc = `0${clickedNrOp}`;
        commaState = true;
        return;
      } else if ((clickedNrOp === '.') &&  (operationDisplay.textContent.endsWith('+') || operationDisplay.textContent.endsWith('-') || operationDisplay.textContent.endsWith('*') || operationDisplay.textContent.endsWith('/'))) {
        operationDisplay.textContent += `0${clickedNrOp}`;
        operationDisplayCalc += `0${clickedNrOp}`;
        commaState = true;
        return;
      } else if (clickedNrOp === '.' && commaState === true) {
        return;
      } else if ((clickedNrOp === '+' || clickedNrOp === '-' || clickedNrOp === '*' || clickedNrOp === '/') && operatorState === true) {
        console.log('HeyHeyPeople')
        return;
      } else if ((clickedNrOp === '+' || clickedNrOp === '-' || clickedNrOp === '*' || clickedNrOp === '/' || clickedNrOp === '=' || clickedNrOp === 'DEL') && operationDisplay.textContent.length === 1 && operationDisplay.textContent === '0') {
        console.log('HeyHeyPeople!!!')
        return;
      } else {
        if (operationDisplay.textContent === '0' && clickedNrOp !== 'C') {
          operationDisplay.textContent = `${clickedNrOp}`;
          operationDisplayCalc = `${clickedNrOp}`;
          return;          
        } else if ((operationDisplay.textContent.endsWith('+') || operationDisplay.textContent.endsWith('-') || operationDisplay.textContent.endsWith('*') || operationDisplay.textContent.endsWith('/')) && clickedNrOp === '0') {
          return;
        } else if ((clickedNrOp === '+' || clickedNrOp === '-' || clickedNrOp === '*' || clickedNrOp === '/') && operatorState === false) {
          if (operationDisplay.textContent.endsWith('.')) {
            return;
          };
          operationDisplay.textContent += `${clickedNrOp}`;
          operationDisplayCalc += ` ${clickedNrOp} `;
          operatorState = true;
          commaState = false;
          return;
        } else if (clickedNrOp === '.') {
          operationDisplay.textContent += `${clickedNrOp}`;
          operationDisplayCalc += `${clickedNrOp}`;
          operatorState = true;
          commaState = true;  
          return;
        } else if (clickedNrOp === '=') {          

          operationResults = operationDisplayCalc.split(' ');
          console.log('display says: ' + operationResults);

          for (let n = 0; n < operationResults.length - 1; n++) {
            if (operationResults[n] === '/') {
              if (divideRes > 0) {
                divideRes = 0;
                aDiv = 0;
                bDiv = 0;
                divideStatus = false;
              }
              aDiv = parseFloat(operationResults[n - 1]);
              bDiv = parseFloat(operationResults[n + 1]);              
              divideRes = (aDiv / bDiv).toFixed(2);
              divideStatus = true;  
              operationResults.splice(`${n - 1}`, 3, `${divideRes}`);
              n = 0;              
              console.log('after DIVIDE operation display says: ' + operationResults);
              console.log('DivideDONE');
            }
          }

          console.log('after DIVIDE operations FINISHED display says: ' + operationResults);

          
          for (let n = 0; n < operationResults.length - 1; n++) {
            if (operationResults[n] === '*') {
              if (multiplyRes > 0) {
                multiplyRes = 0;
                aMult = 0;
                bMult = 0;
                multiplyStatus = false;
              }
              aMult = parseFloat(operationResults[n - 1]);
              bMult = parseFloat(operationResults[n + 1]);
              multiplyRes = (aMult * bMult).toFixed(2);
              multiplyStatus = true;  
              operationResults.splice(`${n - 1}`, 3, `${multiplyRes}`);
              n = 0;
              console.log('after MULTIPLY operation display says: ' + operationResults);
              console.log('MutiplyDONE');
            }
          }

          console.log('after MULTIPLY operations FINISHED display says: ' + operationResults);

          for (let n = 0; n < operationResults.length - 1; n++) {
            if (operationResults[n] === '+') {              
              aAdd = parseFloat(operationResults[n - 1]);
              bAdd = parseFloat(operationResults[n + 1]);
              addRes = (aAdd + bAdd).toFixed(2); 
              operationResults.splice(`${n - 1}`, 3, `${addRes}`);
              n = 0;
              console.log('after ADDITION operation display says: ' + operationResults);
              console.log('AdditionDONE');
            } else if (operationResults[n] === '-') {
              aSub = parseFloat(operationResults[n - 1]);
              bSub = parseFloat(operationResults[n + 1]);
              subRes = (aSub - bSub).toFixed(2); 
              operationResults.splice(`${n - 1}`, 3, `${subRes}`);
              n = 0;
              console.log('after SUBTRACTION operation display says: ' + operationResults);
              console.log('SubtractionDONE');
            }
          }

          if (Number.isNaN(bDiv) === true || Number.isNaN(bAdd) === true || Number.isNaN(bAdd) === true || Number.isNaN(bSub) === true) {
            return;
          }

          console.log('HeyHeyPeople')
          sumAll = operationResults;
          commaState = true;
          operationDisplay.textContent = `${sumAll}`;
          operationDisplayCalc = `${sumAll}`;
          console.log('after ALL operations FINISHED display says: ' + operationResults);
          console.log('divide results is: ' + divideRes);
          console.log('multiply results is: ' + multiplyRes);
          console.log('final sum is: ' + sumAll);
          results.textContent = sumAll;
        } else if (clickedNrOp === 'DEL') {
          //del on display
          let operationDisplayDel = operationDisplay.textContent.split('');
          if (operationDisplayDel.length <= 1) {
            operationDisplayDel.splice(`${operationDisplayDel.length - 1}`, 1, '0');
          } else if (operationDisplayDel[operationDisplayDel.length - 1] === '.') {
            if (operationDisplayDel[operationDisplayDel.length - 2] === '0' && (operationDisplayDel[operationDisplayDel.length - 3] === '+' || operationDisplayDel[operationDisplayDel.length - 3] === '-' || operationDisplayDel[operationDisplayDel.length - 3] === '*' || operationDisplayDel[operationDisplayDel.length - 3] === '/')) {
              operationDisplayDel.splice(`${operationDisplayDel.length - 2}`, 2);
            } else if (operationDisplayDel[operationDisplayDel.length - 3] === undefined && operationDisplayDel.length === 2) {
              operationDisplayDel.splice(`${operationDisplayDel.length - 2}`, 2, '0');
              console.log('Zero begone!')
            } else {
              operationDisplayDel.splice(`${operationDisplayDel.length - 1}`, 1);
            }
          } else {
            operationDisplayDel.splice(`${operationDisplayDel.length - 1}`, 1);
            console.log('I ERASED COMMA!')
          };
          operationDisplay.textContent = operationDisplayDel.join('');
          console.log(operationDisplayDel);

          //del on real calc var
          let operationDisplayDel2 = operationDisplayCalc.split('');
          if (operationDisplayDel2[operationDisplayDel2.length - 1] === ' ') {
            if (operationDisplayDel2.includes('.') && operationDisplayDel2.lastIndexOf('.') > operationDisplayDel2.length - 7) {
              console.log('Shif comma state')
              commaState = true;  
            }
            operatorState = false;
            operationDisplayDel2.splice(`${operationDisplayDel2.length - 3}`, 3);
            console.log('operator deleted');
          } else if (operationDisplayDel2[operationDisplayDel2.length - 1] === '.' && commaState === true) {
            if (operationDisplayDel2[operationDisplayDel2.length - 2] === '0' && (operationDisplayDel2[operationDisplayDel2.length - 4] === '+' || operationDisplayDel2[operationDisplayDel2.length - 4] === '-' || operationDisplayDel2[operationDisplayDel2.length - 4] === '*' || operationDisplayDel2[operationDisplayDel2.length - 4] === '/' || operationDisplayDel2[operationDisplayDel2.length - 3] === undefined)) {
              if (operationDisplayDel2.length <= 2) {
                operationDisplayDel2.splice(`${operationDisplayDel2.length - 2}`, 2, '0');
                commaState = false;
                return;
              }
              operationDisplayDel2.splice(`${operationDisplayDel2.length - 2}`, 2);
              console.log('Zero point deleted')
              commaState = false;
            } else {
              operationDisplayDel2.splice(`${operationDisplayDel2.length - 1}`, 1);
              commaState = false;
            }
          } else if (operationDisplayDel2.length < 1) {
            operationDisplayDel2.splice(`${operationDisplayDel2.length - 1}`, 1, '0');
          } else if (operationDisplayDel2.length > 1) {            
            operationDisplayDel2.splice(`${operationDisplayDel2.length - 1}`, 1);
          }
          console.log(operationDisplayDel2);
          operationDisplayCalc = operationDisplayDel2.join('');
        } else if (clickedNrOp === 'C') {       
          operationDisplay.textContent = '0';
          operationDisplayCalc = '0';
          results.textContent = '0';
          console.log('I did C!')
        } else {          
          operationDisplay.textContent += `${clickedNrOp}`;
          operationDisplayCalc += `${clickedNrOp}`;
          operatorState = false;
        };
      };
    } else {
      buttons.style.backgroundColor = 'gray';
      buttons.style.border = '5px inset black';
      setTimeout(() => {
        if (buttons.style.backgroundColor = 'gray') {
          buttons.style.backgroundColor = 'white';
          buttons.style.border = '5px outset black';
        };
      }, 200)
    };
  });
});

window.addEventListener('keydown', (keys) => {
  document.querySelectorAll('button').forEach((buttons) => {
    let clickedNrOp = keys.key;
    if ((buttons.classList.contains('digitsOnly') && buttons.textContent === `${clickedNrOp}`) || (buttons.classList.contains('enterKey') && `${clickedNrOp}` === 'Enter') || (buttons.classList.contains('clearDisplay') && `${clickedNrOp}` === 'c') || (buttons.classList.contains('backspaceDelete') && `${clickedNrOp}` === 'Delete')) {
      console.log('THIS IS KEY OF KEYS: ' + clickedNrOp)

      if (clickedNrOp === keys.key ) {
        buttons.style.backgroundColor = 'gray';
        buttons.style.border = '5px inset black';
        setTimeout(() => {
          if (buttons.style.backgroundColor = 'gray') {
            buttons.style.backgroundColor = 'white';
            buttons.style.border = '5px outset black';
          };
        }, 200);
      }

      if (clickedNrOp === '0' && operationDisplay.textContent.length < 1) {        
        operationDisplay.textContent = `${clickedNrOp}`;
        operationDisplayCalc = `${clickedNrOp}`;
      } else if (clickedNrOp === '.' && operationDisplay.textContent.length === 1 && operationDisplay.textContent === '0') {
        operationDisplay.textContent = `0${clickedNrOp}`;
        operationDisplayCalc = `0${clickedNrOp}`;
        commaState = true;
        return;
      } else if ((clickedNrOp === '.') &&  (operationDisplay.textContent.endsWith('+') || operationDisplay.textContent.endsWith('-') || operationDisplay.textContent.endsWith('*') || operationDisplay.textContent.endsWith('/'))) {
        operationDisplay.textContent += `0${clickedNrOp}`;
        operationDisplayCalc += `0${clickedNrOp}`;
        commaState = true;
        return;
      } else if (clickedNrOp === '.' && commaState === true) {
        return;
      } else if ((clickedNrOp === '+' || clickedNrOp === '-' || clickedNrOp === '*' || clickedNrOp === '/') && operatorState === true) {
        console.log('HeyHeyPeople')
        return;
      } else if ((clickedNrOp === '+' || clickedNrOp === '-' || clickedNrOp === '*' || clickedNrOp === '/' || clickedNrOp === 'Enter' || clickedNrOp === 'Delete') && operationDisplay.textContent.length === 1 && operationDisplay.textContent === '0') {
        console.log('HeyHeyPeople!!!')
        return;
      } else {
        if (operationDisplay.textContent === '0' && clickedNrOp !== 'c') {
          operationDisplay.textContent = `${clickedNrOp}`;
          operationDisplayCalc = `${clickedNrOp}`;
          return;          
        } else if ((operationDisplay.textContent.endsWith('+') || operationDisplay.textContent.endsWith('-') || operationDisplay.textContent.endsWith('*') || operationDisplay.textContent.endsWith('/')) && clickedNrOp === '0') {
          return;
        } else if ((clickedNrOp === '+' || clickedNrOp === '-' || clickedNrOp === '*' || clickedNrOp === '/') && operatorState === false) {
          if (operationDisplay.textContent.endsWith('.')) {
            return;
          };
          operationDisplay.textContent += `${clickedNrOp}`;
          operationDisplayCalc += ` ${clickedNrOp} `;
          operatorState = true;
          commaState = false;
          return;
        } else if (clickedNrOp === '.') {
          operationDisplay.textContent += `${clickedNrOp}`;
          operationDisplayCalc += `${clickedNrOp}`;
          operatorState = true;
          commaState = true;  
          return;
        } else if (clickedNrOp === 'Enter') {          

          operationResults = operationDisplayCalc.split(' ');
          console.log('display says: ' + operationResults);

          for (let n = 0; n < operationResults.length - 1; n++) {
            if (operationResults[n] === '/') {
              if (divideRes > 0) {
                divideRes = 0;
                aDiv = 0;
                bDiv = 0;
                divideStatus = false;
              }
              aDiv = parseFloat(operationResults[n - 1]);
              bDiv = parseFloat(operationResults[n + 1]);              
              divideRes = (aDiv / bDiv).toFixed(2);
              divideStatus = true;  
              operationResults.splice(`${n - 1}`, 3, `${divideRes}`);
              n = 0;              
              console.log('after DIVIDE operation display says: ' + operationResults);
              console.log('DivideDONE');
            }
          }

          console.log('after DIVIDE operations FINISHED display says: ' + operationResults);

          
          for (let n = 0; n < operationResults.length - 1; n++) {
            if (operationResults[n] === '*') {
              if (multiplyRes > 0) {
                multiplyRes = 0;
                aMult = 0;
                bMult = 0;
                multiplyStatus = false;
              }
              aMult = parseFloat(operationResults[n - 1]);
              bMult = parseFloat(operationResults[n + 1]);
              multiplyRes = (aMult * bMult).toFixed(2);
              multiplyStatus = true;  
              operationResults.splice(`${n - 1}`, 3, `${multiplyRes}`);
              n = 0;
              console.log('after MULTIPLY operation display says: ' + operationResults);
              console.log('MutiplyDONE');
            }
          }

          console.log('after MULTIPLY operations FINISHED display says: ' + operationResults);

          for (let n = 0; n < operationResults.length - 1; n++) {
            if (operationResults[n] === '+') {              
              aAdd = parseFloat(operationResults[n - 1]);
              bAdd = parseFloat(operationResults[n + 1]);
              addRes = (aAdd + bAdd).toFixed(2); 
              operationResults.splice(`${n - 1}`, 3, `${addRes}`);
              n = 0;
              console.log('after ADDITION operation display says: ' + operationResults);
              console.log('AdditionDONE');
            } else if (operationResults[n] === '-') {
              aSub = parseFloat(operationResults[n - 1]);
              bSub = parseFloat(operationResults[n + 1]);
              subRes = (aSub - bSub).toFixed(2); 
              operationResults.splice(`${n - 1}`, 3, `${subRes}`);
              n = 0;
              console.log('after SUBTRACTION operation display says: ' + operationResults);
              console.log('SubtractionDONE');
            }
          }

          if (Number.isNaN(bDiv) === true || Number.isNaN(bAdd) === true || Number.isNaN(bAdd) === true || Number.isNaN(bSub) === true) {
            return;
          }

          console.log('HeyHeyPeople')
          sumAll = operationResults;
          commaState = true;
          operationDisplay.textContent = `${sumAll}`;
          operationDisplayCalc = `${sumAll}`;
          console.log('after ALL operations FINISHED display says: ' + operationResults);
          console.log('divide results is: ' + divideRes);
          console.log('multiply results is: ' + multiplyRes);
          console.log('final sum is: ' + sumAll);
          results.textContent = sumAll;
        } else if (clickedNrOp === 'Delete') {
          //del on display
          let operationDisplayDel = operationDisplay.textContent.split('');
          if (operationDisplayDel.length <= 1) {
            operationDisplayDel.splice(`${operationDisplayDel.length - 1}`, 1, '0');
          } else if (operationDisplayDel[operationDisplayDel.length - 1] === '.') {
            if (operationDisplayDel[operationDisplayDel.length - 2] === '0' && (operationDisplayDel[operationDisplayDel.length - 3] === '+' || operationDisplayDel[operationDisplayDel.length - 3] === '-' || operationDisplayDel[operationDisplayDel.length - 3] === '*' || operationDisplayDel[operationDisplayDel.length - 3] === '/')) {
              operationDisplayDel.splice(`${operationDisplayDel.length - 2}`, 2);
            } else if (operationDisplayDel[operationDisplayDel.length - 3] === undefined && operationDisplayDel.length === 2) {
              operationDisplayDel.splice(`${operationDisplayDel.length - 2}`, 2, '0');
              console.log('Zero begone!')
            } else {
              operationDisplayDel.splice(`${operationDisplayDel.length - 1}`, 1);
            }
          } else {
            operationDisplayDel.splice(`${operationDisplayDel.length - 1}`, 1);
          };
          operationDisplay.textContent = operationDisplayDel.join('');
          console.log(operationDisplayDel);

          //del on real calc var
          let operationDisplayDel2 = operationDisplayCalc.split('');
          if (operationDisplayDel2[operationDisplayDel2.length - 1] === ' ') {
            if (operationDisplayDel2.includes('.') && operationDisplayDel2.lastIndexOf('.') > operationDisplayDel2.length - 7) {
              console.log('Shif comma state')
              commaState = true;  
            }
            operatorState = false;
            operationDisplayDel2.splice(`${operationDisplayDel2.length - 3}`, 3);
            console.log('operator deleted');
          } else if (operationDisplayDel2[operationDisplayDel2.length - 1] === '.' && commaState === true) {
            if (operationDisplayDel2[operationDisplayDel2.length - 2] === '0' && (operationDisplayDel2[operationDisplayDel2.length - 4] === '+' || operationDisplayDel2[operationDisplayDel2.length - 4] === '-' || operationDisplayDel2[operationDisplayDel2.length - 4] === '*' || operationDisplayDel2[operationDisplayDel2.length - 4] === '/' || operationDisplayDel2[operationDisplayDel2.length - 3] === undefined)) {
              if (operationDisplayDel2.length <= 2) {
                operationDisplayDel2.splice(`${operationDisplayDel2.length - 2}`, 2, '0');
                commaState = false;
                return;
              }
              operationDisplayDel2.splice(`${operationDisplayDel2.length - 2}`, 2);
              console.log('Zero point deleted')
              commaState = false;
            } else {
              operationDisplayDel2.splice(`${operationDisplayDel2.length - 1}`, 1);
              commaState = false;
            }
          } else if (operationDisplayDel2.length < 1) {
            operationDisplayDel2.splice(`${operationDisplayDel2.length - 1}`, 1, '0');
          } else if (operationDisplayDel2.length > 1) {            
            operationDisplayDel2.splice(`${operationDisplayDel2.length - 1}`, 1);
          }
          console.log(operationDisplayDel2);
          operationDisplayCalc = operationDisplayDel2.join('');
        } else if (clickedNrOp === 'c') {       
          operationDisplay.textContent = '0';
          operationDisplayCalc = '0';
          results.textContent = '0';
          console.log('I did C!')
        } else {          
          operationDisplay.textContent += `${clickedNrOp}`;
          operationDisplayCalc += `${clickedNrOp}`;
          operatorState = false;
        };
      };
    };
  });
});

window.document.addEventListener('keydown', (e) => {
  console.log(e);
});