import axios from 'axios'

const URL = "https://600f6a6f6c21e1001704eaf3.mockapi.io/Formulario"

const nuevoUsuario = async (objUsuario) => {
    try {
        let headers = {
          "Content-Type":"application/json"
        }//axios.post(URL, datos_a_enviar_json, {headers})
        let {data} = await axios.post(URL, objUsuario, {headers})
        return data.content
      } catch (error) {
        return error
      }
    }


    export {
        nuevoUsuario
    }

