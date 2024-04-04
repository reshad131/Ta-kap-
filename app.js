async function fetchData() {
    const url = 'https://streaming-availability.p.rapidapi.com/genres';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2cf42e9a16mshc7641745c3c466bp1cddd2jsn179ad9efff10',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log("%c2024 Netflix films:", "color: pink; font-weight: bold;");
        console.log("%c" + Object.values(data.result).join(", "), "color: green;");
    } catch (error) {
        console.error(error);
    }
}

fetchData();
