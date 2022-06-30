export const TodoListItem = ({ todo, handleToggle, handleDelete, index }) => {
  const { id, description, done } = todo;
  console.log('item list todo rendered');
  return (
    <tr>
      <th scope='row'>{index + 1}</th>
      <td
        onClick={() => handleToggle(id)}
        className={`todo-toggle ${done && "text-decoration-line-through"}`}
      >
        {description}
      </td>
      <td>
        <button 
          className='btn btn-danger' 
          onClick={() => handleDelete(id)}
          >
          Delete
        </button>
      </td>
    </tr>
  );
};
