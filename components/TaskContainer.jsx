import React from "react";
import { RiArrowDownSLine, RiCheckboxBlankCircleFill } from "react-icons/ri";
import pencil from "../assets/pencil.svg";
import Image from 'next/image';
import metamask from "../assets/metamask.svg";
import ScheduleTask from "./Modal/ScheduleTask";

const style = {
  wrapper: `flex flex-col md:flex-row mt-[30px] px-[10px] md:pl-[40px] md:pr-[40px]`,
  TaskContainer: `bg-[#FFF8F8] w-full md:w-3/5 mx-auto mb-[15px] md:mr-[10px] shadow-container rounded-[8.77px]`,
  assetContainer: `bg-[#FFF8F8] w-full md:w-2/5 mx-auto md:ml-[10px] shadow-container rounded-[8.77px]`,
};
const TaskContainer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.TaskContainer}>
        <div className="flex justify-between pt-8 pb-5 px-5">
          <h1 className="flex text-[#9E2F92] font-semibold text-[20px] leading-[30px] font-poppins">
            Current Task List{" "}
            <span>
              <div className="ml-[10px]">
              <Image width="37" height="36.68" className="ml-5" src={pencil} alt="pencil icon" />
              </div>
            </span>{" "}
          </h1>
          <div className="flex">

          </div>
          <h1 className="flex text-[#A22C90] text-[14px] leading-[21px] font-medium font-poppins">
            View all{" "}
            <span>
              <RiArrowDownSLine className="ml-3" />
            </span>
          </h1>
        </div>
        <div className="w-full mx-auto">
          <div className="bg-light-pink rounded-box flex justify-between p-[20px]">
            <span className="text-[#A8278C] text-[14px] leading-[21px] font-medium font-poppins px-[10px] ">
              Task ID
            </span>
            <span className="text-[#A8278C] text-[14px] leading-[21px] font-medium font-poppins px-[10px] ">
              Target Address
            </span>
            <span className="text-[#A8278C] text-[14px] leading-[21px] font-medium font-poppins px-[10px] ">
              Trigger
            </span>
            <span className="text-[#A8278C] text-[14px] leading-[21px] font-medium font-poppins px-[10px] ">
              Status
            </span>
          </div>
          <div className="bg-white  flex justify-between p-4 mb-2">
            <span className="text-[14px] leading-[21px] font-medium text-off-grey font-poppins flex">
              {" "}
              <span>
                <RiCheckboxBlankCircleFill
                  className="mr-2"
                  color="#1E9940"
                  fill="#1E9940"
                  stroke="#1E9940"
                />
              </span>
              Send 0.24 eth daily
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-off-grey font-poppins">
            0x71C7656EC7ab88b0...
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#A8278C] font-poppins">
              Time
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#1E9940] font-poppins">
              Running
            </span>
          </div>
          <div className="bg-white  flex justify-between p-4 mb-2">
            <span className="text-[14px] leading-[21px] font-medium text-off-grey font-poppins flex">
              {" "}
              <span>
                <RiCheckboxBlankCircleFill
                  className="mr-2"
                  color="#E81C1C"
                  fill="#E81C1C"
                  stroke="#E81C1C"
                />
              </span>
              Buy 0.24 eth daily{" "}
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-off-grey font-poppins">
              0x71C7656EC7ab88b0...
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#A8278C] font-poppins">
              Time
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#E81C1C] font-poppins">
              Stopped
            </span>
          </div>
          <div className="bg-white  flex justify-between p-4 mb-2">
            <span className="text-[14px] leading-[21px] font-medium text-off-grey font-poppins flex">
              {" "}
              <span>
                <RiCheckboxBlankCircleFill
                  className="mr-2"
                  color="#CC7F0C"
                  fill="#CC7F0C"
                  stroke="#CC7F0C"
                />
              </span>
              Send 0.24 eth daily{" "}
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-off-grey font-poppins">
            0x71C7656EC7ab88b0...
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#A8278C] font-poppins">
              Time
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#CC7F0C] font-poppins">
              Pending
            </span>
          </div>
          <div className="bg-white  flex justify-between p-4 mb-2">
            <span className="text-[14px] leading-[21px] font-medium text-off-grey font-poppins flex">
              {" "}
              <span>
                <RiCheckboxBlankCircleFill
                  className="mr-2"
                  color="#1E9940"
                  fill="#1E9940"
                  stroke="#1E9940"
                />
              </span>
              Send 0.24 eth daily
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-off-grey font-poppins">
            0x71C7656EC7ab88b0...
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#A8278C] font-poppins">
              Time
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#1E9940] font-poppins">
              Paused
            </span>
          </div>
          <div className="bg-white  flex justify-between p-4 mb-2">
            <span className="text-[14px] leading-[21px] font-medium text-off-grey font-poppins flex">
              {" "}
              <span>
                <RiCheckboxBlankCircleFill
                  className="mr-2"
                  color="#1E9940"
                  fill="#1E9940"
                  stroke="#1E9940"
                />
              </span>
              Send 0.24 eth daily
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-off-grey font-poppins">
            0x71C7656EC7ab88b0...
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#A8278C] font-poppins">
              Time
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#1E9940] font-poppins">
              Paused
            </span>
          </div>
        </div>
        <ScheduleTask/>
      </div>
      <div className={style.assetContainer}>
        <div className="flex justify-between pt-8 pb-5 px-5">
          <h1 className="flex text-[#9E2F92] font-semibold text-[20px] leading-[30px] font-poppins">
            Assets{" "}
          </h1>
          <h1 className="flex text-[#A22C90] text-[14px] leading-[21px] font-medium font-poppins">
            View all{" "}
            <span>
              <RiArrowDownSLine className="ml-3" />
            </span>
          </h1>
        </div>
        <div className="w-full mx-auto">
          <div className="bg-light-pink rounded-box flex justify-between p-[20px]">
            <span className="text-[#A8278C] text-[14px] leading-[21px] font-medium font-poppins px-[10px] ">
              Wallet Type
            </span>
            <span className="text-[#A8278C] text-[14px] leading-[21px] font-medium font-poppins px-[10px] ">
              Amount
            </span>
            <span className="text-[#A8278C] text-[14px] leading-[21px] font-medium font-poppins px-[10px] ">
              Cost
            </span>
          </div>
          <div className="bg-white  flex justify-between p-4 ">
            <span className="text-[12px] leading-[18px] font-normal text-[#3a3737] font-poppins flex">
              {" "}
              <div className="mr-[12px]">
              <span>
                <Image src={metamask} width="28"  height="27" className="mr-4" alt="metamask icon" />
              </span>
              </div>
              Metamask
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              20.36 ETH
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              $2,435
            </span>
          </div>
          <div className="bg-white  flex justify-between p-4 ">
            <span className="text-[12px] leading-[18px] font-normal text-[#3a3737] font-poppins flex">
              {" "}
              <div className="mr-[12px]">
              <span>
                <Image src={metamask} width="28"  height="27" className="mr-4" alt="metamask icon" />
              </span>
              </div>
              Metamask
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              20.36 ETH
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              $2,435
            </span>
          </div>
          <div className="bg-white  flex justify-between p-4 ">
            <span className="text-[12px] leading-[18px] font-normal text-[#3a3737] font-poppins flex">
              {" "}
              <div className="mr-[12px]">
              <span>
                <Image src={metamask} width="28"  height="27" className="mr-4" alt="metamask icon" />
              </span>
              </div>
              Metamask
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              20.36 ETH
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              $2,435
            </span>
          </div>
          <div className="bg-white  flex justify-between p-4 ">
            <span className="text-[12px] leading-[18px] font-normal text-[#3a3737] font-poppins flex">
              {" "}
              <div className="mr-[12px]">
              <span>
                <Image src={metamask} width="28"  height="27" className="mr-4" alt="metamask icon" />
              </span>
              </div>
              Metamask
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              20.36 ETH
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              $2,435
            </span>
          </div>
          <div className="bg-white  flex justify-between p-4 ">
            <span className="text-[12px] leading-[18px] font-normal text-[#3a3737] font-poppins flex">
              {" "}
              <div className="mr-[12px]">
              <span>
                <Image src={metamask} width="28"  height="27" className="mr-4" alt="metamask icon" />
              </span>
              </div>
              Metamask
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              20.36 ETH
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              $2,435
            </span>
          </div>
          <div className="bg-white  flex justify-between p-4 ">
            <span className="text-[12px] leading-[18px] font-normal text-[#3a3737] font-poppins flex">
              {" "}
              <div className="mr-[12px]">
              <span>
                <Image src={metamask} width="28"  height="27" className="mr-4" alt="metamask icon" />
              </span>
              </div>
              Metamask
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              20.36 ETH
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              $2,435
            </span>
          </div>
          <div className="bg-white  flex justify-between p-4 ">
            <span className="text-[12px] leading-[18px] font-normal text-[#3a3737] font-poppins flex">
              {" "}
              <div className="mr-[12px]">
              <span>
                <Image src={metamask} width="28"  height="27" className="mr-4" alt="metamask icon" />
              </span>
              </div>
              Metamask
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              20.36 ETH
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              $2,435
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskContainer;
