const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="William" />
            <Tweet
                username="Kristen Coyle"
                name="Barbara Banks"
                date={new Date().toDateString()}
                message="Hello lovely lady" />
            <Tweet
                username="William Fayette"
                name="Elon Musk"
                date={new Date().toDateString()}
                message="Your a genius!" />
            <Tweet
                username="William Fayette"
                name="Elon Musk"
                date={new Date().toDateString()}
                message="Your hired!" />
            <Person age={19} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))