import Input from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styleInput = {
    height: '100px',
    width: 'auto',
    top: '20px',
    margin: '0px auto',
    
};
const styleBack = {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: '400px',
    width: '450px',
    alignItems: 'center',
    borderRadius: "16px",
    margin: '0px auto',
};
const styleBtn = {
    height: '60px',
    width: 'auto',
    marginTop: "45px",
    margin: '0px auto',
    
};
const styleTitle = {
    fontSize: "55px",
    fontFamily: "cursive",
}
const styleBlock = {
    marginTop: '165px',
}
const Login = () =>{
    return(
        <div style = {styleBack}>
            <div style = {styleBlock} >
                <h1 style={styleTitle}>Login</h1>
                <form>
                    <Input style={styleInput} placeholder="YourEmail@mail.com" 
                        label="Email" variant="outlined"/>
                    <Input style={styleInput} type="password" autoComplete="current-password"
                        placeholder="Input Password" label="Password" variant="outlined"/>
                    
                </form>
                <Button style={styleBtn}>SIGN IN</Button>
            </div>
        </div>
    )
}
export default Login;