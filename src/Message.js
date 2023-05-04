import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
// import "./Feedback.css";
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function Message() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return ( 
    <div>   
    <Box
      sx={{
        height:'600px',
        width:'500px',
        marginLeft:'360px',
        marginTop:'100px',
        border:'2px solid orange',
        backgroundColor:'wheat',
      }}
    >
      <div className='block'>
        <h1 className='text-6xl text-orange-900 mt-6'>Feedback</h1>
        <p className='mt-4 text-2xl text-orange-600'>How Was Your Experience </p>
         <div className="mb-3  pt-0 ">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="mt-24 px-3 py-3 placeholder-gray-400 text-gray-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-80"
          required
        />
      </div>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55,color: '#ef6c00' }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 h-24 placeholder-gray-400 text-gray-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-80 "
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-orange-500 text-white hover:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
          type="submit"
        >
          Submit
        </button>
      </div>
     </div>
    </Box>
    </div>
  );
}