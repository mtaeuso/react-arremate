import { Switch, Route } from 'react-router-dom';

import  Produtos  from './Pages/Produtos'
import Lojas from './Pages/Lojas'
import Home from './Pages/Home'
import Contato from './Pages/Contato'
import Pedidos from './Pages/Pedidos'


function Rotas() {
    return (
        <Switch>
            <Route exact path="/produtos" component={ Produtos } />
            <Route exact path="/lojas" component={ Lojas  } />
            <Route exact path="/" component={ Home  } />
            <Route exact path="/contatos" component={ Contato  } />
            <Route exact path="/pedidos" component={ Pedidos  } />

        </Switch>
    )
}

export default Rotas;