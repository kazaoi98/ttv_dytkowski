import React from 'react'
import Game_card from '../../../components/ContentElements/Misc/Game_card'
import { getData } from '../../layout'

type Props = {
    params: { category: string }
}

export default async function layout({ params: { category } }: Props) {

    const topGames = await getData('https://api.twitch.tv/helix/games/top?first=10', 'lrqi7bsmzprfrx5hjp47vkrgwtwqp2', 'vg5r4gsfsi5924mheojplap8qsqwlx')

    return (


        <div className='mb-12'>

            <div className='mt-4 mb-4'>
                <h2 className='font-roboto leading-[1.2] text-[1.8rem] font-semibold'>
                    <div>
                        <span>
                            Polecane&nbsp;{category.toLowerCase()}
                        </span>
                    </div>
                </h2>
            </div>
            <div className='mb-[-1rem]'>
                <div className='flex flex-wrap  min-w-full list-none my-0 mx-[-0.5rem]'>
                    <Game_card topGames={topGames} size={'188x250'} style={0} />
                </div>
            </div>
            <div className="py-6 px-0">
                <div className="flex-grow relative">
                    <div className="top-1/2 border-t-[1px] border-solid border-[hsla(0,0%,100%,.1)] w-full absolute z-[-1]"></div>
                </div>
            </div>

        </div>
    )
}