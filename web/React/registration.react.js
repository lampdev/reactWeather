
var Registration = React.createClass({

    getInitialState: function() {
        return {
            password: '',
            passwordSec: ''
        }
    },

    handleSubmit(event) {
        if(this.state.password.length < 6){
            alert('Довжина паролю має бути не менше 6-и символів.');
            event.preventDefault();
        }

        if(this.state.password != this.state.passwordSec){
            alert('Паролі не співпадаюють.');
            event.preventDefault();
        }
    },

    handleChangeOne(event){
        this.setState({password: event.target.value});
    },

    handleChangeTwo(event){
        this.setState({passwordSec: event.target.value});
    },

    render(){
        return(
            <div>
                    <form action="/react/reg" method="post" className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>

                        <div className="form-group">
                            <label className="col-sm-3 control-label">Ім&#039;я:</label>
                            <div className="col-sm-5">
                                <div><input type="text" name="username" required="required" className="form-control"/></div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-3 control-label">Поштова адреса:</label>
                            <div className="col-sm-5">
                                <div><input type="email" name="email" required="required" className="form-control" /></div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-3 control-label">Пароль:</label>
                            <div className="col-sm-5">
                                <div><input type="password" onChange={this.handleChangeOne.bind(this)} value={this.state.password} name="plainPassword" required="required" className="form-control" /></div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-3 control-label">Повторіть пароль:</label>
                            <div className="col-sm-5">
                                <div><input type="password" onChange={this.handleChangeTwo.bind(this)} value={this.state.passwordSec} name="plainPasswordSecond" required="required" className="form-control" /></div>
                            </div>
                        </div>


                        <div className="form-group">
                            <div className="col-sm-offset-3 col-sm-5">
                                <button type="submit" className="btn btn-default">
                                    Зареєструвати
                                </button>
                            </div>
                        </div>
                    </form>
                
            </div>
        );
    }
});


window.Registration = Registration;
