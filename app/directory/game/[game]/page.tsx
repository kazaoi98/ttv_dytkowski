import React from 'react'
import Image from 'next/image';
import Sort_element from '../../../../components/ContentElements/Misc/Sort_element';
import { getData, getMultiple } from '../../../layout';
import Card from '../../../../components/ContentElements/Misc/Card';
import { replace } from '../../../../components/ContentElements/Misc/Game_card';

type Props = {
    params: {
        game: string
    }
}


async function Game({ params: { game } }: Props) {
    const topGames = await getData('https://api.twitch.tv/helix/games/top?first=50', 'lrqi7bsmzprfrx5hjp47vkrgwtwqp2', 'vg5r4gsfsi5924mheojplap8qsqwlx')
    const result = topGames.data.find((g: { name: string; }) => g.name === game)
    const streams = await getData(`https://api.twitch.tv/helix/streams?game_id=${result.id}&first=50`, 'lrqi7bsmzprfrx5hjp47vkrgwtwqp2', 'vg5r4gsfsi5924mheojplap8qsqwlx')
    const langStreams = { 'data': streams.data.filter((l: { language: string; }) => l.language === 'pl') }
    const users = await getMultiple(streams, 'https://api.twitch.tv/helix/users', 'id=', 'user_id')
    const langUsers = await getMultiple(langStreams, 'https://api.twitch.tv/helix/users', 'id=', 'user_id')

    const getLangStreams = () => {
        if (langStreams.data.length === 0) return null;

        return (
            <>

                <div className='mb-8'>
                    <h4 className='text-[#efeff1] leading-normal text-[1.8rem] font-semibold'>
                        Język kanałów:&nbsp;
                        <button className='hover:underline hover:cursor-pointer no-underline text-[#bf94ff] bg-none border-none rounded-none'>
                            <strong>Polski</strong>
                        </button>
                    </h4>
                </div>

                <div className='flex flex-wrap min-w-full list-none my-0 mx-[-0.5rem]'>
                    <Card streams={langStreams} users={langUsers} max={5} />
                </div>


                <div className='mb-8'>
                    <h4 className='text-[#efeff1] leading-normal text-[1.8rem] font-semibold'>
                        Wszystkie kanały
                    </h4>
                </div>
            </>

        );
    }


    return (
        <div className='ml-12 mr-12 text-white'>
            <div className='my-0 mx-auto max-w-[200rem]'>
                <section className='block'>
                    <div className='overflow-hidden relative'>
                        <div className='my-0 mx-auto max-w-[200rem] bottom-0 left-0 right-0 pb-8 pt-12'>
                            <div className='items-stretch flex'>


                                <div className='items-start flex mr-12 relative'>
                                    <div className='w-[14.4rem] shadow-[0_6px_16px_rgba(0,0,0,.5),0_0px_4px_rgba(0,0,0,.4)]'>
                                        <div className='flex-shrink-0 bg-[hsla(0,0%,100%,.05)] overflow-hidden w-full'>
                                            <div className='relative w-full overflow-hidden'>
                                                <div className='pb-[133.333%]'></div>
                                                <Image alt="game poster" src={replace(result, '144x192')} width={144} height={192} className="absolute left-0 w-full min-h-full top-0 border-none max-w-full align-top" />;
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center'>

                                    <div className='flex justify-between relative'>
                                        <h1 className='font-roboto leaidng-[1.2] text-[3.6rem] font-bold'>
                                            {game}
                                        </h1>
                                    </div>

                                    <div className='mt-2'>
                                        <div className='inline-block'>
                                            <p className='text-[#dedee3] text-[1.8rem] leading-normal'>
                                                Widzowie: <strong>123456</strong>
                                            </p>
                                        </div>
                                        <div className='inline-block ml-4 mr-4'>
                                            <p className="text-[#efeff1] text-[1.8rem] leading-normal">•</p>
                                        </div>
                                        <div className='inline-block'>
                                            <p title="Obserwujący: 34&nbsp;787&nbsp;526" className="text-[#dedee3] text-[1.8rem] leading-normal">Obserwujący: <strong>123&nbsp;mln</strong></p>
                                        </div>
                                        <div className='inline-block ml-4 mr-4'>
                                            <p className="text-[#efeff1] text-[1.8rem] leading-normal">•</p>
                                        </div>
                                        <div className='inline-block'>
                                            <p className='text-[#efeff1] text-[1.8rem] leading-normal'>tagi</p>
                                        </div>
                                    </div>

                                    <div className='max-w-[64rem] mt-2'>
                                        <div className="text-[#efeff1] text-[1.8rem] leading-normal">
                                            <div>
                                                <div className="flex items-end invisible"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex mt-8'>
                                        <div className='overflow-hidden rounded-[0.4rem] inline-flex'>
                                            <button className="group hover:bg-[#772ce8] hover:text-white hover:no-underline hover:cursor-pointer bg-[#9147ff] text-white inline-flex relative items-center justify-center align-middle overflow-hidden no-underline whitespace-nowrap select-none font-semibold rounded-[0.6rem] text-[1.4rem] h-[3.6rem] bg-none" >
                                                <div className="flex items-center flex-grow-0 pt-0 pb-0 pl-4 pr-4">
                                                    <div className="flex justify-center items-center">
                                                        <div className="group-hover:scale-[1.2] transition-transform duration-200 ease-in opacity-100 flex justify-center items-center mr-2 h-full" >
                                                            <div className="flex justify-center items-center">
                                                                <div className="inline-flex">
                                                                    <figure className=" items-center inline-flex ">
                                                                        <svg type="color-fill-current" width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="fill-current">
                                                                            <g>
                                                                                <path fillRule="evenodd" d="M9.171 4.171A4 4 0 006.343 3H6a4 4 0 00-4 4v.343a4 4 0 001.172 2.829L10 17l6.828-6.828A4 4 0 0018 7.343V7a4 4 0 00-4-4h-.343a4 4 0 00-2.829 1.172L10 5l-.829-.829zm.829 10l5.414-5.414A2 2 0 0016 7.343V7a2 2 0 00-2-2h-.343a2 2 0 00-1.414.586L10 7.828 7.757 5.586A2 2 0 006.343 5H6a2 2 0 00-2 2v.343a2 2 0 00.586 1.414L10 14.172z" clipRule="evenodd"></path>
                                                                            </g>
                                                                        </svg>
                                                                    </figure>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span>
                                                            <div className='transition-all opacity-100'>Obserwuj</div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='min-h-12 flex flex-wrap mb-8'>
                        <div className='relative flex h-16 w-full'>
                            <ul className='flex-grow flex h-full items-center justify-start text-[1.8rem] flex-wrap list-none'>
                                <li role="presentation" className='flex-grow-0 items-center justify-center h-full list-inside'>
                                    <a data-a-target="game-directory-live-tab" role="tab" aria-selected="true" className="block h-full w-full text-inherit pl-0 pr-4 no-underline" href={`/directory/game/${game}`}>
                                        <div className="text-[#bf94ff] h-full text-left flex flex-col">
                                            <div className="flex justify-center flex-col flex-grow">
                                                <p className="font-roboto leading-[1.2] text-[1.8rem] font-semibold">Kanały na żywo</p>
                                            </div>
                                            <div className="flex-grow-0">
                                                <div data-test-selector="ACTIVE_TAB_INDICATOR" className="h-[0.2rem] mb-[-0.1rem transition-transform] duration-200 ease-in bg-current"></div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <section className='block'>
                            <div className='mb-8 min-h-12 flex flex-wrap'>
                                <div className='w-full'>
                                    <div className='flex justify-between items-center'>

                                        <div className='flex self-center flex-grow'>
                                            <div className='items-center flex flex-wrap'>
                                                <div className='relative z-[1]'>
                                                    <div className='p-2'>
                                                        <div className='relative'>
                                                            <input aria-label="Pole wyszukiwania" type="search" className="hover:outline-none hover:border-[hsla(0,0%,100%,.3)] hover:bg-[hsla(0,0%,100%,.2)] block w-full h-12 text-[1.3rem] appearance-none bg-clip-padding leading-normal transition-[border] duration-100 ease-in border-solid border-[2px] border-[hsla(0,0%,100%,.2)] bg-[hsla(0,0%,100%,.2)] rounded-[0.4rem] py-2 px-4" placeholder="Wyszukaj tagi" autoCapitalize="off" autoCorrect="off" data-a-target="tw-input" ></input>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <Sort_element />

                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className='relative mb-12'>

                            {getLangStreams()}

                            <div className='flex-shrink-0'>
                                <div className='flex flex-wrap min-w-full list-none my-0 mx-[-0.5rem]'>
                                    <Card streams={streams} users={users} max={50} />
                                </div>
                            </div>

                        </div>
                    </div>



                </section>
            </div>
        </div >
    )
}



export default Game