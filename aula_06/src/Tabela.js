const Tabela = ({ data }) => {
    return (
        <table border='1'>
            <tr>
                <td>Nome</td>
                <td>Curso</td>
            </tr>
            <tbody>
                {
                    data.map( (linha) => {
                        return (
                            <tr>
                                <td>{linha.nome}</td>
                                <td>{linha.curso}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Tabela