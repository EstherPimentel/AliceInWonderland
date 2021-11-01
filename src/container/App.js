import '../styles/App.css'
import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';
import rainha1 from "../img/rainha1.com.png"
import rainha2 from "../img/rainha2.com.png"
import cheshire from "../img/cheshire.com.png"

function App() {
  return (
    <div className="App">
      
      <div class= "gato">
        <img id= "cheshire" src={cheshire} alt=""/>
      </div>   

      <div class= "body">
        <h3>Convidado:</h3>
        <ClassComponent nome="Alice, por ser uma novidade no País das Maravilhas, " estaNaLista={true} />
        <ClassComponent nome="O Gato de Cheshire teve a cabeça cortada, portanto, " estaNaLista={false} />
        <ClassComponent nome="Sr. Coelho, embora esteja muito atrasado, " estaNaLista={true} />
        <h3>Tarefas: </h3>
        <FunctionComponent nome="Alice" tarefa="o Chapeleiro com quem fez amizade na hora do chá;" />
        <FunctionComponent nome="Sr. Coelho" tarefa="a Lebre de Março que tem a cabeça nas nuvens;" />
        <FunctionComponent nome="A Rainha de Copas" tarefa="seus guardas para... bem, cortar algumas cabeças." />
        
        <div class= "rainhas">
          <img id="rainha1" src={rainha1} alt=""/>
          <img id="rainha2" src={rainha2} alt=""/>
        </div>
      
      </div>
      
    </div>
  );
}

export default App;
