import React, { Component } from "react"


class login extends Component {
  render() {
    return (
      <div>

        {/* NAVIGATION */}
        <nav className="light-blue darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Login</a>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col s3"></div>
            <div className="col s6">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={this.addTask}>

                    <div className="row">
                      <div className="col s12">
                        <div className="row">
                          <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input name="frm_user" type="text" placeholder="EMAIL" autoFocus />
                            <label for="frm_user" className="active">Email</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <i className="material-icons prefix">lock</i>
                            <input name="frm_pass" type="text" placeholder="CLAVE" autoFocus />
                            <label for="frm_pass" className="active">Contraseña</label>
                          </div>
                        </div>
                      </div>
                      <div className="row"></div>
                      <div className="col s12 center">
                        <button type="submit" className="btn light-blue darken-4">
                        <i class="material-icons right">keyboard_arrow_right</i>
                          Ingresar
                    </button>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default login;






