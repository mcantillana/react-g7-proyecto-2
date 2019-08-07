import axios from 'axios';

export const getCharacters = async url => 
    await axios.get(url);


// #characters
// nombre
// status
// especie
// genero
// imagen