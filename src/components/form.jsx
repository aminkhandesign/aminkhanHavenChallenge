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
                    dig1:"",
                    dig2:"",
                    dig3:"",
                    rules:false,
                    offers:false,
                    info:false,
                    }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.name);
        let val = event.target.value;
      
        this.setState({[event.target.name]:val})
    }
    render(){
        return (
        <form className="box form">
            <div className="flex">
                <div className="inputContainer">
                    <label>FIRST NAME</label>
                    <input name="first_name" type="text" onChange={this.handleChange} value={this.state.first_name} />
                </div>
                <div className="inputContainer">
                    <label>LAST NAME</label>
                    <input name="last_name" type="text" onChange={this.handleChange}  value={this.state.last_name} />
                </div>
            </div>
            <div className="flex">
                <div className="inputContainer">
                    <label>EMAIL</label>
                    <input name="email" type="email" onChange={this.handleChange}  value={this.state.email} />
                </div>
                <div className="inputContainer">
                    <label>CONFIRM EMAIL</label>
                    <input name="confirm" type="email" onChange={this.handleChange}  value={this.state.confirm} />
                </div>
            </div>
            <div className="flex">
                <div className="inputContainer">
                    <label>SELECT METRO AREA</label>
                    <input name="metro" type="select" value={this.state.metro} />

                </div>
                <div className="inputContainer">
                    <label>ZIP CODE</label>
                    <input name="zip" type="text" value={this.state.zip} />
                </div>
            </div>
            <div className="flex">
                <div className="inputContainer">
                    <label>PHONE NUMBER</label>
                    <div className="numbers">
                        <input type="tel" min="100" max="999"  name="dig1"  className="inputNumber"  onChange={this.handleChange}  value={this.state.dig1}/>
                        <input type="tel" min="100" max="999" name="dig2" className="inputNumber"  onChange={this.handleChange}  value={this.state.dig2}/>
                        <input type="tel" min="1000" max="9999" name="dig3" className="inputNumber" onChange={this.handleChange}  value={this.state.dig3}/>
                    </div>
                </div>
                <div className="filler"></div>
              </div>  
              <div className="checkboxContainer">
              <div className="flex_checkbox">
             <input type="checkbox" className="check" checked={this.state.rules}/><label>I agree to the <span className="rules">offical rules</span></label>
               </div> 
             <div className="flex_checkbox">
             <input type="checkbox" className="check" checked={this.state.offers}/><label>Yes, I would like to receives special offers from GNC<span>*</span></label>
            </div>
             <div className="flex_checkbox">
             <input type="checkbox" className="check" checked={this.state.info}/><label>Yes, I would lik econcert information from Live Nation</label>
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