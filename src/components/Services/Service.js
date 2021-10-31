const Service = (Props) => {
  return (
    <div className="column service">
      <div className="service-content">
      <h3>{Props.title}</h3>
      <i className={"bi service-icon " + Props.icon}></i>
      <p>{Props.details}</p>
      </div>

    </div>
  )
}

export default Service;