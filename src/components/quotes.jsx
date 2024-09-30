import React from 'react'

const url = 'https://motivation-quotes-api.p.rapidapi.com/api/quotes';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'bf455455c1msh8ccbf8fc5cd4b8fp143900jsnbe9cd1f8e4f9',
		'x-rapidapi-host': 'motivation-quotes-api.p.rapidapi.com'
	}
};

const quats = () => {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
  return (
    <div>
      
    </div>
  )
}

export default quats
