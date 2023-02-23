import React, { useState } from 'react'
import ddata from './EventData';
import { MenuItem } from '@mui/material';
import Header from './Hero';
import {AnimatePresence, motion} from 'framer-motion';
import { MenuOpen, Loupe } from '@mui/icons-material';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EventDeets from './EventDeets';


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
    
    <div className='bg-white text-black text-xl py-0 px-14 flex-grow'>
    <h1 className='font-my_font font-extrabold text-center justify-center mb-10 text-4xl'> Explore Other Series</h1>
      <div className='my-6 mx-0 ml-20 items-center md:space-y-0 space-y-5 md:flex lg:flex justify-center gap-10'>
      <div className="sel pr-6 border-gray-300 border-w min-w-min max-w-max cursor-pointer leading-4 bg-white grid
      items-center relative shadow-md transition-all hover:shadow-sm after:sel-aft">
       <select
         onChange={(e) => setFilter(e.target.value)}
         className="w-full  cursor-pointer text-gray-400 m-0 py-4 pr-8 pl-4 rounded-md font-my_font"
         aria-label="Filter Events By Category">
         <option className='text-gray-400' value="">Series</option>
         {filter_items.map((item) => (
         <option className='text-gray-400' value={item}>Filter By {item}</option>
         ))}
       </select>
     </div>  
      <div className='s-wr min-w-min max-w-max'>
          <input
          type="search"
          name="search-form"
          id="search-form"
          className='font-my_font border-b-gray-300 min-w-min max-w-max w-full bg-[length:16px_16px] bg-l-10-c bg-no-repeat py-3 px-8 pl-10 
          border-w border-solid border-gray-300 text-gray-800 shadow-md transition-all duration-300 hover:shadow-none'
          placeholder="Search Event..."
          onChange={(e) => setQuery(e.target.value)}
          />
        </div>

      </div>
      
      <AnimatePresence>
      <div className='grid  md:grid-cols-3 flex-column gap-10 pb-20'>
      {
          search(menuItem).map((item) => {
              return <motion.div className='w-full py-6 px-5 ' key={item.id}
              layoutScroll
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  opacity:{ease:"linear"},
                layout: {duration:0.5} }}
                exit={{opacity:0.3}}
              >
              
                  <div className='overflow-hidden flex-grow hover:scale-x-110 transition-all hover:cursor-pointer duration-300 ease-in-out object-contain'>
                  <Link to={`/event/${item.id}`}>
                      <motion.img layout
                        src={item.image} 
                        alt={item.title}
                        className='w-full flex-grow font-my_font rounded-lg transition-all duration-300 ease-in-out'
                        />
                      <h2 className='md:text-2xl font-bold  text-black transition-all duration-300 font-my_font'>{item.title}</h2>
                      <p className='text-gray-500 font-my_font'>{item.descripition}</p>
                      </Link>
                  </div>
              </motion.div>
              })
          }
      </div>      </AnimatePresence>
       
    </div>
   
    
  )
  
}



export default Evets
