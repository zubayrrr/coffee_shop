import React, { Component } from "react"
import { Link } from "gatsby"
import TItle from "../Globals/TItle"

export default class Info extends Component {
  render() {
    return (
      <section className="py-5">
        <TItle title="Our story"></TItle>
        <div className="container">
          <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
              <p className="lead text-muted mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, vel quaerat ad doloremque ullam a nemo est minus
                voluptatum quae fuga nobis eaque, impedit rerum, alias sapiente
                ipsa consequuntur animi aliquid excepturi corrupti? Quidem nam
                unde sed! Consequuntur nam corporis libero sapiente, deleniti
                qui quibusdam. Nostrum error exercitationem dignissimos nobis.
              </p>

              <Link to="/about">
                <button className="btn text-uppercase btn-yellow">
                  About page
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
