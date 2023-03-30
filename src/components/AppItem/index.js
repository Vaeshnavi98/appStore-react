import './index.css'

const AppItem = props => {
  const {projectDetails, key} = props
  const {appId, appName, imageUrl} = projectDetails
  return (
    <>
      <li className="project-item-container">
        <img className="project-item-image" src={imageUrl} alt={appName} />
        <p className="project-item-title">{appName}</p>
      </li>
    </>
  )
}

export default AppItem
