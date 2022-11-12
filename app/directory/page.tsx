import React from 'react'
import Category_card from '../../components/ContentElements/Misc/Category_card'
import Game_card from '../../components/ContentElements/Misc/Game_card'
import Sort_element from '../../components/ContentElements/Misc/Sort_element'
import { getData, getMultiple } from '../layout'

type Props = {}

export default async function page({ }: Props) {
  
  const topGames = await getData('https://api.twitch.tv/helix/games/top?first=50', 'lrqi7bsmzprfrx5hjp47vkrgwtwqp2', 'vg5r4gsfsi5924mheojplap8qsqwlx')
  

  return (
    <div className='mr-12 ml-12'>
      <div className='my-0 mx-auto max-w-[200rem]'>
        <section className='block text-white'>

          <div className='mt-12'>
            <h1 className='font-roboto leading-[1.2] text-[5.4rem] font-bold'>Przeglądaj</h1>
          </div>

          <div className='mt-8'>
            <div className='xl:grid-cols-[repeat(5,1fr)] lg:grid-cols-[repeat(4,1fr)] md:grid-cols-[repeat(3,1fr)] sm:grid-cols-[repeat(2,1fr)] grid'>
              <Category_card />
            </div>
          </div>

          <div className='w-full justify-between items-center pt-8'>
            <div className='pb-8'>
              <div className='relative flex h-16 w-full'>
                <ul className='flex-grow flex h-full items-center justify-start text-[1.8rem] flex-wrap'>

                  <li className='flex-grow-0 items-center justify-center h-full list-inside'>
                    <a data-test-selector="browse-header-tab-categories" role="tab" aria-selected="true" className="block h-full w-full text-inherit pl-0 pr-4 no-underline" href="/directory">
                      <div className="text-[#bf94ff] h-full text-left flex flex-col">
                        <div className="flex justify-center flex-col flex-grow">
                          <p className="font-roboto">Kategorie</p>
                        </div>
                        <div className="flex-grow-0">
                          <div data-test-selector="ACTIVE_TAB_INDICATOR" className="h-[0.2rem] mb-[-0.1rem] transition-transform duration-200 ease-in bg-current "></div>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className='flex-grow-0 items-center justify-center h-full list-inside'>
                    <a data-test-selector="browse-header-tab-live-channels" data-a-target="browse-type-tab-live-channels" role="tab" aria-selected="false" className="block h-full w-full text-inherit pl-4 pr-4" href="/directory/all">
                      <div className="text-[$efeff1] h-full text-left flex flex-col">
                        <div className="flex justify-center flex-col flex-grow border-b-[0.1rem] border-solid border-transparent">
                          <p className="font-roboto leading-[1.2] text-[1.8rem] font-semibold">Kanały na żywo</p>
                        </div>
                        <div className="flex-grow-0">
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <section className='block'>
              <div className='flex justify-between items-center flex-wrap'>

                <div className='flex'>
                  <div className='flex-grow-0 flex-shrink-0 pr-2 self-center'>
                    <label className='text-[#f7f7f8] font-semibold text-[1.3rem]'>
                      Filtruj według tagów
                    </label>
                  </div>
                  <div className='items-center flex flex-wrap mr-2 min-w-[22rem]'>
                    <div className='relative'>
                      <label className="w-[0.1rem] h-[0.1rem] border-none [clip:rect(0px,0px,0px,0px)] m-[-0.1rem] overflow-hidden p-0 absolute ">Search</label>
                      <div className='relative'>
                        <div className="flex items-center justify-center h-full min-w-[3rem] absolute top-0 left-0 text-[#adadb8] ">
                          <figure className="inline-flex items-center">
                            <svg width="2rem" height="2rem" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M13.192 14.606a7 7 0 1 1 1.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 1 1 4 9a5 5 0 0 1 10 0z" clipRule="evenodd"></path>
                            </svg>
                          </figure>
                        </div>

                        <input aria-label='Pole wyszukiwania' type='search' className='focus:border-[#a970ff] focus:bg-black hover:outline-none hover:border-[hsla(0,0%,100%,.3)] hover:bg-[hsla(0,0%,100%,.2)] outline-none block w-full h-12 text-[1.3rem] appearance-none bg-clip-padding leading-normal transition-[border] duration-100 ease-in border-solid border-[2px] border-[hsla(0,0%,100%,.2)] text-[#efeff1] bg-[hsla(0,0%,100%,.2)] rounded-[0.4rem] px-8 py-2 pl-[3rem]' autoCapitalize='off' autoCorrect='off' autoComplete='off' placeholder='Tagi ketegorii wyszukania' spellCheck='false' disabled></input>
                      </div>
                    </div>
                  </div>
                </div>

                <Sort_element />
                

              </div>
            </section>
          </div>

          <div className='pb-12 pt-8'>
            <div className='flex flex-wrap min-w-full list-none my-0 mx-[-0.5rem]'>
            <div id="directory-rectangle" data-a-target="browse-card-ad-slot" className='text-center mb-[20px] order-5 w-[300px] h-[250px] hidden flex-grow flex-shrink-0 basis-auto max-w-[50%] pt-0 pr-2 pb-0 pl-2'></div>
              <Game_card topGames={topGames} size={'285x380'} style={1}/>
            </div>
          </div>

        </section>
      </div>
    </div>
  )
}