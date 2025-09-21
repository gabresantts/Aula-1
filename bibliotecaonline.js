// 2. Criando um algoritmo de pesquisa para uma bliblioteca online

alert("Boas vindas a TecaTech - Biblioteca Online");
let pesquisa = prompt("Você gostaria de buscar por gênero ou por autores? (gênero/autor)").toLowerCase(); // Adicionando toLowerCase() para uniformidade

switch (pesquisa) {
  case "gênero":
    let genero = prompt("Qual gênero você gostaria de buscar? (ficção, não-ficção, fantasia, mistério)").toLowerCase();
    switch (genero) {
      case "ficção":
        alert("Recomendações: '1984' de George Orwell, 'O Sol é Para Todos' de Harper Lee, 'A Canção de Aquiles' de Madeline Miller, 'O Morro dos Ventos Uivantes' de Emily Brontë, 'O Ódio que Você Semeia' de Angie Thomas.");
        break;
      case "não-ficção":
        alert("Recomendações: 'Sapiens' de Yuval Noah Harari, 'Pedagogia do Oprimido' de Paulo Freire, 'Corpos que Importam' de Judith Butler, 'O Manual Antirracista' de Djamila Ribeiro, 'Vigiar e Punir' de Michel Foucault.");
        break;
      case "fantasia":
        alert("Recomendações: 'O Senhor dos Anéis' de J.R.R. Tolkien, 'Harry Potter' de J.K. Rowling, 'As Crônicas de Nárnia' de C.S. Lewis, 'American Gods' de Neil Gaiman, 'A Canção de Gelo e Fogo' de George R.R. Martin, 'Os Instrumentos Mortais' de Cassandra Clare.");
        break;
      case "mistério":
        alert("Recomendações: 'O Código Da Vinci' de Dan Brown, 'A Garota no Trem' de Paula Hawkins, 'Morte no Nilo' de Agatha Christie, 'A Mulher na Janela' de A.J. Finn, 'Os Detetives do Prédio Azul' de André Neves.");
        break;
      default:
        alert("Gênero não reconhecido. Tente novamente com ficção, não-ficção, fantasia ou mistério.");
        break;
    }
    break; // Este break é utilizado para finalizar o case "gênero"

  // 2.1 Criando um algoritmo de pesquisa para alguns autores e suas respectivas obras
    
  case "autores":
    let autores = prompt("Que autores você gostaria de buscar? (George Orwell, Djamila Ribeiro, Paulo Freire, Agatha Christie, Yuval Noah Harari ou J.K Rowling)").toLowerCase(); // Adicionando toLowerCase() para uniformidade
    switch (autores) { // Adicionando um switch para verificar o autor
        case "george orwell":
            alert("Recomendação: '1984'.");
            break;
        case "djamila ribeiro":
            alert("Recomendação: 'O Manual Antirracista'.");
            break;
        case "yuval noah harari":
            alert("Recomendação: 'Sapiens'.");
            break;
        case "j.k. rowling":
            alert("Recomendação: 'Harry Potter'.");
            break;
        case "Agatha Christie":
            alert("Recomendação: 'Morte no Nilo'.");
            break;
        case "paulo freire":
            alert("Recomendação: 'Pedagogia do Oprimido'.");
            break;
        default:
            alert("Opção não reconhecida. Tente novamente com gênero ou autor.");
            break;
    }
    break; // Este break é utilizado para finalizar o case "autores"

  default:
    alert("Opção não reconhecida. Tente novamente com gênero ou com os autores disponíveis.");
    break; // Adicionando um break para o case default

} // Adicionando um fechamento da chave