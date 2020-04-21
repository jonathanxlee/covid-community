import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContentSection from './components/ContentSection/ContentSection';
import BarChart from "./components/BarChart/BarChart";
import BubbleChart from './components/BubbleChart/BubbleChart';


const whereData = {
  title: 'Where\'s Everyone',
  data: [
    {label: 'teacher', count: 10},
    {label: 'students', count: 12}
  ]
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <ContentSection id="where">
        <BarChart data={whereData.data} height={500} width={500}></BarChart>
        <BubbleChart></BubbleChart>
      </ContentSection>
    </div>
  );
}

export default App;
