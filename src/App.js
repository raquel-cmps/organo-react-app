import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useEffect, useState } from "react";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import { v4 as uuidv4 } from 'uuid';

function App() {

    /*
    const [times, setTimes] = useState([
        {
            id: uuidv4(),
            nome: 'Programação',
            cor: '#57C278'
        },
        {
            id: uuidv4(),
            nome: 'Front-End',
            cor: '#82CFFA'
        },
        {
            id: uuidv4(),
            nome: 'Data Science',
            cor: '#A6D157'
        },
        {
            id: uuidv4(),
            nome: 'Devops',
            cor: '#E06B69'
        },
        {
            id: uuidv4(),
            nome: 'UX e Design',
            cor: '#DB6EBF'
        },
        {
            id: uuidv4(),
            nome: 'Mobile',
            cor: '#FFBA05'
        },
        {
            id: uuidv4(),
            nome: 'Inovação e Gestão',
            cor: '#FF8A29'
        },
    ])
    const inicial = [
        {
            id: uuidv4(),
            favorito: false,
            nome: 'JULIANA AMOASEI',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[0].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'DANIEL ARTINE',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[0].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'GUILHERME LIMA',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[0].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'PAULO SILVEIRA',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[0].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'JULIANA AMOASEI',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[1].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'DANIEL ARTINE',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[1].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'GUILHERME LIMA',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[1].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'PAULO SILVEIRA',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[1].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'JULIANA AMOASEI',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[2].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'DANIEL ARTINE',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[2].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'GUILHERME LIMA',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[2].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'PAULO SILVEIRA',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[2].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'JULIANA AMOASEI',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[3].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'DANIEL ARTINE',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[3].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'GUILHERME LIMA',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[3].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'PAULO SILVEIRA',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[3].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'JULIANA AMOASEI',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[4].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'DANIEL ARTINE',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[4].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'GUILHERME LIMA',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[4].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'PAULO SILVEIRA',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[4].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'JULIANA AMOASEI',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[5].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'DANIEL ARTINE',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[5].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'GUILHERME LIMA',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[5].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'PAULO SILVEIRA',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[5].nome
        },
    ]
    */

    const [times, setTimes] = useState([
        {
            id: uuidv4(),
            nome: '',
            cor: ''
        }
    ])
    const [colaboradores, setColaboradores] = useState([
        {
            id: uuidv4(),
            nome: '',
            favorito: false,
            cargo: '',
            imagem: '',
            time: { id: '', nome: '', cor: '' }
        }
    ])

    useEffect(() => {
        fetch('http://localhost:8080/times')
            .then(resposta => resposta.json())
            .then(dados => {
                setTimes(dados)
            })
    }, []) // o react vai execultar apenas uma vez po conta do array vazio

    useEffect(() => {
        fetch('http://localhost:8080/colaboradores')
            .then(resposta => resposta.json())
            .then(dados => {
                setColaboradores(dados)
            })
    }, [])
    /*
    useEffect(() => {
        console.log(colaboradores);
    }, [colaboradores]);
    */
    const aoNovoCalaboradorAdicionado = (colaborador) => {
        console.log("Colaborador recebido:", colaborador);
        console.log("Times disponíveis:", times);

        let obj = {
            id: uuidv4(),
            favorito: false,
            nome: colaborador.nome,
            cargo: colaborador.cargo,
            imagem: colaborador.imagem,
            time: times.find(time => time.nome === colaborador.time)
        };

        if (!obj.time) {
            console.error("Time não encontrado para o ID:", colaborador.time);
            return; // Interrompe a execução se o time não for encontrado
        }

        console.log("Novo objeto de colaborador:", obj);
        setColaboradores([...colaboradores, obj]);
    }

    function deletarColaborador(id) {
        setColaboradores(colaboradores.filter(colab => colab.id !== id))
    }

    function mudarCorDoTime(cor, id) {
        setTimes(times.map(time => {
            if (time.id === id) {
                time.cor = cor
            }
            return time
        }))
    }

    function cadastrarTime(novoTime) {
        setTimes([...times, { ...novoTime, id: uuidv4() }])
    }

    function resolverFavorito(id) {
        setColaboradores(colaboradores.map(
            colab => {
                if (colab.id === id) colab.favorito = !colab.favorito
                return colab
            })
        )
    }

    function lincarColaboradorAoTime(time) {
        let colab = colaboradores.filter(colaborador => colaborador.time.id === time)
        return colab
    }
    return (
        <div className="App">
            <Banner />
            <Formulario
                cadastrarTime={cadastrarTime}
                times={times.map(time => time.nome)}
                aoColaboradorCadastrado={colaborador => aoNovoCalaboradorAdicionado(colaborador)}
            />

            {times.map(time =>
                <Time
                    aoFavoritar={resolverFavorito}
                    time={time}
                    cor={time.cor}
                    mudarCor={mudarCorDoTime}
                    key={time.id} nome={time.nome}
                    colaborador={lincarColaboradorAoTime(time.id)}
                    aoDeletar={deletarColaborador}
                />
            )}
            <Rodape />
        </div>
    );
}

export default App;
