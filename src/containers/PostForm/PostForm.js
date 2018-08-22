import React, { Component } from 'react';
import '../../App.css';

class PostForm extends Component {
    state = {
        isFormShown: true
    }

    onThreadStartClick = () => {
        this.setState({isFormShown: true})
    }

    render() {

//HTML FOR FORM, GET INTO JSX
{/* <div class='Flex'>
<form class='TestGrid' action="">
  <label class='Test' for="x">Name</label>
  <input class='text' type="text">
  <div></div>
    <label class='Test' for="x">Options</label>
  <input class='text' type="text">
  <div></div>
  <label class='Test' for="x">Subject</label>
  <input class='text' type="text">
  <button class='btn'>POST</button>
   <label class='Bigbox' for="x">Comment</label>
      <textArea class='long' type="text"></textArea>
   <label class='Bigbox' for="x">Verification</label>
    <div class="captcha-box">
          <input class='captcha' type="text" disabled placeholder='INTEGRATE CAPTCHA LATER'>
      <p class="captcha-text"> Get a special pass to bypass this</p>
    </div>
    <label class='Test' for="x">File</label>
  <input type="file"/>
  <div class=""> [ <input type="radio"/> Spoiler ?] </div>
 </form>
</div> */}
        let postForm = null;

        if(this.state.isFormShown){
            postForm = (
                <form className='Post__form--form'>
                    <div className="Post__form--form-label-group">
                        <label className='Post__form--form-label' for='UserName'>Name</label>
                        <input name='UserName' type="text"/>
                    </div>
                    <div className="Post__form--form-label-group">
                        <input type="text"/>
                    </div>
                </form>
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