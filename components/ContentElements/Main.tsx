'use client';

import React, { useState } from 'react'
import Card from './Misc/Card';
import Game_card from './Misc/Game_card';
import Category_card from './Misc/Category_card';
import Carousel from './Misc/Carousel';


type Props = {}

export default function Main({ topGames, streams, users, tags }: any) {

  /* const cardStyles = "flex min-w-full list-none mx-[-0.5rem] my-0" */
  const hideStyles = "flex-grow-0 pl-4 pr-4"

  /* const [style, setStyle] = useState(cardStyles) */
  const [hide, setHide] = useState(hideStyles)
  const [max, setMax] = useState(5)

  const applyStyles = () => {
    /* setStyle(cardStyles + ' flex-wrap') */
    setHide('hidden')
    setMax(10)
  }




  return (
    <>
      <div className='h-full'>
        
        <Carousel streams={streams} users={users} />

        <div className='ml-12 mr-12'>
          <div className='mx-auto my-0 max-w-[200rem]'>
            <section className='block '>
              <div className='relative mt-12 mb-12'>
                <div className='pb-20 '>

                  <div>
                    <div className='relative'>

                      <div className='pb-4 flex justify-between visible'>
                        <h2 className='font-roboto leading-[1.2] text-[1.8rem] font-medium text-[#efeff1]'>
                          <span>
                            Kanały na żywo
                          </span>
                          <span>
                            , które mogą Ci się spodobać
                          </span>
                        </h2>
                      </div>

                      <div>
                        <div className='relative'>
                          <div className="flex flex-wrap min-w-full list-none my-0 mx-[-0.5rem]">

                            <Card streams={streams} users={users} max={max} />
                            {/* <LoadingSkeleton /> */}

                          </div>
                        </div>
                        <div>
                          <div className="mb-8 mt-[-2rem] flex text-center pt-4 ">
                            <div className="flex-grow relative">
                              <div className="top-1/2 border-t border-solid border-[hsla(0,0%,100%,.1)] w-full absolute z-[-1]"></div>
                            </div>
                            <div className={hide}>
                              <button onClick={() => applyStyles()} className="hover:bg-[hsla(0,0%,100%,.2)] hover:text-[#efeff1] bg-transparent text-[#bf94ff] inline-flex relative items-center justify-center align-middle overflow-hidden no-underline whitespace-nowrap select-none font-semibold rounded-[0.4rem] text-[1.3rem] h-12 bg-none border-none">
                                <div className="flex items-center flex-grow-0 pt-0 pb-0 pl-4 pr-4">
                                  <div data-a-target="tw-core-button-label-text" className="flex-grow-0 flex items-center justify-start">
                                    <div className="flex">
                                      <div className="self-center mr-2">
                                        <p aria-label="Pokaż więcej" className="text-[1.3rem] leading-normal font-bold">Pokaż więcej</p>
                                      </div>
                                      <figure className="items-center inline-flex">
                                        <svg type="color-fill-current" width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="fill-current">
                                          <g>
                                            <path d="M14.5 6.5L10 11 5.5 6.5 4 8l6 6 6-6-1.5-1.5z"></path>
                                          </g>
                                        </svg>
                                      </figure>
                                    </div>
                                  </div>
                                </div>
                              </button>
                            </div>
                            <div className="flex-grow relative">
                              <div className="top-1/2 border-t border-solid border-[hsla(0,0%,100%,.1)] w-full absolute z-[-1]"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div>
                    <div className='relative'>

                      <div className='pb-4 flex justify-between visible'>
                        <h2 className='font-roboto leading-[1.2] text-[1.8rem] font-medium text-[#efeff1]'>
                          <a className='hover:text-[#a970ff] hover:underline no-underline text-[#bf94ff]' href='#'>
                            Kategorie
                          </a>
                          <span>
                            , które mogą Ci się spodobać
                          </span>
                        </h2>
                      </div>

                      <div>
                        <div className='relative'>
                          <div className='flex flex-wrap min-w-full list-none my-0 mx-[-0.5rem]'>
                            <Game_card topGames={topGames} size={'188x250'} style={0} />
                            <div className="order-[32767] flex-grow flex-shrink-0 basis-auto w-[50rem] max-w-[100%] py-0 px-2"></div>
                            <div className="order-[32767] flex-grow flex-shrink-0 basis-auto w-[50rem] max-w-[100%] py-0 px-2"></div>
                            <div className="order-[32767] flex-grow flex-shrink-0 basis-auto w-[50rem] max-w-[100%] py-0 px-2"></div>
                            <div className="order-[32767] flex-grow flex-shrink-0 basis-auto w-[50rem] max-w-[100%] py-0 px-2"></div>
                            <div className="order-[32767] flex-grow flex-shrink-0 basis-auto w-[50rem] max-w-[100%] py-0 px-2"></div>
                            <div className="order-[32767] flex-grow flex-shrink-0 basis-auto w-[50rem] max-w-[100%] py-0 px-2"></div>
                            <div className="order-[32767] flex-grow flex-shrink-0 basis-auto w-[50rem] max-w-[100%] py-0 px-2"></div>
                            <div className="order-[32767] flex-grow flex-shrink-0 basis-auto w-[50rem] max-w-[100%] py-0 px-2"></div>
                          </div>
                        </div>

                        <div>
                          <div className="mb-8 mt-[-2rem]">
                            <div className="py-[1.5rem] px-0">
                              <div className="flex-grow relative">
                                <div className="top-1/2 border-t border-solid  border-[hsla(0,0%,100%,.1)] w-full absolute z-[-1]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>

                  <div className='mb-4'>
                    <div className='xl:grid-cols-[repeat(5,1fr)] lg:grid-cols-[repeat(4,1fr)] md:grid-cols-[repeat(3,1fr)] sm:grid-cols-[repeat(2,1fr)] grid'>
                      <Category_card />

                    </div>
                  </div>

                </div>
                {/*  */}
              </div>
            </section>
          </div>
        </div>
      </div>

    </>
  )
}