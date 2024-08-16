/**
 * Function to sanitize input values
 */
const sanitizeInputValue = (input_val) => {
  // strip html tags
  const stripped = input_val.replace(/<\/?[^>]+(>|$)/g, "");
  // remove extra white space
  const santitized_input = stripped.replace(/\s+/g, " ").trim();
  // return it
  return santitized_input;
};

/**
 * Function to sanitize all the fields values
 */
const sanitizeFieldsValue = (email, name, subject, message) => {
  const sanitize_client_name = sanitizeInputValue(name);
  const sanitize_client_email = sanitizeInputValue(email);
  const sanitize_email_subject = sanitizeInputValue(subject);
  const sanitize_email_message = sanitizeInputValue(message);

  return {
    san_email: sanitize_client_email,
    san_name: sanitize_client_name,
    san_subject: sanitize_email_subject,
    san_message: sanitize_email_message,
  };
};

/**
 * Function to verify if an element is in the Viewport
 */
const isElementVisible = () => {
  let projectSection = document.getElementById("projects");
  let aboutSection = document.getElementById("about-me");
  let contactSection = document.getElementById("contact-me");

  const rectProject = projectSection.getBoundingClientRect();
  const rectAbout = aboutSection.getBoundingClientRect();
  const rectContact = contactSection.getBoundingClientRect();

  if (
    rectAbout.top >= 0 &&
    rectAbout.left >= 0 &&
    rectAbout.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rectAbout.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  ) {
    return "about-me";
  }

  if (
    rectProject.top >= 0 &&
    rectProject.left >= 0 &&
    rectProject.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rectProject.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  ) {
    return "projects";
  }

  if (
    rectContact.top >= 0 &&
    rectContact.left >= 0 &&
    rectContact.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rectContact.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  ) {
    return "contact-me";
  }
};

export { sanitizeInputValue, sanitizeFieldsValue, isElementVisible };
