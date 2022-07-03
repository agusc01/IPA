//it's working!
const pageTitle = $q('.page-title');
pageTitle.textContent = 'IPA!';
console.log(`${pageTitle.textContent}`);

//app.js
const areaWords = $q('.words');
const areaTranslation = $q('.translation');
const btnPotato = $q('.btn-potato');

const nothingToTranslate = `
  <div class="container-fluid vw-100">
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
  return text.split('\n').length;
};

// the magic starts from here

setHeightArea('4rem');

areaWords.addEventListener('keyup', (e) => {
  console.log(counterEnter(areaWords.value));
  areaWords.set;
});

btnPotato.addEventListener('click', (e) => {
  if (areaWords.value.length === 0) {
    $q('.alerts').innerHTML += nothingToTranslate;
    console.log('enter');
  }
});
