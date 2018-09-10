import React,{Component} from 'react';



class Form extends Component {

    constructor(props){
        super(props);
        this.state={first_name:"",
                    last_name:"",
                    email:"",
                    confirm:"",
                    metro:"",
                    zip:"",
                    dig1:null,
                    dig2:null,
                    dig3:null,
                    }
    }
    render(){
        return (
        <form className="box form">
            <div className="flex">
                <div className="inputContainer">
                    <label>FIRST NAME</label>
                    <input name="first_name" type="text" value={this.state.first_name} />
                </div>
                <div className="inputContainer">
                    <label>LAST NAME</label>
                    <input name="last_name" type="text" value={this.state.first_name} />
                </div>
            </div>
            <div className="flex">
                <div className="inputContainer">
                    <label>EMAIL</label>
                    <input name="email" type="email" value={this.state.email} />
                </div>
                <div className="inputContainer">
                    <label>CONFIRM EMAIL</label>
                    <input name="confirm" type="email" value={this.state.confirm} />
                </div>
            </div>
            <div className="flex">
                <div className="inputContainer">
                    <label>SELECT METRO AREA</label>
                    <input name="last_name" type="select" value={this.state.first_name} />
                </div>
                <div className="inputContainer">
                    <label>ZIP CODE</label>
                    <input name="last_name" type="text" value={this.state.first_name} />
                </div>
            </div>
            <div className="flex">
                <div className="inputContainer">
                    <label>PHONE NUMBER</label>
                    <div className="numbers">
                        <input type="tel" minlength="3" maxlength="3" className="inputNumber" value={this.state.dig1}/>
                        <input type="tel" min="100" max="999" className="inputNumber" value={this.state.dig2}/>
                        <input type="tel" min="1000" max="9999" className="inputNumber" value={this.state.dig3}/>
                    </div>
                </div>
                <div className="filler"></div>
              </div>  
              <div className="checkboxContainer">
              <div className="flex_checkbox">
             <input type="checkbox" className="check"/><label>I agree to the <span className="rules">offical rules</span></label>
               </div> 
             <div className="flex_checkbox">
             <input type="checkbox" className="check"/><label>Yes, I would like to receives special offers from GNC<span>*</span></label>
            </div>
             <div className="flex_checkbox">
             <input type="checkbox" className="check"/><label>Yes, I would lik econcert information from Live Nation</label>
             </div>

             </div>
             <div className="formBottom">
        <img src="../images/form/capthca.png" />
        <input type="submit" className="submitForm" value="ENTER NOW"/>
        </div>
        </form>
        )
    }
}


export default Form