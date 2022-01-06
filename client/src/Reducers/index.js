const initialState = {
    videogames: [],
    videogamesTotal: [],
    genres: [],
    detalleVideogames: []
}


function rootReducer (state = initialState, action) {
   switch (action.type) {
       case 'GET_VIDEOGAMES':
        return {
         ...state, videogames: action.payload,
         videogamesTotal: action.payload
       }
       case 'ORDENAR_POR_NOMBRE':
        const ordenar = action.payload === 'asc'?
        [...state.videogamesTotal].sort((a,b) => {
          if (a.name > b.name) { return 1 }
          if (b.name > a.name) { return -1 }
          return 0;
        }):
        [...state.videogamesTotal].sort((a,b) => {
          if (a.name > b.name) { return -1 }
          if (b.name > a.name) { return 1 }
          return 0;
        })
        return {
          ...state, 
          videogamesTotal: ordenar
        }
        case 'FILTRADO_BD':
          const filtroCreado = action.payload === 'Db' ?
          [...state.videogames].filter(a => a.createDb === true):
          [...state.videogames].filter(a => !a.createDb); 
          return {
              ...state,
              videogamesTotal: filtroCreado
          }
        case 'FILTRADO_RT':
          const filtroRt = action.payload === 'Mini' ?
          [...state.videogamesTotal].sort((a,b) => a.rating-b.rating):
          [...state.videogamesTotal].sort((a,b) => b.rating-a.rating)
          return {
            ...state,
            videogamesTotal: filtroRt
        }
        case 'GET_GENRE_FILTRADO': 
          return {
            ...state,
            videogamesTotal: action.payload 
          }
        case 'GET_GENRE_LIST':
          return {
            ...state,
            genres: action.payload 
          }
        case 'GET_DETALLE':
          return {
            ...state,
            detalleVideogames: action.payload
          }
        case 'POST_VIDEOGAME':
          return {
            ...state
          }
        case 'GET_VIDEOGAMES_BY_NAME':
            return {
                ...state,
                videogamesTotal: action.payload,
            }

       default: return state
   } 
}


export default rootReducer;