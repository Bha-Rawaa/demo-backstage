// frontend/plugins/repo-table/src/components/DatabaseTable.tsx
import React, { useEffect, useState } from 'react';

interface Data {
    id: number;
    name: string;
}

const DatabaseTable = () => {
    const [data, setData] = useState<Data[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/database/data');
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError("Error fetching data");
                console.error(error);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DatabaseTable;
