let erro = 'E101'

switch (erro) {
    case E101:
        console.log('há um problema de conexão, para tentar resolver siga as instruções abaixo');
        break;
        case E202:
            console.log('O servidor está falhando, para tentar resolver siga as instruções abaixo');
        break;
        case E303:
            console.log('existe um erro de login no sistema, para tentar resolver siga as instruções abaixo');
        break;

    default:
        console.log("Erro desconhecido, entre em contato com o suporte");
        break;
}