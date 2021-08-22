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
    if (aBody.offsetHeight > 540) {
      return;
    };
    document.querySelector('#pResult').style.marginTop = '13px';
    document.querySelector('#pResult').style.marginBottom = '13px';
    document.querySelector('#pDisplay').style.marginTop = '21px';
    document.querySelector('#pDisplay').style.marginBottom = '21px';
    document.querySelector('.digits').style.marginBottom = '35px';
    if (aBody.offsetHeight > 370) {
    document.querySelector('.digits').style.marginBottom = '0px';
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
  if (aBody.offsetHeight < 430) {
    if (aBody.offsetHeight < 380) {
      return;
    };    
    document.querySelector('#pResult').style.marginTop = '3px';
    document.querySelector('#pResult').style.marginBottom = '3px';
    document.querySelector('#pDisplay').style.marginTop = '3px';
    document.querySelector('#pDisplay').style.marginBottom = '3px';
    document.querySelector('.digits').style.marginBottom = '55px';
    if (aBody.offsetHeight < 400) {
    document.querySelector('.digits').style.marginBottom = '75px';
    };
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

