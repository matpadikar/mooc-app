import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom'
import withNavigation from './WithNavigation.jsx'
import withParams from './WithParams.jsx'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListCommentsComponent from './ListCommentsComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import CommentComponent from './CommentComponent'
import LessonComponent from './LessonComponent.jsx'
import ListFeedbackComponent from './ListFeedbackComponent.jsx'
import ListStudentsComponent from './ListStudentsComponent.jsx'
import Lesson2Component from './Lesson2Component.jsx'
import RegisterComponent from './RegisterComponent.jsx'
import '../../MoocApp.css'
class MoocApp extends Component {

    render() {
        //components that use withNavigate() allow them to navigate to another component programmatically
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        //Components using withParams() allow them to get key/value pairs of dynamic params from URL, 
        //for example /name=cs8803
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        const ListCommentsComponentWithNavigation = withNavigation(ListCommentsComponent);
        const ListFeedbackComponentWithNavigation = withNavigation(ListFeedbackComponent);
        const ListStudentsComponentWithNavigation = withNavigation(ListStudentsComponent);
        const CommentComponentWithParamsAndNavigation = withParams(withNavigation(CommentComponent));
        const RegisterComponentWithNavigation = withNavigation(RegisterComponent);

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);

        return (
            <div className="MoocApp">
                <Router>

                    <HeaderComponentWithNavigation />
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={
                            <LoginComponentWithNavigation />
                        } />
                        <Route path="/welcome/:name" element={
                            <AuthenticatedRoute>
                                <WelcomeComponentWithParams />
                            </AuthenticatedRoute>
                        } />
                        <Route path="/comments" element={
                            <AuthenticatedRoute>
                                <ListCommentsComponentWithNavigation/>
                            </AuthenticatedRoute>
                        } />
                        <Route path="/feedbacks" element={
                            <AuthenticatedRoute>
                                <ListFeedbackComponentWithNavigation/>
                            </AuthenticatedRoute>
                        } />
                        <Route path="/students" element={
                            <AuthenticatedRoute>
                                <ListStudentsComponentWithNavigation/>
                            </AuthenticatedRoute>
                        } />
                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path="/comments/:id" element={
                            <AuthenticatedRoute>
                                <CommentComponentWithParamsAndNavigation/>
                            </AuthenticatedRoute>
                        } />
                        <Route path="/lesson" element = {
                            <AuthenticatedRoute>
                                <LessonComponent/>
                            </AuthenticatedRoute>
                        }/>
                        <Route path="/lesson-2" element = {
                            <AuthenticatedRoute>
                                <Lesson2Component/>
                            </AuthenticatedRoute>
                        }/>
                        <Route path="/register" element={
                            <RegisterComponentWithNavigation />
                        } />
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent />
                </Router>

                {/* <LoginComponent/>
                <WelcomeComponent/> */}
            </div>
        )
    }
}

// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return <div>Invalid Credentials</div>    
//     }
//     return null
// }

// function ShowLoginSuccessMessage(props){
//     if(props.showSuccessMesage){
//         return <div>Login Successful</div>
//     }
//     return null 
// }

export default MoocApp