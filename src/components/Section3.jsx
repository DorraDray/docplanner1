import React  from "react"
const Section3 = (props) => {
    return ( 
        <div>
        <div className='divSection3'>
            <div  className="theWorldDiv">
                <h2>The world's <br/>biggest healthcare platform</h2>
                <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
                <img src="/Capture1.PNG" ></img>

            </div>

            <div className="leaderBigDiv">
        
                {props.tab2.map((el,i)=><div   className={{...el.image}==="https://www.docplanner.com/img/flag.png" ? "leaderDiv1":"leaderDiv"} key={i} >
                    <img src={el.image}/>
                    <h3>{el.title}</h3> 
                    <p>{el.p}</p>
            </div>)} 
            </div>
        </div>

        <div className="improve">
                <h3> Improve the lives of millions. Change yours forever</h3>
                <p> More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>


        </div>

    </div>


    )
}
    export default Section3


