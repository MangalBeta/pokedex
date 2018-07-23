import React, { PureComponent } from 'react'

class Profile extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div className="row" style={{ paddingTop: '20px', }} >
          <div className="col-md-2" />
          <div className="col-md-8" style={{ 'background-color': 'white' }}>
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="row" style={{ paddingTop: '20px', }}>
                  <div className="col-md-12 lead text-center">User profile<hr /></div>
                </div>
                <div className="row" style={{ paddingBottom: '100px' }}>
                  <div className="col-md-4 text-center">
                    <img className="img-circle avatar avatar-original"
                      style={{
                        "-webkit-user-select": "none",
                        "display": "block", "margin": "auto"
                      }}
                      src="http://robohash.org/sitsequiquia.png?size=120x120" />
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <span className="text-muted">
             {this.props.user ? this.props.user.email : ''}
                       </span> 
                      <br />
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
