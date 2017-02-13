var counter = 0;

var hello = () =>  { alert('Hello there person');}
var task = (task) => {
  addTask(task);
}
var addTask = (task) => {
  socket.emit('task', task);
  counter++;
  //add to view
  $('.list-group').prepend('<li class="list-group-item"><span class="badge" id ='+""+counter+'>'+counter+'</span>'+task+'</li>');
}
var removeTask = (task) => {
  if(task == 'one'){
    task = '1';
  }
  console.log(task);
  $('#'+task).text(task).parent().remove();
  counter--;
  socket.emit('remove', task)
}

var commands = {
  'hello': hello,
  'task *task': task,
  'remove task number *o': removeTask
};
