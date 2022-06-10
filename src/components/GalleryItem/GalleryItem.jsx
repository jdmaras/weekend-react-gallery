
function GalleryItem({ item, plusOneLike }) {
    return (
        <li>
            <img src={item.path} /><br></br>
            <p>JSON.stringify(item)</p>
            <button onClick={() => plusOneLike(item.id)}>LIKE</button>
        </li>
    )
}
export default GalleryItem;