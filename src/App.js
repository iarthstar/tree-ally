import React from 'react';
import { useEffect, useState } from 'react';
// import { hierarchy } from "./__mocks__/okrs";
import './App.css';
import RecursiveTreeView from './components/mui/TreeView';
import { fetchOkrs } from './api/okrs';
import { makeOkrsTree } from './__mocks__/okrs';

function App() {

  const [hierarchy, setHierarchy] = useState({id: "root", children: []});

  useEffect(() => {
      fetchOkrs()
        .then(data => {
          setHierarchy(makeOkrsTree(data));
        })
        .catch(err => {
          console.log(err);
        });
  }, []);

  return (
    <RecursiveTreeView hierarchy={hierarchy} />
  );
}

export default App;
