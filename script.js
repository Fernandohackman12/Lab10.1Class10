document.addEventListener("DOMContentLoaded", () => {
  let contacts = [
    {
      name: "Maxwell Wright",
      phone: "019171916495",
      email: "contact1@cctb.com",
    },
    {
      name: "Raja Villarreal",
      phone: "0863982895",
      email: "contact2@cctb.com",
    },
    { name: "Helen Richards", phone: "080031111", email: "contact3@cctb.edu" },
  ];

  const contactList = document.getElementById("contactList");

  // Function to display contacts
  const displayContacts = () => {
    contactList.innerHTML = "";
    contacts.forEach((contact) => {
      const li = document.createElement("li");
      li.innerHTML = `
                  <strong>${contact.name}</strong> - ${contact.phone} - ${contact.email}
              `;
      contactList.appendChild(li);
    });
  };

  // Function with callback
  const processContacts = (callback) => {
    contacts.forEach((contact) => callback(contact));
  };

  // Display contact details using callback
  const showContactDetails = (contact) => {
    console.log(
      `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`
    );
  };

  // setTimeout to simulate a delay before updating the contact list display
  const updateContactList = () => {
    setTimeout(() => {
      displayContacts();
      console.log("Contact list updated.");
    }, 2000); // 2 seconds delay
  };

  // Background color changing function
  const colors = [
    "#ffadad",
    "#ffd6a5",
    "#fdffb6",
    "#caffbf",
    "#9bfbc0",
    "#a0c4ff",
    "#b9fbc0",
    "#f5d0fe",
  ];
  let colorIndex = 0;

  const changeBackgroundColor = () => {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  };

  // Change background color every 5 seconds
  setInterval(changeBackgroundColor, 5000); // Every 5 seconds

  // Arrow function for adding a contact
  const addContact = (name, phone, email) => {
    contacts.push({ name, phone, email });
    updateContactList();
  };

  // Recursive function to search for a contact by name
  const findContactByName = (name, index = 0) => {
    if (index >= contacts.length) return null;
    if (contacts[index].name.toLowerCase() === name.toLowerCase()) {
      return contacts[index];
    }
    return findContactByName(name, index + 1);
  };

  // Function to manage contacts using prompt dialogs
  const manageContacts = () => {
    let choice;
    do {
      choice = prompt(
        "Choose an action:\n1. Add a new contact\n2. Find a contact\n3. Exit"
      );
      switch (choice) {
        case "1":
          const name = prompt("Enter contact name:");
          const phone = prompt("Enter phone number:");
          const email = prompt("Enter email address:");
          if (name && phone && email) {
            addContact(name, phone, email);
          } else {
            alert("All fields are required.");
          }
          break;
        case "2":
          const searchName = prompt("Enter the name of the contact to find:");
          const contact = findContactByName(searchName);
          if (contact) {
            alert(
              `Contact found: ${contact.name} - ${contact.phone} - ${contact.email}`
            );
          } else {
            alert("Contact not found.");
          }
          break;
        case "3":
          alert("Exiting contact manager.");
          break;
        default:
          alert("Invalid choice. Please try again.");
      }
    } while (choice !== "3");
  };

  // Event listener for managing contacts
  document
    .getElementById("manageContactsButton")
    .addEventListener("click", manageContacts);

  // Initial display of contacts
  displayContacts();

  // Start changing background color
  changeBackgroundColor(); // Ensure it starts immediately
});
