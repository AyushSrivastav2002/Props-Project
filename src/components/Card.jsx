import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="Card">
        <div className="Top">
          <img src={props.brandLogo}></img>
          <button>Save <img src="https://cdn-icons-png.flaticon.com/128/5662/5662990.png"></img></button>
        </div>
        <div className="Middle">
           <h3>{props.company} <span>{props.posted}</span></h3>
           <h2>{props.post}</h2>
           <div className="Box">
            <h2>{props.tag1}</h2>
            <h2>{props.tag2}</h2>
           </div>

        </div>
        <div className="Bottom">
          <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
          </div>
          <button>Apply now</button>

        </div>
      </div>
      

      
    </div>
  )
}

export default Card
