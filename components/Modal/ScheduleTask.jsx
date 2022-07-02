import React, { useState } from "react";
import { RiAddFill } from 'react-icons/ri';
import scheduleIcon from '../../assets/scheduleIcon.svg';

const ScheduleTask = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex justify-end place-content-center mb-[30px] mt-5 mr-5">
          <button className="p-[15px] font-poppins font-semibold text-[16.09px] leading-[24.1px] text-[#ffffff] bg-[#A22C90] shadow-button rounded-[19.636px] flex"
          type="button"
          onClick={() => setShowModal(true)}
          >
            Schedule new task
            <span>
                <RiAddFill className="mt-1 ml-3 text-lg font-bold"/>
            </span>
          </button>
        </div>
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
                  <img src={scheduleIcon} className="px-2" width={76} alt="schedule Icon" />
                  <div>
                  <h3 className="text-center font-poppins font-semibold text-[30px] leading-[45px] text-[#3A3737]">Schedule New Task</h3>
                  <p className="text-center font-poppins font-normal text-[15px] leading-[22px] text-off-grey">Create events for the future</p>
                  </div>
                  </div>
                  
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="  px-3 pt-1 w-full">
                    <label className="block text-[#3A3737] text-poppins text-[13.0127px] leading-[20px] font-normal mb-1">
                    Your wallet address
                    </label>
                    <input type='text' placeholder="Input your wallet address" className="appearance-none rounded-[5px] w-full py-2 px-3 text-[13.0127px] leading-[20px] bg-[#E3E3E3] text-placeholder-grey mb-3" />
                    <label className="block text-[#3A3737] text-poppins text-[13.0127px] leading-[20px] font-normal mb-1">
                     Set a date  
                    </label>
                    <input type='date' placeholder="Set a date for task" className="appearance-none  focus:outline-none rounded-[5px] w-full py-2 px-3 text-[13.0127px] leading-[20px] bg-[#E3E3E3] text-placeholder-grey mb-3" />
                    <label className="block text-[#3A3737] text-poppins text-[13.0127px] leading-[20px] font-normal mb-1">
                    Set a time
                    </label>
                    <input type='time' placeholder="Set a time for task" className="appearance-none rounded-[5px] w-full py-2 px-3 text-[13.0127px] leading-[20px] bg-[#E3E3E3] text-placeholder-grey mb-3"/>
                    <label className="block text-[#3A3737] text-poppins text-[13.0127px] leading-[20px] font-normal mb-1">
                    Message
                    </label>
                    <input type='text' placeholder="e.g Send 10 eth daily" className="appearance-none rounded-[5px] w-full py-2 px-3 text-[13.0127px] leading-[20px] bg-[#E3E3E3] text-placeholder-grey mb-3"/>
                  </form>
                </div>
                <div className="flex items-center justify-center px-6 pt-1 pb-6 rounded-b">
                  <button
                    className="p-[15px] font-poppins font-semibold text-[18.09px] leading-[24.1px] text-[#ffffff] bg-[#A22C90] shadow-button rounded-[19.636px] flex justify-center w-2/3 text-center"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Schedule Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ScheduleTask;