// dissapear in pieces effect (html2canvas + disintegrate)
disintegrate.init();
function boom() {
  const dBody = document.querySelector('.containerDiv');
  const aBody = document.querySelector('.animationBody');
  const cBody = document.querySelector('.calculatorBody');
  console.log(dBody.style.backgroundColor);
  if (dBody.style.backgroundImage === 'none') {
    return;
  };
  const disObj = disintegrate.getDisObj(aBody);
  disintegrate.createSimultaneousParticles(disObj);
  const disObj2 = disintegrate.getDisObj(cBody);
  disintegrate.createSimultaneousParticles(disObj2);
  aBody.style.opacity = '0%';
  cBody.style.opacity = '0%';
  dBody.style.backgroundImage = 'none';
};

document.querySelector('.dissCalc').addEventListener('click', boom); 

// calculator reappear
document.querySelector('.nC').addEventListener('click', () => {
  const aBody = document.querySelector('.animationBody');
  const cBody = document.querySelector('.calculatorBody');
  const containerDiv = document.querySelector('.containerDiv');
  if (aBody.classList.contains('powerOnC')) {
    aBody.style.boxShadow = '0px 0px 100px 5px yellow';
  };
  aBody.style.opacity = '100%';
  cBody.style.opacity = '100%';
  containerDiv.style.backgroundImage = 'linear-gradient(100deg, #555555, rgb(0, 0, 0))';
});

// upsize calc
document.querySelector('.upszC').addEventListener('click', () => {
  const aBody = document.querySelector('.animationBody');
  const cBody = document.querySelector('.calculatorBody');
  const dBody = document.querySelector('.digits');
  console.log(`When UPSIZING: ${aBody.offsetHeight}`);
  if (aBody.offsetHeight > 360) {
    if (aBody.offsetHeight > 510) {
      document.querySelector('#pResult').style.fontSize = '1.5rem';
      document.querySelector('#pDisplay').style.fontSize = '2rem';
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

});

// downsize calc
document.querySelector('.dwnszC').addEventListener('click', () => {
  const aBody = document.querySelector('.animationBody');
  const cBody = document.querySelector('.calculatorBody');
  const dBody = document.querySelector('.digits');
  console.log(`When DOWNSIZING: ${aBody.offsetHeight}`);
  if (aBody.offsetHeight < 450) {
    if (aBody.offsetHeight < 380) {
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

});

// rnd calc outline
const upperLeftBorder = document.querySelector('.upperLeftBorder');
const upperRightBorder = document.querySelector('.upperRightBorder');
const lowerLeftBorder = document.querySelector('.lowerLeftBorder');
const lowerRightBorder = document.querySelector('.lowerRightBorder');
const aBody = document.querySelector('.animationBody');
const display = document.querySelector('.display');

function rndCalcOutline() {
  if (aBody.classList.contains('powerOnC')) {
    function rgbRng() {
      let randomRgbNr = Math.floor(Math.random() * 255) + 0;
      return randomRgbNr;
    };
    let rgb1 = rgbRng();
    let rgb2 = rgbRng();
    let rgb3 = rgbRng();
  
    upperLeftBorder.style.borderTop = `10px solid rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    upperRightBorder.style.borderTop = `10px solid rgb(${rgb1}, ${rgb2}, ${rgb3})`; 
    upperRightBorder.style.borderRight = `10px solid rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    lowerRightBorder.style.borderRight = `10px solid rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    lowerRightBorder.style.borderBottom = `10px solid rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    lowerLeftBorder.style.borderBottom = `10px solid rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    aBody.style.boxShadow = `0px 0px 100px 8px rgb(${rgb1}, ${rgb2}, ${rgb3}`;
    return;
  };
};

document.querySelector('.rndColorOutline').addEventListener('click', rndCalcOutline);

// power up calc (= outline calc in radiant yellow and enable calc functionality)
function powerOnOff() {
  console.log(aBody.classList);
  if (aBody.classList.contains('powerOnC')) {
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
        aBody.style.boxShadow = '0px 0px 100px 8px yellow';
        display.style.backgroundImage = 'linear-gradient(100deg, rgb(175, 175, 175), #ffffff)';
      }, 1200)
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
  } else {
    display.style.fontFamily = 'Press Start 2P';
  };
};

document.querySelector('.fontChange').addEventListener('click', fontSwap);