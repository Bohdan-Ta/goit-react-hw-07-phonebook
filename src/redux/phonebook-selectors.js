export const getFilter = (state) => state.contacts.filter;
export const getContacts = (state) => state.contacts.items;

export const getSensitiveSearch = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  const lowerCaseLetters = filter.toLowerCase().trim();
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(lowerCaseLetters)
  );
};
