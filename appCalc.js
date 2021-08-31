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
  // scatterButtons();
  const disObj = disintegrate.getDisObj(aBody);
  disintegrate.createSimultaneousParticles(disObj);
  const disObj2 = disintegrate.getDisObj(cBody);
  disintegrate.createSimultaneousParticles(disObj2);
  aBody.style.opacity = '0%';
  cBody.style.opacity = '0%';
  dBody.style.backgroundImage = 'none';
};

document.querySelector('.dissCalc').addEventListener('click', boom);

const ehem = document.querySelector('.ehem');
document.querySelector('.dissCalc').addEventListener('mouseenter', () => {
  ehem.play();
});

// calculator reappear
const whistleReborn = document.querySelector('.whistleReborn');
document.querySelector('.nC').addEventListener('click', () => {
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
});

// upsize calc
const wDrop = document.querySelector('.wDrop');
const yawn = document.querySelector('.yawn');
const wow = document.querySelector('.wow');
document.querySelector('.upszC').addEventListener('click', () => {
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
});

// downsize calc
document.querySelector('.dwnszC').addEventListener('click', () => {
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
});

// rnd calc outline
const upperLeftBorder = document.querySelector('.upperLeftBorder');
const upperRightBorder = document.querySelector('.upperRightBorder');
const lowerLeftBorder = document.querySelector('.lowerLeftBorder');
const lowerRightBorder = document.querySelector('.lowerRightBorder');
const aBody = document.querySelector('.animationBody');
const display = document.querySelector('.display');
const powerUpSound = document.querySelector('.powerUpSound');
const powerUpVoice = document.querySelector('.powerUpVoice');
const cDrop = document.querySelector('.cDrop');
const buttonImage = document.querySelector('.fa-border-style');

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
        display.style.backgroundImage = 'linear-gradient(100deg, rgb(0, 0, 0), #000000)';
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
        display.style.backgroundImage = 'linear-gradient(100deg, rgb(175, 175, 175), #ffffff)';
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

document.querySelector('.pageBackgroundToggl').addEventListener('click', () => {
  if (n >= 0) {
    bodyBody.style.backgroundImage = `url("${gallery[n]}"), linear-gradient(100deg, #555555, rgb(0, 0, 0))`;
    cDrop.play();
    n++;
    if (n === gallery.length) {
      n = 0;
    };
  };
});

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

function playMusic() {
  const pauseB = document.querySelector('.fa-pause');
  const playB = document.querySelector('.fa-play');
  let c = 0;
  document.querySelector('.previous').addEventListener('click', () => {
    if (musicArr[c].paused === false) {
      musicArr[c].pause();
    };
    if (c <= 0) {
      c = musicArr.length - 1;
      musicArr[c].play();
      playB.style.opacity = '0%';
      pauseB.style.opacity = '100%';
      return;
    };
    c--
    musicArr[c].play();
    playB.style.opacity = '0%';
    pauseB.style.opacity = '100%';
  });
  document.querySelector('.next').addEventListener('click', () => {
    if (musicArr[c].paused === false) {
      musicArr[c].pause();
    };
    if (c >= musicArr.length - 1) {
      c = 0;
      musicArr[c].play();
      playB.style.opacity = '0%';
      pauseB.style.opacity = '100%';
      return;
    };
    c++
    musicArr[c].play();
    playB.style.opacity = '0%';
    pauseB.style.opacity = '100%';
  });
  document.querySelector('.playStop').addEventListener('click', () => {
    if (musicArr[c].paused === false) {
      musicArr[c].pause();
      playB.style.opacity = '100%';
      pauseB.style.opacity = '0%';
      return;
    };
    musicArr[c].play();
    playB.style.opacity = '0%';
    pauseB.style.opacity = '100%';
  });
  document.querySelector('.random').addEventListener('click', () => {
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
  });
};
playMusic();

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
// spookyGiggle();

// digits click and key support
const results = document.querySelector('#pResult');
let operationDisplay = document.querySelector('#pDisplay');
console.log(operationDisplay)

document.querySelectorAll('button').forEach((buttons) => {
  buttons.addEventListener('click', (e) => { 
    // if (buttons.classList.contains('enterKey')) {

    // }
    clickedNrOp = e.target;
    if (operationDisplay.textContent === '0') {
      operationDisplay.textContent = `${clickedNrOp.textContent}`;
      return;
    };
    operationDisplay.textContent += `${clickedNrOp.textContent}`;
    buttons.style.backgroundColor = 'gray';
    buttons.style.border = '5px inset black';
    // results.textContent = `${e.key}`
    setTimeout(() => {
      if (buttons.style.backgroundColor = 'gray') {
        buttons.style.backgroundColor = 'white';
        buttons.style.border = '5px outset black';
      };
    }, 200)
  })
});

window.addEventListener('keydown', (keys) => {
  document.querySelectorAll('button').forEach((buttons) => {
    if (buttons.classList.contains('digitsOnly')) {
      function visibleKeyPress() {
        buttons.style.backgroundColor = 'gray';
        buttons.style.border = '5px inset black';
        setTimeout(() => {
          if (buttons.style.backgroundColor = 'gray') {
            buttons.style.backgroundColor = 'white';
            buttons.style.border = '5px outset black';
          };
        }, 200);
      }
      if (keys.key === '1' && buttons.classList.contains('nrOne')) {
        visibleKeyPress();
      } else if (keys.key === '2' && buttons.classList.contains('nrTwo')) {
        visibleKeyPress();
      } else if (keys.key === '3' && buttons.classList.contains('nrThree')) {
        visibleKeyPress();
      } else if (keys.key === '4' && buttons.classList.contains('nrFour')) {
        visibleKeyPress();
      } else if (keys.key === '5' && buttons.classList.contains('nrFive')) {
        visibleKeyPress();
      } else if (keys.key === '6' && buttons.classList.contains('nrSix')) {
        visibleKeyPress();
      } else if (keys.key === '7' && buttons.classList.contains('nrSeven')) {
        visibleKeyPress();
      } else if (keys.key === '8' && buttons.classList.contains('nrEight')) {
        visibleKeyPress();
      } else if (keys.key === '9' && buttons.classList.contains('nrNine')) {
        visibleKeyPress();
      }  else if (keys.key === '0' && buttons.classList.contains('nrZero')) {
        visibleKeyPress();
      }  else if (keys.key === '+' && buttons.classList.contains('syPlus')) {
        visibleKeyPress();
      }  else if (keys.key === '-' && buttons.classList.contains('syMinus')) {
        visibleKeyPress();
      }  else if (keys.key === '*' && buttons.classList.contains('syMultiply')) {
        visibleKeyPress();
      }  else if (keys.key === '/' && buttons.classList.contains('syDivide')) {
        visibleKeyPress();
      }  else if (keys.key === '.' && buttons.classList.contains('enterKeyCousin')) {
        visibleKeyPress();
      } else if (keys.key === 'Enter' && buttons.classList.contains('enterKey')) {
        visibleKeyPress();
      } else if (keys.key === 'Delete' && buttons.classList.contains('backspaceDelete')) {
        visibleKeyPress();
      } else if (keys.key === 'Backspace' && buttons.classList.contains('clearDisplay')) {
        visibleKeyPress();
      };
    };
  });
});

window.document.addEventListener('keydown', (e) => {
  console.log(e);
});

/*
//* FIRST SET OF DOs
0 intro split screen?
*1 icons for user options
*2 icons for music player
*3 make buttons round and cozy for uo and mp
  *3.1 add color differentiation static, and when clicked
*4 make on click effect (da izgleda kao da si udubio dugme i mogao bi dodati da bude iz outseta u inset!)
*5 polish music player logic (ima novih sfx i onda ne hvata muziku)
//* SECOND SET OF DOs
1 calculator logic
  1.1 clicking digits makes real input
2 keyboard supports
  *2.1 make keys clickalble
  2.2 make keys give real input
*/

