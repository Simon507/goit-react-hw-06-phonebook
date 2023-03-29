import { useSelector, useDispatch } from 'react-redux';

import { getContactList, getFindTarget } from '../../redux/selectors';

import { deleteFromList } from '../../redux/actions';

import { ContactCard, ContactLst } from './contactList.styles';

export const ContactList = () => {
  const value = useSelector(getContactList);
  const find = useSelector(getFindTarget);
  console.log(find.toString().toLowerCase());
  const dispatch = useDispatch();

  const onDelete = item => {
    dispatch(deleteFromList(item));
    console.log(item);
  };

  return (
    <>
      <ContactLst>
        {value.map(
          item =>
            item.name.toLowerCase().includes(find.toString().toLowerCase()) && (
              <ContactCard className="item" key={item.id}>
                <p>{item.name}</p>
                <p>{item.number}</p>
                <button onClick={() => onDelete(item.id)}>Delete</button>
              </ContactCard>
            )
        )}
      </ContactLst>
    </>
  );
};
