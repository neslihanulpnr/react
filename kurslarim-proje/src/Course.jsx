function Course({course}) {
    const {id, title, description, price, image} = course;
  return (
    <div className="course">
        <div> 
          <h4>{title}</h4>
          <img src={image} width={250} height={200}/>
          <h5>{description}</h5>
          <h3>{price}</h3>
        </div>
    </div>
  )
}

export default Course