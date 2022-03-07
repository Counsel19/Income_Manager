import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const Icons = styled.div`
        display: flex;
        column-gap: 10px;
        justify-content: flex-end;
        margin-right: 10px;
        font-size: 20px;
    `

const IconsWrapper = ({ onDelete, id, update, setUpdate, index, setIndex}) => {
    const handleOnclick = () => {
        onDelete(id)
    }

    const toggleUpdate = () => {
        setIndex(id);
        setUpdate(update => !update)
    }
   
    return (
        <Icons>
            <span className="icon"><FaEdit  onClick={toggleUpdate}/></span>
            <span className="icon"><MdDelete onClick = {handleOnclick}/></span>
        </Icons>
    );
}

export default IconsWrapper;