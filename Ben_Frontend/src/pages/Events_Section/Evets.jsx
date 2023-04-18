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
    
    <div className='bg-white text-black text-xl py-0 px-2 md:px-14 flex-grow'>
    {/* <h1 className='font-my_font font-extrabold text-center justify-center mb-10 text-4xl'> Explore Other Series</h1> */}
    <div className='w-8/12 mx-auto items-center justify-center md:gap-10 space-y-0 md:flex gap-4 lg:flex flex'>
      <div className="w-1/2 sel border-gray-100 border cursor-pointer leading-4 bg-white
      items-center relative shadow-lg rounded-md transition-all hover:shadow-sm after:sel-aft">
       <select
         onChange={(e) => setFilter(e.target.value)}
         className="w-11/12 rounded-md cursor-pointer text-gray-400 m-0 py-5 pr-2 pl-4 font-my_font"
         aria-label="Filter Events By Category">
         <option className='text-gray-400' value="">Filter by category</option>
         {filter_items.map((item) => (
         <option className='text-gray-400' value={item}>Filter By {item}</option>
         ))}
       </select>
     </div>  
      <div className='s-wr w-3/4 md:max-w-max'>
          <input
          type="search"
          name="search-form"
          id="search-form"
          className='w-[25rem] font-my_font rounded-md  bg-[length:16px_16px] bg-l-10-c bg-no-repeat py-5 px-8 pl-9 border border-gray-100 text-gray-800 shadow-lg transition-all duration-300 hover:shadow-none'
          placeholder="Search "
          onChange={(e) => setQuery(e.target.value)}
          />
        </div>

      </div>
      <br/>
      <AnimatePresence>
      <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 flex-column gap-2 md:gap-10 pb-20'>
      {
          search(menuItem).map((item) => {
              return (
                <motion.div
                  className="w-full py-3 px-2 "
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
                  <div className="overflow-hidden flex-grow hover:scale-x-110 transition-all hover:cursor-pointer duration-300 ease-in-out object-contain">
                    <Link to={`/event/${item.id}`}>
                      <motion.img
                        layout
                        src={item.image}
                        alt={item.title}
                        className="w-11/12 flex-grow font-my_font rounded-lg transition-all duration-300 ease-in-out"
                      />
                      <h2 className="md:text-2xl font-bold  text-black transition-all duration-300 font-my_font">
                        {item.title}
                      </h2>
                      <p className="text-contact-text text-base font-thin font-my_font">
                        {item.description}
                      </p>
                    </Link>
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
