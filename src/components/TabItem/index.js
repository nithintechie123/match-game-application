import './index.css'

const TabItem = props => {
  const {tabItemDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabItemDetails

  const tabItemClassName = isActive ? 'border-and-font-color' : null

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-button ${tabItemClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
