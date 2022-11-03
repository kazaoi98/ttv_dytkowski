import React from 'react'
import ReactDOM from 'react-dom';

type Props = {
  open: boolean;
}

export default function LoginModal({ open }: Props) {
  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <div className='bg-[rgba(0,0,0,.85)] items-start bottom-0 flex justify-center left-0 overflow-auto fixed right-0 top-0 z-[5000]'>
        <div className='text-[#efeff1] flex flex-grow-0 h-full justify-center outline-0 w-full' tabIndex={-1} role="dialog" aria-label='Modal' aria-modal="true" >
          <div className='p-4  relative flex justify-center items-start h-full w-full'>
            <div className='mb-auto mt-auto flex outline-0 flex-grow-0 justify-center relative w-full'>
              <div className=' max-w-full relative pointer-events-auto' data-a-target="passport-modal">
                <div className='flex rounded-[0.4rem] overflow-hidden'>
                  <div className='w-[42rem] overflow-auto'>
                    <div className="flex px-8 py-12 bg-[#18181b] flex-col">
                        <div className="flex flex-col">
                          <div className="inline-flex items-center justify-center">
                            <figure className="items-center inline-flex">
                              <svg type="color-fill-brand" width="40px" height="40px" version="1.1" viewBox="0 0 24 28" x="0px" y="0px" className="fill-[#a970ff]">
                                <g fillRule="evenodd">
                                  <path d="M19 6v6h-2V6h2zm-7 0h2v6h-2V6zM5 0L0 5v18h6v5l5-5h4l9-9V0H5zm17 13l-4 4h-4l-4 4v-4H6V2h16v11z"></path>
                                  <path d="M18 17l4-4V2H6v15h4v4l4-4h4zM12 6h2v6h-2V6zm7 0h-2v6h2V6z" fill="#FFF"></path>
                                </g>
                              </svg>
                            </figure>
                            <div className="ml-2">
                              <h4 id="modal-root-header" data-test-selector="auth-shell-header-header" className="text-[1.8rem] font-semibold leading-normal">Zaloguj się do Twitcha</h4>
                            </div>
                          </div>
                        </div>
                      <div className="mt-4">
                        <div data-a-target="auth-form-tab-container" className="text-[1.4rem]">
                          <div className="relative flex h-12 border-b border-solid border-[hsla(0,0%,100%,.1)] w-full">
                            <ul role="tablist" className="flex-grow flex h-full items-center justify-start text-[1.8rem] flex-wrap list-none">
                              <li role="presentation" data-index="0" className="flex-grow-0 items-center justify-center h-full list-inside">
                                <button role="tab" aria-selected="true" tabIndex={0} className="block h-full w-full text-inherit pl-0 pr-4 bg-none border-none">
                                  <div className="text-[#bf94ff] h-full text-left flex flex-col">
                                    <div className="flex justify-center flex-col flex-grow">
                                      <p className="leading-[1.2] text-[1.4rem] font-semibold">Zaloguj się</p>
                                    </div>
                                    <div className="flex-grow-0">
                                      <div data-test-selector="ACTIVE_TAB_INDICATOR" className="h-[0.2rem] mb-[-0.1rem] transition ease-in duration-[0.2s] delay-[0s] origin-[0px] bg-current"></div>
                                    </div>
                                  </div>
                                </button>
                              </li>
                              <li role="presentation" data-index="1" className="flex-grow-0 items-center justify-center h-full list-inside">
                                <button role="tab" aria-selected="false" tabIndex={-1} className="block h-full w-full text-inherit pl-4 pr-4 bg-none border-none">
                                  <div className="text-[#efeff1] h-full text-left flex flex-col">
                                    <div className="flex justify-center flex-col flex-grow border-b-[0.1rem] border-solid border-transparent">
                                      <p className="leading-[1.2rem] text-[1.4rem] font-semibold">Zarejestruj się</p>
                                    </div>
                                    <div className="flex-grow-0"></div>
                                  </div>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <form noValidate>
                          <div className="bg-[#18181b] w-full flex-col flex">
                            <div className="mt-8">
                              <div>
                                <div className="mb-2 flex items-center">
                                  <div className="flex-grow">
                                    <label className="text-[#f7f7f8] font-semibold text-[1.3rem]" htmlFor="login-username">Nazwa użytkownika</label>
                                  </div>
                                </div>
                                <div data-a-target="login-username-input" className="relative border-0 m-0 p-0 align-baseline">
                                  <input aria-label="Wprowadź swoją nazwę użytkownika" type="text" className="focus:outline-none focus:border-[#a970ff] focus:bg-black hover:outline-none hover:border-[hsla(0,0%,100%,.3)]  hover:bg-[hsla(0,0%,100%,.2)] block w-full h-12 text-[1.3rem] appearance-none bg-clip-padding leading-normal transition ease-in delay-100 border-solid border-[2px] border-[hsla(0,0%,100%,.2)] text-[#efeff1] bg-[hsla(0,0%,100%,.2)] rounded-[0.4rem] px-4 py-2" autoCapitalize="off" autoCorrect="off" autoComplete="username" data-a-target="tw-input" id="login-username" ></input>
                                </div>
                              </div>
                            </div>
                            <div className="mt-8">
                              <div>
                                <div>
                                  <div className="min-h-[2rem] mb-2 flex items-center">
                                    <div className="flex-grow">
                                      <label className="text-[#f7f7f8] font-bold text-[1.3rem]" htmlFor="password-input">Hasło</label>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <div data-a-target="login-password-input" className="relative">
                                      <input aria-invalid="false" aria-label="Wpisz swoje hasło" type="password" className="focus:outline-none focus:border-[#a970ff] focus:bg-black hover:outline-none hover:border-[hsla(0,0%,100%,.3)]  hover:bg-[hsla(0,0%,100%,.2)] pr-20 block w-full h-12 text-[1.3rem] font-roboto appearance-none bg-clip-padding leading-normal transition border-[2px] border-[hsla(0,0%,100%,.2)] delay-100  text-[#efeff1] bg-[hsla(0,0%,100%,.2)] rounded-[0.4rem] px-4 py-2" autoCapitalize="off" autoCorrect="off" autoComplete="current-password" data-a-target="tw-input" id="password-input" spellCheck="false" ></input>
                                    </div>
                                    <div className="absolute flex items-center text-[hsla(0,0%,100%,.85)] right-0 top-0 bottom-0">
                                      <button className="hover:bg-[hsla(0,0%,100%,.2)] hover:text-[#efeff1] hover:cursor-pointer mr-1 inline-flex items-center justify-center select-none rounded-[0.2rem] h-[2.4rem] w-[2.4rem] bg-transparent text-[#efeff1] relative overflow-hidden no-underline whitespace-nowrap font-semibold text-[1.2rem] bg-none border-none" type="button" tabIndex={-1} aria-label="Przełącz widoczność hasła">
                                        <div className="w-[1.6rem] h-[1.6rem]">
                                          <div className="inline-flex items-center h-full w-full">
                                            <div className="relative w-full overflow-hidden">
                                              <div className="pb-[100%]"></div>
                                              <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="absolute left-0 w-full min-h-full top-0 fill-current">
                                                <g>
                                                  <path d="M11.998 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                                  <path fillRule="evenodd" d="M16.175 7.567L18 10l-1.825 2.433a9.992 9.992 0 01-2.855 2.575l-.232.14a6 6 0 01-6.175 0 35.993 35.993 0 00-.233-.14 9.992 9.992 0 01-2.855-2.575L2 10l1.825-2.433A9.992 9.992 0 016.68 4.992l.233-.14a6 6 0 016.175 0l.232.14a9.992 9.992 0 012.855 2.575zm-1.6 3.666a7.99 7.99 0 01-2.28 2.058l-.24.144a4 4 0 01-4.11 0 38.552 38.552 0 00-.239-.144 7.994 7.994 0 01-2.28-2.058L4.5 10l.925-1.233a7.992 7.992 0 012.28-2.058 37.9 37.9 0 00.24-.144 4 4 0 014.11 0l.239.144a7.996 7.996 0 012.28 2.058L15.5 10l-.925 1.233z" clipRule="evenodd"></path>
                                                </g>
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-4">
                                  <a className="hover:underline hover:text-[#a970ff] no-underline text-[#bf94ff]" rel="noopener noreferrer" target="_blank" href="https://www.twitch.tv/user/account-recovery">
                                    <p className="text-[1.2rem] leading-normal">Problem z logowaniem?</p>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="mt-8">
                              <button className="bg-[hsla(0,0%,100%,.15)] text-[hsla(0,0%,100%,.5)] inline-flex relative items-center justify-center align-middle overflow-hidden no-underline whitespace-nowrap select-none w-full font-semibold rounded-[0.4rem] text-[1.3rem] h-12 opacity-50 bg-none border-none" /* state="default" */ data-a-target="passport-login-button" /* disabled= */>
                                <div className="flex items-center flex-grow pt-0 pb-0 pl-4 pr-4">
                                  <div data-a-target="tw-core-button-label-text" className="flex-grow flex items-center justify-center">Zaloguj się</div>
                                </div>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="left-full ml-2 absolute top-0">
                  <button className="hover:bg-[hsla(0,0%,100%,.2)] hover:text-white inline-flex items-center justify-center select-none rounded-[0.4rem] h-12 w-12 border border-solid border-transparent bg-transparent text-white relative align-middle overflow-hidden no-underline whitespace-nowrap font-semibold text-[1.3rem] bg-none" aria-label="Zamknij moduł" data-a-target="modalClose">
                    <div className="w-8 h-8">
                      <div className="inline-flex items-center h-full w-full">
                        <div className="relative w-full overflow-hidden">
                          <div className="pb-[100%]"></div>
                          <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="absolute left-0 w-full min-h-full top-0 fill-current">
                            <g>
                              <path d="M8.5 10L4 5.5 5.5 4 10 8.5 14.5 4 16 5.5 11.5 10l4.5 4.5-1.5 1.5-4.5-4.5L5.5 16 4 14.5 8.5 10z"></path>
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
    </>,
    document.getElementById('portal')
  )
}