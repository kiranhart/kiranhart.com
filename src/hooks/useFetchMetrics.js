import React, { useEffect, useState } from 'react';

const useFetchMetrics = (metricsId) => {
    const [metrics, setMetrics] = useState({ players: 0, servers: 0 });

    useEffect(() => {
       
        const fetchMetrics = async () => {
            const serversReponse = await fetch(`https://bstats.org/api/v1/plugins/${metricsId}/charts/servers/data`);
            const playersReponse = await fetch(`https://bstats.org/api/v1/plugins/${metricsId}/charts/players/data`);
    
            const servers = await serversReponse.json();
            const players = await playersReponse.json();

            setMetrics({
                players: players[0][1],
                servers: servers[0][1]
            });
        };

        if (metricsId) {
            fetchMetrics();
        }

    }, [metricsId]);

    return metrics;
};

export default useFetchMetrics;
