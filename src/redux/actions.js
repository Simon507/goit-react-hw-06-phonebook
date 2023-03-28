export const addToList = (friendId, friendName, friendNumber) => {
  return {
    type: 'contactList/addContactList',
    payload: {
      id: friendId,
      name: friendName,
      number: friendNumber,
    },
  };
};

export const deleteFromList = friendId => {
  return {
    type: 'contactList/deleteFromList',
    payload: friendId,
  };
};

export const setFilter = target => {
  return {
    type: 'filters/findTarget',
    payload: target,
  };
};
