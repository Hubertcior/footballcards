import {supabase} from "@/lib/supabase.js";
import {useEffect, useState} from "react";


const RandomPlayerCard = () => {

    const [player, setPlayer] = useState()

    const fetchRandomPlayer = async () => {
        const { data, error } = await supabase.rpc("get_random_player");
        if (error) {
            console.error(error);
            return null;
        }
        return data;
    };

    useEffect(() => {
        const getPlayer = async () =>{
            const data = await fetchRandomPlayer();
            if (data){
                setPlayer(data[0]);
            }
        }
        getPlayer();
    }, [])


    return (
        <div>{player.name}</div>
    )
}
export default RandomPlayerCard
