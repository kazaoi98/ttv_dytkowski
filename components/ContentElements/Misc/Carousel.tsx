import { getData } from "../../../app/layout"

export default function Carousel({ streams }: any) {

    const randomNumber = Math.floor(Math.random() * (5 - 1) + 1);

    return (
                <div className='min-h-[35rem] transition-[padding] ease-in duration-[0.45s] pt-8 pl-12 pr-12'>
                    <div className='mx-[auto] my-0 max-w-[200rem]'>
                        <div className='h-[30rem] flex items-center justify-center relative'>
        
                            <div className='bg-[#0e0e10] absolute left-0 z-10 rounded-[0.6rem]'>
                                <div className='flex items-center content-center justify-center'>
                                    <button disabled className=' hover:bg-[hsla(0,0%,100%,.2)]  inline-flex items-center justify-center select-none rounded-[0.6rem] h-[3.6rem] w-[3.6rem] bg-transparent text-[#efeff1] relative align-middle overflow-hidden no-underline whitespace-nowrap font-semibold text-[1.4rem] bg-none border-none'>
                                        <div className='w-[2.4rem] h-[2.4rem]'>
                                            <div className='inline-flex items-center h-full w-full'>
                                                <div className='relative w-full overflow-hidden'>
                                                    <div className='pb-[100%]'></div>
                                                    <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className='absolute left-0 w-full min-h-full top-0 fill-current'>
                                                        <g>
                                                            <path d="M13.5 14.5L9 10l4.5-4.5L12 4l-6 6 6 6 1.5-1.5z"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
        
                            <div className='bg-[#0e0e10] absolute right-0 z-10 rounded-[0.6rem]'>
                                <div className='flex items-center justify-center'>
                                    <button disabled className='  hover:bg-[hsla(0,0%,100%,.2)] inline-flex items-center justify-center select-none rounded-[0.6rem] h-[3.6rem] w-[3.6rem] bg-transparent text-[#efeff1] relative align-middle overflow-hidden no-underline whitespace-nowrap font-semibold text-[1.4rem] bg-none border-none'>
                                        <div className='w-[2.4rem] h-[2.4rem]'>
                                            <div className='inline-flex items-center h-full w-full'>
                                                <div className='relative w-full overflow-hidden'>
                                                    <div className='pb-[100%]'></div>
                                                    <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className='absolute left-0 w-full min-h-full top-0 fill-current'>
                                                        <g>
                                                            <path d="M6.5 5.5L11 10l-4.5 4.5L8 16l6-6-6-6-1.5 1.5z"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
        
                           {/*  <div className='absolute top-0 left-[calc(50%-375px)] z-[1] transform translate-x-[50%] scale-[0.7] transition-all duration-[450ms] ease-in w-[75rem] cursor-pointer h-[30rem]'>
                                <div>
                                    <div className='transition-transform duration-[0.3s] ease-in h-[30rem]'>
                                        <div className='relative overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,.5),0_0px_4px_rgba(0,0,0,.4)] bg-[#451093] w-full h-full'>
                                            <div data-test-selector="featured-item-no-video-wrapper" className='opacity-100 transition-opacity duration-[0.3s] ease-in absolute inset-0 bg-[rgba(0,0,0,.6)] text-white'>
                                            </div>
                                            <img alt="Lorem" className='w-full h-full border-none max-w-full align-top' src=""></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className='absolute top-0 left-[calc(50%-375px)] z-[2] transform translate-x-[25%] scale-[0.85] transition-all duration-[450ms] ease-in w-[75rem] cursor-pointer h-[30rem]'>
                                <div>
                                    <div className='transition-transform duration-[0.3s] ease-in h-[30rem]'>
                                        <div className='relative overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,.5),0_0px_4px_rgba(0,0,0,.4)] bg-[#451093] w-full h-full'>
                                            <div data-test-selector="featured-item-no-video-wrapper" className='opacity-50 transition-opacity duration-[0.3s] ease-in absolute inset-0 bg-[rgba(0,0,0,.6)] text-white'>
                                            </div>
                                            <img alt="Lorem" className='w-full h-full border-none max-w-full align-top' src=""></img>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
        
                            <div className='absolute top-0 left-[calc(50%-375px)] z-[3] transform scale-[1] transition-all duration-[450ms] ease-in w-[75rem] cursor-pointer h-[30rem]'>
                                <div>
                                    <div className='h-[30rem]'>
                                        <div className='relative overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,.5),0_0px_4px_rgba(0,0,0,.4)] bg-[#451093] w-full h-full'>
                                            <div data-test-selector="featured-item-no-video-wrapper" className='transition-opacity duration-[0.3s] ease-in absolute inset-0 bg-[rgba(0,0,0,.6)] text-white'>
                                                <iframe src={`https://player.twitch.tv/?channel=${streams.data[randomNumber].user_name}&parent=ttv-dytkowski.vercel.app`} frameBorder="0" allowFullScreen={true} scrolling="no" height="300" width="530"></iframe>
                                            </div>
        
                                            <div className="absolute top-0 left-0 ml-4 mt-4 z-10">
                                                <div className="inline-block text-center pointer-events-none py-0 px-2 rounded-[0.4rem] text-[1.3rem] bg-[#eb0400] text-white">
                                                    <p className="whitespace-nowrap uppercase font-semibold text-[1.3rem] leading-normal">Na żywo</p>
                                                </div>
                                            </div>
        
                                            <img alt="lorem" className='w-full h-full border-none max-w-full align-top' src={`https://static-cdn.jtvnw.net/previews-ttv/live_user_${streams.data[randomNumber].user_name}-440x248.jpg`}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                           {/*  <div className='absolute top-0 left-[calc(50%-375px)] z-[2] transform translate-x-[-25%] scale-[0.85] transition-all duration-[450ms] ease-in w-[75rem] cursor-pointer h-[30rem]'>
                                <div>
                                    <div className='transition-transform duration-[0.3s] ease-in h-[30rem]'>
                                        <div className='relative overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,.5),0_0px_4px_rgba(0,0,0,.4)] bg-[#451093] w-full h-full'>
                                            <div data-test-selector="featured-item-no-video-wrapper" className='opacity-50 transition-opacity duration-[0.3s] ease-in absolute inset-0 bg-[rgba(0,0,0,.6)] text-white'>
                                            </div>
                                            <img alt="Lorem" className='w-full h-full border-none max-w-full align-top' src=""></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className='absolute top-0 left-[calc(50%-375px)] z-[1] transform translate-x-[-50%] scale-[0.7] transition-all duration-[450ms] ease-in w-[75rem] cursor-pointer h-[30rem]'>
                                <div>
                                    <div className='transition-transform duration-[0.3s] ease-in h-[30rem]'>
                                        <div className='relative overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,.5),0_0px_4px_rgba(0,0,0,.4)] bg-[#451093] w-full h-full'>
                                            <div data-test-selector="featured-item-no-video-wrapper" className='opacity-100 transition-opacity duration-[0.3s] ease-in absolute inset-0 bg-[rgba(0,0,0,.6)] text-white'>
                                            </div>
                                            <img alt="Lorem" className='w-full h-full border-none max-w-full align-top' src=""></img>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
        
        
                        </div>
                    </div>
                </div>

    

    )
}