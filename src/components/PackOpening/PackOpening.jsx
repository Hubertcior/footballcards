import React, { useEffect, useState } from 'react'
import { useRandomPlayer } from "@/hooks/useRandomPlayer.js";
import Spinner from "@/components/UI/Spinner.jsx";
import PlayerCard from "@/components/TeamBuilder/PlayerCard.jsx";

const PackOpening = () => {
    const { player, loading: loadingPlayer, error: errorPlayer } = useRandomPlayer();
    const [playerData, setPlayerData] = useState(null);
    const [loadingData, setLoadingData] = useState(false);
    const [errorData, setErrorData] = useState(null);

    useEffect(() => {
        if (!player?.name) return;
        setPlayerData(null);
        setLoadingData(true);
        setErrorData(null);
        fetch(`https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?p=${player.name}`)
            .then(res => res.json())
            .then(data => {
                setPlayerData(data);
                setLoadingData(false);
            })
            .catch(err => {
                setErrorData(err);
                setLoadingData(false);
            });
    }, [player?.name]);

    if (loadingPlayer || loadingData || !playerData) return <Spinner />;
    if (errorPlayer) return <p>{errorPlayer.message}</p>;
    if (errorData) return <p>{errorData.message}</p>;

    return (
        <PlayerCard
            name={playerData?.player?.[0]?.strPlayer}
            attackAttribute={player.attack}
            defenceAttribute={player.defence}
            midfieldAttribute={player.midfield}
            image={playerData?.player?.[0]?.strThumb}
            club={playerData?.player?.[0]?.strTeam}
            country={playerData?.player?.[0]?.strNationality}
        />
    )
}
export default PackOpening