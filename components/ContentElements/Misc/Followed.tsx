import React, { useEffect, useState } from 'react'
import { viewerCount } from '../../MiscFunctions/miscFunctions';



export type Props = {
    value: number;
}

export default function Followed({ streams, users }: any) {


    return (
        <>
            {
                streams.data.slice(0, 10).map((stream: any, idx: number) => (
                    <div className=' transition-transform ease-in delay-150 opacity-100 scale-100' key={stream.user_id}>
                        <div>
                            <div className='relative'>
                                <a className='hover:bg-[#26262c] h-[4.2rem] no-underline text-[#bf94ff] px-4 py-2 flex items-center flex-nowrap w-full' href={`https://www.twitch.tv/${stream.user_name}`}>
                                    <div className='flex-shrink-0 items-center'>
                                        <figure aria-label='example' className='relative bg-inherit w-12 h-12 block'>
                                            <img className="block rounded-[9000px] w-full border-none max-w-full align-top" alt="meduska" src={users.data[idx].profile_image_url}></img>
                                        </figure>
                                    </div>
                                    <div className='hidden lg:inline-flex overflow-ellipsis whitespace-nowrap overflow-hidden w-full justify-between'>
                                        <div className='overflow-ellipsis whitespace-nowrap overflow-hidden ml-4 w-full'>
                                            <div className='flex items-center'>
                                                <p title='example' className='overflow-ellipsis whitespace-nowrap overflow-hidden flex-grow font-semibold text-[#dedee3] text-[1.4rem] leading-[1.2]'>
                                                    {stream.user_name}
                                                </p>
                                            </div>
                                            <div className='pr-2'>
                                                <p title='Rozmowy' className='overflow-ellipsis whitespace-nowrap overflow-hidden text-[#adadb8] text-[1.3rem] leading-[1.2]'>
                                                    {stream.game_name}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='min-w-[4rem] flex-shrink-0 ml-2'>
                                            <div className='flex items-center'>
                                                <div className='bg-[#eb0400] rounded-[9000px] w-[0.8rem] h-[0.8rem] inline-block relative' data-test-selector="0" aria-label="Na żywo"></div>
                                                <div className='ml-2'>
                                                    <span data-test-selector="1" aria-label="7,7&nbsp;tys. widzów" className="text-[#dedee3] text-[1.3rem]">
                                                        {viewerCount(stream.viewer_count)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                ))
            }
        </>
    )
}