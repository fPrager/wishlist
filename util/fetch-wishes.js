const fetchWishes = async () => {
    const res = await fetch('https://cloud.fprager.de/s/2pQa2K9nJfjb24f/download/wishes.json');
    const wishes = await res.json();
    return wishes;
}

export default fetchWishes;