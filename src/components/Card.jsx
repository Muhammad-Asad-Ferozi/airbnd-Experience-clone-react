export default function Card(props){
    return (
        <div className="flex flex-col gap-1 ">
            <div className="max-w-72 max-h-80 rounded-xl overflow-hidden">
                <img src= {`/${props.coverImg}`} alt="pic" />
            </div>
            <div className="flex flex-row items-center gap-1 ">
                <img className="w-5 h-5" src="/Star.png" alt="star" />
                <span className="font-semibold">{props.stats.rating}</span>
                <span className="font-light">  ({props.stats.reviewCount})</span>
                <span> .{props.location}</span>
            </div>
            <div className="max-w-64 max-h-12 overflow-hidden">
            <p>{props.description}</p>
            </div>
            <p><b>From ${props.price}</b>/Person</p>
        </div>
    )
}