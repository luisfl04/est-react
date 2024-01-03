// Componentes aninhados:
function Title() {
    return (
        <h1>I am a title</h1>
    )
}

export default function Titles() {
    return (
        <div>
            <Title />
            <h2>I am a second title </h2>
        </div>
    )
}

// exibindo dados de variáveis JS:
let name = "Amélio"
let LocalImage = "img/manelgome.jpg"

function Example1() {
    return (
        <h1> My name is {name}</h1>,
        <img src = {LocalImage}/>
        )
}

// Usando variáveis para adicionar estilo:
let color_image = "green"

function Example2 () {
    return (
        <img src={LocalImage}
        style={{
            color: color_image
        }}
        />
    )
}
// Renderizando condicionais:


function Example3() {

    let valor_de_exemplo_condiconal = 7;
    let renderizacao_de_valor;

    if (valor_de_exemplo_condicional > 4) {
        renderizacao_de_valor = "True"
    }
    else {
        renderizacao_de_valor  = "False"
    }
    return (
        {renderizacao_de_valor}
    )
    // Operador ternal:
    return (
        <div>
            {valor_de_exemplo_condicional > 7 ? (
                renderizacao_de_valor = "True"   
            ): (
                renderizacao_de_valor = "False"
            )} 
        </div>
    )
    // Casos em que não se usará else:
    return (
        <div>
            {valor_de_exemplo_condiconal > 6 && renderizacao_de_valor}
        </div>
    )

}

// Renderizando listas de dados:

const HierarquiaFlamengo = [
    {nome: "Zico", id: 1 },
    {nome: "Bebeto", id:2},
    {nome:"Renato Abreu", id:3},
]
// Criando componente para renderizar elementos:
function Example4() {
    const ListaDeHierarquia = HierarquiaFlamengo.map(Hierarquia =>
        <li key = {Hierarquia.id}>
            {Hierarquia.nome}
        </li>
        )
    return (
        <ul>{ListaDeHierarquia}</ul>
    )
}
// exibindo lista e dando cores diferentes a partir de booleano:
const Products = [
    {title: "Carbbage", IsFruit: false, id: 1 },
    {title: "Garlic", IsFruit:false, id:2},
    {title:"Apple", IsFruit:true, id:3},
    {title:"Tomato", IsFruit: false, id:4},
    {title:"Watermelon", IsFruit:true, id:5}, 
]

function Example5() {
    const ListOfProducts = Products.map(Prod =>
        <li
        key = {Prod.id}
        style = {{
            color: Prod.IsFruit ? "magenta"
            :
            "darkgreen"
        }}
        >
            {Prod.title}
        </li>
        )
    return (
        {ListOfProducts}
    )
}

// //  Componentes com "manipuladores de eventos":
function Example6() {
    function HandleClick(){
        alert("You clicked in the button!")
    }
    return (
        <button onClick = {HandleClick}>
            Click here

        </button>
    )
}

// Componentes com "estado":
import { useState } from "react"; // importação necessária;
// Criando componente:
function Example7() {
    const [Count, setCount] = useState(0);

    function HandleClick() {
        setCount(Count + 1);
    }
    return (
        <button onClick={HandleClick}>
            You clicked {Count} times!
        </button>
    )
}
// criação com dois botões e em componentes separados:
function Example8() {
    return (
        <div>
            <h1>Counters that update separately</h1>
            <MyButton />
            <MyButton />
        </div>
    )
}
// criando componente que dará interação ao botões:
function MyButton([ count, onClick]) {
    return (
        <button onClick={onClick}>
            You clicked {count} times!
        </button>
    )
}

// Fazendo com que todos os "MyButton"´s alterem simultâneamente com um único clique:
function Example9() {
    const [Count, setCount] = useState(0);
    
    function HandleClick() {
        setCount(Count + 1);
    }
    return (
        <div>
            <h1>Counters that update separately</h1>
            <MyButton count = {Count} onClick = {HandleClick} />
            <MyButton count = {Count} onClick = {HandleClick} />
        </div>
    );
}