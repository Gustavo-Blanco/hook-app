import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const { values, handleInputChange, reset } = useForm({
    description: "",
    done: false,
  });

  const { description } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("dispara");

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };
  return (
    <>
      <h5>Agregar TODO</h5>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='description'
          placeholder='Aprender...'
          autoComplete='off'
          className='form-control'
          value={description}
          onChange={handleInputChange}
        />
        <br />
        <button className='btn btn-primary' type='submit'>
          Agregar
        </button>
      </form>
    </>
  );
};
