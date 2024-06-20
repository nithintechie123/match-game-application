import './index.css'

const Thumbnails = props => {
  const {eachThumbnailDetails, clickedThumbnailItem} = props
  const {thumbnailUrl, id} = eachThumbnailDetails

  const onClickThumbnailItem = () => {
    clickedThumbnailItem(id)
  }

  return (
    <li className="each-thumbnail-item">
      <button
        type="button"
        className="thumbnail-item-button"
        onClick={onClickThumbnailItem}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}
export default Thumbnails
