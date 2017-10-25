const Menu = (props) => {

        var getContent = () => {

            if(props.children){
                return props.children;
            }

            return 'hi';
        };

        return(
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="true" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <ReactRouter.Link to="/">
                                <div className="navbar-brand">MathOlimp
                                    <span className="glyphicon glyphicon-home" aria-hidden="true"> </span>
                                </div>
                            </ReactRouter.Link>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="nav navbar-nav">
                                <li className=""><ReactRouter.Link to="login">Login</ReactRouter.Link></li>
                                <li className=""><ReactRouter.Link to="registration">Registration</ReactRouter.Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {getContent()}
            </div>
        );
};

window.Menu = Menu;
