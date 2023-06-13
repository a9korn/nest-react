import React, {useState} from "react";
import {Button} from "antd";
import {getServerApiUrl, timerAwait} from "../utils/server-api";

const serverApi = getServerApiUrl();

const TestButtons = () => {
    const [loading, setLoading] = useState(false);
    const [fetchLoading, setfetchLoading] = useState(false);
    const handleClick = () => {
        console.log("CLICK 1");
        setLoading(false)
    };
    const handleClickLoading = () => {
        setLoading(true)
    };
    const loadUsers = async () => {
        const fetchUserUrl = `${serverApi}/api/users`;
        console.log('FETCHING DATA FROM URL: ', fetchUserUrl);
        const data = await fetch(fetchUserUrl);
        await timerAwait(1);
        return data.json();
    };
    const handleFetch = async () => {
        setfetchLoading(true)
        const users = await loadUsers();
        console.log('users: ', users);
        setfetchLoading(false)
    };
    return (
        <div>
            <div className={'blocks'}>
                <Button onClick={handleClick} type="primary">Primary Button</Button>
            </div>
            <div>
                <Button onClick={handleClickLoading} type="primary" loading={loading}>
                    Loading
                </Button>
            </div>
            <div>
                <Button loading={fetchLoading} onClick={handleFetch} type="dashed" danger>Fetch</Button>
            </div>
        </div>
    );
};

export default TestButtons;