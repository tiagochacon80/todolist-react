import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
const [list, setList] = useState<Item[]>([
  { id: 1, name: 'Christmas shopping', done: false },
  { id: 2, name: 'Buy ingredients for cake recipe', done: true },
]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>To do list</C.Header>  

        <AddArea />      

        {list.map((item, index)=>(
          <ListItem key={index} item={item} />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;