import React from 'react'

import { viewerCount } from '../../MiscFunctions/miscFunctions';
import { SizeMe } from 'react-sizeme'

export default function Card({ streams, users, max }: any) {

    return (
        <>
            {
                streams.data && streams.data.slice(0, max).map((info: { id: React.Key; title: string; user_name: string; game_name: string; user_login: string; viewer_count: number; }, idx: number) => (
                    <>
                        <div className='transition-transform ease-in flex-grow flex-shrink-0 basis-auto w-[30rem] max-w-[50%] px-2 py-0 duration-200 opacity-100' key={info.id}>
                                <div className='h-full'>
                                    <div className='pb-8'>
                                        <article className='flex flex-col-reverse justify-end m-0'>
                                            <div className='mt-4'>
                                                <div className='flex flex-nowrap'>
                                                    <div className='order-2 flex-grow flex-shrink w-full min-w-0'>
                                                        <div className='mb-[0.3rem]'>
                                                            <a className='no-underline text-[#bf94ff]' href="#">
                                                                <div className='text-[#dedee3]'>
                                                                    <button className='hover:text-[#a970ff] hover:cursor-pointer w-full no-underline text-inherit mb-[0.3rem] bg-none border-none rounded-none'>
                                                                        <h3 className='text-left overflow-ellipsis whitespace-nowrap overflow-hidden text-[1.4rem] leading-[1.2] font-semibold'>
                                                                            {info.title}
                                                                        </h3>
                                                                    </button>
                                                                </div>
                                                                <p className='overflow-ellipsis whitespace-nowrap overflow-hidden text-[#adadb8] text-[1.3rem] leading-normal'>
                                                                    {info.user_name}
                                                                </p>
                                                            </a>
                                                            <p className='overflow-ellipsis whitespace-nowrap overflow-hidden text-[#adadb8] text-[1.3rem] leading-normal'>
                                                                <a className='hover:text-[#a970ff] no-underline text-inherit' href='#'>
                                                                    {info.game_name}
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <div className='mt-2'>
                                                            <div className='inline-block w-full '>
                                                                {/* {userInfo.tags.map((tag: string, idx) => (
                                                        <Tags tag={tag} id={idx} />
                                                    ))} */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='order-1 flex-grow-0 flex-shrink-0 basis-16 mr-4'>
                                                        <a className='no-underline text-[#bf94ff]' href='#'>
                                                            <div className='relative w-full overflow-hidden'>
                                                                <div className='pb-[100%]'></div>
                                                                <figure aria-label="profile image" className='absolute left-0 w-full min-h-full top-1/2 transform translate-y-[-50%] bg-inherit h-16 block'>
                                                                    <img className='block rounded-[9000px] w-full border-none max-w-full align-top' alt="profile image" src={users.data[idx].profile_image_url}></img>
                                                                </figure>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='relative group'>
                                                <div className="group-hover:[transform:translateY(-0.6rem)_scale(1)] group-hover:delay-75 absolute top-0 left-0 w-0 h-0 border-t-[0.6rem] [border-top-style:solid] border-t-transparent border-b-[0.6rem] [border-bottom-style:solid] border-b-transparent border-r-[0.6rem] [border-right-style:solid] border-r-[#9147ff] [transform-origin:left_center] [transform:translateY(-0.6rem)_scale(0)] transition-transform ease-in duration-100"></div>
                                                <div className="group-hover:[transform:translateX(0.6rem)_scale(1)] group-hover:delay-75 absolute bottom-0 right-0 w-0 h-0 border-l-[0.6rem] [border-left-style:solid] border-l-transparent border-r-[0.6rem] [border-right-style:solid] border-r-transparent border-t-[0.6rem] [border-top-style:solid] border-t-[#9147ff] [transform-origin:center_bottom] [transform:translateX(0.6rem)_scale(0)] transition-transform ease-in duration-100"></div>
                                                <div className="group-hover:[transform:scaleX(1)] group-hover:delay-75 absolute top-0 bottom-0 left-0  bg-[#9147ff] [transform-origin:0px_100%] w-[0.6rem] [transform:scaleX(0)] transition-transform ease-in duration-100"></div>
                                                <div className="group-hover:[transform:scaleY(1)] group-hover:delay-75 absolute right-0 bottom-0 left-0  bg-[#9147ff] [transform-origin:0px_100%] h-[0.6rem] [transform:scaleY(0)] transition-transform ease-in duration-100"></div>

                                                <div className='hover:[transform:translate3d(0.6rem,-0.6rem,0px)] hover:delay-75 transition-transform ease-in duration-100'>
                                                    <a className='no-underline text-[#bf94ff]' href={`https://www.twitch.tv/${info.user_name}`}>
                                                        <div className='text-white relative'>
                                                            <div className='relative w-full overflow-hidden'>
                                                                <div className='pb-[56.25%]'></div>
                                                                <img alt="lorem ipsum" className='absolute left-0 w-full min-h-full top-0 border-none max-w-full align-top' src={`https://static-cdn.jtvnw.net/previews-ttv/live_user_${info.user_login}-440x248.jpg`}></img>
                                                            </div>
                                                            <div className='pointer-events-none absolute m-4 top-0 left-0'>
                                                                <div className='inline-block text-center pointer-events-none py-0 px-2 rounded-[0.4rem] text-[1.3rem] bg-[#eb0400] text-white'  >
                                                                    <p className='whitespace-nowrap uppercase font-semibold text-[1.3rem] leading-normal'>NA ŻYWO</p>
                                                                </div>
                                                            </div>
                                                            <div className='pointer-events-none absolute m-4 bottom-0 left-0'>
                                                                <div className='py-0 px-[0.4rem] flex items-center justify-center bg-[rgba(0,0,0,.6)] text-white text-[1.3rem] rounded-[0.2rem]'>
                                                                    {viewerCount(info.viewer_count)}&nbsp;widzów
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>

                                        </article>
                                    </div>
                                </div>
                        </div>
                    </>
                ))

            }
            <div className="order-[32767] flex-grow flex-shrink-0 basis-auto w-[30rem] max-w-[50%] py-0 px-2"></div>
            <div className="order-[32767] flex-grow flex-shrink-0 basis-auto w-[30rem] max-w-[50%] py-0 px-2"></div>
            <div className="order-[32767] flex-grow flex-shrink-0 basis-auto w-[30rem] max-w-[50%] py-0 px-2"></div>
            <div className="order-[32767] flex-grow flex-shrink-0 basis-auto w-[30rem] max-w-[50%] py-0 px-2"></div>
        </>
    )
}