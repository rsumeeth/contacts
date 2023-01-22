const URL =
  "https://randomuser.me/api/?results=50&seed=8aa19fa6362b966es&nat=IN&inc=name,email,id,picture,cell";

export async function loadContacts() {
  const result = await fetch(URL);
  return (await result.json())?.results;
}
export async function loadContact(contactId) {
  const contacts = await loadContacts();
  return contacts.find((contact) => contact.id.value === contactId);
}
