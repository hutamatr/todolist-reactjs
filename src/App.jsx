import Card from './Components/Card';
import Form from './Components/Form';
import Activity from './Components/Activity';

function App() {
  return (
    <div className="flex flex-col gap-4 md:m-auto md:w-4/5">
      <h1 className="text-center font-semibold text-xl mt-4">
        <span className="text-blue-500">todo</span>
        <span className="font-yellow-tail">-list</span>{' '}
      </h1>
      <Card>
        <Form />
      </Card>
      <Activity />
    </div>
  );
}

export default App;
