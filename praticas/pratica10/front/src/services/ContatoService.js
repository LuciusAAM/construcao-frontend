import axios from "axios";

const url = import.meta.env.API_URL;

function buscarTodos( ) {
    return axios.get(url)
    .then((response) => {return { sucesso: true, dados: response.data };})
    .catch((error) => {});

}