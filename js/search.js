document.addEventListener('DOMContentLoaded', () => {
  // Contact data directly embedded
  const contacts = [
    {
      name: "Rowan Vale",
      family: "The Aldridge Family",
      image: "./assets/profile1.jpg"
    },
    {
      name: "Isabelle Hayes",
      family: "The Sterling Group",
      image: "./assets/profile2.jpg"
    },
    {
      name: "Dax Monroe",
      family: "Thornewood Lineage",
      image: "./assets/profile4.jpg"
    },
    {
      name: "Victoria Shaw",
      family: "Beaumont Estates",
      image: "./assets/profile3.jpeg"
    }
  ];

  // Initialize with all contacts
  renderContacts(contacts);

  // Set up search input event listener
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => {
    filterContacts(contacts, e.target.value);
  });

  // Back button functionality
  const backButton = document.querySelector('.back-button');
  backButton.addEventListener('click', () => {
    searchInput.value = '';
    renderContacts(contacts);
  });
});

// Function to render contacts
function renderContacts(contacts) {
  const contactList = document.getElementById('contactList');
  const notFoundElement = document.getElementById('notFound');
  contactList.innerHTML = '';

  if (contacts.length === 0) {
    notFoundElement.style.display = 'block';
    return;
  }

  notFoundElement.style.display = 'none';

  contacts.forEach(contact => {
    const contactElement = document.createElement('div');
    contactElement.className = 'contact-item';
    contactElement.innerHTML = `
      <img src="${contact.image}" alt="${contact.name}" class="profile-pic">
      <div class="contact-info">
        <div class="contact-name">${contact.name}</div>
        <div class="contact-number">${contact.family}</div>
      </div>
    `;
    contactList.appendChild(contactElement);
  });
}

// Function to filter contacts
function filterContacts(contacts, searchTerm) {
  if (!searchTerm) {
    renderContacts(contacts);
    return;
  }

  const filteredContacts = contacts.filter(contact => {
    const nameMatch = contact.name.toLowerCase().includes(searchTerm.toLowerCase());
    const familyMatch = contact.family.toLowerCase().includes(searchTerm.toLowerCase());
    return nameMatch || familyMatch;
  });

  renderContacts(filteredContacts);
}

// Go to home
function goHome() {
  window.location.href = "home.html"; // Adjust this path as needed
}

// Fix for mobile viewport height
function setRealVH() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', setRealVH);
window.addEventListener('load', setRealVH);