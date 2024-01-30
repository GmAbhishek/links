
import StaryNights from '../assets/StaryNights.gif'
function Stars(): JSX.Element {
    
    return (
        <>
        <div className="background">
             <video className="video-background" autoPlay loop muted>
                <source src={StaryNights} type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
         <div className="background flipbg">
         <video className="video-background" autoPlay loop muted>
            <source src={StaryNights} type="video/webm" />
            Your browser does not support the video tag.
        </video>
    </div>
   
    </>
    )
}
export default Stars

