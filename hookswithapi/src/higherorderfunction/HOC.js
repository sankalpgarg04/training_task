function higherOrderComponent(Component) {
    function HOC() {
        return (
            <div style={{color: "red", "border": "1px solid red", margin: "10px", padding: "10px"}}>
                <Component />
            </div>
      )
    }
    return HOC;
}

function MayankComponent() {
    return <h1>This is Mayank</h1>
}

function AnshulComponent() {
    return <h1>This is Anshul</h1>
}

var NewComponent = higherOrderComponent(MayankComponent)
export var NewOtherComponent = higherOrderComponent(AnshulComponent)
export default NewComponent;