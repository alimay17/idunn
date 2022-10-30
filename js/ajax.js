/*============================================
=         JS for AJAX - Week 07              =
= Original Author: Darren Jones              =
= Customized: Alice Smith                    =
=============================================*/

const cricketButton = document.getElementById('cricket');
const outputDiv = document.getElementById('output');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a28c9f371dmsh5d7b4dc354ec0c2p1be43fjsn397ad3f9cce4',
		'X-RapidAPI-Host': 'cricket-facts-api.p.rapidapi.com'
	}
};
const cricketUrl = 'https://cricket-facts-api.p.rapidapi.com/facts/random'

cricketButton.addEventListener('click', () => {
  fetch(cricketUrl, options)
    .then(response => {
      outputDiv.innerHTML = 'Waiting for response...';
      if (response.ok) {
        return response;
      }
      throw Error(response.statusText);
    })
    .then(response => response.json())
    .then(data => outputDiv.innerText = data.id)
    .catch(error => console.log('There was an error:', error))
}, false);