export default function Hero(){
    return(
        <div>
        <div className="flex items-center justify-center">
            <img className="sm:max-w-xl md:max-w-3xl lg:max-w-6xl p-10" src="/hero.png" alt="hero" />
        </div>
        <h1 className="  sm:text-3xl  md:text-5xl lg:text-7xl font-bold md:p-10 lg:p-10">Online Experences</h1>
        <p className="sm:text-xl md:text-3xl lg:text-5xl font-light max-w-2xl  p-10">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
        </div>
    )
}