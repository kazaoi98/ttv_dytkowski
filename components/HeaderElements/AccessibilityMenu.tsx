import React from 'react'

type Props = {}

export default function AccessibilityMenu({}: Props) {
  return (
    <div className='w-0 flex items-center'>
        <button className='bg-[hsla(0,0%,100%,.15)] text-[#efeff1] inline-flex relative items-center justify-center align-middle overflow-hidden no-underline whitespace-nowrap select-none font-semibold rounded-[0.4rem] text-[1.3rem] h-12 bg-none border-none ' aria-haspopup="menu" aria-keyshortcuts="alt+p" title="Menu przeskakiwania do zawartości (Alt+P)">
            <div className='flex items-center flex-grow pt-0 pb-0 pl-4 pr-[0.8rem]'>
                <div data-a-target="tw-core-button-label-text" className='flex-grow flex items-center justify-start'>Przejdź do…
                    <div className="gap-[calc(0.5rem/2)]">
                        <div className='bg-[#26262c] border-t border-r border-b border-l rounded-[0.2rem] border-[hsla(0,0%,100%,.1)] border-solid pl-2 pr-2 inline-block'>
                            <p className='leading-[1.2rem] text-[#adadb8]'>Alt</p>
                        </div>
                        <div className='bg-[#26262c] border-t border-r border-b border-l rounded-[0.2rem] border-[hsla(0,0%,100%,.1)] border-solid pl-2 pr-2 inline-block'>
                            <p className='leading-[1.2rem] text-[#adadb8]'>Alt</p>
                        </div>
                    </div>
                </div>
                <div className='ml-2 flex items-center'>
                    <div className='inline-flex items-center w-8'>
                        <figure className='inline-flex items-center' data-a-selector="tw-core-button-icon">
                            <svg width="100%" height="100%" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M14.5 6.5 10 11 5.5 6.5 4 8l6 6 6-6-1.5-1.5z"></path>
                            </svg>
                        </figure>
                    </div>
                </div>
            </div>
        </button>
    </div>
  )
}