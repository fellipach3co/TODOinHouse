// :: Manipulação do DOM :: 
// 1. Selecionar o formulário to-do
const todoForm = document.querySelector('#todo-form')

// 2. Selecionar o input de entrada de tarefas
const todoInput = document.querySelector('#nova-atividade')

// 3. Selecionar a lista de tarefas
const todoItems = document.querySelector('.lista-tarefas')


// :: Armazenamento de todas as tarefas :: 
// 4. Array que armazenará todas as tarefas
let todos = []


// :: Evento de interação do formulário com o JS ::
// 5. quando o botão no formulário com o tipo submit ser clicado, ocorrerá um evento ()=>
todoForm.addEventListener('submit', (event) =>{

  // 6. método que previne sair da página do formulário
  event.preventDefault()

  // 7. será chamada a função addTodo(item), que passa como argumento o valor (descrição da tarefa)
  addTodo(todoInput.value)
})


// :: Função addTodo - Responsável por gerar um objeto com a nova atividade ::
	// 8. Criação da função addTodo que adiciona uma nova tarefa sempre que o usuário registra a atividade
  const addTodo = (item) => {
  	
    // 9. Verifica se o valor de input é diferente de vazio (!== '')
  	if(item !== ''){
    	
      // 10. criação do objeto todo: 
      // Esse objeto abrigará um id, um nome e um status  
    	const todo = {}
      
      // 11. criação da chave id através do date -> já que toda hora é diferente (única)
      // Date será utilizado como ID para cada tarefa inserida no documento
      todo.id = Date.now()
      
      // 12. criação da chave name que abriga o valor (descrição da atividade) a ser desenvolvida.
      // A tarefa inserida
      todo.name = item
      
      // 13. criação da chave status que apresenta se a atividade foi completada ou não. Por padrão é falsa === ainda não foi efetuada.
      // O status da tarefa
      todo.completed = false
      
      // 14. Através do método .push, envia o objeto criado na função para a variável array todos, que abriga as tarefas cadastradas
      // Passa objeto pra array todos 
      todos.push(todo)

      // 15. Chama a função que enviará a atividade cadastrada para o localStorage. Passa como argumento a array que armazena as tarefas.
      // Adiciona a array como argumento para o localStorage através da função addToLocalStorage
      addToLocalStorage(todos)
      
      // 16. Após o cadastro da atividade, o input que cadastra as tarefas recebe um valor falso === um campo vazio. 
      // Limpa o valor do input nova atividade
      todoInput.value = ''
     }
  }
  
// :: Função renderTodos - Função responsável pelas tarefas listadas no documento HTML ::
  // 17. cria a função renderTodos que recebe como argumento a array todos
  const renderTodos = (todos) => {
    
    // 18. limpa todos os elementos dentro da lista não ordenada com a classe .lista-tarefas <ul></ul>
  	todoItems.innerHTML = ''
    
    // 19. o método forEach irá efetuar uma operação para cada elemento no argumento todos, que no caso é uma array. 
    // como a array abriga diferentes objetos, veficamos as chaves de cada objeto. 
    todos.forEach((item)=>{
      
      // 20. criamos uma variável chamada checked
      // essa variável abriga um operador condicional ternário: se item.completed for true: recebe a string 'checked' senão recebe null.
    	const checked = item.completed ? 'checked': null
      
      // 21. criação de um elemento li que corresponderá a tarefa cadastrada
      // usamos o método createElement que cria um elemento HTML. O elemento criado é uma li, que está sendo atribuido numa variável
      const li = document.createElement('li')
      
      // 22. O setAttribute é um método que adiciona ou modifica um atributo em um elemento.       
      // criamos um id abrigará como valor o id inserido no objeto
      // o id de cada objeto na array corresponde a data exata que a tarefa foi inserida na aplicação
      li.setAttribute('id', item.id)
      
      // 23. Condição para alteração do estilo em uma tarefa completada
      // Verifica se a tarefa foi realizada. Se foi, altera a cor do texto e põe um line-through
      if(item.completed === true){

        // altera a cor do li caso o status da atividade for completed === true
        li.style.color = 'rgba(131, 128, 165, 0.25)'

        // cria um grifado no li caso o status da atividade for completed === true
        li.style.textDecoration = 'line-through'
      }

      // 24. Insere no documento HTML a tarefa cadastrada
      // bloco da tarefa: contém o input checkbox, o parágrafo item que é a descrição da tarefa e o botão para exclusão da atividade
      li.innerHTML = `<input type='checkbox' class='checkbox' ${checked}> <p>${item.name}</p><button class='delete-button'>X</button>`
      
      // 25. o método append() adiciona um novo elemento no documento HTML onde está vinculado com todoItems (<ul class='lista-tarefas')
      // o argumento passado é o li que recebeu as propriedades descritas nessa função: 
          // 25.1 criar um elemento li
          // 25.2 inserir um id buscando no objeto lido o id que se refere a data
          // 25.3 se no objeto a chave completed for true, alterar o estilo do li criado
          // 25.4 inserir na tag li criada um input checkbox, um parágrafo e um botão
      todoItems.append(li)
    })
  }


// :: Função que insere dados no local storage ::
// 26. durante o script, será necessário inserir (atualizar) os dados no local storage.
  const addToLocalStorage = (todos) => {
  	
    // 27. transforma a array todos em uma string e envia para o local storage.
  	localStorage.setItem('todos', JSON.stringify(todos))
    
    // 28. chama a função renderTodos que é responsável por apresentar os dados cadastrados na aplicação
    renderTodos(todos)
  }

// :: Função que busca dados no local storage ::
// 29. durante o script, será necessário regastar (atualizar) os dados do local storage
// não precisa de parâmetro, não depende de um argumento.
// a função dessa operação é buscar os dados que estão inseridos no local storage armazenado pela chave 'todos'
const getFromLocalStorage = () => {

  // 30. atribui em uma variável o método getItem da chave 'todos' no localStorage
	const reference = localStorage.getItem('todos')

  // 31. verifica se a condição é verdadeira (se há dado no local storage)
  if(reference){

    // 32. a condição sendo verdadeira, atribui na array todos a transformação do dado coletado no local storage manipulado pelo JSON.
    todos = JSON.parse(reference)
    
    // chama a função renderTodos que é responsável por apresentar os dados cadastrados na aplicação
    renderTodos(todos)
  }
}


//:: Função toddle - responsável por alterar o estado de um objeto: no cotidiano alterna de à fazer para feito. (completed: false ; true)
// 39. A função toggle possui como argumento o id do item que recebeu o click
const toggle = (id) => {

  // 40. o forEach pega os elementos da array todos e passa como argumento para verificar o id de cada objeto lido 
	todos.forEach(function(item){

    // 41. verifica se o id passado no forEach é igual ao id do click. É colocado apenas dois == pois busca identificar o valor, e não o valor e tipo. === 
  	if(item.id == id){

      // 42. se a comparação for verdadeira, o item.completed daquele objeto recebe o !oposto, ou seja: de false passará para true. 
      item.completed = !item.completed
    }
  })

  // 43. As modificações são atualizadas no localStorage
  addToLocalStorage(todos)
}


// :: Função deleteTodo ::
// 44. Função responsável por operar na exclusão da tarefa que recebeu o evento click dentro do elemento ul na área do delete-button

const deleteTodo = (id) => {

  // 45. O método filter gera um novo array.
  // só que nesse filter, ele define que o id passado como argumento do deleteTodo é diferente de id do argumento de filter. 
  // sendo assim, esse objeto é excluído da array.
	todos = todos.filter(function(item){
  	return item.id != id
  })

  // 46. as modificações são atualizadas no localStorage
  addToLocalStorage(todos)
}


// :: certificar que os dados armazenados no local storage serão coletados e apresentados quando a aplicação for recarregada
// 33. chamar a função que busca os dados no local storage
getFromLocalStorage()


// :: verificando eventos no todoItems (na lista de tarefas)
// 34. havendo um evento 'click' dentro do elemento <ul>, chamar a função anônima que:..
todoItems.addEventListener('click', function(event){

  // 35. verifica se o click foi direcionado ao checkbox
	if(event.target.type === 'checkbox'){

    // 36. se verdadeiro, envia o valor do id do elemento clicado pra função toggle
  	toggle(event.target.parentElement.getAttribute('id'))
  }

  // 37. verifica se o click foi direcionado ao delete-button 
  if(event.target.classList.contains('delete-button')){

    // 38. se verdadeiro, envia o id do elemento clicado para função deleteTodo
  	deleteTodo(event.target.parentElement.getAttribute('id'))
  }
}
)




