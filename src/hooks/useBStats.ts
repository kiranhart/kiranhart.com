import { useState, useEffect } from "react";

const BSTATS_API_URL = 'https://bstats.org/api/v1/plugins/';

const useBStats = (pluginIds: number[]) => {
    const [totalServers, setTotalServers] = useState<number>(0);
    const [totalPlayers, setTotalPlayers] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allData = await Promise.all(
                    pluginIds.map(async (id) => {
                        const [servers, players] = await Promise.all([
                            fetch(`${BSTATS_API_URL}${id}/charts/servers/data`),
                            fetch(`${BSTATS_API_URL}${id}/charts/players/data`)
                        ]);
                        
                        const serverData = await servers.json();
                        const playerData = await players.json();
                        
                        return {
                            servers: serverData[0][1],
                            players: playerData[0][1]
                        };
                    })
                );

                const total = allData.reduce((acc, curr) => ({
                    servers: acc.servers + curr.servers,
                    players: acc.players + curr.players
                }), { servers: 0, players: 0 });

                setTotalServers(total.servers);
                setTotalPlayers(total.players);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [pluginIds]);

    return [totalServers, totalPlayers];
};

export default useBStats;