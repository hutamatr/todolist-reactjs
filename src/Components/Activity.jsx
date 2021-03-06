import React from 'react';
import { MdDeleteOutline, MdEditNote } from 'react-icons/md';

const Activity = ({ newTodo, newSetTodo, newEdit, cancelEdit, saveData }) => {
  const TodoDeleteHandler = (todoId) => {
    const todoFilter = newTodo.filter((td) => {
      return td.id !== todoId;
    });

    // eslint-disable-next-line no-restricted-globals
    confirm('Delete Activity?')
      ? newSetTodo(todoFilter) || saveData(todoFilter)
      : newSetTodo(newTodo);

    if (newEdit) {
      cancelEdit();
    }
  };

  return (
    <section className="mb-8">
      {newTodo.length > 0 ? (
        <ul className="grid gap-y-4 md:grid-cols-3">
          {newTodo.map((todo) => {
            return (
              <li
                className="flex flex-col gap-4 shadow-xl rounded-md p-4 mx-4 bg-blue-100"
                key={todo.id}
              >
                <h4 className="break-all text-lg">{todo.activity}</h4>
                <div className="flex flex-row gap-x-4">
                  <p className="text-sm">{todo.date}</p>
                  <p className="text-sm">{todo.time} WIB</p>
                </div>
                <div className="flex flex-row justify-around text-2xl cursor-pointer">
                  <span className="bg-blue-300 rounded-2xl py-0.5 px-4 hover:bg-blue-400">
                    <MdEditNote
                      className="text-2xl text-center"
                      onClick={newEdit.bind(this, todo)}
                    />
                  </span>

                  <span className="bg-blue-300 rounded-2xl py-0.5 px-4 hover:bg-blue-400">
                    <MdDeleteOutline
                      className="text-2xl text-center"
                      onClick={TodoDeleteHandler.bind(this, todo.id)}
                    />
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <h1 className="text-2xl text-center text-blue-500 font-bold mt-12">
          Activity{' '}
          <span className="bg-slate-200 p-1 rounded-md font-light">Empty</span>
        </h1>
      )}
    </section>
  );
};

export default Activity;
