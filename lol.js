
const getMovies = () => (dispatc) => {
    dispatc({
        type: "MOVIES_FETCHING",
        payload: true,
    });

    const res = axios.get("hueta/endpoint", {
        params: {
            loh: "kek"
        }
    });

    dispatc({
        type: "MOVIES_RECIEVED",
        payload: res.data
    });
}