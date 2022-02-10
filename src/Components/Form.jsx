import React, { useState, useEffect } from 'react';
import Activity from './Activity';
import Card from './Card';

const Form = () => {
  const [activity, setActivity] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState({});
  const [message, setMessage] = useState('');

  const saveData = (newTodos) => {
    const newTodoJSON = JSON.stringify(newTodos);
    localStorage.setItem('todos', newTodoJSON);
  };

  useEffect(() => {
    const localStorageInfo = localStorage.getItem('todos');

    if (localStorageInfo) {
      setTodo(JSON.parse(localStorageInfo));
    }
  }, []);

  const GenerateId = () => {
    return Date.now();
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!activity) {
      return setMessage('Input Activity!');
    }

    if (!date) {
      return setMessage('Input Date!');
    }

    setMessage('');

    if (edit.id) {
      const updateTodo = {
        id: edit.id,
        activity,
        date,
        time,
      };

      const indexTodo = todo.findIndex((todo) => {
        return todo.id === edit.id;
      });

      const newUpdateTodo = [...todo];
      newUpdateTodo[indexTodo] = updateTodo;
      setActivity('');
      setDate('');
      setTime('');
      setTodo(newUpdateTodo);
      saveData(newUpdateTodo);

      return cancelEditHandler();
    } else {
      const todoObj = {
        id: GenerateId(),
        activity,
        date,
        time,
      };
      const newTodos = [...todo, { ...todoObj }];
      setTodo(newTodos);
      setActivity('');
      setDate('');
      setTime('');
      saveData(newTodos);
    }
  };

  const todoInputHandler = (e) => {
    setActivity(e.target.value);
  };

  const dateInputHandler = (e) => {
    setDate(e.target.value);
  };

  const timeInputHandler = (e) => {
    setTime(e.target.value);
  };

  const TodoEditHandler = (todo) => {
    setActivity(todo.activity);
    setDate(todo.date);
    setTime(todo.time);
    setEdit(todo);
  };

  const cancelEditHandler = () => {
    setEdit({});
    setActivity('');
    setDate('');
    setTime('');
  };

  return (
    <section className="flex flex-col gap-5 md:mx-auto md:w-3/4">
      <Card>
        <form
          action=""
          className="flex flex-col gap-y-4"
          onSubmit={submitFormHandler}
        >
          <input
            type="text"
            placeholder="Todo..."
            className="border p-2 rounded-md"
            onChange={todoInputHandler}
            value={activity}
          />
          <input
            type="date"
            className="border p-2 rounded-md"
            onChange={dateInputHandler}
            value={date}
          />
          <input
            type="time"
            className="border p-2 rounded-md"
            onChange={timeInputHandler}
            value={time}
          />
          {message && (
            <h1 className="text-red-600 text-center font-semibold">
              {message}
            </h1>
          )}
          <button className="py-3 bg-blue-400 rounded-xl shadow-md text-stone-800 font-semibold hover:bg-blue-500 hover:duration-300 md:w-1/3 md:mx-auto">
            {edit.id ? 'Update' : 'Submit'}
          </button>
          {edit.id && (
            <button
              className="py-3 bg-blue-400 rounded-xl shadow-md font-semibold md:w-1/3 md:mx-auto"
              onClick={cancelEditHandler}
            >
              Cancel
            </button>
          )}
        </form>
      </Card>

      <Activity
        newTodo={todo}
        newSetTodo={setTodo}
        newEdit={TodoEditHandler}
        cancelEdit={cancelEditHandler}
        saveData={saveData}
      />
    </section>
  );
};

export default Form;
