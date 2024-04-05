import { useEffect, useState } from "preact/hooks";

type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
};

const ContactList = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchContacts() {
    setIsLoading(true);
    try {
      const response = await fetch("/api/contact");
      const data = await response.json();
      setContacts(data);
    } catch (e) {
      console.error(e);
      setError(e);
    }
    setIsLoading(false);
  }

  async function deleteContact(id: string) {
    try {
      const response = await fetch(`/api/contact?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchContacts();
        alert("Contact deleted successfully");
      }
    } catch (e) {
      console.error(e);
      setError(e);
    }
  }

  function searchContact(query: string) {
    const filteredContacts = contacts.filter((contact) => {
      return (
        contact.firstName.toLowerCase().includes(query.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(query.toLowerCase()) ||
        contact.email.toLowerCase().includes(query.toLowerCase())
      );
    });
    setContacts(filteredContacts);
  }

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <input
        type="text"
        placeholder="Search"
        class={"w-full"}
        onChange={(e) => searchContact(e.currentTarget.value)}
      />
      <div
        style={{
          padding: "0",
        }}
      >
        {contacts.map((contact) => (
          <div key={contact.id} class={"contact w-full"}>
            <div class="flex flex-row space items-center">
              <div class="circle" />
              <div class="flex flex-col">
                <div>{contact.firstName} {contact.lastName}</div>
                <div>{contact.email}</div>
              </div>
            </div>
            <div>
              <a href={`/edit/contact/${contact.id}`}>
                <button>Edit</button>
              </a>
              <a href={`/message/${contact.id}`}>
                <button>Message</button>
              </a>
              <button
                style={{ backgroundColor: "red", color: "white" }}
                onClick={() =>
                  deleteContact(contact.email)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
