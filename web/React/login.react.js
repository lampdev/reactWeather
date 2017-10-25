const Login = () => {
        return(
            <div>
                <div className="alert alert-info">
                    Якщо ви успійшно пройшли реєстрацію, але не можете потрапити до особистого кабінету - перевірьте поштову
                    скриньку, адрес якої було введено при реєстрації.
                </div>
                <form action="/login" method="post" className="form-horizontal">
                    <div className="form-group">
                        <label for="username" className="col-sm-3 control-label">Ім'я:</label>
                        <div className="col-sm-5">
                            <input className="form-control" type="text" name="_username"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="password" className="col-sm-3 control-label">Пароль:</label>
                        <div className="col-sm-5">
                            <input className="form-control" type="password" name="_password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label"></label>
                        <div className="col-sm-5">
                            <a href="/password/recovery">Забули пароль?</a>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-3 col-sm-5">
                            <button type="submit" className="btn btn-default">
                                Ввійти
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
};

window.Login = Login;