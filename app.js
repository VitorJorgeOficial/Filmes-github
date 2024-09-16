function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
   
    let campoPesquisa = document.getElementById("campo-pesquisa").value 
    
    // se campoPesquisa for uma string sem nada

    if(!campoPesquisa ) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do filme ou a Categoria</p>"
        return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo =  "";
    let categoria = "";
    let tags = "";
    let trailer = "";
  
    // Itera sobre cada item de dados e constrói o HTML correspondente
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      categoria = dado.categoria.toLowerCase()
      tags = dado.tags.toLocaleLowerCase()
      
      
        // se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || categoria.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
          // Cria um novo elemento

          resultados += `
<div class="item-resultado">
  <h2>
    <a href="#" target="_blank">${dado.titulo}</a>
  </h2>
  <p class="descricao-meta">${dado.categoria}</p>
  <p class="sinopse-meta">${dado.sinopse}</p>
  <a href="${dado.link}" target="_blank">Mais informações</a>
  <a href="${dado.trailer}" target="_blank">Trailer</a>
</div>
`;
// Cria um novo elemento de resultado com as informações do dado

        }
           
      
    }
    if(!resultados ){
      resultados = "<p>Nada foi encontrado</p>"

    }
  
    // Atualiza o conteúdo HTML da seção de resultados com os resultados gerados
    section.innerHTML = resultados;
  }
