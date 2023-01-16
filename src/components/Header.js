const Header = () => {
    let date = new Date().toDateString();
    return (
        <div className="header">
            <h3>Today</h3>
            <h4>{date}</h4>

        </div>
    )
}

export default Header