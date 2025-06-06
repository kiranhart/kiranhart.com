import { useState, useEffect } from "react";

const DISCORD_API_URL = 'https://discord.com/api/v9/invites/WTg4PhBHEg?with_counts=true';

const useSupportDiscordCount = () => {
    const [memberCount, setMemberCount] = useState<number>(0);
    const [onlineCount, setOnlineCount] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(DISCORD_API_URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMemberCount(data.approximate_member_count);
                setOnlineCount(data.approximate_presence_count);
            } catch (error) {
                console.error("Error fetching Discord data:", error);
            }
        };

        fetchData();
    }, []);

    return [memberCount, onlineCount]  ;
}

export default useSupportDiscordCount;