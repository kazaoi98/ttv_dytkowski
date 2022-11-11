import React from 'react'

export default function Sort_element() {
    return (
        <div className='flex'>
            <div className='flex-grow-0 flex-shrink-0 pr-2 self-center'>
                <label className='text-[#f7f7f8] font-semibold text-[1.3rem]'>
                    Sortuj według
                </label>
            </div>
            <div className='ml-2'>
                <div className='relative [display:inherit]'>
                    <button className='hover:border-[hsla(0,0%,100%,.3)] hover:no-underline hover:cursor-pointer border-[hsla(0,0%,100%,.2)] border-solid border-[2px] bg-[hsla(0,0%,100%,.2)] bg-clip-padding text-[#efeff1] transition-[box-shadow] duration-100 ease-in font-normal inline-flex relative items-center justify-center align-middle overflow-hidden no-underline whitespace-nowrap select-none rounded-[0.4rem] text-[1.3rem] h-12'>
                        <div className='flex items-center flex-grow pt-0 pb-0 pl-4 pr-[calc(1rem-0.2rem)]'>
                            <div className='flex-grow flex items-center justify-center'>
                                <div className='flex items-center'>
                                    Polecane dla Ciebie
                                </div>
                            </div>
                            <div className='ml-2 flex items-center'>
                                <div className='inline-flex items-center w-8'>
                                    <figure className='inline-flex items-center'>
                                        <svg width="100%" height="100%" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M14.5 6.5 10 11 5.5 6.5 4 8l6 6 6-6-1.5-1.5z"></path>
                                        </svg>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}