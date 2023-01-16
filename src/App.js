import Card from './Card';
import './App.css';
import CardList from './CardList';
import testData from './testData';
import Form from './Form';
import addNewProfile from './addNewProfile';


function App() {
  return (
    <>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={testData} />
    </>
  );
} 


export default App;
