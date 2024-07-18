import Paths from "./routes/Path";
import { Autenticacao } from "./context/Autenticacao";

const App = () => {


  return ( 
    <>
      <Autenticacao>
          <Paths></Paths>
      </Autenticacao>
    </>
   );
}
 
export default App;