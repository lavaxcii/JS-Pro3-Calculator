// * START
// dissapear in pieces effect (html2canvas + disintegrate)
disintegrate.init();

document.getElementById('diss').addEventListener('click', e => {
  const disObj = disintegrate.getDisObj(e.target);
  disintegrate.createSimultaneousParticles(disObj);
  e.target.remove();
});

document.getElementById('diss2').addEventListener('click', e => {
  const disObj = disintegrate.getDisObj(e.target);
  disintegrate.createSimultaneousParticles(disObj);
  e.target.remove();
});

// * END