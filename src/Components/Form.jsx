import React, { useState } from 'react';
import Activity from './Activity';
import Card from './Card';

const Form = () => {
  const [activity, setActivity] = useState('');
  const [date, setDate] = useState('');
  const [todo, setTodo] = useState([]);

  const GenerateId = () => {
    return Date.now();
  };

  const todoObj = {
    id: GenerateId(),
    activity,
    date,
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    setTodo([...todo, { ...todoObj }]);
    console.log(todoObj);
    setActivity('');
    setDate('');
  };

  const todoInputHandler = (e) => {
    setActivity(e.target.value);
  };

  const dateInputHandler = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      <Card>
        <form action="" className="grid gap-y-4" onSubmit={submitFormHandler}>
          <input
            type="text"
            placeholder="Todo..."
            className="rounded-lg h-8 p-2"
            onChange={todoInputHandler}
            value={activity}
          />
          <input
            type="date"
            className="rounded-lg h-8 p-2"
            onChange={dateInputHandler}
            value={date}
          />
          <button className="py-3 bg-blue-500 rounded-lg shadow-md md:w-1/3 md:m-auto">
            Submit
          </button>
        </form>
      </Card>

      <Activity newTodo={todo} newSetTodo={setTodo} />
    </>
  );
};

export default Form;
