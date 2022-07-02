import React from "react";
import {  RiCheckboxBlankCircleFill } from "react-icons/ri";
import FullCalendar from './MainCalender.jsx'
import ScheduleTask from "./Modal/ScheduleTask";

const style = {
  wrapper: `flex mt-[30px] pl-[40px] pr-[40px]`,
  TaskContainer: `bg-[#F4F1F1] w-4/5 mr-[10px] shadow-task  rounded-[10px]`,
  assetContainer: `bg-[#F4F1F1] w-1/5 ml-[10px] shadow-task rounded-[8.42227px]`,
};

const CalenderBox = () => {
  
  return (
    <div className={style.wrapper}>
      <div className={style.TaskContainer}>
       <FullCalendar defaultView='dayGridMonth' />
        <ScheduleTask/>
      </div>
      <div className={style.assetContainer}>
        <div className="flex justify-between pt-8 pb-5 px-5">
          <h1 className="flex text-[#9E2F92] font-semibold text-[20px] leading-[30px] font-poppins">
          Upcoming Tasks
          </h1>
        </div>
        <div className="w-full mx-auto">
          <div className="bg-white w-[90%] rounded-[8.42227px] mx-auto flex justify-start p-4 mb-2 ">
              <span>
                <RiCheckboxBlankCircleFill
                  className="mr-2"
                  color="#E81C1C"
                  fill="#E81C1C"
                  stroke="#E81C1C"
                />
              </span>
              <div className="w-full">
                <p className="font-poppins font-medium text-[10.106px] leading-[15px] text-[#5F859F]">10am, June 3rd, 2022
                </p>
                <p className="font-poppins font-semibold text-[15.1601px] leading-[23px] text-[#3A3737}">Send 20 eth to wallet 
                </p>
                <p className="font-poppins font-normal text-[10.1067px] leading-[15px] text-[#3A3737}">0x71C7656EC7ab88b098defB751B7401
                </p>
              </div>
          </div>
          <div className="bg-white w-[90%] rounded-[8.42227px] mx-auto flex justify-start p-4 mb-2">
              <span>
                <RiCheckboxBlankCircleFill
                  className="mr-2"
                  color="#A9CF54"
                  fill="#A9CF54"
                  stroke="#A9CF54"
                />
              </span>
              <div className="w-full">
                <p className="font-poppins font-medium text-[10.106px] leading-[15px] text-[#5F859F]">10am, June 3rd, 2022
                </p>
                <p className="font-poppins font-semibold text-[15.1601px] leading-[23px] text-[#3A3737}">Send 20 eth to wallet 
                </p>
                <p className="font-poppins font-normal text-[10.1067px] leading-[15px] text-[#3A3737}">0x71C7656EC7ab88b098defB751B7401
                </p>
              </div>
          </div>
          <div className="bg-white w-[90%] rounded-[8.42227px] mx-auto flex justify-start p-4 mb-2">
              <span>
                <RiCheckboxBlankCircleFill
                  className="mr-2"
                  color="#A9CF54"
                  fill="#A9CF54"
                  stroke="#A9CF54"
                />
              </span>
              <div className="w-full">
                <p className="font-poppins font-medium text-[10.106px] leading-[15px] text-[#5F859F]">10am, June 3rd, 2022
                </p>
                <p className="font-poppins font-semibold text-[15.1601px] leading-[23px] text-[#3A3737}">Send 20 eth to wallet 
                </p>
                <p className="font-poppins font-normal text-[10.1067px] leading-[15px] text-[#3A3737}">0x71C7656EC7ab88b098defB751B7401
                </p>
              </div>
          </div>
          <div className="bg-white w-[90%] rounded-[8.42227px] mx-auto flex justify-start p-4 mb-2">
              <span>
                <RiCheckboxBlankCircleFill
                  className="mr-2"
                  color="#A9CF54"
                  fill="#A9CF54"
                  stroke="#A9CF54"
                />
              </span>
              <div className="w-full">
                <p className="font-poppins font-medium text-[10.106px] leading-[15px] text-[#5F859F]">10am, June 3rd, 2022
                </p>
                <p className="font-poppins font-semibold text-[15.1601px] leading-[23px] text-[#3A3737}">Send 20 eth to wallet 
                </p>
                <p className="font-poppins font-normal text-[10.1067px] leading-[15px] text-[#3A3737}">0x71C7656EC7ab88b098defB751B7401
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalenderBox;
