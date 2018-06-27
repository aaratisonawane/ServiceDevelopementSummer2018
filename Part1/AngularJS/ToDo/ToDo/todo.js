angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
	//localStorage.clear();
	todoList.stored = localStorage.getItem('todos');
    todoList.todos = (localStorage.getItem('todos')!==null) ? JSON.parse(todoList.stored) : [
      {text:'learn AngularJS', done:true},
      {text:'build an AngularJS app', done:false},
	  {text:'have fun with Dr. Ding', done:false}];
	localStorage.setItem('todos', JSON.stringify(todoList.todos));
 
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
	localStorage.setItem('todos', JSON.stringify(todoList.todos));
    };
 
    todoList.remaining = function() { //this will count the number of task with done=false;
      var count = 0;
      //add your code here
	  angular.forEach(todoList.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
      return count;
	};
 
    todoList.archive = function() {//This will remove the tasks with done=true
      //add your code here
	  var doneTodos = todoList.todos;
      todoList.todos = [];
	  angular.forEach(doneTodos, function(todo) {
      if (!todo.done) {
		  todoList.todos.push(todo);
	  }
    });
	localStorage.setItem('todos', JSON.stringify(todoList.todos));
    };
  });
  
  