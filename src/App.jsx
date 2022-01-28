import Card from './Components/Card';
import Form from './Components/Form';
import Activity from './Components/Activity';

function App() {
  return (
    <div className="App flex flex-col gap-4">
      <h1 className="text-center font-semibold text-xl mt-4">ToDoList</h1>
      <Card>
        <Form />
      </Card>
      <Activity />
    </div>
  );
}

export default App;
