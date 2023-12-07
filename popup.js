document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez les éléments input et le bouton dans le DOM
  var inputText1 = document.getElementById("originalText");
  var inputText2 = document.getElementById("finalText");
  var calculateButton = document.getElementById("calculateButton");

  // Ajoutez des gestionnaires d'événements pour les changements dans les champs de saisie
  inputText1.addEventListener("input", recalculateCorrelation);
  inputText2.addEventListener("input", recalculateCorrelation);

  // Ajoutez un gestionnaire d'événements pour le bouton de calcul
  calculateButton.addEventListener("click", function () {
    recalculateCorrelation();
    copyResultToClipboard();
  });
});

function recalculateCorrelation() {
  // Obtenez les valeurs actuelles des champs de saisie
  var text1 = document.getElementById("originalText").value;
  var text2 = document.getElementById("finalText").value;

  // Appelez la fonction pour recalculer le pourcentage de corrélation
  var correlationPercentage = calculatePercentage(text1, text2);

  // Mettez à jour l'affichage du résultat
  document.getElementById("result").innerHTML =
    "#GPTSyncScore: " + correlationPercentage + "%";
}

function calculatePercentage(text1, text2) {
  var words1 = getWords(text1);
  var words2 = getWords(text2);

  var commonWords = words1.filter((word) => words2.includes(word));
  var percentage;

  if (words1.length === 0 && words2.length === 0) {
    // Les deux champs sont vides, donc 0%
    percentage = 0;
  } else {
    // Calculer le pourcentage en tenant compte du nombre de mots communs
    var totalUniqueWords = new Set([...words1, ...words2]).size;
    percentage = (commonWords.length / totalUniqueWords) * 100;
  }

  return percentage.toFixed(2);
}

function getWords(text) {
  // Diviser le texte en mots sans tenir compte des espaces
  return text
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 0);
}

function copyResultToClipboard() {
  // Sélectionnez le résultat
  var resultElement = document.getElementById("result");
  var resultText = resultElement.textContent || resultElement.innerText;

  // Créez un élément temporaire de texte de formulaire pour copier le texte dans le presse-papiers
  var tempInput = document.createElement("textarea");
  tempInput.value = resultText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}
