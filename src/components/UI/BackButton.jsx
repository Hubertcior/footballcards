import { useNavigate } from "react-router-dom";

const BackButton = () => {

    const navigate = useNavigate();

    return (
        <button
           className=" hidden sm:block flex flex-row absolute top-12 left-150 bg-red-900 text-white p-2 rounded-full shadow-lg  hover:bg-black/90 transition-colors duration-300"
        onClick={() => {navigate(-1)}}
        >{`← BACK`}</button>
    )
}
export default BackButton
