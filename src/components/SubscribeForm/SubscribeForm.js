// import nodemailer from "nodemailer";
// import React, { useState } from "react";

// const SubscribeForm = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [show, setShow] = useState(false);

//   // const [email, setEmail] = useState("");

//   const sendEmail = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:5000/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//       }),
//     });

//     const data = await res.json();
//     console.log(data);

//     if (data.status === 401 || !data) {
//       console.log("error");
//     } else {
//       setShow(true);
//       setEmail("");
//       console.log("Email sent");
//     }
//   };
//   return (
//     <div>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <br />
//       <textarea
//         placeholder="Message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <br />
//       <button onClick={sendEmail}>Send Email</button>
//     </div>
//   );
// };

// export default SubscribeForm;
