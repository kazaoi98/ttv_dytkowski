'use client';

import React, { useState } from 'react'
import Card from './Misc/Card';
import Game_card from './Misc/Game_card';
import Category_card from './Misc/Category_card';
import { SizeMe } from "react-sizeme";

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

  const sizeCheck = (size: { readonly width: number | null; readonly height: number | null; }) => {

    if (size.width! < 900) {
      console.log('set 4')
      setMax(2)
    } else if (size.width! < 1390) {
      console.log('set 3')
      setMax(3)
    } else if (size.width! < 1600) {
      console.log('set 2')
      setMax(4)
    }
  };


  return (
    <SizeMe monitorHeight refreshRate={32}>
      {({ size }) => (
    <>
      {sizeCheck(size)}
      <div className='h-full'>
        <div className='min-h-[35rem] transition-[padding] ease-in duration-[0.45s] pt-8 pl-12 pr-12'>
          <div className='mx-[auto] my-0 max-w-[200rem]'>
            <div className='h-[30rem] flex items-center justify-center relative'>
              <div className='bg-[#0e0e10] absolute left-0 z-10 rounded-[0.6rem]'>
                <div className='flex items-center content-center justify-center'>
                  <button className='hover:bg-[hsla(0,0%,100%,.2)]  inline-flex items-center justify-center select-none rounded-[0.6rem] h-[3.6rem] w-[3.6rem] bg-transparent text-[#efeff1] relative align-middle overflow-hidden no-underline whitespace-nowrap font-semibold text-[1.4rem] bg-none border-none'>
                    <div className='w-[2.4rem] h-[2.4rem]'>
                      <div className='inline-flex items-center h-full w-full'>
                        <div className='relative w-full overflow-hidden'>
                          <div className='pb-[100%]'></div>
                          <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className='absolute left-0 w-full min-h-full top-0 fill-current'>
                            <g>
                              <path d="M13.5 14.5L9 10l4.5-4.5L12 4l-6 6 6 6 1.5-1.5z"></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div className='bg-[#0e0e10] absolute right-0 z-10 rounded-[0.6rem]'>
                <div className='flex items-center justify-center'>
                  <button className='hover:bg-[hsla(0,0%,100%,.2)] inline-flex items-center justify-center select-none rounded-[0.6rem] h-[3.6rem] w-[3.6rem] bg-transparent text-[#efeff1] relative align-middle overflow-hidden no-underline whitespace-nowrap font-semibold text-[1.4rem] bg-none border-none'>
                    <div className='w-[2.4rem] h-[2.4rem]'>
                      <div className='inline-flex items-center h-full w-full'>
                        <div className='relative w-full overflow-hidden'>
                          <div className='pb-[100%]'></div>
                          <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className='absolute left-0 w-full min-h-full top-0 fill-current'>
                            <g>
                              <path d="M6.5 5.5L11 10l-4.5 4.5L8 16l6-6-6-6-1.5 1.5z"></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div className='absolute top-0 left-[calc(50%-375px)] z-[1] transform translate-x-[50%] scale-[0.7] transition-all duration-[450ms] ease-in w-[75rem] cursor-pointer h-[30rem]'>
                <div>
                  <div className='transition-transform duration-[0.3s] ease-in h-[30rem]'>
                    <div className='relative overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,.5),0_0px_4px_rgba(0,0,0,.4)] bg-[#451093] w-full h-full'>
                      <div data-test-selector="featured-item-no-video-wrapper" className='opacity-100 transition-opacity duration-[0.3s] ease-in absolute inset-0 bg-[rgba(0,0,0,.6)] text-white'>
                        <iframe src="https://player.twitch.tv/?channel=moonmoon&parent=ttv-dytkowski.vercel.app" frameBorder="0" allowFullScreen={true} scrolling="no" height="300" width="530"></iframe>
                      </div>
                      <img alt="hello friends, we crafting all the weapons" className='w-full h-full border-none max-w-full align-top' src="https://static-cdn.jtvnw.net/previews-ttv/live_user_ninjy-440x248.jpg"></img>
                    </div>
                  </div>
                </div>
              </div>

              <div className='absolute top-0 left-[calc(50%-375px)] z-[2] transform translate-x-[25%] scale-[0.85] transition-all duration-[450ms] ease-in w-[75rem] cursor-pointer h-[30rem]'>
                <div>
                  <div className='transition-transform duration-[0.3s] ease-in h-[30rem]'>
                    <div className='relative overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,.5),0_0px_4px_rgba(0,0,0,.4)] bg-[#451093] w-full h-full'>
                      <div data-test-selector="featured-item-no-video-wrapper" className='opacity-50 transition-opacity duration-[0.3s] ease-in absolute inset-0 bg-[rgba(0,0,0,.6)] text-white'>
                        <iframe src="https://player.twitch.tv/?channel=moonmoon&parent=ttv-dytkowski.vercel.app" frameBorder="0" allowFullScreen={true} scrolling="no" height="300" width="530"></iframe>
                      </div>
                      <img alt="hello friends, we crafting all the weapons" className='w-full h-full border-none max-w-full align-top' src="https://static-cdn.jtvnw.net/previews-ttv/live_user_ninjy-440x248.jpg"></img>
                    </div>
                  </div>
                </div>
              </div>

              <div className='absolute top-0 left-[calc(50%-375px)] z-[3] transform scale-[1] transition-all duration-[450ms] ease-in w-[75rem] cursor-pointer h-[30rem]'>
                <div>
                  <div className='h-[30rem]'>
                    <div className='relative overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,.5),0_0px_4px_rgba(0,0,0,.4)] bg-[#451093] w-full h-full'>
                      <div data-test-selector="featured-item-no-video-wrapper" className='transition-opacity duration-[0.3s] ease-in absolute inset-0 bg-[rgba(0,0,0,.6)] text-white'>
                        <iframe src="https://player.twitch.tv/?channel=moonmoon&parent=ttv-dytkowski.vercel.app" frameBorder="0" allowFullScreen={true} scrolling="no" height="300" width="530"></iframe>
                      </div>

                      <div className="absolute top-0 left-0 ml-4 mt-4 z-10">
                        <div className="inline-block text-center pointer-events-none py-0 px-2 rounded-[0.4rem] text-[1.3rem] bg-[#eb0400] text-white">
                          <p className="whitespace-nowrap uppercase font-semibold text-[1.3rem] leading-normal">Na żywo</p>
                        </div>
                      </div>

                      <img alt="hello friends, we crafting all the weapons" className='w-full h-full border-none max-w-full align-top' src="https://static-cdn.jtvnw.net/previews-ttv/live_user_ninjy-440x248.jpg"></img>
                    </div>
                  </div>
                </div>
              </div>

              <div className='absolute top-0 left-[calc(50%-375px)] z-[2] transform translate-x-[-25%] scale-[0.85] transition-all duration-[450ms] ease-in w-[75rem] cursor-pointer h-[30rem]'>
                <div>
                  <div className='transition-transform duration-[0.3s] ease-in h-[30rem]'>
                    <div className='relative overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,.5),0_0px_4px_rgba(0,0,0,.4)] bg-[#451093] w-full h-full'>
                      <div data-test-selector="featured-item-no-video-wrapper" className='opacity-50 transition-opacity duration-[0.3s] ease-in absolute inset-0 bg-[rgba(0,0,0,.6)] text-white'>
                        <iframe src="https://player.twitch.tv/?channel=moonmoon&parent=ttv-dytkowski.vercel.app" frameBorder="0" allowFullScreen={true} scrolling="no" height="300" width="530"></iframe>
                      </div>
                      <img alt="hello friends, we crafting all the weapons" className='w-full h-full border-none max-w-full align-top' src="https://static-cdn.jtvnw.net/previews-ttv/live_user_ninjy-440x248.jpg"></img>
                    </div>
                  </div>
                </div>
              </div>

              <div className='absolute top-0 left-[calc(50%-375px)] z-[1] transform translate-x-[-50%] scale-[0.7] transition-all duration-[450ms] ease-in w-[75rem] cursor-pointer h-[30rem]'>
                <div>
                  <div className='transition-transform duration-[0.3s] ease-in h-[30rem]'>
                    <div className='relative overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,.5),0_0px_4px_rgba(0,0,0,.4)] bg-[#451093] w-full h-full'>
                      <div data-test-selector="featured-item-no-video-wrapper" className='opacity-100 transition-opacity duration-[0.3s] ease-in absolute inset-0 bg-[rgba(0,0,0,.6)] text-white'>
                        <iframe src="https://player.twitch.tv/?channel=moonmoon&parent=ttv-dytkowski.vercel.app" frameBorder="0" allowFullScreen={true} scrolling="no" height="300" width="530"></iframe>
                      </div>
                      <img alt="hello friends, we crafting all the weapons" className='w-full h-full border-none max-w-full align-top' src="https://static-cdn.jtvnw.net/previews-ttv/live_user_ninjy-440x248.jpg"></img>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

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
                          <span>
                            . {size.width}
                          </span>
                        </h2>
                      </div>

                      <div>
                        <div className='relative'>
                          <div className="flex min-w-full list-none mx-[-0.5rem] my-0">

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
                          <div className='flex min-w-full list-none my-0 mx-[-0.5rem]'>
                            <Game_card topGames={topGames} size={'188x250'} style={0} />
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
                    <div className='grid-cols-[repeat(5,1fr)] grid'>
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
      )}</SizeMe>
  )
}