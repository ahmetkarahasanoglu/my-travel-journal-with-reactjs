export default function Card({obj}) {
    return (
        <div className="card">
            <div className="image-container">
                <img className="image" src={`https://ahmetkarahasanoglu.github.io/my-travel-journal-with-reactjs/src/assets/${obj.image}`} alt="Photo" />
            </div>
            <div className="right-column">
                <div className="country-and-gMaps-div">
                    <span className="country"><img src="/src/assets/location-sign.png" alt="locationSign" /> {obj.country}</span>
                    <a className="view-on-gMaps-anchor" href={obj.googleMapsLink} target="_blank">View on Google Maps</a>
                </div>
                <h2 className="place">{obj.place}</h2>
                <p className="visit-date">{obj.visitDate}</p>
                <p className="explanation">{obj.explanation}</p>
            </div>

        </div>
    )
}
