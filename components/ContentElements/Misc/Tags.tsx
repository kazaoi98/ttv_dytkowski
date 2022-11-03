import React from 'react'

type Props = {
    tag: string;
    id: number;
}

export default function Tags({tag, id}: Props) {
    return (
        <div className='text-[1.2rem] inline-block mb-2 mr-2 align-middle' key={id}>
            <a className='hover:text-[hsla(0,0%,100%,.7)] hover:bg-[hsla(0,0%,100%,.2)] inline-block rounded-[9000px] font-semibold text-[hsla(0,0%,100%,.7)] bg-[hsla(0,0%,100%,.15)] border-solid border-transparent h-8 max-w-full no-underline' href='#'>
                <div className='flex items-center text-[1.2rem] px-[0.8rem] py-0'>
                    <div className='whitespace-nowrap overflow-ellipsis overflow-hidden '>
                        <span>{tag}</span>
                    </div>
                </div>
            </a>
        </div>
    )
}