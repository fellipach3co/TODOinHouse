// :: Manipulação do DOM :: 
// Selecionar o formulário to-do
const todoForm = document.querySelector('#todo-form')
// Selecionar o input de entrada de tarefas
const todoInput = document.querySelector('#nova-atividade')
// Selecionar a lista de tarefas
const todoItems = document.querySelector('.lista-tarefas')

// :: Armazenamento de todas as tarefas :: 
// Array que armazenará todas as tarefas
let todos = []

// :: Evento de interação do formulário com o JS ::
// addEventListener do input no form
todoForm.addEventListener('submit', (event) =>{
	// método que previne sair da página do formulário
  event.preventDefault()
  // Função add.Todo que envia o valor de nova atividade como argumento
  addTodo(todoInput.value)
})

// :: Função addTodo - Responsável por gerar um objeto com a nova atividade ::
	// Criação da função todo
  const addTodo = (item) => {
  	// Verificação se o valor de input é diferente de vazio (!== '')
  	if(item !== ''){
    	// Inserir o argumento item no objeto todo
    	const todo = {}
      // Date será utilizado como ID para cada tarefa inserida no documento
      todo.id = Date.now()
      // A tarefa inserida
      todo.name = item
      // O status da tarefa
      todo.completed = false
      
      // Passa objeto pra array todos 
      todos.push(todo)
      // Adiciona a array como argumento para o localStorage através da função addToLocalStorage
      addToLocalStorage(todos)
      
      // Limpa o valor do input nova atividade
      todoInput.value = ''
     }
  }
  
  // Função responsável pelas tarefas listadas no documento HTML
  const renderTodos = (todos) => {
  	todoItems.innerHTML = ''
    
    todos.forEach((item)=>{
    	const checked = item.completed ? 'checked': null
      
      // uma variável que possui como atributo o método de criação de elemento HTML
      const li = document.createElement('li')
      // O setAttribute é um método que adiciona ou modifica um atributo. 
      // O primeiro atributo é a classe do li, que foi nomeada como item. 
      li.setAttribute('class', 'item')
      // o segundo atributo é o id da tarefa 
      li.setAttribute('data-key', item.id)
      
      // Verifica se a tarefa foi completa. Se foi completa, altera a cor do texto e põe um line-through
      if(item.completed === true){
        // altera a cor do li caso o status da atividade for completada  
        li.style.color = 'rgba(131, 128, 165, 0.25)'
        // cria um grifado no li
        li.style.textDecoration = 'line-through'
      }

      // bloco da tarefa: contém o checkbox, o item que é a descrição da tarefa e o botão para exclusão da atividade
      li.innerHTML = `<input type='checkbox' class='checkbox' ${checked}> <p>${item.name}</p><button class='delete-button'>X</button>`
      todoItems.append(li)
      
    })
  }
  
// :: Função que adiciona a array com as tarefas no localStorage ::
// criação da arrow function que envia como argumento a array todos
  const addToLocalStorage = (todos) => {
  	// array transformada em string
  	localStorage.setItem('todos', JSON.stringify(todos))
    // string passada para renderTodos
    renderTodos(todos)
  }

// :: Função que captura uma string que é array com as tarefas no localStorage ::
const getFromLocalStorage = () => {
  // Busca os dados que estão inseridos como string com a chave 'todos'
	const reference = localStorage.getItem('todos')
  if(reference){
    // condicional verdadeira se houver dados no elemento, através do JSON.parse renderiza originalmente para array
 		todos = JSON.parse(reference)
     // A array chama a função que listará os dados no documento HTML 
    renderTodos(todos)
  }
}
// Função responsável por operar no status de uma tarefa
const toggle = (id) => {
	todos.forEach(function(item){
  	if(item.id == id){
      item.completed = !item.completed
    }
  })
  // as modificações são atualizadas no localStorage
  addToLocalStorage(todos)
}

// Função responsável por operar na exclusão de uma tarefa
const deleteTodo = (id) => {
	todos = todos.filter(function(item){
  	return item.id != id
  })
  // as modificações são atualizadas no localStorage
  addToLocalStorage(todos)
}

getFromLocalStorage()

todoItems.addEventListener('click', function(event){
  // caso verdadeiro, o checkbox, opera através do data-key (id)
	if(event.target.type === 'checkbox'){
  	toggle(event.target.parentElement.getAttribute('data-key'))
  }
  // caso verdadeiro, o delete-button, opera através do data-key (id) 
  if(event.target.classList.contains('delete-button')){
  	deleteTodo(event.target.parentElement.getAttribute('data-key'))
  }
}
)




