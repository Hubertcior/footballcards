import {useParams} from "react-router-dom";
import {useFetch} from "@/hooks/useFetch.js";
import Spinner from "../UI/Spinner.jsx";
import PlayerInfoCard from "@/components/UI/PlayerInfoCard.jsx";
import RandomPlayerCard from "@/components/RandomPlayerCard/RandomPlayerCard.jsx";

const PlayerInfo = () => {

    const { playerID } = useParams();

    const {data, loading, error} = useFetch(`https://www.thesportsdb.com/api/v1/json/123/lookupplayer.php?id=${playerID}`);

    if (loading) return <Spinner/>;
    if (error) return <p>Błąd: {error}</p>;

    const playerName = data?.players?.[0]?.strPlayer;
    const playerImage = data?.players?.[0]?.strThumb;
    const playerDescription = data?.players?.[0]?.strDescriptionEN;
    const playerPosition = data?.players?.[0]?.strPosition;
    const playerNationality = data?.players?.[0]?.strNationality;
    const playerDateBorn = data?.players?.[0]?.dateBorn;
    const playerHeight = data?.players?.[0]?.strHeight;
    const playerWeight = data?.players?.[0]?.strWeight;
    const playerTeam = data?.players?.[0]?.strTeam;
    const playerBirthLocation = data?.players?.[0]?.strBirthLocation;
    const playerIDNumber = data?.players?.[0]?.idPlayer;
    const playerNumber = data?.players?.[0]?.strNumber;



    return (
        <div>
            <PlayerInfoCard playerName={playerName} playerImage={playerImage} playerDescription={playerDescription} playerPosition={playerPosition} playerNationality={playerNationality}
                            playerWeight={playerWeight} playerHeight={playerHeight}
                            playerTeam={playerTeam} playerBirthLocation={playerBirthLocation} playerDateBorn={playerDateBorn} playerIDNumber={playerIDNumber} playerNumber={playerNumber} />
        </div>
    )
}
export default PlayerInfo;
