import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleToggle, handleDelete }) => {
    console.log('rendered todolist component');
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Description</th>
          <th scope='col'>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo,index) => {
          return ( 
            <TodoListItem 
              key={todo.id}
              index={index}
              todo={todo} 
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          );
        })}
      </tbody>
    </table>
  );
};
