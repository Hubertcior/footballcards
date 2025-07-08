import React, { useEffect, useState } from 'react'
import { useRandomPlayer } from "@/hooks/useRandomPlayer.js";
import Spinner from "@/components/UI/Spinner.jsx";
import PlayerCard from "@/components/TeamBuilder/PlayerCard.jsx";
import ButtonGroup from "@/components/UI/ButtonGroup.jsx";
import OpenAgainButton from "@/components/PackOpening/OpenAgainButton.jsx";
import StoreToClubButton from "@/components/PackOpening/StoreToClubButton.jsx";

const PackOpening = ({ onOpenAgain }) => {
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

    if (loadingPlayer || loadingData ) return <Spinner />;
    if (errorPlayer) return <p>{errorPlayer.message}</p>;
    if (errorData) return <p>{errorData.message}</p>;


    console.log(player);

    return (
        <div className="flex flex-col items-center justify-center gap-4 p-4">
            <PlayerCard
                name={playerData?.player?.[0]?.strPlayer}
                attackAttribute={player.attack}
                midfieldAttribute={player.midfield}
                defenceAttribute={player.defence}
                image={playerData?.player?.[0]?.strThumb}
                club={playerData?.player?.[0]?.strTeam}
                country={playerData?.player?.[0]?.strNationality}
            />
            <ButtonGroup>
                <OpenAgainButton onClick={onOpenAgain}/>
                <StoreToClubButton/>
            </ButtonGroup>
        </div>
    )
}
export default PackOpening