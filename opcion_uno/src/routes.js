import React, { Fragment } from 'react'
// Importo la ruta
import {Route} from 'react-router-dom'
// Importo la vista
import HomeViewFormulario from './views/HomeViewFormulario'


export default function routes() {
    return (
        <Fragment>
            {/* Defino las rutas */}
            <Route path="/" exac component={HomeViewFormulario} />
        </Fragment>
    )    
}
