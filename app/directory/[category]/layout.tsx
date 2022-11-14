import Category_card from "../../../components/ContentElements/Misc/Category_card";

type Props = {
    children: React.ReactNode,
    params: { category: string },
}

export default function categoryLayout({
    children,
    params: { category }
}: Props) {

    const descriptions = {
        Gry: 'Transmisje na żywo ze wszystkich Twoich ulubionych gier – od strzelanek po platformówki',
        IRL: 'Centrum wszystkiego – od treningów przez zwiedzanie świata po rozmowy i wszystko inne!',
        Muzyka: 'Twoi ulubieni artyści i wszystkie najlepsze występy na żywo, tworzenie muzyki i specjalne wydarzenia',
        Esport: 'Turnieje na żywo, skróty meczów i Twoi ulubieni profesjonalni gracze w jednym miejscu',
        Creative: 'Miejsce do dzielenia się kreatywnością poprzez malowanie, gotowanie, programowanie i nie tylko!',
    };

    return (
        <div className='ml-12 mr-12 text-white'>
            <div className='relative my-0 mx-auto max-w-[200rem]'>
                <div>

                    <div className='max-w-[200rem] pt-12 pb-12 ml-auto mr-auto'>
                        <div className='mb-4'>
                            <h1 className='font-roboto overflow-ellipsis whitespace-nowrap leading-[1.2] text-[5.4rem] font-bold'>
                                {category}
                            </h1>
                        </div>
                        <p className='font-roboto text-[#adadb8] leading-[1.2] text-[2.4rem] font-semibold'>
                            {descriptions[category as keyof typeof descriptions]}
                        </p>
                    </div>

                    <div className='mb-8'>
                        <div className='xl:grid-cols-[repeat(5,1fr)] lg:grid-cols-[repeat(4,1fr)] md:grid-cols-[repeat(3,1fr)] sm:grid-cols-[repeat(2,1fr)] grid'>
                            <Category_card />
                        </div>
                    </div>

                    {children}
                    
                </div>
            </div>
        </div>


    );
}