import React from 'react';
import style from './Table_CBR.module.scss';

const Table_CBR = () => {
  const [currencies, setСurrencies] = React.useState([]);

  const FetchRequest = () => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then((request) => request.json())
      .then((res) => setСurrencies(Object.values(res.Valute)));
  };
  const GetLine = (currency) => {
    return (
      <tr key={currency.CharCode}>
        <td>{currency.CharCode}</td>
        <td>{currency.Name}</td>
        <td>{currency.Previous.toFixed(2)}</td>
        <td>{currency.Value.toFixed(2)}</td>
      </tr>
    );
  };

  React.useEffect(() => {
    FetchRequest();
  }, []);

  const contentTable = currencies.map((currency, index) => GetLine(currency, index));

  return (
    <table className={style.mytable}>
      <thead>
        <tr>
          <th>CharCode</th>
          <th>Name</th>
          <th>Previous</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>{contentTable}</tbody>
    </table>
  );
};
export default Table_CBR;
