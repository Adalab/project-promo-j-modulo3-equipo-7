import React from "react";
import FormItem from "./FormItem";

import "../../stylesheets/layout/_formFill.scss";
class FormFill extends React.Component {
  render() {
    return (
      <section className="fill wrapper">
        <div className="fill__section js-coll">
          <div className="fill__section--box">
            <i
              className="fa fa-keyboard-o fill__section--img"
              aria-hidden="true"
            ></i>
            <h2 className="fill__section--title">rellena</h2>
          </div>
          <i className="fas fa-chevron-down fill__section--img2"></i>
        </div>
        <div className="form content js-contentFill js-collapsable">
          <fieldset>
            <FormItem
              name={"name"}
              value={this.props.name}
              title={"Nombre completo"}
              placeholder={"Ej: Leela Turanga"}
              inputValue={this.props.inputValue}
            />
            <FormItem
              name={"job"}
              value={this.props.job}
              title={"Puesto"}
              placeholder={"Ej: Front End developer"}
              inputValue={this.props.inputValue}
            />
            <div className="form__img">
              <label htmlFor="img">Imagen de perfil</label>
              <div className="form__img--box">
                <buttonxfbi
                  className="form__img--box--button js__profile-trigger"
                  type="button"
                >
                  Añadir imagen
                </buttonxfbi>
                <input
                  className="form__img--box--check action__hiddenField js__profile-upload-btn"
                  id="imgOption"
                  type="file"
                  name="imgOptions"
                />
                <div className="form__img--box--preview profile__preview js__profile-preview"></div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <FormItem
              name={"email"}
              value={this.props.email}
              title={"Email"}
              placeholder={"Ej: leela@planet-express.com"}
              inputValue={this.props.inputValue}
            />
            <FormItem
              name={"phone"}
              value={this.props.phone}
              title={"Teléfono"}
              placeholder={"Ej: 555 2587695"}
              inputValue={this.props.inputValue}
            />
            <FormItem
              name={"linkedin"}
              value={this.props.linkedin}
              title={"Linkedin"}
              placeholder={"Ej: Leela-Turanga"}
              inputValue={this.props.inputValue}
            />
            <FormItem
              name={"github"}
              value={this.props.github}
              title={"Github"}
              placeholder={"Ej: leelaturanga"}
              inputValue={this.props.inputValue}
            />
          </fieldset>
        </div>
      </section>
    );
  }
}
export default FormFill;
