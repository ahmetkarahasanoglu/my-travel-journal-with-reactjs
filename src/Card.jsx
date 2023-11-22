export default function Card({obj}) {    

    const locationSign = (
        <svg className="location-sign" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="location"><path fill="#e3e2e1" d="M54.01 58.74C54.01 61.65 44.15 64 32 64c-12.15 0-22.01-2.35-22.01-5.26 0-2.6 7.9-4.74 18.26-5.18h7.5c10.37.44 18.26 2.58 18.26 5.18z"></path><path fill="#e82327" d="M32 0C20.7 0 11.54 9.15 11.54 20.45 11.54 31.75 32 58.74 32 58.74s20.45-26.99 20.45-38.29S43.3 0 32 0zm0 33.99c-7.48 0-13.54-6.06-13.54-13.54S24.52 6.91 32 6.91c7.48 0 13.54 6.06 13.54 13.54S39.48 33.99 32 33.99z"></path></svg>
    )

    return (
        <div className="card">
            <div className="image-container">
                <img className="image" src={obj.image} alt="Photo" />
            </div>
            <div className="right-column">
                <div className="country-and-gMaps-div">
                    <div className="location-info">
                        {locationSign}
                        <span className="country">{obj.country}</span>
                    </div>                    
                    <a className="view-on-gMaps-anchor" href={obj.googleMapsLink} target="_blank">View on Google Maps</a>
                </div>
                <h2 className="place">{obj.place}</h2>
                <p className="visit-date">{obj.visitDate}</p>
                <p className="explanation">{obj.explanation}</p>
            </div>
        </div>
    )    
}
