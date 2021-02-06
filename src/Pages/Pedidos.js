import {useEffect, useState} from 'react';
import { Form, Row } from 'react-bootstrap';
import Infos from './Infos';

export default function Pedidos(){
    const [pedidos, setPedidos] = useState([]);
    const [form, setForm] = useState({
        nome: "",
        cidade: "",
        produto: "",
        quantidade: ""
    })

    const [response, setResponse] = useState(null)

    function handleChange({target}){
        const {id, value} = target
        setForm({...form, [id]: value})
        console.log({[id]:value});
    }

    function handleSubmit(event){                                                               
        fetch('http://localhost:3333/pedidos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }).then((res) =>{
            setResponse(res);
        })
    }


    useEffect(() => {
        async function atualizarPedido(){
            const url = "http://localhost:3333/pedidos";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setPedidos(resultado);
        }

        atualizarPedido();
    }, [])
    

    return(
        <Row>
        <div className='container container-fluid formulario' >
            <div className="col lg-6 mx-auto" class="text-white">
            <Form onSubmit={handleSubmit} class="text-white"> 
            <h3 className="titulo-form-">Faça seu pedido</h3>
            <Form.Group>
                            <Form.Label class="text-white" >Nome </Form.Label>
                            <Form.Control type="text" id="nome" name="nome" value={form.nome} onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>cidade</Form.Label>
                            <Form.Control type="text" id="cidade" name="cidade" value={form.cidade} onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Produto</Form.Label>
                            <Form.Control id='produto' name="produto" as="select" value={form.produto} onChange={handleChange}>
                            <option value='21' >Televisor semp 20 polegadas</option> 
                            <option value='22' >Televisor phillips 20 polegadas</option> 
                            <option value='23' >Televisor Sony polegadas</option> 
                            <option value='24' >Playstation 1 Sony classic</option> 
                            <option value='25' >Super Nintendo</option> 
                            <option value='26' >Playstation 2 Sony</option> 
                            <option value='27' >Walkman discman Sony portátil cd player</option> 
                            <option value='28' >DvD Mondial</option> 
                            <option value='29' >Nintendo game boy</option> 
                            </Form.Control>
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Quatidade </Form.Label>
                            <Form.Control type="number" id="quantidade" name="quantidade" value={form.quantidade} onChange={handleChange}></Form.Control>
                        </Form.Group>     
                        <input className="btn btn-primary" type="submit" name="enviar" value="Enviar" />
                        </Form>
                        </div>
                        </div>
            
            <div className="row">
                <div className="col-lg-12 col-md-12 mx-auto">
                    <table className="table table-stripe">
                        <tbody class="text-white">
                            {pedidos && pedidos.map(cadastro => <Infos key={cadastro.id} nome={cadastro.nome} cidade={cadastro.cidade} produto={cadastro.produto} descricao={cadastro.descricao} quantidade={cadastro.quantidade} precofinal={cadastro.precofinal} />) }
                      
                      </tbody>
                </table>
                </div>
            </div>
        </Row>

        );
    }