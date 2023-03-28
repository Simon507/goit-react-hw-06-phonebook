// import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { getContactList } from '../../redux/selectors';

// import { addToList, deleteFromList } from '../../redux/actions';

import { ContactCard, ContactLst } from './contactList.styles';

export const ContactList = () => {
  const value = useSelector(getContactList);
  // const find = useSelector(getFindTarget);
  // const dispatch = useDispatch();

  // console.log(value);
  // console.log(find);
  const onDelete = item => {
    // dispatch(deleteFromList(id));
    console.log(item);
  };

  return (
    <>
      <ContactLst>
        {value.map(item => (
          // item.name.toLowerCase().includes(find.toLowerCase()) && (
          <ContactCard className="item" key={item.id}>
            <p>{item.name}</p>
            <p>{item.number}</p>
            <button onClick={onDelete}>Delete</button>
          </ContactCard>
          // )
        ))}
      </ContactLst>
    </>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
//   nameFind: PropTypes.string.isRequired,
// };
