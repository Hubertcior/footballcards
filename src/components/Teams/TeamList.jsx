import { useParams } from 'react-router-dom';
import {useFetch} from "@/hooks/useFetch.js";
import Spinner from "../UI/Spinner.jsx";
import Heading from "../UI/Heading.jsx";
import Card from "../UI/Card.jsx";

const TeamsList = () => {
    const { leagueName } = useParams();

    const { data, loading, error } = useFetch(
        `https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=${leagueName}`
    );

    if (loading) return <Spinner/>;
    if (error) return <p>Błąd: {error}</p>;

    return (
        <div>
            <Heading text="Pick team"></Heading>
            <ul className="flex flex-wrap justify-center items-center gap-4 p-4">
                {data?.teams?.map((team) => (
                    <Card id={team.idTeam} key={team.idTeam} url={`/leagues/${leagueName}/${team.idTeam}`} text={team.strTeam} img={team.strBadge} star={true} isNotLeague={true} isPlayer={false} />
                ))}
            </ul>
        </div>
    );
};

export default TeamsList;
