import React ,{Fragment} from "react"
const Section4 = (props) => {
    return ( 
        <div className="section4">{props.tab3.map((el,i)=><div  key={i}>
                <div className="divSection4">
                   <img src={el.image}/>
                   <div className="spanButton">
                   <span>{el.title}</span> 
                   <button> {el.button}</button>
                   </div>
                
                </div>

            </div>)}

        </div>
        )
    }
        export default Section4