import {useFetch} from "../../hooks/useFetch.js";
import Spinner from "../UI/Spinner.jsx";
import Heading from "../UI/Heading.jsx";
import Card from "../UI/Card.jsx";


const LeaguesList = () => {
    const { data, loading, error } = useFetch('https://www.thesportsdb.com/api/v1/json/123/all_leagues.php');

    if (loading) return <Spinner/>;
    if (error) return <p>Błąd: {error}</p>;

    return (
        <>
            <Heading text="league"></Heading>
        <ul className="flex flex-wrap justify-center items-center gap-4 p-4">
            {data?.leagues?.map((league) => (
                <Card key={league.idLeague} url={`/leagues/${league.strLeague}`} text={league.strLeague} isNotLeague={false} isPlayer={false}/>
            ))}
        </ul>
        </>
    );
};

export default LeaguesList;
