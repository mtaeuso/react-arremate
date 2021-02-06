import { useState, useEffect } from 'react';


import Produto from '../components/Produto'
import { Container, Row } from 'react-bootstrap'



export default function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(async () => {
        const resposta = await fetch("http://localhost:3333/")
        const dados = await resposta.json();
        setProdutos(dados);
    }, []);

    return (
        <Container>
            <Row>
                {produtos && produtos.map(item => <Produto imagem={item.imagem} nome={item.nome} preco={item.preco}
                categoria={item.televisores} />)}
            </Row>
        </Container>
    )
}



