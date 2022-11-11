import React, { useCallback } from 'react'
import Followed from './Misc/Followed';


export default function Sidenav({ streams, users }: any) {


    return (

        <div className="w-20 lg:w-96 bg-[#1f1f23] h-full flex-shrink-0 text-[#efeff1]" >
            <div className='h-full'>
                    <div className='h-full flex relative z-0 flex-grow max-h-full overflow-x-hidden'>
                        <div className='pr-[17px] mb-0 pb-0 max-h-[inherit] box-content min-w-full overflow-x-hidden overflow-y-scroll'>
                            <div>
                                <div className='mr-[-17px] mb-0 pb-0 overflow-x-hidden relative box-border min-h-full overflow-y-hidden'>
                                    {/*  */}
                                    <div className='hidden lg:inline-flex transition-transform duration-[0.25s] w-20  justify-center mt-2 mb-2 pt-2 pb-2 absolute top-0 right-0 flex-grow-0 flex-shrink-0 z-[10]'>
                                        <div className='inline-flex'>
                                            <button className="hover:bg-[hsla(0,0%,100%,.2)] inline-flex items-center justify-center select-none rounded-[0.4rem] h-12 w-12 bg-transparent text-[#efeff1] relative align-middle overflow-hidden no-underline whitespace-nowrap font-semibold text-[1.3rem] bg-none border-none" data-test-selector="side-nav__visibility-toggle" aria-label="Zwiń boczną nawigację" data-a-target="side-nav-arrow">
                                                <div className='w-8 h-8'>
                                                    <div className='inline-flex items-center h-full w-full'>
                                                        <div className='relative w-full overflow-hidden'>
                                                            <div className='pb-[100%]'></div>
                                                            <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className='absolute left-0 w-full min-h-full top-0 fill-current'>
                                                                <g>
                                                                    <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <nav>
                                            <div className='flex flex-col justify-between flex-grow flex-shrink-0'>
                                                {/*  */}
                                                <div>
                                                    <div className='flex flex-col'>

                                                        <div className='m-4 pt-2 hidden lg:inline-flex'>
                                                            <h2 className='text-[1.3rem] font-semibold uppercase leading-[1.2]'>
                                                                Polecane kanały:
                                                            </h2>
                                                        </div>
                                                        <div className="inline-flex lg:hidden w-[5rem]">
                                                            <div className="text-[#adadb8] flex flex-wrap justify-center items-center flex-grow pt-4 pb-4" data-a-target="side-nav-header-collapsed" aria-describedby="KWevno2gGt2KiAu18ZvkPPXrcY6ESQTU">
                                                                <figure className="items-center inline-flex">
                                                                    <svg type="color-fill-current" width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="fill-current">
                                                                        <g>
                                                                            <path fillRule="evenodd" d="M12.002 3.999a2 2 0 012 2v2L18 6v8l-3.998-2v2a2 2 0 01-2 1.999h-8a2 2 0 01-2-2V6a2 2 0 012-2h8zM12 6H4v8h8V6z" clipRule="evenodd"></path>
                                                                        </g>
                                                                    </svg>
                                                                </figure>
                                                            </div>
                                                        </div>

                                                        <div className='relative'>
                                                            <Followed streams={streams} users={users} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

    )
}
function useResizeDetector(arg0: { onResize: any; }): { ref: any; width: any; height: any; } {
    throw new Error('Function not implemented.');
}

