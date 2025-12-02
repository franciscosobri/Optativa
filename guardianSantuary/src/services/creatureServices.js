
const urlBase = 'http://localhost:3001/creatures'

const handleResponse = (response) => {
    if(!response.ok){
        throw new Error(`${response.status}`);
    }
    return response.json();
};

const handleError = (error) => {
    console.error(error);
    throw error;
};

export const getCreatures = () =>{
    return fetch(`${urlBase}`)
        .then(handleResponse)
        .catch(handleError);
};
