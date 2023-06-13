export const getServerApiUrl = () => {
    return process.env.NODE_ENV === 'development' ? process.env.REACT_APP_SERVER_API : '';
}

export const timerAwait = async (second = 1) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, second * 1000);
    })
}
