/* eslint-disable no-unused-vars */
import React from "react";
import "./Tests.css";
import { Link } from "react-router-dom";

const monsterList = ["dragon", "gryphon", "dog"];

const compiledElement = React.createElement(
  "main",
  {
    id: "contentttttt",
  },
  "Monsters undiscovered: ",
  monsterList.length
);

const pageHeader = (
  <header className="page-header">
    ghfjghjfgh{'\n'}
    <Link to='/cssmoduleexample'> Other Page </Link>
  </header>
);

const message = {
  className: 'message',
  content: "Just ate at “Les Corbeaux En Colère”. Wonderful little venue!",
  published: "2024-03-14T15:09:26.000Z",
  author: {
    avatarSrc: "https://sandpack-bundler.vercel.app/img/avatars/009.png",
    avatarDescription: "Cartoon bear",
    name: "Ben Thorn",
    handle: "benjaminthorn",
  },
};

const messageElement = (
  <article style={{ background: "#555555" }} className="messageElement">
    <header>
      <img
        src={message.author.avatarSrc}
        alt={message.author.avatarDescription}
      />
      <a href={message.author.handle}>{message.author.name}</a>
    </header>
    <p>{message.content}</p>
    <footer>
      Posted <time>{message.published}</time>
    </footer>
  </article>
);

function ContactCard({ name, job, email }) {
  return (
    <li className="contact-card">
      <h2 className="name-header">{name}</h2>
      <dl>
        <dt>Job</dt>
        <dd>{job}</dd>
        <dt>Email</dt>
        <dd>{email}</dd>
      </dl>
    </li>
  );
}

const contactData = [
  {
    id: "sunitakumar0",
    name: "Sunita Kumar",
    job: "Electrical Engineer",
    email: "sunita.kumar@acme.co",
  },
  {
    id: "hendersonsterling1",
    name: "Henderson G. Sterling II",
    job: "Receptionist",
    email: "henderson-the-second@acme.co",
  },
  {
    id: "aoikobayashi2",
    name: "Aoi Kobayashi",
    job: "President",
    email: "kobayashi.aoi@acme.co",
  },
  {
    id: "thesniffer3",
    name: "The Sniffer",
    job: "Kitty Cat",
    email: "sniffsniff@acme.co",
  },
];

const ContactCards = (
  // <ul>
  //   <ContactCard
  //     name="Sunita Kumar"
  //     job="Electrical Engineer"
  //     email="sunita.kumar@acme.co"
  //   />

  //   <ContactCard
  //     name="Henderson G. Sterling II"
  //     job="Receptionist"
  //     email="henderson-the-second@acme.co"
  //   />

  //   <ContactCard
  //     name="Aoi Kobayashi"
  //     job="President"
  //     email="kobayashi.aoi@acme.co"
  //   />

  //   <ContactCard
  //     name="The Sniffer"
  //     job="Kitty Cat"
  //     email="sniffsniff@acme.co"
  //   />
  // </ul>
  <ContactListMaker />
);

// this is more efficient, it iterates through the data array and enters the info for you
// by mapping the info of each item onto the slots in a contactcard
function ContactListMaker() {
  const elements = contactData.map((item) => (
    <ContactCard key={item.id} name={item.name} job={item.job} email={item.email} />
  ));

  return <ul>{elements}</ul>;
}

// you can also do this if there's a repeating string or something
// the `` and the ${} will replace the text 'item.id' with the actual id
// {data.map((item) => (
//   <Avatar 
//     src={`/img/avatars/${item.id}.png`} 
//     alt={item.alt} 
//   />
// ))}

function ButtonMaker({ color, children }) {
  return (
    <button
      style={{
        border: "2px solid",
        color: color,
        borderColor: color,
        background: "white",
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
    >
      {children}
    </button>
  );
}

const Buttons = (
  <div>
    <ButtonMaker color="red">Cancel</ButtonMaker>

    <ButtonMaker color="black">Confirm</ButtonMaker>
  </div>
);

// the return statement can only return one item
// instead of putting everything inside a div, you can use a fragment which won't mess up formatting stuff
// function FragmentExample() {
//   return (
//     <>
//       <h1>Welcome to my homepage!</h1>
//       <p>Don't forget to sign the guestbook!</p>
//     </>
//   );
// }

function Tests() {
  return (
    <div className="tests">
      {pageHeader}
      {compiledElement}
      {messageElement}
      {ContactCards}
      {Buttons}
      {/* <FragmentExample /> */}
    </div>
  );
}

export default Tests;
