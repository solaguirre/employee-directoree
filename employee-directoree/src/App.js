// state & effect hook documentation https://reactjs.org/docs/hooks-overview.html
import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.svg';
import employeeAPI from './utils/API';

function App() {

  const [results, setResults] = useState([{}]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    employeeAPI.getEmployees()
      .then(res => {
        console.log(res.data);
        setResults(res.data.results)
      })
  })

  return (
    <div className="App">
      <Wrapper>
        <Navbar />
        <input placeholder="Search Employee Name" value={search} onChange={e => setSearch(e.target.value)}></input>
        <EmpTable>
          <TableData>
            employees= {results}
          </TableData>
        </EmpTable>
      </Wrapper>
    </div>
  );
}

export default App;
