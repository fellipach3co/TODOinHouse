// :: Manipulação do DOM :: 
// 1. Selecionar o formulário to-do
const todoForm = document.querySelector('#todo-form')
// 2. Selecionar o input dee entrada de tarefas
const todoInput = document.querySelector('#nova-atividade')
// 3. Selecionar a lista de tarefas
const todoItems = document.querySelector('.lista-tarefas')

// :: Armazenamento de todas as tarefas :: 
// 4. Array que armazenará todas as tarefas
let todos = []

// :: Evento de interação do formulário com o JS ::
// 6. addEventListener do input no form
todoForm.addEventListener('submit', (event) =>{
	// 7. método que previne sair da página do formulário
  event.preventDefault()
  // 8. Função add.Todo que envia o valor de nova atividade como argumento
  addTodo(todoInput.value)
})

// :: Função addTodo - Responsável por gerar um objeto com a nova atividade ::
	// 8. Criação da função todo
  const addTodo = (item) => {
  	// 9. Verificação se o valor de input é diferente de vazio (!== '')
  	if(item !== ''){
    	// 10. Inserir o argumento item no objeto todo
    	const todo = {}
      todo.id = Date.now()
      todo.name = item
      todo.status = false
      
      // 11. Passa objeto pra array todos 
      todos.push(todo)
      addToLocalStorage(todos)
      
      // 12. Limpa o valor do input nova atividade
      todoInput.value = ''
     }
  }
  
  const renderTodos = (todos) => {
  	todoItems.innerHTML = ''
    
    todos.forEach((item)=>{
    	const checked = item.completed ? 'checked': null
      
      const li = document.createElement('li')
      li.setAttribute('class', 'item')
      li.setAttribute('data-key', item.id)
      
      if(item.completed === true){
      	li.classList.add('checked')
      }
      
      li.innerHTML = `<input type='checkbox' class='checkbox' ${checked}> ${item.name}<button class='delete-button'>X</button>`
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

const getFromLocalStorage = () => {
	const reference = localStorage.getItem('todos')
  if(reference){
 		todos = JSON.parse(reference) 
    renderTodos(todos)
  }
}


const toggle = (id) => {
	todos.forEach(function(item){
  	if(item.id == id){
      item.completed = !item.completed
    }
  })
  addToLocalStorage(todos)
}

const deleteTodo = (id) => {
	todos = todos.filter(function(item){
  	return item.id != id
  })
  addToLocalStorage(todos)
}


getFromLocalStorage()


todoItems.addEventListener('click', function(event){
	if(event.target.type === 'checkbox'){
  	toggle(event.target.parentElement.getAttribute('data-key'))
  }
  if(event.target.classList.contains('delete-button')){
  	deleteTodo(event.target.parentElement.getAttribute('data-key'))
  }
}
)




