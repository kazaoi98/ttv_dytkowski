import React from 'react'

const data = [
    { name: "Gry", src: "https://static.twitchcdn.net/assets/gaming-e9019587744b56b11b43.svg" },
    { name: "IRL", src: "https://static.twitchcdn.net/assets/irl-baa32e8e64a6974282c0.svg" },
    { name: "Muzyka", src: "https://static.twitchcdn.net/assets/music-5fb4595a30d04d991e24.svg" },
    { name: "Esport", src: "https://static.twitchcdn.net/assets/esports-7a078acca57531d11e29.svg" },
    { name: "Creative", src: "https://static.twitchcdn.net/assets/creative-6423fb5fbcf31fadee38.svg" },

]

export default function Category_card({ }: any) {
    return <>{

        data.map((categoryData) => (
            
            <div className='border-[2px] border-solid border-transparent rounded-[10px] p-[2px] mb-4' key={categoryData.name}>
                <div className='[background-position-x:100%] [background-position-y:100%] bg-no-repeat bg-contain text-white rounded-[0.6rem] bg-[#772ce8]'>
                    <a className='hover:bg-[hsla(0,0%,100%,.2)] hover:text-inherit   rounded-[0.6rem] block w-full text-inherit no-underline' href='#'>
                        <div className='h-[45px] items-center flex justify-between'>
                            <div className='pl-4 pr-4 ml-2 items-center flex h-full'>
                                <p className='text-[24px] leading-[22px] font-semibold'>
                                    {categoryData.name}
                                </p>
                            </div>
                            <div className='mr-4'>
                                <img className="max-w-full border-none align-top" alt="Ikona gier" sizes="65px" src={categoryData.src}></img>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        ))

    }</>
}