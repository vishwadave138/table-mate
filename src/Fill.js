import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import 'tailwindcss/tailwind.css';

const Fill = () => {
  const [name, setName] = useState('');
  const [persons, setPersons] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, like submit to server or display a confirmation message
    console.log({ name, persons, date, time });
    
  };
  const handleOnClick = () => {
    //Redirect to the python page
    navigate("/Slider");
  };
  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 text-left">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-semibold">
          Name:
        </label>
        <input
          id="name"
          type="text"
          value={name}  
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-400 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="persons" className="block mb-2 font-semibold">
          Persons:
        </label>
        <select
          id="persons"
          value={persons}
          onChange={(e) => setPersons(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-400 rounded-md"
        >
          <option value="">Total persons (include childrens) </option>
          <option value="1">1 person</option>
          <option value="2">2 people</option>
          <option value="3">3 people</option>
          <option value="4">4 people</option>
          <option value="5">5 people</option>
          <option value="6">6 people</option>
          <option value="7">7 people</option>
          <option value="8">8 people</option>
          <option value="9">9 people</option>
          <option value="10">10 people</option>
          <option value="11">11 people</option>
          <option value="12">12 people</option>
          <option value="13">13 people</option>
          <option value="14">14 people</option>
          <option value="15">15 people</option>
          <option value="16">16 people</option>
          <option value="17">17 people</option>
          <option value="18">18 people</option>
          <option value="19">19 people</option>
          <option value="20">20 people</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="date" className="block mb-2 font-semibold">
          Date:
        </label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-400 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="time" className="block mb-2 font-semibold">
          Time:
        </label>
        <input
          id="time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-400 rounded-md"
        />
      </div>

      <button
      onClick={handleOnClick}
        type="submit"
        className="block w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default Fill;