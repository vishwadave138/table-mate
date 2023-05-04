import React, { useState } from "react";
import "./Contact.css";
import Hello from "./Images/Hello.png";
const FORM_ENDPOINT = "https://public.herotofu.com/v1/b43aaf60-d8f7-11ed-bd27-47b3be7286e7"; // TODO - fill on the later step

const Contact = () => {
  const [status, setStatus] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const injectedData ={
      DYNAMIC_DATA_EXAMPLE: 123,
    };
    const inputs = e.target.elements;
    const data = {};
    for (let i = 0; i< inputs.length; i++){
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
    }
  }
  Object.assign(data, injectedData);

  fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      // It's likely a spam/bot request, so bypass it to validate via captcha
      if (response.status === 422) {
        Object.keys(injectedData).forEach((key) => {
          const el = document.createElement("input");
          el.type = "hidden";
          el.name = key;
          el.value = injectedData[key];

          e.target.appendChild(el);
        });

        e.target.submit();
        throw new Error("Please finish the captcha challenge");
      }

      if (response.status !== 200) {
        throw new Error(response.statusText);
      }

      return response.json();
    })
    .then(() => setStatus("We'll be in touch soon."))
    .catch((err) => setStatus(err.toString()));
};

if (status) {
  return (
    <>
      <div className="text-2xl">Thank you!</div>
      <div className="text-md">{status}</div>
    </>
  );
};
return (
  <form
    action={FORM_ENDPOINT}
    onSubmit={handleSubmit}
    method="POST"
    target="_blank"
  >
    <div class="contact">
    <div class="con1">
      <div className="">
        <img class="h-44 w-44 ml-48 mt-14" src={Hello} alt=""/>
        <h1 class="text-black mr-4">Get In Touch</h1>
        <nav class="list-none mb-10 ">
        <p>Email-Id:</p>
        <li>
                <p class="text-black no-underline hover:text-gray-800">helipatel6203@gmail.com</p>
                </li>
               
          </nav>
          <nav>
          <p>Contact-No:</p>
          
                <p class="text-black no-underline hover:text-gray-800">+91 123456789</p>
                
                </nav>
        </div>
    </div>
    <div class="form">
    
    <div className="mb-3  pt-0 ">
      <input
        type="text"
        placeholder="Your name"
        name="name"
        className="mt-24 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-80"
        required
      />
    </div>
    <div className="mb-3 pt-0">
      <input
        type="email"
        placeholder="Email"
        name="email"
        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-80 "
        required
      />
    </div>
    <div className="mb-3 pt-0">
      <textarea
        placeholder="Your message"
        name="message"
        className="px-3 py-3 h-24 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-80 "
        required
      />
    </div>
    <div className="mb-3 pt-0">
      <button
        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
        type="submit"
      >
        Send a message
      </button>
    </div>
    </div>
    </div>
  </form>
);
};
export default Contact;