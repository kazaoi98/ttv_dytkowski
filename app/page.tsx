import Main from "../components/ContentElements/Main";
import { getData, getMultiple } from "./layout";



export default async function Page() {

    const topGames = await getData('https://api.twitch.tv/helix/games/top?first=10', 'lrqi7bsmzprfrx5hjp47vkrgwtwqp2', 'vg5r4gsfsi5924mheojplap8qsqwlx')
    const streams = await getData('https://api.twitch.tv/helix/streams', 'lrqi7bsmzprfrx5hjp47vkrgwtwqp2', 'vg5r4gsfsi5924mheojplap8qsqwlx')
    const users = await getMultiple(streams, 'https://api.twitch.tv/helix/users', 'id=', 'user_id')
    //const tags = await getMultiple(streams, 'https://api.twitch.tv/helix/tags/streams', 'tag_id=', 'tag_ids')

    return (

        <Main topGames={topGames} streams={streams} users={users} />

    )
}