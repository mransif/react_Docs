import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
import { style } from 'framer-motion/client';

function Card({ key, data, refer, toggle }) {

    const colorMap = {
        green: 'bg-green-600',
        blue: 'bg-blue-600',
        red: 'bg-red-600',
        yellow: 'bg-yellow-600'
    }

    const bgColorClass = colorMap[data.tagDetails.tagColor] || 'bg-grey-600'

    return (
        <motion.div drag
            dragConstraints={refer}
            whileDrag={{ scale: 1.2 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            className='card flex-shrink-0 relative h-[180px] w-[140px] px-5 py-3 rounded-[17%] bg-zinc-900/90 text-white overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-[11px] leading-tight mt-3'>{data.desc}</p>
            <div className="footer absolute h-none w-[140px] left-0 bottom-0 ">
                <div className='flex items-center justify-between px-4 py-2'>
                    <h6 className='text-[14px]'>{data.fileSize}</h6>
                    <span className='bg-zinc-600 rounded-full h-[20px] w-[20px] flex items-center justify-center'
                        onClick={toggle} >
                        {data.close ? <IoClose className='p-[1.5px]' /> : <FiDownload className='p-[2.5px]' />}
                    </span>
                </div>
                {
                    data.tagDetails.isOpen && (
                        <div className={`tag w-full py-2 ${bgColorClass} flex items-center justify-center`}>
                            <h3 className=' text-[10px] font-semibold'>{data.tagDetails.tagTitle}</h3>
                        </div>
                    )
                }
            </div>
        </motion.div>

    )
}
export default Card