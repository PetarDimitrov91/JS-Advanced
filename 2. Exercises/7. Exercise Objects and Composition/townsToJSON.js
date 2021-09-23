function merge(arr) {
    const townData = [];

    for (let i = 1; i < arr.length; i++) {
        const str = arr[i].substr(1, arr[i].length - 2).trim();

        let [townName, latitude, longitude] = str.split(" | ");
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        const obj = {
            Town: townName,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        }
        townData.push(obj);
    }
    console.log(JSON.stringify(townData));
}

merge(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);