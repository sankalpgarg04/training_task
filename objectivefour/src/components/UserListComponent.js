import UserDetailsComponent from "./UserDetailsComponent";

export default function UserListComponent(props) {
    // debugger;
    return (
        <div>
            <h1>Employee List is Given Below...</h1>
            <div>
                {props.UserListComponent.map(function(data) {
                    return (
                        <UserDetailsComponent {...data}></UserDetailsComponent>
                    )
                })}
            </div>
        </div>
    )
}