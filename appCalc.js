// * START
// dissapear in pieces effect (html2canvas + disintegrate)

disintegrate.init();
function boom() {
  const aBody = document.querySelector('.animationBody');
  const disObj = disintegrate.getDisObj(aBody);
  disintegrate.createSimultaneousParticles(disObj);
  const cBody = document.querySelector('.calculatorBody');
  const disObj2 = disintegrate.getDisObj(cBody);
  disintegrate.createSimultaneousParticles(disObj2);
  aBody.remove();
  cBody.remove();
};

// * END

document.querySelector('.dissCalc').addEventListener('click', boom); 