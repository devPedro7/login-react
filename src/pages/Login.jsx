import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-purple/theme.css";

import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import { useState } from "react";
import { useForm }  from "react-hook-form";       
import { useContext } from "react";
import { Context } from "../context/Autenticacao";
import { useNavigate } from "react-router-dom";

const Login = () => {

    //ADICIONANDO USESTATE PARA MOSTRAR E ESCONDER SENHA
    const [mostrarSenha, setMostrarSenha] = useState(false);

    //CRIAÇÃO DO HOOK-FORM PARA CAPTURAR OS DADOS DOS FORMULÁRIOS
    const {register, handleSubmit} = useForm();

            //CHAMANDO O CONTEXT
    const { setLogado } = useContext(Context);

            //CHAMANDO UM HOOK DE NAVEGAÇÃO DE PÁG - REACT ROUTER DOM
    const navigate = useNavigate();

    //FUNÇÃO QUE IRÁ RECEBER OS DADOS DO USUÁRIO
    function logar(dados){
        //PRINTA OS DADOS RECEBIDOS
        console.log(dados);

        if(dados.email == "ti.pedroribeiro@gmail.com" && dados.senha == "030721"){
            setLogado(true);
            navigate('/home');
        }
    }

    return ( 
        <>
            <div className=" bg-purple-200 h-screen flex align-items-center justify-content-center">
                <form className="col-12 md:col-3 bg-gray-50 p-3 border-round-md"
                      onSubmit={handleSubmit(logar)}>

                    <h2 className="text-center">Login React</h2>
                    <label className="block mb-2 text-sm font-bold uppercase" htmlFor="email">Email</label>
                    <InputText className="mb-3 w-full" id="email" type="email"
                               placeholder="email@gmail.com"
                              {...register('email', {required:true})}
                    ></InputText>

                    <label className="block mb-2 text-sm font-bold uppercase" htmlFor="senha">Senha</label>
                    <div className="mb-3">
                    <IconField >
                        <InputIcon onClick={()=> setMostrarSenha(!mostrarSenha)} 
                                   className={`pi ${mostrarSenha ? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`}> </InputIcon>

                        <InputText className="w-full" id="senha" 
                                   type={mostrarSenha ? 'text' : 'password'} 
                                   placeholder="**************" 
                                   {...register('senha', {required:true})}/>
                                    
                    </IconField>
                    </div>

                    <Button className="w-full" label="ENTRAR"></Button>
                    
                </form>
            </div>
        </>
     );
}
 
export default Login;