import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-purple/theme.css";

import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import { useState } from "react";
        

const Login = () => {

    //ADICIONANDO USESTATE PARA MOSTRAR E ESCONDER SENHA
    const [mostrarSenha, setMostrarSenha] = useState(false);

    return ( 
        <>
            <div className=" bg-purple-200 h-screen flex align-items-center justify-content-center">
                <form className="col-12 md:col-3 bg-gray-50 p-3 border-round-md">
                    <h2 className="text-center">Login React</h2>
                    <label className="block mb-2 text-sm font-bold uppercase" htmlFor="email">Email</label>
                    <InputText className="mb-3 w-full" id="email" type="email" placeholder="email@gmail.com"></InputText>

                    <label className="block mb-2 text-sm font-bold uppercase" htmlFor="senha">Senha</label>
                    <div className="mb-3">
                    <IconField >
                        <InputIcon onClick={()=> setMostrarSenha(!mostrarSenha)} 
                                   className={`pi ${mostrarSenha ? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`}> </InputIcon>

                        <InputText className="w-full" id="senha" 
                                   type={mostrarSenha ? 'text' : 'password'} 
                                   placeholder="**************" />
                    </IconField>
                    </div>

                    <Button className="w-full" label="ENTRAR"></Button>
                    
                </form>
            </div>
        </>
     );
}
 
export default Login;