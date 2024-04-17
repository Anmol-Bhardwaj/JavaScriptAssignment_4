document.addEventListener('DOMContentLoaded', function() {
    const studentInfo = document.getElementById('studentInfo');
    studentInfo.textContent = 'NAME: Anmol Bhardwaj...Student ID: 200554109';
});

function loadCatImage() {
    const apiKey = 'live_jcVooFpvUbhM4U2SrGbMFN816L0A544YskZldrkzEHsDSkmxbJ98V73Gjyv0XMCr';
    const apiUrl = `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            const catImageContainer = document.getElementById('catImageContainer');
            catImageContainer.innerHTML = `<img src="${data[0].url}" alt="Cat picture">`;
        }
    })
    .catch(error => {
        console.error('Error fetching cat image:', error);
        alert('Failed to load cat image');
    });
}
