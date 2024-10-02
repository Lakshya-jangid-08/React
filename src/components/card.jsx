import React from 'react'
import { PiNoteFill } from "react-icons/pi";
import { MdFileDownload } from "react-icons/md";
import { motion } from 'framer-motion' 
import { RxCross2 } from "react-icons/rx";
function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.25 }}  className=" relative h-72 w-60 rounded-xl bg-zinc-600 m-4 p-4 overflow-hidden">
        <PiNoteFill/>
        <h1 className='pt-1 text-xs font-semibold' >{data.discription} </h1>

        <div className=" footer absolute bottom-0 left-0 w-full pt-2">
          <div className='flex justify-between items-center px-4 py-2'>
            <h5>{data.size}</h5>
            <span className='p-[4px] bg-zinc-900 rounded-full flex justify-center items-center '> 
               {data.close ? <RxCross2 size="11px"/>: <MdFileDownload size='11px' />  }
            </span>
          </div>
            {data.tag.close ? 
            <div className={ `w-full ${data.tag.color==="green"?" bg-green-500":"bg-blue-500 "} overflow-hidden h-10  flex justify-center items-center`}>
              <h5 className='font-semibold'>{data.tag.Title}</h5>
            </div> : null
            }
        </div>
        </motion.div>
  )
}

export default Card