import Service from './Service'
import {ServicesData} from './ServicesData'

const Services = () => {
  return (
    <div id="services" className="section dark1">
      <div className="container">
        <div className="section-title">
          <h1>My <span className="color-primary">Services</span></h1>
          <p className="width70">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, mobile apps, web services and online stores.</p>
        </div>
        <div className="columns">
          {ServicesData.map(item => (
            <Service key={item.id} title={item.title} icon={item.icon} details={item.details} />
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Services;