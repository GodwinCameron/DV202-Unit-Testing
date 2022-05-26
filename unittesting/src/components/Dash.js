import React from "react";

const Dash = () => {
    return (
        <>

            <div className="side-nav">
                <div className="main-title">STACKsaver</div>
                <div className="menu"></div>
                <div className="nav-container">
                    <div className="nav-item"><h3>Overview</h3></div>
                    <div className="nav-item"><h3>Planner</h3></div>
                    <div className="nav-item"><h3>Wallet</h3></div>
                    <div className="nav-item"><h3>Budget</h3></div>
                    <div className="nav-item"><h3>Help me make it!</h3></div>
                    <h4>ACCOUNTS</h4>
                    <div className="nav-acc"><h3>Savings account</h3></div>
                    <div className="nav-acc"><h3>Cheque account</h3></div>
                    <div className="nav-acc nav-acc-add"><div className="add-icon"></div></div>
                </div>
            </div>

            <div className="main-content">
                <div className="title-space"><h1>Overview</h1></div>
                <div className="dash-block">
                    <h1>Transactions</h1>
                    <div className="transaction-template">
                        <div className="transaction-template-icon"></div>
                        <h2 className="details">Amazon</h2>
                        <h3 className="details">2 days ago</h3>
                        <h4>$56.99</h4>
                    </div>
                    <div className="transaction-template">
                        <div className="transaction-template-icon"></div>
                        <h2 className="details">Google</h2>
                        <h3 className="details">1 week ago</h3>
                        <h4>$102.72</h4>
                    </div>
                    <div className="transaction-template">
                        <div className="transaction-template-icon"></div>
                        <h2 className="details">Gym</h2>
                        <h3 className="details">06/04/22</h3>
                        <h4>$40.00</h4>
                    </div>
                </div>
                <div className="dash-block">
                    <h1>Balance</h1>
                    <h5>$17,896.42</h5>
                </div>
                <div className="dash-block">
                    <h1>Until Pay</h1>
                    <div className="bar-icon"></div>
                    <h5 className="pay-amount">$689.25</h5>
                </div>
                <div className="dash-block"></div>
            </div>

        </>
    )
}

export default Dash;