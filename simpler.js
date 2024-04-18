// simpler.js

document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars

    var dateTime = document.getElementById('dateTime').value.trim();
    var alternativeTime = document.getElementById('alternativeTime').value.trim();

    // Speichern der Daten im Local Storage
    localStorage.setItem('dateTime', dateTime);
    localStorage.setItem('alternativeTime', alternativeTime);

    alert('Daten wurden gespeichert!');

    // Optional: Weiterleitung oder andere Aktion nach dem Speichern der Daten
});
