import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
// import GetAllEmp from '../HooksImp/AccountApiGetWithHooks'
// import GetAllEmp from '../HooksImp/EmployeeListCompHooks'
import GetHook from '../Components/GetHook';
import PostHook from '../Components/PostHook'

export default class MainComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "sankalp"
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <HeaderComponent></HeaderComponent>
                    <ContentComponent></ContentComponent>
                    <FooterComponent></FooterComponent>
                </div>
            </BrowserRouter>
        )
    }
}

function ContentComponent() {
    return (
        // <div style={{ border: "1px solid red", padding: "10px", margin: "10px", height: "400px" }}>
        <div style={{border: "1px solid red", padding: "10px", margin: "10px", height: "600px", overflow: "auto"}}>
            <Route exact path="/" component={HomeComponent}></Route>
            <Route exact path="/about" component={AboutComponent}></Route>
            <Route exact path="/help" component={HelpComponent}></Route>
        </div>)
}

function HeaderComponent() {
    return (
        <div>
            <h1>This is Header Component</h1>
            <nav>
                <Link style={{ margin: "10px" }} to="/">All Accounts</Link>
                <Link style={{ margin: "10px" }} to="/about">Add Account</Link>
                {/* <Link style={{ margin: "10px" }} to="about">About</Link> */}
            </nav>
        </div>
    )
}

function FooterComponent() {
    return <h3>This is Footer Component</h3>
}

function HomeComponent() {
    return (
        <div>
            <h3>This is Home Component With All Accounts Detail</h3>
            <GetHook></GetHook>
        </div>
    )
}

function AboutComponent() {
    return (
        <div>
            <h3>This is About Component</h3>
            <PostHook></PostHook>
        </div>
    )
}

function HelpComponent() {
    return <h3>This is Help Component</h3>
}