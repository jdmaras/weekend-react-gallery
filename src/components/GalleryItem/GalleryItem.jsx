import { useState } from "react";
// 'item' has a ton of information so later on you will extract what I need being passed down
// which would be the item's description and the path to the photo
function GalleryItem({ item, plusOneLike }) {
    //this state is managing whether to show the images or the description
    // 
    const [showDescription, setShowDescription] = useState(false);

    return (
        <li className="photosAndBtns">
            {
                showDescription ?
                    <p onClick={() => setShowDescription(false)}>{item.description}</p>
                    :
                    <img src={item.path} onClick={() => setShowDescription(true)} />
            }
            <br></br>
            <button onClick={() => plusOneLike(item.id)}>LIKE</button>
            <p>{item.likes}</p>
        </li>
    )
}
export default GalleryItem;