// import "../styles/EmployeeDetailsComponentStyle.css";

export default function UserDetailsComponent(props) {

    var styleObject =  {
        containerStyle: {
            width: "18rem", 
            margin: "20px", 
            display: "inline-block"
        }, headerStyling: {
            color: "aqua"
        }, buttonStyle: {
            color: "red"
        }
    };

    return (
          <div className="card" style={styleObject.containerStyle}>
              <img height={200} width={300} src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" className="card-img-top" alt={props.name} />
              <div className="card-body">
                  <div>
                    <div>
                        <p className="card-text">{props.id} <br/> <b>{props.createdAt}</b> <br/> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <input type="button" style={styleObject.buttonStyle} className="btn btn-primary" value="Go somewhere" />
                  </div>
              </div>
          </div>
    )
}