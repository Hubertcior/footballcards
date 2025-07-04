import { useNavigate } from "react-router-dom";

const BackButton = ({disable}) => {

    const navigate = useNavigate();

    return (
        <button
           className=" hidden sm:block flex-row left-150 bg-red-900 text-white p-2 rounded-full shadow-lg  hover:bg-black/90 transition-colors duration-300 cursor-pointer"
           disabled={disable}
            onClick={() => {navigate(-1)}}
        >{`← BACK`}</button>
    )
}
export default BackButton
