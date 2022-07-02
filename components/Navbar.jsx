import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import {IoMdNotifications, IoMdSettings, IoIosArrowDown} from 'react-icons/io';
import settingIcon from '../assets/settingIcon.svg';
import Toggle from "./Toggle.jsx";
import logo from '../assets/logo.png'

const Navbar = () => {
  
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='flex justify-between items-center p-[40px]'>
        <div className='flex justify-start items-center gap-[55px] w-[50%]'>
            <Image src={logo} width="53.02"  height="53.04" alt="logo" />

            <div className='flex justify-evenly items-center gap-[59px] font-normal text-base text-[#3A3737CC]'>
                <span className='font-medium text-[#3A3737]'><Link href="/">Dashboard</Link></span>
                <span><Link href="/calender">Calendar</Link></span>
                <span>Wallet</span>
                <span>Market</span>
            </div>
        </div>

        <div className='flex items-center gap-[21px]'>
            <IoMdNotifications size={20} />
            <IoMdSettings size={20} onClick={() => setShowModal(true)} />
            {showModal ? (
              <>
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto  mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className=" px-8 pb-2 mt-4  w-full pt-2 rounded-t ">
                        <button
                            className="bg-transparent border-0 mb-4 text-black float-right"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="text-black opacity-7 h-6 w-8 text-xl block py-0 rounded-full">
                              x
                            </span>
                        </button>
                        <div className="mt-4 flex flex-row justify-start">
                        <Image src={settingIcon} className="px-2" width={76} alt="schedule Icon" />
                        <div>
                        <h3 className="text-center font-poppins font-semibold text-[30px] leading-[45px] text-[#3A3737]">Settings</h3>
                        <p className="text-center font-poppins font-normal text-[10px] leading-[15px] text-off-grey">Set your preferences</p>
                        </div>
                        </div>
                        
                      </div>
                      <div className="relative p-12 flex-auto">
                        <form className="flex flex-row  px-3 pt-1 w-full">
                          <div>
                            <h3 className="font-poppins text-[20px] leading-[30px] font-medium text-off-grey">Email Notifications</h3>
                            <p className="font-poppins text-[10px] leading-[15px] font-normal text-off-black">Receive email notifications of missed tasks and scheduled tasks</p>
                          </div>
                          <Toggle/>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            <span className='text-sm'>Clara Mary</span>
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className='rounded-full w-[24px] h-[24px]' alt="" />
            <IoIosArrowDown size={20} />
        </div>
    </div>
  )
}

export default Navbar