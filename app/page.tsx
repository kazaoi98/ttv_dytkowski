import Main from "../components/ContentElements/Main";
import { getData, getUsers } from "./layout";



export default async function Page() {

    const topGames = await getData('https://api.twitch.tv/helix/games/top?first=10', 'lrqi7bsmzprfrx5hjp47vkrgwtwqp2', 'vg5r4gsfsi5924mheojplap8qsqwlx')
    const streams = await getData('https://api.twitch.tv/helix/streams', 'lrqi7bsmzprfrx5hjp47vkrgwtwqp2', 'vg5r4gsfsi5924mheojplap8qsqwlx')
    const users = await getUsers(streams)

    return (
        <Main topGames={topGames} streams={streams} users={users} />
    )
}