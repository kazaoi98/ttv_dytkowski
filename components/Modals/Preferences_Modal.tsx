import React from 'react'
import ReactDOM from 'react-dom';
/* import SimpleBarReact from "simplebar-react"; */

/* import "simplebar/src/simplebar.css"; */


type Props = {
    open: boolean;
}

export default function Preferences_Modal({ open }: Props) {
    if (!open) return null

    return ReactDOM.createPortal(
        <>
            <div className='fixed top-0 left-0 w-[1px] h-[1px] z-[9999]'>
                <div>
                    <div className='absolute top-0 right-auto bottom-auto left-0 translate-x-[1717px] translate-y-[50px]'>
                        <div className='transition transition-none duration-150 ease-in opacity-100'>
                            <div>
                                <div className='inline-block max-w-[90vw] min-w-0 whitespace-nowrap rounded-[0.6rem] bg-[#1f1f23] shadow-[0_4px_8px_rgba(0,0,0,.4),0_0px_4px_rgba(0,0,0,.4)] text-[#efeff1]'>
                                    <div className='overflow-hidden'>
                                        <div className='relative'>
                                            <div className='transition-transform ease-in transition-none opacity-100 translate-x-0'>
                                                <div className='max-h-[calc(100vh-5rem)] h-full relative flex overflow-hidden z-0'> {/* simplebar */}
                                                    <div className='pr-[17px] mb-[-34px] max-h-[inherit] box-content min-w-full overflow-x-hidden overflow-y-scroll'>
                                                        <div className='pb-[17px] mr-[-17px] box-border min-h-full overflow-x-scroll overflow-y-hidden'>
                                                            <div className='p-4'>
                                                                <div className="relative w-full">
                                                                    <button className="hover:bg-[hsla(0,0%,100%,.2)] rounded-[0.4rem] block w-full text-inherit bg-none border-none" data-a-target="language-dropdown-link" data-test-selector="user-menu-dropdown__language-link">
                                                                        <div className="flex items-center relative p-2">
                                                                            <div className="flex items-center pr-2 shrink-0">
                                                                                <div className="flex items-center">
                                                                                    <div className="inline-flex items-center h-8 w-8">
                                                                                        <div className="relative w-full overflow-hidden">
                                                                                            <div className="pb-[100%]"></div>
                                                                                            <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="absolute left-0 w-full min-h-full top-0 fill-current">
                                                                                                <g>
                                                                                                    <path fillRule="evenodd" d="M10 2c4.415 0 8 3.585 8 8s-3.585 8-8 8-8-3.585-8-8 3.585-8 8-8zm5.917 9a6.015 6.015 0 01-3.584 4.529A10 10 0 0013.95 11h1.967zm0-2a6.015 6.015 0 00-3.584-4.529A10 10 0 0113.95 9h1.967zm-3.98 0A8.002 8.002 0 0010 4.708 8.002 8.002 0 008.063 9h3.874zm-3.874 2A8.002 8.002 0 0010 15.292 8.002 8.002 0 0011.937 11H8.063zM6.05 11a10 10 0 001.617 4.529A6.014 6.014 0 014.083 11H6.05zm0-2a10 10 0 011.617-4.529A6.014 6.014 0 004.083 9H6.05z" clipRule="evenodd"></path>
                                                                                                </g>
                                                                                            </svg>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex-grow">Język</div>
                                                                            <div className="flex items-center ml-8 flex-shrink-0">
                                                                                <figure className="inline-flex items-center">
                                                                                    <svg width="2rem" height="2rem" viewBox="0 0 20 20" fill="currentColor">
                                                                                        <path d="M6.5 5.5 11 10l-4.5 4.5L8 16l6-6-6-6-1.5 1.5z"></path>
                                                                                    </svg>
                                                                                </figure>
                                                                            </div>
                                                                        </div>
                                                                    </button>
                                                                </div>

                                                                <div>
                                                                    <div className='p-2'>
                                                                        <div className="flex items-center">
                                                                            <div className="flex-shrink-0 pr-2">
                                                                                <div className="flex items-center">
                                                                                    <div className="inline-flex items-center h-8 w-8">
                                                                                        <div className="relative w-full overflow-hidden">
                                                                                            <div className="pb-[100%]"></div>
                                                                                            <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="absolute left-0 w-full min-h-full top-0 fill-current">
                                                                                                <g>
                                                                                                    <path fillRule="evenodd" d="M8.614 2.134a8.001 8.001 0 001.388 15.879 8.003 8.003 0 007.884-6.635 6.947 6.947 0 01-2.884.62 7.004 7.004 0 01-6.388-9.864zM6.017 5.529a5.989 5.989 0 00-2.015 4.484c0 3.311 2.69 6 6 6a5.99 5.99 0 004.495-2.028 9.006 9.006 0 01-8.48-8.456z" clipRule="evenodd"></path>
                                                                                                </g>
                                                                                            </svg>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <label className="cursor-pointer flex-grow mr-8">Ciemny motyw</label>
                                                                            {/* <div className="flex relative flex-col leading-8" data-a-target="dark-mode-toggle" data-test-selector="user-menu__dark-mode-toggle">
                                                                        <input className="absolute opacity-0" type="checkbox" data-a-target="tw-toggle" ></input>
                                                                        <label className="border-[#a970ff] bg-black inline-block relative order-[0] w-[3.5rem] h-8 cursor-pointer align-bottom border-[2px] border-solid rounded-4 transition-[background-color] ease-in duration-100"></label>
                                                                    </div> */}
                                                                            <label htmlFor="default-toggle-size" className="flex relative flex-col leading-8 ">
                                                                                <input type="checkbox" value="" id="default-toggle-size" className="sr-only peer"></input>
                                                                                <div className="inline-block relative order-[0]  align-bottom border-[2px] border-solid transition-[background-color]  duration-100 border-black cursor-pointer w-[3.5rem] h-8 rounded-full peer peer-checked:after:translate-x-[15px] peer-checked:after:bg-[#a970ff] peer-checked:border-[#a970ff] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-black  after:rounded-full after:h-[1.2rem] after:w-[1.2rem] after:transition-all after:duration-75 after:ease-in peer-checked:bg-black peer-checked:before:border-t-0 peer-checked:before:border-r-0 peer-checked:before:border-b-2 peer-checked:before:border-l-2 peer-checked:before:border-[#a970ff] peer-checked:before:border-solid peer-checked:before:block peer-checked:before:absolute peer-checked:before:top-[0.7rem] peer-checked:before:left-[0.8rem] peer-checked:before:w-[0.9rem] peer-checked:before:h-[0.5rem] peer-checked:before:translate-x-[-50%] peer-checked:before:translate-y-[-50%] peer-checked:before:rotate-[-45deg] peer-checked:before:conent"></div>
                                                                                
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('preferences_portal')!
    )
}