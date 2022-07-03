//it's working!
const pageTitle = $q('.page-title');
pageTitle.textContent = 'IPA!';
console.log(`${pageTitle.textContent}`);

//app.js
const areaWords = $q('.words');
const areaTranslation = $q('.translation');
const btnPotato = $q('.btn-potato');
const alerts = $q('.alerts');
const labelWordsAreas = $q('.label-words-area');
const defaultAreaHeight = 4;
const wordHeight = 1.4;
const maximunEnters = 10;

const nothingToTranslate = `
  <div class="container-fluid">
    <div class="alert alert-danger alert-dismissible fade show  ">
      <button type="button" class="btn-close btn-nothing-to-translate" data-bs-dismiss="alert"></button>
      <strong>Alert:</strong> There is nothing to translate
    </div>
  </div>
  `;

const setHeightArea = (heigh) => {
  areaWords.style.height = heigh;
  areaTranslation.style.height = heigh;
};

const counterEnter = (text) => {
  return text.split('\n').length - 1;
};

const updateAreaHeight = () => {
  let enters = counterEnter(areaWords.value);
  if (enters < maximunEnters) {
    setHeightArea(defaultAreaHeight + wordHeight * enters + 'rem');
    labelWordsAreas.style.display = 'block';
  } else {
    labelWordsAreas.style.display = 'none';
  }
};

// the magic starts from here

setHeightArea(defaultAreaHeight + 'rem');

areaWords.addEventListener('keyup', updateAreaHeight);
areaWords.addEventListener('keydown', updateAreaHeight);

btnPotato.addEventListener('click', (e) => {
  if (areaWords.value.length === 0) {
    alerts.innerHTML += nothingToTranslate;
  }
});
