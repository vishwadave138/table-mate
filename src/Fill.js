import  React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

// import 'tailwindcss/tailwind.css';

const Fill = (props) => {
  const [name, setName] = useState('');
  const [persons, setPersons] = useState('');
  const [child, setChild] = useState('');
  const [time, setTime] = useState('');
  const [selectedDate, setSelectedDate]= useState('')
  // const [list, setList] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, like submit to server or display a confirmation message

    console.log({ name, persons,child, selectedDate, time });
    navigate.push({
      pathname: "/cart",
      state: { name},
    });
   
  };
  const handleOnClick = () => {
    //Redirect to the python page
    navigate("/Table");
  };
  const handleInputChange = (event) => {
    setName(event.target.value);
  };
  const navigate = useNavigate();

  return (
    <>
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 text-left">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-semibold text-black">
          Name:
        </label>
        <input
          id="name"
          type="text"
          value={name}  
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 border border-gray-400 rounded-md text-black"
        />
      </div>

      <div className="mb-4 flex">
        <div className='mr-2'>
        <label htmlFor="persons" className="block mb-2 font-semibold text-black">
          Adult Persons:
        </label>
        <select
          id="persons"
          value={persons}
          onChange={(e) => setPersons(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-400 rounded-md text-black"
        >
          <option value="">Total Adults (more than 5 years old child also count) </option>
          <option value="1">1 </option>
          <option value="2">2 </option>
          <option value="3">3 </option>
          <option value="4">4 </option>
          <option value="5">5 </option>
          <option value="6">6 </option>
          <option value="7">7 </option>
          <option value="8">8 </option>
          <option value="9">9 </option>
          <option value="10">10 </option>
          <option value="11">11 </option>
          <option value="12">12 </option>
          <option value="13">13 </option>
          <option value="14">14 </option>
          <option value="15">15 </option>
          <option value="16">16 </option>
          <option value="17">17 </option>
          <option value="18">18 </option>
          <option value="19">19 </option>
          <option value="20">20 </option>
        </select>
        </div>
        <div>
        <label htmlFor="persons" className="block mb-2 font-semibold text-black">
          No. of child: 
        </label>
        <select
          id="child"
          value={child}
          onChange={(e) => setChild(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-400 rounded-md text-black"
        >
          <option value="">Total Child (up to 5 years) </option>
          <option value="0">0 </option>
          <option value="1">1 </option>
          <option value="2">2 </option>
          <option value="3">3 </option>
          <option value="4">4 </option>
          <option value="5">5 </option>
          <option value="6">6 </option>
          <option value="7">7 </option>
          <option value="8">8 </option>
          <option value="9">9 </option>
          <option value="10">10 </option>
          <option value="11">11 </option>
          <option value="12">12 </option>
          <option value="13">13 </option>
          <option value="14">14 </option>
          <option value="15">15 </option>
          <option value="16">16 </option>
          <option value="17">17 </option>
          <option value="18">18 </option>
          <option value="19">19 </option>
          <option value="20">20 </option>
        </select>
        </div>
      </div>
       
       <div className='flex'>
      <div className="mb-4 ">
        <label htmlFor="date" className="block mb-2  font-semibold text-black">
          Date:
        </label>
        <div className='flex  justify-center '>
           <div className='mr-8 '>
           <DatePicker selected={selectedDate} 
      onChange={date => setSelectedDate(date)}
      dateFormat="dd/MM/yyyy"
      minDate={new Date()}
      placeholderText='dd/mm/yyyy'
      
      // value={date}
      isClearable
      className='w-60  py-2 border border-gray-400 rounded-md'
      showYearDropdown
      scrollableMonthYearDropdown
      />
       </div>  
      </div>
      </div>

      <div className="mb-4">
        <label htmlFor="time" className="block mb-2 font-semibold text-black">
          Time:
        </label>
        <input
          id="time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="w-60 px-4 py-2 border border-gray-400 rounded-md"
        />
      </div>
      </div>

      <button
      onClick={handleOnClick}
        type="submit"
        className="block w-full py-2 text-white bg-orange-500 hover:bg-blue-600 rounded-md"
      >
        Submit
      </button>
     </form>
     <div>
<p>Name: {name}</p>
<p>Time: {time}</p>
<p>Total Child: {child}</p>
<p>Total Adults: {persons}</p> 
</div>
   
    </>
  );
};

export default Fill;