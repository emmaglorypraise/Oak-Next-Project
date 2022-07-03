import React from 'react';
import { RiArrowUpLine, RiArrowDownLine } from 'react-icons/ri';
import Image from 'next/image';
import Piechart from '../utils/Piechart';
import bitcoin from '../assets/bitcoin.svg';
import ethereum from '../assets/ethereum.svg';
import usdt from '../assets/usdt.svg';
import WalletTransfer from "./Modal/WalletTransfer.jsx";

const ChartContainer = () => {
    return (
        <div className='flex w-full  px-[10px] md:pl-[40px] md:pr-[40px] font-poppins'>
            <div className="w-full md:w-2/2 flex flex-col md:flex-row gap-[12px] bg-[#FFF2FC] rounded-lg shadow-container py-[20px] px-[30px]">

                <div className='md:border-r-[0.88px] md:border-r-[#C1C1C1] md:border-solid'>
                    <div className='flex flex-col gap-[20px]'>
                        <h3 className='text-[#9E2F92] text-lg font-semibold '>Porfolio</h3>
                        <span className='text-[#3A3737] text-xs font-medium'>Total balance</span>
                        <span className='text-[#676565] font-semibold text-2xl'>USD 50,345.28</span>
                    </div>
                    <div className='flex pt-[70px] pb-[36px]'>
                        <div className='p-[16px] border-r-[0.88px] left-0 border-r-[#C1C1C1] border-solid flex flex-col'>
                            <div className='flex'>
                            <RiArrowUpLine color='#1E9940' fill='#1E9940' stroke='#1E9940'/>
                            <span className='text-[#3A373799] font-medium text-xs'>Income</span>
                            </div>
                            <span className='pt-[6px] text-[#676565] font-semibold text-sm'>USD 50,345.28</span>
                        </div>
                        <div className='p-[16px] flex flex-col'>
                            <div className='flex'>
                            <RiArrowDownLine color='#F33030' fill='#F33030' stroke='#F33030' />
                            <span className='text-[#3A373799] font-medium text-xs'>Expenses</span>
                            </div>
                            <span className='pt-[6px] text-[#676565] font-semibold text-sm'>USD 50,345.28</span>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col'>
                    <div className='flex flex-col md:flex-row justify-between'>
                    <div className="flex flex-col justify-center w-full :w-1/3 ml-[20px]">
                        <h3 className='text-[#9E2F92] text-lg font-semibold mr-[250px] text-center'>Wallet</h3>
                        <div className='flex justify-start'> 
                            <Piechart />
                        </div>
                    </div>

                    <div className='flex flex-col justify-center w-full md:w-2/3'>

                        <span className='text-end font-poppins text-[10.5274px] leading-[16px]'>3 currencies</span>
                        <div className='bg-[#F4F1F1] rounded-lg mt-[7px] ml-[21px] mr-[12px] mb-[18px] flex'>
                            <div className='p-[20px] w-full'>
                                <div className='flex justify-between mb-4 mr-auto w-full'>
                                    <div className='flex'>
                                        <div className='mr-[10px]'>
                                        <Image src={bitcoin} width="17.55"  height="17.55" className='mb-[10px] mr-[10px]'  alt="bitcoin" />
                                        </div>
                                    <div>
                                        <p className='font-poppins font-semibold text-[14.036px] leading-[21px] text-[off-black]'>BTC</p>
                                        <p className='font-poppins font-normal text-[8.77285px] leading-[13px] text-[off-grey]'>Bitcoin</p>
                                    </div>
                                    </div>
                                    <div className='flex'>
                                        
                                        <RiArrowUpLine color='#1E9940' fill='#1E9940' stroke='#1E9940'/>
                                        <p className='font-poppins font-normal text-[10.5274px] leading-[16px] text-[#1E9940]'>13.4%</p>
                                    </div>
                                </div>
                                <div className='flex justify-between mb-4 mr-auto w-full'>
                                <div className='flex'>
                                    <div className='mr-[10px]'>
                                    <Image src={ethereum} width="17.55"  height="17.55" className='mb-[10px] mr-[10px]'  alt="ethereum" />
                                    </div>
                                    <div>
                                        <p className='font-poppins font-semibold text-[14.036px] leading-[21px] text-[off-black]'>ETH</p>
                                        <p className='font-poppins font-normal text-[8.77285px] leading-[13px] text-[off-grey]'>Ethereum</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    
                                        <RiArrowUpLine color='#1E9940' fill='#1E9940' stroke='#1E9940'/>
                                        <p className='font-poppins font-normal text-[10.5274px] leading-[16px] text-[#1E9940]'>13.4%</p>
                                </div>
                                </div>
                                <div className='flex justify-between mb-4 mr-auto w-full'>
                                <div className='flex'>
                                    <div className='mr-[10px]'>
                                    <Image src={usdt} width="17.55"  height="17.55" className='mb-[10px] mr-[10px]'  alt="usdt" />
                                    </div>
                                    <div>
                                            <p className='font-poppins font-semibold text-[14.036px] leading-[21px] text-[off-black]'>USDT</p>
                                            <p className='font-poppins font-normal text-[8.77285px] leading-[13px] text-[off-grey]'>Tether</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    
                                        <RiArrowUpLine color='#1E9940' fill='#1E9940' stroke='#1E9940'/>
                                        <p className='font-poppins font-normal text-[10.5274px] leading-[16px] text-[#1E9940]'>13.4%</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>

                   <WalletTransfer />

                </div>
                
            </div>
            {/* <div className="w-1/2 ml-[10px] flex gap-[12px] bg-[#FFF2FC] rounded-lg shadow-container py-[20px] px-[30px]">

<div className='border-r-[0.88px] border-r-[#C1C1C1] border-solid'>
    <div className='flex flex-col gap-[20px]'>
        <h3 className='text-[#9E2F92] text-lg font-semibold '>Porfolio</h3>
        <span className='text-[#3A3737] text-xs font-medium'>Total balance</span>
        <span className='text-[#676565] font-semibold text-2xl'>USD 50,345.28</span>
    </div>
    <div className='flex pt-[70px] pb-[36px]'>
        <div className='p-[16px] border-r-[0.88px] left-0 border-r-[#C1C1C1] border-solid flex flex-col'>
            <div className='flex'>
            <RiArrowUpLine color='#1E9940' fill='#1E9940' stroke='#1E9940'/>
            <span className='text-[#3A373799] font-medium text-xs'>Income</span>
            </div>
            <span className='pt-[6px] text-[#676565] font-semibold text-sm'>USD 50,345.28</span>
        </div>
        <div className='p-[16px] flex flex-col'>
            <div className='flex'>
            <RiArrowDownLine color='#F33030' fill='#F33030' stroke='#F33030' />
            <span className='text-[#3A373799] font-medium text-xs'>Expenses</span>
            </div>
            <span className='pt-[6px] text-[#676565] font-semibold text-sm'>USD 50,345.28</span>
        </div>
    </div>

</div>

<div className='flex flex-col'>
    <div className='flex justify-between'>
    <div className="flex flex-col justify-center w-1/3 ml-[20px]">
        <h3 className='text-[#9E2F92] text-lg font-semibold mr-[250px] text-center'>Wallet</h3>
        <div className='flex justify-start'> 
            <Piechart />
        </div>
    </div>

    <div className='flex flex-col justify-center w-2/3'>

        <span className='text-end font-poppins text-[10.5274px] leading-[16px]'>3 currencies</span>
        <div className='bg-[#F4F1F1] rounded-lg mt-[7px] ml-[21px] mr-[12px] mb-[18px] flex'>
            <div className='p-[20px] w-full'>
                <div className='flex justify-between mb-4 mr-auto w-full'>
                    <div className='flex'>
                    <img src={bitcoin} className='mb-[10px] mr-[10px]'  alt="bitcoin" />
                    <div>
                        <p className='font-poppins font-semibold text-[14.036px] leading-[21px] text-[off-black]'>BTC</p>
                        <p className='font-poppins font-normal text-[8.77285px] leading-[13px] text-[off-grey]'>Bitcoin</p>
                    </div>
                    </div>
                    <div className='flex'>
                        
                        <RiArrowUpLine color='#1E9940' fill='#1E9940' stroke='#1E9940'/>
                        <p className='font-poppins font-normal text-[10.5274px] leading-[16px] text-[#1E9940]'>13.4%</p>
                    </div>
                </div>
                <div className='flex justify-between mb-4 mr-auto w-full'>
                <div className='flex'>
                    <img src={ethereum} className='mb-[10px] mr-[10px]'  alt="ethereum" />
                    <div>
                        <p className='font-poppins font-semibold text-[14.036px] leading-[21px] text-[off-black]'>ETH</p>
                        <p className='font-poppins font-normal text-[8.77285px] leading-[13px] text-[off-grey]'>Ethereum</p>
                    </div>
                </div>
                <div className='flex'>
                    
                        <RiArrowUpLine color='#1E9940' fill='#1E9940' stroke='#1E9940'/>
                        <p className='font-poppins font-normal text-[10.5274px] leading-[16px] text-[#1E9940]'>13.4%</p>
                </div>
                </div>
                <div className='flex justify-between mb-4 mr-auto w-full'>
                <div className='flex'>
                    <img src={usdt} className='mb-[10px] mr-[10px]'  alt="usdt" />
                    <div>
                            <p className='font-poppins font-semibold text-[14.036px] leading-[21px] text-[off-black]'>USDT</p>
                            <p className='font-poppins font-normal text-[8.77285px] leading-[13px] text-[off-grey]'>Tether</p>
                    </div>
                </div>
                <div className='flex'>
                    
                        <RiArrowUpLine color='#1E9940' fill='#1E9940' stroke='#1E9940'/>
                        <p className='font-poppins font-normal text-[10.5274px] leading-[16px] text-[#1E9940]'>13.4%</p>
                </div>
                </div>
            </div>
        </div>
    </div>

    </div>

    <div className='flex justify-center place-content-center mb-[30px]'>
        <button className='p-[15px] font-poppins font-semibold text-[16.09px] leading-[24.1px] text-[#ffffff] bg-[#A22C90] shadow-button rounded-[19.636px]'>Make wallet tranfer</button>
    </div>

</div>

            </div> */}

        </div>
    )
}

export default ChartContainer