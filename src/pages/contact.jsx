import React from "react"
import Layout from "../Layout/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ea
              magnam vitae dicta nostrum totam eos deserunt ut consequuntur
              ratione.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              ipsum, quibusdam nulla rem ex, eius fuga blanditiis repellat nisi
              accusamus animi quae quaerat laboriosam vero odit provident
              placeat? Aut, voluptatem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              consectetur consequatur expedita eius vitae ipsa ipsum odio
              similique magni quia id accusantium, nobis vero repellendus minus
              nemo dolore rem blanditiis!
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
                <button type="submit" className="btn block">
                  submit
                </button>
              </div>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact