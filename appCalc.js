// dissapear in pieces effect (html2canvas + disintegrate)
disintegrate.init();
function boom() {
  const dBody = document.querySelector('.containerDiv');
  const aBody = document.querySelector('.animationBody');
  const cBody = document.querySelector('.calculatorBody');
  console.log(dBody.style.backgroundColor);
  if (dBody.style.backgroundColor === 'inherit') {
    return;
  };
  const disObj = disintegrate.getDisObj(aBody);
  disintegrate.createSimultaneousParticles(disObj);
  const disObj2 = disintegrate.getDisObj(cBody);
  disintegrate.createSimultaneousParticles(disObj2);
  aBody.style.opacity = '0%';
  cBody.style.opacity = '0%';
  dBody.style.backgroundColor = 'inherit';
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
  containerDiv.style.backgroundColor = 'yellowgreen';
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

// power up calc (= outline calc in radiant yellow and enable calc functionality)
const upperLeftBorder = document.querySelector('.upperLeftBorder');
const upperRightBorder = document.querySelector('.upperRightBorder');
const lowerLeftBorder = document.querySelector('.lowerLeftBorder');
const lowerRightBorder = document.querySelector('.lowerRightBorder');
const aBody = document.querySelector('.animationBody');

function powerOn() {
  upperLeftBorder.style.borderTop = '10px solid yellow';
  upperLeftBorder.addEventListener('transitionend', () => {
    upperRightBorder.style.borderTop = '10px solid yellow'; 
    upperRightBorder.addEventListener('transitionend', () => {
      upperRightBorder.style.borderRight = '10px solid yellow';
      upperRightBorder.addEventListener('transitionend', () => {
        lowerRightBorder.style.borderRight = '10px solid yellow';
        lowerRightBorder.addEventListener('transitionend', () => {
          lowerRightBorder.style.borderBottom = '10px solid yellow';
          lowerRightBorder.addEventListener('transitionend', () => {
            lowerLeftBorder.style.borderBottom = '10px solid yellow';
            aBody.style.boxShadow = '0px 0px 100px 5px yellow';
            aBody.classList.add('powerOnC');
          });
        });
      });
    });
  });
};

document.querySelector('.powerUpCalc2').addEventListener('click', powerOn);

function powerOff() {
  upperLeftBorder.style.borderTop = '10px solid gray';
  upperLeftBorder.addEventListener('transitionend', () => {
    upperRightBorder.style.borderTop = '10px solid gray';
    upperRightBorder.addEventListener('transitionend', () => {
      upperRightBorder.style.borderRight = '10px solid gray';
      upperRightBorder.addEventListener('transitionend', () => {
        lowerRightBorder.style.borderRight = '10px solid gray';
        lowerRightBorder.addEventListener('transitionend', () => {
          lowerRightBorder.style.borderBottom = '10px solid gray';
          lowerRightBorder.addEventListener('transitionend', () => {
            lowerLeftBorder.style.borderBottom = '10px solid gray';
            aBody.classList.remove('powerOnC');
            aBody.style.boxShadow = 'none';
          });
        });
      });
    });
  });
};

document.querySelector('.powerOffCalc').addEventListener('click', powerOff);