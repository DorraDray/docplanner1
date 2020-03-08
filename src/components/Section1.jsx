import React ,{Fragment} from "react"

const Section1 = (props) => {
    return (
        <div className="divLogo">
            <img className="Logo"src="https://www.docplanner.com/img/sygnet.png" alt='' />
            <h1>Making the healthcare experience more human</h1> 
            <div className="divPparagraphe">{props.tab.map((el,i)=><Fragment  key={i}>
                <p className="paragraphe">{el}</p>
            </Fragment>)}
            </div>

            <div className="divForPatientDoctor">{props.tab1.map((el,i)=><Fragment key={i}>
                <div className="forPatientDoctor"style={{backgroundColor: el.background}}> 
                    <h5>{el.h5} </h5>
                    <p>{el.p}</p>
                    <img src={el.img}alt=''/>
                        {el.background==="rgb(0, 204, 177)" && <select>
                        <option value="">CHOOSE COUNTRY</option>
                        <option value="">ARGENTINA</option>
                        <option value="">AUSTRALIA</option>
                        <option value="">BRASIL</option>
                        <option value="">CHILI</option>
                        <option value="">COLOMBIA</option>
                        <option value="">CZECH</option>
                        <option value="">FRANCE</option>
                        <option value="">ITALY</option>
                        <option value="">MEXICO</option>
                        <option value="">PERU</option>
                        <option value="">POLAND</option>
                        <option value="">PORTOGUL</option>
                        </select> 
                        }
                    
                </div>

            </Fragment>)}
            </div>
        </div>
    )
}
export default Section1