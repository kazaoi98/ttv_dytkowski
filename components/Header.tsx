"use client"

import React, { useEffect, useState } from 'react'
import Modal from './Modals/Modal';
import Preferences_Modal from './Modals/Preferences_Modal';

type Props = {}


export default function Header({ }: Props) {

    const animation = () => {
        const elements = document.getElementsByTagName("animate")
        for (var i = 0; i < elements.length; i++) {
            elements[i].beginElement();
        }
    };

    const [isOpen, setIsOpen] = useState(false)
    const [preferences, toggleOpen] = useState(false)

    return (
        <>
            <Modal open={isOpen} />
            <Preferences_Modal open={preferences} />
            <nav className="h-20 z-[1000] flex-shrink-0 block fill-white">
                <div className='flex shadow-[0_1px_2px_rgba(0,0,0,0.9)] bg-[#18181b] items-stretch flex-nowrap h-full'>
                    <div className='flex-grow flex-shrink-[2] w-full flex items-stretch justify-start flex-nowrap'>

                        <div className='w-0 flex items-center'>
                            <button className='bg-[hsla(0,0%,100%,.15)] text-[#efeff1] inline-flex relative items-center justify-center align-middle overflow-hidden no-underline whitespace-nowrap select-none font-semibold rounded-[0.4rem] text-[1.3rem] h-12 bg-none border-none ' aria-haspopup="menu" aria-keyshortcuts="alt+p" title="Menu przeskakiwania do zawartości (Alt+P)">
                                <div className='flex items-center flex-grow pt-0 pb-0 pl-4 pr-[0.8rem]'>
                                    <div data-a-target="tw-core-button-label-text" className='flex-grow flex items-center justify-start'>Przejdź do…
                                        <div className="gap-[calc(0.5rem/2)]">
                                            <div className='bg-[#26262c] border-t border-r border-b border-l rounded-[0.2rem] border-[hsla(0,0%,100%,.1)] border-solid pl-2 pr-2 inline-block'>
                                                <p className='leading-[1.2rem] text-[#adadb8]'>Alt</p>
                                            </div>
                                            <div className='bg-[#26262c] border-t border-r border-b border-l rounded-[0.2rem] border-[hsla(0,0%,100%,.1)] border-solid pl-2 pr-2 inline-block'>
                                                <p className='leading-[1.2rem] text-[#adadb8]'>P</p>
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

                        <a aria-label='Strona główna klona twitcha' className='visited:text-[#bf94ff] no-underline cursor-pointer' href='/'>
                            <div className='p-2 inline-flex'>
                                <figure className='inline-flex'>
                                    <svg className='fill-current' viewBox="0 0 40 40" width="40px" height="40px" x="0px" y="0px" onMouseEnter={animation}>
                                        <g>
                                            <polygon points="13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8" className='fill-[#9146FF]'></polygon>
                                            <polygon points="26 25 30 21 30 10 14 10 14 25 18 25 18 29 22 25" className='fill-[#FFFFFF]'></polygon>
                                            <g>
                                                <path d="M20,14 L22,14 L22,20 L20,20 L20,14 Z M27,14 L27,20 L25,20 L25,14 L27,14 Z" className='fill-[#9146FF]'></path>
                                            </g>
                                        </g>
                                    </svg>
                                </figure>
                            </div>
                        </a>

                        <div>
                            <div className='font-roboto text-white flex h-full justify-between flex-row'>
                                <div className='text-inherit flex flex-col h-full pl-8 pr-8'>
                                    <div className='flex self-center h-full'>
                                        <a className='hover:text-[#bf94ff] hover:no-underline text-[#efeff1] flex items-center text-center whitespace-nowrap no-underline' aria-label='Obserwowane' href='/directory'>
                                            <div>
                                                <div className='hidden md:flex flex-col'>
                                                    <div className='flex'>
                                                        <p className='leading-[1.2rem] sm:text-[1.1rem] md:text-[1.8rem] sm:font-medium md:font-semibold'>Przeglądaj</p>
                                                    </div>
                                                    <div className='hidden'>
                                                        <p className='leading-[1.2rem] text-[1.1rem] font-medium'>Przeglądaj</p>
                                                    </div>
                                                </div>
                                                <div aria-label="Obserwowane" className='hidden pl-4 pr-4'>
                                                    <div className='inline-flex relative'>
                                                        <figure className='items-center inline-flex'>
                                                            <svg type="color-fill-current" width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className='fill-current'>
                                                                <g>
                                                                    <path fillRule="evenodd" d="M9.171 4.171A4 4 0 006.343 3H6a4 4 0 00-4 4v.343a4 4 0 001.172 2.829L10 17l6.828-6.828A4 4 0 0018 7.343V7a4 4 0 00-4-4h-.343a4 4 0 00-2.829 1.172L10 5l-.829-.829zm.829 10l5.414-5.414A2 2 0 0016 7.343V7a2 2 0 00-2-2h-.343a2 2 0 00-1.414.586L10 7.828 7.757 5.586A2 2 0 006.343 5H6a2 2 0 00-2 2v.343a2 2 0 00.586 1.414L10 14.172z" clipRule="evenodd"></path>
                                                                </g>
                                                            </svg>
                                                        </figure>
                                                        <div className='py-[3px] px-[6px] rounded-[0.4rem] bg-white text-[#040109] hidden absolute text-[1.3rem] font-semibold leading-[1.2rem] text-left z-[2000] pointer-events-none select-none whitespace-nowrap top-0 left-2/4 translate-x-[-50%]' data-a-target="tw-tooltip-label" role="tooltip">
                                                            Przeglądaj
                                                        </div>
                                                    </div>
                                                </div>

                                                <div aria-label="Przeglądaj" className="flex md:hidden pl-4 pr-4">
                                                    <div className="inline-flex relative">
                                                        <figure className="items-center inline-flex">
                                                            <svg type="color-fill-current" width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="fill-current">
                                                                <g>
                                                                    <path d="M5 2a2 2 0 00-2 2v8a2 2 0 002 2V4h8a2 2 0 00-2-2H5z"></path>
                                                                    <path fill-rule="evenodd" d="M7 8a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2V8zm2 0h6v8H9V8z" clip-rule="evenodd"></path>
                                                                </g>
                                                            </svg>
                                                        </figure>
                                                        {/* <div className="ScAttachedTooltip-sc-v8mg6d-1 clwBTO tw-tooltip" data-a-target="tw-tooltip-label" role="tooltip">Przeglądaj</div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='h-[0.2rem]'></div>
                                </div>

                            </div>
                        </div>

                        <div className='flex h-full items-center pl-4 pr-4'>
                            <div className='inline-block relative'>
                                <div>
                                    <div className='inline-flex'>
                                        <button aria-label='Więcej' className='hover:bg-[hsla(0,0%,100%,.2)] hover:text-[#efeff1] inline-flex items-center justify-center select-none rounded-[0.4rem] h-12 w-12 bg-transparent text-[#efeff1] relative align-middle overflow-hidden no-underline whitespace-nowrap font-semibold text-[1.3rem]'>
                                            <div className='w-8 h-8'>
                                                <div className='inline-flex items-center h-full w-full'>
                                                    <div className='relative w-full overflow-hidden'>
                                                        <div className='pb-[100%]'></div>
                                                        <svg width='100%' height='100%' viewBox="0 0 20 20" x='0px' y='0px' className='absolute left-0 w-full min-h-full top-0'>
                                                            <g>
                                                                <path d="M10 18a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM8 4a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='hidden md:flex grow-[2] flex-shrink w-full items-center justify-center'>
                        <div className='basis-[40rem] relative ml-8 mr-8'>
                            <div className='max-w-[40rem]'>
                                <div>
                                    <div className='relative z-[1] '>
                                        <div className='p-2'>
                                            <div className='flex w-full'>
                                                <div className='flex-grow mr-px'>
                                                    <div className='relative'>
                                                        <input className='hover:border-[hsla(0,0%,100%,.3)] focus:outline-none focus:border-[#a970ff] focus:bg-black hover:bg-[hsla(0,0%,100%,.2)] block w-full h-[3.6rem] text-[1.4rem] font-roboto  appearance-none bg-clip-padding leading-normal border-2 duration-100  ease-in border-solid border-[hsla(0,0%,100%,.2)] text-[#efeff1] bg-[hsla(0,0%,100%,.2)] rounded-l-[0.6rem] px-4 py-2' aria-label="Pole wyszukiwania" aria-haspopup="grid" type="search" placeholder="Wyszukaj" autoCapitalize="off" autoCorrect="off" autoComplete="twitch-nav-search" data-a-target="tw-input" maxLength={150} spellCheck="false" aria-owns="search-tray__container" aria-controls="search-tray__container" />
                                                    </div>
                                                </div>
                                                <button aria-label='Przycisk wyszukiwania' className='bg-[hsla(0,0%,100%,.15)]  inline-flex relative items-center justify-center align-middle no-underline whitespace-nowrap select-none font-semibold rounded-r-[0.6rem] text-[1.4rem] h-[3.6rem] bg-none border-none rounded-none'>
                                                    <div className='flex justify-center items-center px-2'>
                                                        <div className='inline-flex items-center w-[2.4rem]'>
                                                            <div className='inline-flex items-center w-full h-full'>
                                                                <div className='relative w-full overflow-hidden'>
                                                                    <div className='pb-[100%]'></div>
                                                                    <svg width="100%" height="100%" viewBox="0 0 20 20" x='0px' y='0px' className='absolute left-0 w-full min-w-full top-0'>
                                                                        <g>
                                                                            <path fillRule="evenodd" d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z" clipRule="evenodd"></path>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex-grow flex-shrink-[2] w-full flex items-center justify-center'>

                        <div className='flex-grow-0 flex-shrink-0 ml-2 mr-2 self-center flex-nowrap'>
                            <div className='relative'>
                                <div className='inline-block relative'>
                                    <div>
                                        <div className='inline-flex'>
                                            <div>
                                                <button className='hover:bg-[hsla(0,0%,100%,.2)] hover:text-[#efeff1] inline-flex items-center justify-center select-none rounded-[0.4rem] h-12 w-12 bg-transparent text-[#efeff1] relative align-middle overflow-hidden no-underline whitespace-nowrap font-semibold text-[1.3rem] bg-none' aria-label="Wyszukaj" title="Wyszukaj">
                                                    <div className='w-8 h-8'>
                                                        <div className='inline-flex items-center h-full w-full'>
                                                            <div className='relative w-full overflow-hidden'>
                                                                <div className='pb-[100%]'>
                                                                </div>
                                                                <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className='absolute left-0 w-full min-h-full top-0 fill-current'>
                                                                    <g>
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.798 10.456L10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>

                        <div className="h-full pt-4 pb-4 mr-4 flex">
                            <div className="flex-nowrap">
                                <div className="flex-nowrap flex" data-a-target="user-card">
                                    <div className="pl-2 pr-2">
                                        <button className="hover:bg-[hsla(0,0%,100%,.2)] hover:text-[#efeff1] bg-[hsla(0,0%,100%,.15)] text-[#efeff1] inline-flex relative items-center justify-center align-middle overflow-hidden no-underline whitespace-nowrap select-none font-bold rounded-[0.4rem] text-[1.3rem] h-12 bg-none border-none" data-a-target="login-button" data-test-selector="anon-user-menu__login-button" onClick={() => setIsOpen(true)}>
                                            <div className="flex items-center flex-grow-0 pt-0 pb-0 pl-4 pr-4">
                                                <div data-a-target="tw-core-button-label-text" className="flex-grow-0 flex items-center justify-center">Zaloguj się</div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="pl-2 pr-2">
                                        <button className="hover:bg-[#772cf8] hover:text-white bg-[#9147ff] text-white inline-flex relative items-center justify-center align-middle overflow-hidden no-underline whitespace-nowrap select-none font-bold rounded-[0.4rem] text-[1.3rem] h-12 bg-none border-none" data-a-target="login-button" data-test-selector="anon-user-menu__login-button">
                                            <div className="flex items-center flex-grow-0 pt-0 pb-0 pl-4 pr-4 ">
                                                <div data-a-target="tw-core-button-label-text" className="flex-grow-0 flex items-center justify-center">Zarejestruj się</div>
                                            </div>
                                        </button>
                                    </div>
                                </div>


                            </div>
                            <div data-a-target="dropdown-up" className="pl-2 relative flex flex-grow items-stretch h-full">
                                <div className="inline-block relative">
                                    <div>
                                        <button className="hover:bg-[hsla(0,0%,100%,.2)] hover:text-[#efeff1] inline-flex items-center justify-center select-none rounded-[0.4rem] h-12 w-12 bg-transparent text-[#efeff1] relative align-middle overflow-hidden no-underline whitespace-nowrap  font-[1.3rem] bg-none border-none" data-a-target="user-menu-toggle" data-test-selector="user-menu__toggle" aria-label="Menu użytkownika" onClick={() => toggleOpen(true)}>
                                            <div className="w-8 h-8">
                                                <div className="inline-flex items-center h-full w-full">
                                                    <div className="relative w-full overflow-hidden">
                                                        <div className="pb-[100%]"></div>
                                                        <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="absolute left-0 w-full min-h-full top-0 fill-current">
                                                            <g>
                                                                <path fillRule="evenodd" d="M5 7a5 5 0 116.192 4.857A2 2 0 0013 13h1a3 3 0 013 3v2h-2v-2a1 1 0 00-1-1h-1a3.99 3.99 0 01-3-1.354A3.99 3.99 0 017 15H6a1 1 0 00-1 1v2H3v-2a3 3 0 013-3h1a2 2 0 001.808-1.143A5.002 5.002 0 015 7zm5 3a3 3 0 110-6 3 3 0 010 6z" clipRule="evenodd"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}
