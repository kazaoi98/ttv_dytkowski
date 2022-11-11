import './globals.css'
import { Roboto } from '@next/font/google';
import Header from '../components/Header';
import Sidenav from '../components/ContentElements/Sidenav';

const roboto = Roboto({
    weight: '500',
});


export const getData = async (url: string, token: string, client_id: string) => {
    const options: RequestInit = {

        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Client-Id': client_id

        },
        cache: "no-cache"
    }

    const promise = fetch(url, options);

    try {
        const res = await promise;
        const data = await res.json();
        /* FetchUser(`https://api.twitch.tv/helix/users?id=${data.data.id}`, token, client_id) */

        return data
    } catch (err) {
        return console.log('An erorr occured!');
    }
};


export const getUsers = async (arr: { data: { user_id: string; }[]; }) => {
    let string = 'https://api.twitch.tv/helix/users?'
    const length = arr.data.length
    let sign = `&`
    arr.data.map((item: { user_id: string; }, idx: number) => {
        if (idx == length - 1) { sign = `` }
        string += `id=${item.user_id}` + sign
    });
    return await getData(string, 'lrqi7bsmzprfrx5hjp47vkrgwtwqp2', 'vg5r4gsfsi5924mheojplap8qsqwlx')
}

export const getMultiple = async (arr: any, url: string, prefix: string, identifier: string) => {
    let string = url + "?"
    const length = arr.data.length
    let sign = `&`
    arr.data.map((item: any, idx: number) => {
        if (idx == length - 1) { sign = `` }
        string +=  prefix + item[identifier] + sign
    });
    return await getData(string, 'lrqi7bsmzprfrx5hjp47vkrgwtwqp2', 'vg5r4gsfsi5924mheojplap8qsqwlx')
}


const classes = `${roboto.className} text-[62.5%] flex flex-col h-full relative w-full leading-normal border-none m-0 p-0 align-baseline box-border`

export default async function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {

    //const topGames = await getData('https://api.twitch.tv/helix/games/top?first=10', 'lrqi7bsmzprfrx5hjp47vkrgwtwqp2', 'vg5r4gsfsi5924mheojplap8qsqwlx')
    const streams = await getData('https://api.twitch.tv/helix/streams', 'lrqi7bsmzprfrx5hjp47vkrgwtwqp2', 'vg5r4gsfsi5924mheojplap8qsqwlx')
    //const users = await getData('https://api.twitch.tv/helix/users', 'lrqi7bsmzprfrx5hjp47vkrgwtwqp2', 'vg5r4gsfsi5924mheojplap8qsqwlx')
    const users = await getMultiple(streams, 'https://api.twitch.tv/helix/users', 'id=', 'user_id')
    

    return (
        <html lang="pl" className={classes}>
            <head>
                <title>Next.js Twitch.tv clone</title>
            </head>
            <body className='bg-[#0e0e10] box-border h-full w-full'>
                <div className='overflow-hidden flex flex-col flex-nowrap inset-0'>
                    <div className='flex flex-col flex-nowrap h-full'>
                        <Header />
                        <div className='flex flex-nowrap relative overflow-hidden h-full'>
                            <Sidenav streams={streams} users={users} />
                            {/* <Content topGames={topGames} streams={streams} users={users} /> */}
                            <main className='overflow-hidden relative flex-grow w-full h-full flex flex-col z-[1]'>
                                <header className='block'></header>
                                <div className='max-h-[919.49px] overflow-x-hidden  '>
                                    <div className='pr-[17px] mb-0 pb-0 max-h-[inherit] box-content min-w-full overflow-x-hidden overflow-y-scroll'>
                                        <div className='mr-[-17px] mb-0 pb-0 overflow-x-hidden flex box-border min-h-full overflow-y-hidden'>
                                            <div className='relative w-full'>
                                                {children}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>

                <div id="portal"></div>
                <div id="preferences_portal"></div>
            </body>
        </html>
    );
}