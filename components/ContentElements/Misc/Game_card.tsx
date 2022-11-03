'use client';

import React, { useEffect, useState } from 'react'
import Tags from './Tags';

export const posters = [
  { category: "Rozmowy", image: "https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg", tags: ["IRL"] },
  { category: "League of Legends", image: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg", tags: ["MOBA", "Akcja"] },
  { category: "Fifa 23", image: "https://static-cdn.jtvnw.net/ttv-boxart/1745202732_IGDB-188x250.jpg", tags: ["Sportowa"] },
  { category: "Grand Theft Auto V", image: "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg", tags: ["Gra przygodowa"] },
  { category: "Counter Strike: Global Offensive", image: "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg", tags: ["FPS", "Strzelanka"] },
  { category: "Overwatch 2", image: "https://static-cdn.jtvnw.net/ttv-boxart/515025_IGDB-188x250.jpg", tags: ["FPS", "Strzelanka"] },
  { category: "Podróże i rekreacja", image: "https://static-cdn.jtvnw.net/ttv-boxart/509672-188x250.jpg", tags: ["IRL"] },
  { category: "Call of Duty: Modern Warfare II ", image: "https://static-cdn.jtvnw.net/ttv-boxart/1678052513_IGDB-188x250.jpg", tags: ["Strzelanka", "Akcja"] },
  { category: "Fortnite", image: "https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg", tags: ["Strzelanka", "Akcja"] }
];

const replace = (games) => {
  return games.box_art_url.replace('{width}x{height}', '188x250')
};



export default function Game_card({topGames}: any) {


  return <>{
    topGames.data.map((games) => (
      
      <div className='transition-transform ease-in flex-grow flex-shrink-0 basis-auto w-48 max-w-[50%] py-0 px-2 transition-none duration-200 opacity-100' key={games.id}>
        <div className='h-full'>
          <div className='pb-8'>
            <div>
              <div className='relative'>
                <div className='flex flex-col flex-nowrap'>
                  <a className='text-[#efeff1] no-underline' href='#'>

                    <div className='relative '>
                      {/* 4 animation divs */}
                      <div className='transition-transform ease-in duration-100'>
                        <div className='bg-[hsla(0,0%,100%,.05)]'>
                          <div className='bg-[hsla(0,0%,100%,.05)] transition-none duration-100 ease-in opacity-100'>
                            <div className='flex-shrink-0 bg-[hsla(0,0%,100%,.05)] overflow-hidden w-full'>
                              <div className='relative w-full overflow-hidden'>
                                <div className='pb-[133.333%]'></div>
                                <img alt="Obraz" className='absolute left-0 w-full min-h-full top-0 border-none max-w-full align-top' src={replace(games)}></img> 
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className='relative'>
                    <div className="flex">
                      <div data-test-selector="tw-card-title" data-a-target="tw-card-title" className="overflow-ellipsis whitespace-nowrap overflow-hidden flex-grow flex-shrink mt-2">
                        <span className="text-[#dedee3]">
                          <a data-a-target="card-0" className="hover:text-[#a970ff] no-underline text-inherit" href="#">
                            <h2 title={games.name} className="overflow-ellipsis whitespace-nowrap overflow-hidden text-[1.4rem] leading-normal font-bold">{games.name}</h2>
                          </a>
                        </span>
                      </div>
                    </div>

                    <p className="overflow-ellipsis whitespace-nowrap overflow-hidden text-[#adadb8] text-[1.3rem] leading-normal">
                      <a data-a-target="card-0" className="hover:text-[#a970ff] no-underline text-inherit" href="#">{ }&nbsp;widzów</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className='mt-2'>
                <div className='inline-block w-full'>

                  {/* {info.tags.map((tag, idx) => (

                    <Tags tag={tag} id={idx} key={idx}/>

                  ))}  */}

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    ))
  }</>
}