import GalleryItem from "../GalleryItem/GalleryItem";

//destructuring so we don't have to put photoArray: photoArray
function GalleryList({ photoArray, plusOneLike }) {

    return (
        <>
            <h2>~*Some Photos I love*~</h2>
            <ul className="photosContainer">
                {photoArray.map(item => (
                    <GalleryItem
                        key={item.id}
                        item={item}
                        plusOneLike={plusOneLike}
                    />
                ))}
            </ul>
        </>
    )
}
export default GalleryList;