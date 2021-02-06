export default function Infos(props) {
    return (
        <tr>
    <td>{props.nome}</td>
    <td>{props.cidade}</td>
    <td>{props.produto}</td>
    <td>{props.descricao}</td>
    <td>{props.quantidade}</td>
    <td>{props.precofinal}</td>
    </tr>
    );
}

