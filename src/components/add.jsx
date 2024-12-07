import { useState } from "react";
import PropTypes from "prop-types";
function AddFrom(props) {
  const [todoTitle, setTitleTodo] = useState("");
  const handleAddTodo = () => {
    if (todoTitle.trim().length > 0) {
      props.addTodo(todoTitle);
      setTitleTodo("");
    }
  };
  return (
    <section className="add-form m-4">
      <h2>Add</h2>
      <input
        type="text"
        className="w-64 border-blue-500 py-2 border-2 rounded-full focus:border-blue-500"
        value={todoTitle}
        onChange={(e) => setTitleTodo(e.target.value)}
      />
      <button
        className="w-20 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </section>
  );
}

AddFrom.propTypes = {
  addTodo: PropTypes.func.isRequired, // Validating that addTodo is a required function
};
export default AddFrom;
