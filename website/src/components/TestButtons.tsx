import React, {useState} from "react";
import {Button} from "antd";
import {getServerApiUrl} from "../utils/server-api";

const serverApi = getServerApiUrl();
console.log('serverApi: ', serverApi);

const TestButtons = () => {
    const [loading, setLoading] = useState(false);
    const handleClick = () => {
        console.log("CLICK 1");
        setLoading(false)
    };
    const handleClickLoading = () => {
        setLoading(true)
    };
    const loadUsers = async () => {
        const data = await fetch(`${serverApi}/api/users`);
        return data.json();
    };
    const handleFetch = async () => {
        setLoading(true)
        const users = await loadUsers();
        console.log('users: ', users);
        setLoading(false)
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
                <Button onClick={handleFetch} type="dashed" danger>Fetch</Button>
            </div>
        </div>
    );
};

export default TestButtons;