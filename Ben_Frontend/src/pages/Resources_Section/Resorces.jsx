import React, { useState } from 'react'
import ddata from './ResourcesData';
import { MenuItem } from '@mui/material';
import Header from './Hero';
import {AnimatePresence, motion} from 'framer-motion';
import { MenuOpen, Loupe, VideoCameraBackOutlined, HeadphonesOutlined, CloudDownloadOutlined } from '@mui/icons-material';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { Search } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import MuiTextField from '@mui/material/TextField';

const options = {
  shouldForwardProp: (prop) => prop !== 'borderColor',
};
const outlinedSelectors = [
  '& .MuiOutlinedInput-notchedOutline',
  '&:hover .MuiOutlinedInput-notchedOutline',
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline',
];
const TextField = styled(
  MuiTextField,
  options,
)(({ borderColor }) => ({
  '& label.Mui-focused': {
    color: borderColor,
  },
  [outlinedSelectors.join(',')]: {
    borderWidth: 3,
    borderColor,
  },
}));


function Evets(props) {
  const [items, setItems] = useState(ddata);
  console.log(items)
  const [searchTerm, setSearchTerm] = useState('')
  const [menuItem, setMenuItem] = useState(items);
  const [query, setQuery] = useState('')
  const data = Object.values(items)
  const allCategories = ['All', ...new Set(items.map(item => item.category))];
  const [buttons, setButtons] = useState(allCategories);
  const [filter, setFilter] = useState("");
  const search_parameters = Object.keys(Object.assign({}, ...menuItem));
  const filter_items = [...new Set(data.map((item) => item.category))];
  // const navigate = useNavigate()
  // const navigateEventDeets = () => {
  //   navigate(`/event/${items.id}`)
  // }


  function search({data}) {
    return items.filter(
      (item) =>
      item.category.includes(filter) &&
        search_parameters.some((parameter) =>
          item[parameter].toString().toLowerCase().includes(query)
        )
    );
  }


  return (
    
    <div className='bg-white text-black text-xl py-0 px-2 md:px-14 flex-grow'>
    <h1 className='font-my_font font-bold text-center justify-center mb-10 text-4xl'> Listen to Other Messages</h1>
    <div className='my-6 lg:ml-48 mr-3 items-center justify-items-center md:gap-10 grid grid-cols-2 md:flex gap-4'>
      <div className="lg:items-center justify-center font-my_font rounded-md border-b-gray-300 md:w-[30%] w-11/12 bg-[length:16px_16px] lg:ml-32 bg-l-10-c bg-no-repeat px-2  py-3 pr-5 
          border-w border-solid border-gray-300 text-gray-800 shadow-md transition-all duration-300 hover:shadow-none">
       <select
         onChange={(e) => setFilter(e.target.value)}
         className="w-full rounded-md cursor-pointer bg-transparent text-gray-400 px-2 sm:text-[16px] md:text-[20px] py-0 font-my_font"
         aria-label="Filter Events By Category">
         <option className='text-gray-400  pr-2' value="">Filter by: Series</option>
         {filter_items.map((item) => (
         <option className='text-gray-400 pr-2' value={item}>Filter By {item}</option>
         ))}
       </select>
     </div>  
      <div className='s-wr2 mr-'>
      
          {/* <input
          type="search"
          name="search-form"
          id="search-form"
          className='font-my_font rounded-md border-b-gray-300 min-w-min max-w-max w-full bg-[length:16px_16px] bg-l-10-c bg-no-repeat py-3 px-8 pl-9 
          border-w border-solid border-gray-300 text-gray-800 shadow-md transition-all duration-300 hover:shadow-none'
          placeholder="Search.."
          onChange={(e) => setQuery(e.target.value)}
          /> */}
          
          <TextField
            onChange={(e) => setQuery(e.target.value)}
            className='rounded-lg outline-none'
            sx={{ width: '100%', fontFamily: 'Urbanist', border: '0.5px solid #d4d8dd', "& fieldset": { border: 'none' },}} 
            label="Search..."
            size='small'
            borderColor='#9ca3af'
            
            InputLabelProps={{ style: { fontSize: 18, paddingTop:'5px', color: '#9ca3af'} }}

                        
            InputProps={{
              sx: { color: '#9ca3af', paddingLeft:'10px', fontSize: 18, border: '#9ca3af' },
              className: 'font-my_font py-1 rounded-md border-b-gray-300 min-w-min max-w-max w-full bg-[length:16px_16px] bg-l-10-c bg-no-repeat pl-10 border-w border-solid text-gray-800 shadow-md transition-all duration-300 hover:shadow-none',
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                  <Search className='' />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </div>

      </div>
      
      <AnimatePresence>
      <div className='grid grid-cols-2 md:grid-cols-3 flex-column gap-4 md:gap-10 pb-20'>
      {
          search(menuItem).map((item) => {
              return (
                <motion.div
                  className="w-full shadow-md rounded-md"
                  key={item.id}
                  layoutScroll
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    opacity: { ease: "linear" },
                    layout: { duration: 0.5 },
                  }}
                  exit={{ opacity: 0.3 }}
                >
                  <div className="overflow-hidden flex-grow group transition-all hover:cursor-pointer duration-300 ease-in-out object-contain">
                    <Link to={`/resources/${item.id}`}>
                      <motion.img
                        layout
                        src={item.image}
                        alt={item.title}
                        className="w-full group-hover:scale-x-110 flex-grow font-my_font rounded-t-xl transition-all duration-300 ease-in-out"
                      />
                      <h2 className="mx-5 mt-2 md:text-2xl font-bold  text-black transition-all duration-300 font-my_font">
                        {item.title}
                      </h2>
                      <p className="ml-5 my-1 text-gray-500 md:text-xl text-[15px] font-my_font">
                        Category: {item.category}
                      </p>
                    </Link>
                    <VideoCameraBackOutlined className="md:mr-3 mx-5 my-4 hover:text-red-600" />
                    <HeadphonesOutlined className="my-4 md:mr-3 mx-2 hover:text-red-600" />
                    <CloudDownloadOutlined className="my-4 mx-2 hover:text-red-600" />
                  </div>
                </motion.div>
              );
              })
          }
      </div>      </AnimatePresence>
       
    </div>
   
    
  )
  
}



export default Evets
