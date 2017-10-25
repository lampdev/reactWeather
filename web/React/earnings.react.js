
var EarningsSection = React.createClass({
    getInitialState: function() {
        return {
            earnings: []
        }
    },

    componentDidMount: function() {
        this.loadEarningsFromServer();
        setInterval(this.loadEarningsFromServer, 2000);
    },

    loadEarningsFromServer: function() {
        $.ajax({
            url: this.props.url,
            success: function (data) {
                this.setState({earnings: data.earnings});
            }.bind(this)
        });
    },

    render: function() {
        return (
            <div>
                <div className="zag"><h1>Earnings list</h1></div>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Wallet</th>
                        <th>Sum</th>
                        <th>Currency</th>
                        <th>Period</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <EarningsList earnings={this.state.earnings} />
                </table>
            </div>
        );
    }
});

var EarningsList = React.createClass({
    render: function() {
        var earningNodes = this.props.earnings.map(function(earning) {
            return (
                <EarningBox name={earning.name} wallet={earning.wallet} sum={earning.sum} currency={earning.currency} period={earning.period} key={earning.id}/>
            );
        });

        return(
            <tbody>
                {earningNodes}
            </tbody>
        );
    }
});

var EarningBox = React.createClass({
    render: function() {
        return (
            <tr>
                    <td>{this.props.name}</td>
                    <td><a href="">{this.props.wallet}</a></td>
                    <td>{this.props.sum}</td>
                    <td>{this.props.currency}</td>
                    <td>{this.props.period}</td>
                    <td>
                        <div className="row">
                            <div className="col-md-2 col-sm-6 col-xs-12">
                                <a className="small_black_href" href=""><span className="glyphicon glyphicon-search" aria-hidden="true"></span></a>
                            </div>
                            <div className="col-md-2 col-sm-6 col-xs-12">
                                <a className="small_green_href" href=""><span className="glyphicon glyphicon-edit" aria-hidden="true"></span></a>
                            </div>
                            <div className="col-md-2 col-sm-6 col-xs-12">
                                <a className="small_red_href" href=""><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></a>
                            </div>
                            <div className="col-md-2 col-sm-6 col-xs-12">
                                <a className="small_green_href" href=""><span className="glyphicon glyphicon-ok" aria-hidden="true"></span></a>
                            </div>
                            <div className="col-md-2 col-sm-6 col-xs-12">
                                <a className="small_black_href" href=""><span className="glyphicon glyphicon-cloud-upload" aria-hidden="true"></span></a>
                            </div>
                        </div>
                    </td>
            </tr>

        );
    }
});

window.EarningsSection = EarningsSection;
