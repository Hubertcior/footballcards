import {useParams} from "react-router-dom";
import {useFetch} from "@/hooks/useFetch.js";
import Spinner from "../UI/Spinner.jsx";
import Card from "../UI/Card.jsx";
import Heading from "../UI/Heading.jsx";

const PlayerList = () => {

    const { teamID } = useParams();

    const {data, loading, error} = useFetch(`https://www.thesportsdb.com/api/v1/json/123/lookup_all_players.php?id=${teamID}`);

    if (loading) return <Spinner/>;
    if (error) return <p>Błąd: {error}</p>;

    return (
        <div>
            <Heading text="player"/>
            <ul className="flex flex-wrap justify-center items-center gap-4 p-4">
                {data?.player?.map((player) => (
                    <Card key={player.idPlayer} text={player.strPlayer} img={player.strThumb} star={true} isNotLeague={true} isPlayer={true} />
                ))}
            </ul>
        </div>
    )
}
export default PlayerList
