import './OrderConfirm.css'

const OrderConfirm = () => {
    return(
        <div className="confirmation">
            <p className = "confirmationText">
                Order submitted.
            </p>
            <p className = "thanks">
                Thank you for supporting Bestie Beads!
            </p>
            <img className = "kidPower" src="https://i.imgur.com/Kx7wi1E.jpg"></img>
            <div className = "imgBackground"></div>

        </div>
    )
}

export default OrderConfirm
