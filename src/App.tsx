import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';

const App = () => {
const [list, setList] = useState<Item[]>([
  { id: 1, name: 'Christmas shopping', done: false },
  { id: 2, name: 'Buy ingredients for cake recipe', done: false },
]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>To do list</C.Header>        

        {list.map((item, index)=>(
          <ListItem key={index} item={item} />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;