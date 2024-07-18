import { createContext, useState } from "react";

// CRIANDO O CONTEXTO - hook de contexto
export const Context = createContext();

export const Autenticacao = ({children}) => {
    const [logado, setLogado] = useState(false);

    return ( 
        <>
            <Context.Provider value={{logado, setLogado}}>
                {children}
            </Context.Provider>
        </>
     );
}
