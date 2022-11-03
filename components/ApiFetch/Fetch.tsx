import { Props } from "../ContentElements/Misc/Followed";


export const FetchUsername = async (value: Props) => {
    const promise = fetch( `https://randomuser.me/api/?results=${value.value}&inc=login,picture&noinfo`);

    try {
        const res = await promise;
        const data = await res.json();
        return data;
    } catch (err) {
        return console.log('An erorr occured!');
    }
}; 

export const Fetcher = async (url: string) => {
    const promise = fetch(url);

    try {
        const res = await promise;
        const data = await res.json();
        return data;
    } catch (err) {
        return console.log('An erorr occured!');
    }
};

export const FetchAuth = async (url: string, client_id: string, client_secret: string) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`
    }

    const promise = fetch(url, options);

    try {
        const res = await promise;
        const data = await res.json();
        return data;
    } catch (err) {
        return console.log('An erorr occured!');
    }
};



