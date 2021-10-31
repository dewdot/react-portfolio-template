const PortfolioCategory = (Props) => {
  return (
    <li className={Props.active ? "active" : null} onClick={()=>Props.setActiveCategory(Props.id)}>{Props.title}</li>
  )
}

export default PortfolioCategory;