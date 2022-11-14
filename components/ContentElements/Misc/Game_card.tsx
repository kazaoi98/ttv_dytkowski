import Link from 'next/link';
import React from 'react'


export const replace = (games: { box_art_url: string; }, size: string) => {
  return games.box_art_url.replace('{width}x{height}', size)
};

export default function Game_card({ topGames, size, style }: any) {

  const width = ['w-48', 'w-72']
  const css = 'transition-transform ease-in flex-grow flex-shrink-0 basis-auto max-w-[50%] py-0 px-2 transition-none duration-200 opacity-100 ' + width[style]



  const replaceChars = (str: any) => {
    const result = str
      .replaceAll(' ', '%20')
      .replaceAll(':', '%3A')
      .replaceAll(',', '%2C')

    return result
  }



  return <>{
    topGames.data.map((games: { id: string; name: string; box_art_url: string; }) => (
      <>
        <div className={css} key={games.id}>
          <div className='h-full'>
            <div className='pb-8'>
              <div>
                <div className='relative'>
                  <div className='flex flex-col flex-nowrap'>
                    <Link className='text-[#efeff1] no-underline' href={`directory/game/${replaceChars(games.name)}`}>

                      <div className='relative group'>
                        <div className="group-hover:[transform:translateY(-0.6rem)_scale(1)] group-hover:delay-75 absolute top-0 left-0 w-0 h-0  border-t-[0.6rem] [border-top-style:solid] border-t-transparent border-b-[0.6rem] [border-bottom-style:solid] border-b-transparent border-r-[0.6rem] [border-right-style:solid] border-r-[#9147ff] [transform-origin:left_center] [transform:translateY(-0.6rem)_scale(0)] transition-transform ease-in duration-100"></div>
                        <div className="group-hover:[transform:translateX(0.6rem)_scale(1)] group-hover:delay-75 absolute bottom-0 right-0 w-0 h-0  border-l-[0.6rem] [border-left-style:solid] border-l-transparent border-r-[0.6rem] [border-right-style:solid] border-r-transparent border-t-[0.6rem] [border-top-style:solid] border-t-[#9147ff] [transform-origin:center_bottom] [transform:translateX(0.6rem)_scale(0)] transition-transform ease-in duration-100"></div>
                        <div className="group-hover:[transform:scaleX(1)] group-hover:delay-75 absolute top-0 bottom-0 left-0 bg-[#9147ff] [transform-origin:0px_100%] w-[0.6rem] [transform:scaleX(0)] transition-transform ease-in duration-100"></div>
                        <div className="group-hover:[transform:scaleY(1)] group-hover:delay-75 absolute bottom-0 left-0 right-0 bg-[#9147ff] [transform-origin:0px_100%] h-[0.6rem] [transform:scaleY(0)] transition-transform ease-in duration-100"></div>

                        <div className='hover:[transform:translate3d(0.6rem,-0.6rem,0px)] hover:delay-75 transition-transform ease-in duration-100'>
                          <div className='bg-[hsla(0,0%,100%,.05)]'>
                            <div className='bg-[hsla(0,0%,100%,.05)] transition-none duration-100 ease-in opacity-100'>
                              <div className='flex-shrink-0 bg-[hsla(0,0%,100%,.05)] overflow-hidden w-full'>
                                <div className='relative w-full overflow-hidden'>
                                  <div className='pb-[133.333%]'></div>
                                  <img alt="Obraz" className='absolute left-0 w-full min-h-full top-0 border-none max-w-full align-top' src={replace(games, size)}></img>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
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
                        <a data-a-target="card-0" className="hover:text-[#a970ff] no-underline text-inherit" href="#">123456&nbsp;widzów</a>
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
      </>
    ))
  }</>
}