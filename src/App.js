import React from 'react';
import { useEffect, useState } from 'react';
import data from "./__mocks__/data/sample-okrs.json";
import './App.css';
import RecursiveTreeView from './components/mui/TreeView';
import { fetchOkrs } from './api/okrs';
import { makeOkrsTree } from './__mocks__/okrs';

function App() {

  const [hierarchy, setHierarchy] = useState({id: "root", children: []});

  useEffect(() => {
      fetchOkrs()
        .then(res => {
          setHierarchy(makeOkrsTree(res));
        })
        .catch(err => {
          // Due to CORS issue mocking the response for now.
          // console.log(err);
          setHierarchy(makeOkrsTree(data));
        });
  }, []);

  return (
    <RecursiveTreeView hierarchy={hierarchy} />
  );
}

export default App;
