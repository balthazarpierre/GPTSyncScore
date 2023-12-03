document.addEventListener("DOMContentLoaded", function () {
  var calculateButton = document.getElementById("calculateButton");
  calculateButton.addEventListener("click", function () {
    calculateCorrelation();
  });
});

function calculateCorrelation() {
  var text1 = document.getElementById("text1").value;
  var text2 = document.getElementById("text2").value;

  // Fonction pour diviser le texte en mots et les convertir en minuscules
  function getWords(text) {
    return text.toLowerCase().match(/\b\w+\b/g) || [];
  }

  // Obtenir la liste des mots pour chaque texte
  var words1 = getWords(text1);
  var words2 = getWords(text2);

  // Obtenir le nombre de mots identiques
  var commonWords = words1.filter((word) => words2.includes(word));

  // Calculer le pourcentage de corrélation
  var correlationPercentage =
    (commonWords.length / Math.max(words1.length, words2.length)) * 100;

  // Afficher le résultat
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML =
    "Correlation Percentage: " + correlationPercentage.toFixed(2) + "%";
}
