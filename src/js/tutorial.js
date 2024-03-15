import { PROFILE_STYLE } from "./profile-style";

/* ----------------------------- */
/*          UserProfile          */
/* ----------------------------- */
class UserProfile extends HTMLElement {
  constructor() {
    super();
    // Clone the template content
    let template = document
      .getElementById("profileTemplate")
      .content.cloneNode(true);

    // Create a style element
    // for the shadow DOM
    const style =
      document.createElement("style");
    style.textContent = PROFILE_STYLE;

    // Attach the style and template
    // to the shadow DOM
    this.attachShadow({
      mode: "open",
    });
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(
      template
    );

    // Set the profile name
    // based on `name` attributes
    this.shadowRoot.querySelector(
      ".profile__name"
    ).innerText =
      this.getAttribute("name");

    // Set the profile image
    // based on `image` attributes
    this.shadowRoot.querySelector(
      ".profile__image"
    ).src = this.getAttribute("image");
  }
}

// Define the custom element
customElements.define(
  "user-profile",
  UserProfile
);
