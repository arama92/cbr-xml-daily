import Mytable_CBR from './components/Table_CBR';

function App() {
  return (
    <div className='App'>
      <h1>
        В качестве тестового задания выведете данные по курсам валют с
        https://www.cbr-xml-daily.ru/daily_json.js
      </h1>
      <Mytable_CBR />
    </div>
  );
}

export default App;
