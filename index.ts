import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/2";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
axios.get(url).then((response) => {
  //   console.log(response.data);
  const todo = response.data as Todo;

  const ID = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(ID, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
        The todo with ID: ${id}
        Has the title of: ${title}
        Is it finished: ${completed}
    `);
};
