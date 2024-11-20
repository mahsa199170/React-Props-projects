import { FaTrashAlt } from 'react-icons/fa';
import ItemList from '../itemList/ItemList';

const Content = ({ items, handleDelete, handlecheck }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          handleDelete={handleDelete}
          handlecheck={handlecheck}
          FaTrashAlt={FaTrashAlt}
          items={items}
        />
      ) : (
        <p style={{ marginTop: '2rem' }}> Your List is Empty</p>
      )}
    </main>
  );
};

export default Content;
