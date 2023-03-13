import React, { useState } from 'react'
import ddata from './ResourcesData';
import { MenuItem } from '@mui/material';
import Header from './Hero';
import {AnimatePresence, motion} from 'framer-motion';
import { MenuOpen, Loupe, VideoCameraBackOutlined, HeadphonesOutlined, CloudDownloadOutlined } from '@mui/icons-material';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


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
    
    <div className='bg-white text-black text-xl py-0 md:px-14 px-2 flex-grow'>
    <h1 className='font-my_font font-extrabold text-center justify-center mb-10 text-4xl'> Explore Other Series</h1>
      <div className='my-6 mx-0 items-center justify-center md:gap-10 md:space-y-0 sm:space-y-14 space-y-14 md:flex gap-4  lg:flex flex'>
      <div className="sel border-gray-300 border-w w-60 cursor-pointer leading-4 bg-white
      items-center relative shadow-md rounded-md transition-all hover:shadow-sm after:sel-aft">
       <select
         onChange={(e) => setFilter(e.target.value)}
         className="w-full rounded-md cursor-pointer text-gray-400 m-0 py-4 pr-8 pl-4 font-my_font"
         aria-label="Filter Events By Category">
         <option className='text-gray-400' value="">Series</option>
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
          className='font-my_font rounded-md border-b-gray-300 min-w-min max-w-max w-full bg-[length:16px_16px] bg-l-10-c bg-no-repeat py-3 px-8 pl-9 
          border-w border-solid border-gray-300 text-gray-800 shadow-md transition-all duration-300 hover:shadow-none'
          placeholder="Search.."
          onChange={(e) => setQuery(e.target.value)}
          />
        </div>

      </div>
      
      <AnimatePresence>
      <div className='grid grid-cols-2 md:grid-cols-3 flex-column gap-4 md:gap-10 pb-20'>
      {
          search(menuItem).map((item) => {
              return <motion.div className='w-full py-6 px-5 shadow-md rounded-md' key={item.id}
              layoutScroll
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  opacity:{ease:"linear"},
                layout: {duration:0.5} }}
                exit={{opacity:0.3}}
              >
              
                  <div className='overflow-hidden flex-grow group transition-all hover:cursor-pointer duration-300 ease-in-out object-contain'>
                  <Link to={`/resources/${item.id}`}>
                      <motion.img layout
                        src={item.image} 
                        alt={item.title}
                        className='w-full group-hover:scale-x-110 flex-grow font-my_font rounded-lg transition-all duration-300 ease-in-out'
                        />
                      <h2 className='mx-2 mt-2 md:text-2xl font-bold  text-black transition-all duration-300 font-my_font'>{item.title}</h2>
                      <p className='ml-2 my-1 text-gray-500 md:text-xl text-[15px] font-my_font'>Category: {item.category}</p>
                      </Link>
                      <VideoCameraBackOutlined className='md:mr-3 mx-2 hover:text-red-600'/>
                      <HeadphonesOutlined className='md:mr-3 mx-2 hover:text-red-600'/>
                      <CloudDownloadOutlined className='mx-2 hover:text-red-600'/>
                      
                  </div>
              </motion.div>
              })
          }
      </div>      </AnimatePresence>
       
    </div>
   
    
  )
  
}



export default Evets
