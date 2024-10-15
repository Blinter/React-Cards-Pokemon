import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useAxios = (baseUrl, initialState = []) => {
    const [data, setData] = useState(initialState);
    const [fetchTrigger, setFetchTrigger] = useState(0);
    const resetState = () => {
        setData(initialState);
        setFetchTrigger(0);
    };
    const fetchData = useCallback(async (urlSuffix = '', onSuccess) => {
        try {
            const response = await axios.get(baseUrl + urlSuffix);
            setData(prevData => {
                const newData = [...prevData, response.data];
                if (onSuccess)
                    onSuccess(newData);

                return newData;
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [baseUrl]);
    useEffect(() => {
        if (fetchTrigger > 0) {
            fetchData('');
        }
    }, [fetchData, fetchTrigger]);
    return [data, fetchData, resetState];
};

export { useAxios };