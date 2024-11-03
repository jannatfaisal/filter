// const contacts= [
//     {
//         id:1,
//     name:"jannat faisal",
//     gmail: "jannatfaisal003gmail.com"


//     },
//     {
//         id:2,
//         name:"nisha",
//         gmail: "nisha22gmail.com"  
//     },
//     {
//         id:3,
//         name:"jannat",
//         gmail: "jannatgmail.com"
//     }
// ];
// function renderContacts(){
// const contact_list=document.getElementById("contact-list");
// for(const contact of contacts){
// const contact_list2=document.createElement("div");
//  contact_list2.className="contact";
//  contact_list2.innerHTML=`
//  <b> ${contact.name} </b>
//  <p> ${contact.gmail}`
// ;

// contact_list.appendChild(contact_list2);
// }
// }

// // renderContacts();


// function filterContacts(){
// const filterInput=document.getElementById("filter-input")
// .value.toLowerCase();
// const filterContacts= contacts.filter((contact)=>
// contact.name.toLowerCase().includes(filterInput))
// renderContacts(filterContacts);
// };
// renderContacts();

// document.getElementById('filter-button').addEventListener('click',filterContacts);

// Filter , Map , Reduce
// const num = [40,41,42,43,44,45,46,47,48,49,50];
// console.log(num.filter((num) => num > 44));
// console.log(num.map(num => num * 3));

// const { log } = require("surge/lib/util/helpers");

const contacts = [
  {
    id: 1,
    name: "Ifra",
    gmail: "ifrashamim29@gmail.com",
  },
  {
    id: 2,
    name: "Nisha",
    gmail: "nishashamim15@gmail.com",
  },
  {
    id: 3,
    name: "Tehreem",
    gmail: "tehreemshamim14@gmail.com",
  },
];

function renderContacts(contacts) {
  const contactList = document.getElementById("contact-list");
  contactList.innerHTML = "";
  for (const contact of contacts) {
    const contactDiv = document.createElement("div");
    contactDiv.className = "contact";
    contactDiv.innerHTML = `
    <b>${contact.name}</b>
    <p>${contact.gmail}</p>
    `;
    contactList.appendChild(contactDiv);
  }
}
function filterContacts() {
  const filterInput = document
    .getElementById("filter-input")
    .value.toLowerCase();
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterInput)
  );
  renderContacts(filterContacts);
}
renderContacts(contacts);
document.getElementById('filter-button').addEventListener('click', filterContacts);

// function sum(a,b){
//   let sum = a + b;
//   console.log(sum);
// }
// sum(2,7);
// sum(11,8);