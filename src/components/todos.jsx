import PropTypes from "prop-types";
const Todos = (props) => {
  return (
    <section className="todos flex flex-col gap-4">
      {props.todos.map((todo, index) => (
        <section
          key={index}
          className="todo flex flex-row py-4 bg-[#30336b] gap-4"
        >
          <input type="checkbox" className="w-32" />
          <p className="w-32 text-[#fff]">{todo.title}</p>
          <button
            className="w-20 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full"
            onClick={() => props.deleteTodo(index)}
          >
            Delete
          </button>
        </section>
      ))}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired, // Validating that todos is an array
  deleteTodo: PropTypes.func.isRequired, // Validating that deleteTodo is a required function
};

export default Todos;
