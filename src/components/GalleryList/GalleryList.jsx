import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ photoArray, plusOneLike }) {

    return (
        <>
            <h2>~*Some Photos I love*~</h2>
            <ul className="photosContainer">
                {/* baby needs a key tag */}
                {photoArray.map(item => (
                    <GalleryItem item={item} plusOneLike={plusOneLike} />
                ))}
            </ul>
        </>
    )
}
export default GalleryList;