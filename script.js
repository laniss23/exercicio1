let fruta = "";
fruta = prompt('digite o nome da fruta')
switch (fruta.toLowerCase()) {
    case 'maça':
    alert('Não vendemos esta fruta aqui');
    break;
    case 'kiwi':
    alert('Estamos com escassez de kiwis');
    break;
    case 'melancia':
    alert('Aqui está, são 3 reais o quilo');
    break;
    default:
    alert('Não encontramos resultado para sua busca');
    }