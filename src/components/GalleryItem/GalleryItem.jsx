import { useState } from "react";

function GalleryItem({ item, plusOneLike }) {

    const [showDescription, setShowDescription] = useState(false);

    return (
        <li className="photosAndBtns">
            {
                showDescription ?
                    <p onClick={() => setShowDescription(false)}>{item.description}</p> :
                    <img src={item.path} onClick={() => setShowDescription(true)} />
            }
            <br></br>
            <button onClick={() => plusOneLike(item.id)}>LIKE</button>
            <p>{item.likes}</p>
        </li>
    )
}
export default GalleryItem;