import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
  const todo = response.data;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  console.log(`
    the todo with ID: ${id}
    has a title of: ${title}
    is it finished? ${completed}
  `);
});
