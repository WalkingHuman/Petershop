import './Card.css'
function Car(props) {
    return (
            <div className='Car-info'>
                <h1>{props.title}</h1>
                <h2>Shop different shoes</h2>
            </div>
    )
}

export default Car;