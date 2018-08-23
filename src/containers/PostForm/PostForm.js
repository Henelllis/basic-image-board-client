import React, { Component } from 'react';
import '../../App.css';

class PostForm extends Component {
    state = {
        isFormShown: false
    }

    onThreadStartClick = () => {
        this.setState({isFormShown: true})
    }

    render() {


        let postForm = null;

        if(this.state.isFormShown){
            postForm = (
                <div className="Post__form__expanded--container">
                    <form action="" className="Post__form__expanded--form">
                        {/* Name field */}
                        <label htmlFor="nameField" className="Post__form__expanded--label">Name</label>
                        <input name="nameField" 
                                type="text" 
                                className="Post__form__expanded--text"
                                placeholder="Anonymous"/>
                        <div></div>
                        {/*Options field*/}
                        <label htmlFor="optionField" className="Post__form__expanded--label">Options</label>
                        <input name="optionField" type="text" className="Post__form__expanded--text"/>
                        <div></div>
                        {/*Subject field And Post Button*/}
                        <label htmlFor="SubjectField" className="Post__form__expanded--label">Subject</label>
                        <input name="SubjectField" type="text" className="Post__form__expanded--text"/>
                        <button class='Post__form__expanded--btn'>POST</button>
                        {/* Comment field */}
                        <label htmlFor="CommentField" className="Post__form__expanded--label">Comment</label>
                        <textArea class='Post__form__expanded--area' type="text"></textArea>
                        {/* Verification Field */}
                        <label htmlFor="VerificationField" className="Post__form__expanded--label">Verification</label>
                        <div class='Post__form__expanded--captcha-container'>
                            <input name="VerificationField" 
                                   type="text" 
                                   className="Post__form__expanded--captcha-text"
                                   disabled placeholder='INTEGRATE CAPTCHA LATER'/>
                                   <p class="Post__form__expanded--captcha-pass"> Get a special pass to bypass this</p>
                        </div>
                        {/* FILE field */}
                        <label htmlFor="FileField" className="Post__form__expanded--label">File</label>
                        <input type="file"/>
                        <div className="Post__form__expanded--radio"> [<input type="radio"/> Spoiler?]</div>
                        <p class="Post__form__expanded--captcha-rules"> 
                            &bull; Please read the <a  className="Post__form__expanded--anchor" href="/" >Rules </a> 
                                    and <a  className="Post__form__expanded--anchor" href="/" >FAQ </a> before posting.
                        </p>
                    </form>
                </div>
            )
        }else {
            postForm = (
                <React.Fragment>                 
                    <div className='Post__form--button-container'>
                        <p className='Post__form--button-bracket'>[</p>
                        <button className='Post__form--button'
                                onClick={this.onThreadStartClick}>
                            Start a New Thread
                        </button>
                        <p className='Post__form--button-bracket'>]</p>
                    </div>
                </React.Fragment>
            )            
        }

        return (
            <div className='Post__form--container'>
                <hr className='Post__form--line'/>
                {postForm}
            </div>
        );
    }
}

export default PostForm;