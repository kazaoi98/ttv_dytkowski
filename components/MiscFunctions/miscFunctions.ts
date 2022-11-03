export const viewerCount = (count: number) => {

    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: " tys." },
        { value: 1e6, symbol: " mil." }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function (item) {
        return count >= item.value;
    });
    return item ? (count / item.value).toFixed(1).replace(rx, "$1") + item.symbol : "0";

}