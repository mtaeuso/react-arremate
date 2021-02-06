import React from 'react';

// import { Container } from './styles';

function Lojas() {
    return (
        <React.Fragment>
            <header>
                <h2 className="display-5">Nos encontre em uma de nossas lojas!</h2>
                <hr />
            </header>
            <nav>
                <section>
                <div className="container" class="shadow-lg p-3 mb-5 bg-white rounded"  className="p-3 mb-2 bg-transparent text-dark"> 
                <div className="row">
                <div className="col-sm">
                        <h3>São Paulo</h3>
                        <p>Rua pedro augusto de paula, 1005</p>
                        <p>2º andar</p>
                        <p>Itaim Paulista</p>
                        <p>(11) 4752-1913</p>
                </div>
                    
                <div class="col-sm">
                        <h3>Minas Gerais</h3>
                        <p>Rua carlos drummond, 257</p>
                        <p>Terreo</p>
                        <p>jardim das tulipas</p>
                        <p>(11) 2222-1111</p>
                </div>
                    
        
                <div class="col-sm">
                        <h3>Rio de Janeiro</h3>
                        <p>Avenida do estado, 25</p>
                        <p>26º andar</p>
                        <p>Barra</p>
                        <p>(21) 4875-5596</p>
                    </div>
                    </div>
                    </div>
                    

                </section>
            </nav>
        </React.Fragment>
    )
}

export default Lojas;