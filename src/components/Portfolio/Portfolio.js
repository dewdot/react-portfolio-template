import { useEffect, useState } from "react";
import PortfolioCategory from "./PortfolioCategory";
import { PortfolioBranding, PortfolioDesign, PortfolioMobile, PortfolioReact, PortfolioAll } from './PortfolioData'
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [categoryData, setCategoryData] = useState([]);
  const list = [
    {
      id: 'all',
      title: 'All'
    },
    {
      id: 'branding',
      title: 'Branding'
    },
    {
      id: 'design',
      title: 'Design'
    },
    {
      id: 'mobile',
      title: 'Mobile'
    },
    {
      id: 'react',
      title: 'React'
    }
  ];
  useEffect(() => {
    switch (activeCategory) {
      case "all":
        setCategoryData(PortfolioAll);
        break;
        case "branding":
          setCategoryData(PortfolioBranding);
          break;
      case "design":
        setCategoryData(PortfolioDesign);
        break;
      case "mobile":
        setCategoryData(PortfolioMobile);
        break;
      case "react":
        setCategoryData(PortfolioReact);
        break;
      default:
        setCategoryData(PortfolioAll)
    }
  }, [activeCategory])
  return (
    <div id="portfolio" className="section dark2">
      <div className="container">
        <div className="section-title">
          <h1>My <span className="color-primary">Portfolio</span></h1>
          <p className="width70">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, mobile apps, web services and online stores.</p>
        </div>
        <div className="portfolio-category">
          <ul>
            {list.map((item) => (<PortfolioCategory
              title={item.title}
              active={activeCategory === item.id}
              setActiveCategory={setActiveCategory}
              id={item.id} 
              key= {item.id}
            />))}
          </ul>
        </div>
        <div className="portfolio-items">
          {categoryData.map((d, index) => (
            <div className="portfolio-item" key={index}>
              <img src={d.img} alt={d.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio;