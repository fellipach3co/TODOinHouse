# TODOinHouse
#### Uma lista de tarefas desenvolvida em HTML, CSS e JavaScript

Esse projeto tem como objetivo geral desenvolver uma aplicação do tipo To-Do List, onde o usuário possa cadastrar tarefas que precisam ser realizadas e que ao final/ conclusão de tais atividades, seja possível registrar que tais tarefas já estão concluídas e quais ainda precisam ser feitas. Além disso, a aplicação deve desenvolver um campo onde além de inserir tarefas, seja possível excluir tarefas, sejam elas concluídas ou não.

#### Desenvolvimento geral
👉 Uma aplicação que possam ser registradas tarefas à serem realizadas. Essa aplicação deve receber tarefas em forma de To-Do List. 

#### Conteúdo específico da aplicação
- 👉 Um documento HTML com um campo para registrar as atividades à serem realizadas.
- 👉 Nesse documento, cada tarefa registrar é apresentada em um bloco com campo para registrar quando a tarefa foi concluída e outro botão para excluir a atividade.
- 👉 O projeto possui um documento CSS que estiliza os campos e organiza o layout da aplicação, estiliza botões de registro, status e exclusão da tarefa cadastrada.
- 👉 O documento JavaScript incluso é responsável pela operação da aplicação, onde insere novos blocos conforme são adicionadas atividades.
- 👉 As tarefas inseridas no documento são também registradas no local storage. 

## Ferramentas usadas na aplicação

### HTML
- Semântica HTML5
- Form, inputs, button
- Listas não-ordenadas

### CSS
- reset css
- importação de fontes
- uso de gradiente em botões
- uso de rgba

### JavaScript
- addEventListener
- querySelector
- arrays e objetos
- uso de JSON para inserir dados no local storage
- estilização de conteúdo no JavaScript conforme condições

### Requisitos da aplicação
A aplicação que deverá ser realizada individualmente, deve contemplar os seguintes requisitos:
1. Um título na aba do navegador, para que o usuário encontre a sua aplicação no meio das várias abas que constantemente mantém abertas.
2. Um cabeçalho dentro da página, para que o usuário saiba facilmente em que página se encontra e do que se trata o conteúdo.
3. Um campo de texto para digitar o nome de uma nova atividade a ser adicionada à lista.
4. Um botão para adicionar uma nova atividade à lista.
5. Uma lista contendo as atividades já inseridas.
6. Cada linha da lista deve conter: checkbox para o usuário marcar que aquela atividade já foi realizada; o texto que o usuário digitou ao cadastrar a atividade; botão para excluir a atividade da lista, caso desejado.
7. Quando o usuário marcar uma tarefa como realizada, o texto daquela linha deve ser tachado (line-through).
8. A lista deve ser salva no "localStorage" do navegador (incluindo quais itens já foram realizados), e deve ser carregada sempre que a página for reaberta.

