import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.nom.trim()) e.nom = "Le nom est requis.";
    if (!form.prenom.trim()) e.prenom = "Le prénom est requis.";
    if (!form.email.trim()) e.email = "L’email est requis.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Email invalide.";
    if (!form.description.trim()) e.description = "La description est requise.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    // Replace with your API or email service (EmailJS, Formspree, etc.)
    try {
      // Simulate submit
      await new Promise((r) => setTimeout(r, 800));
      setStatus({ type: "success", msg: "Message envoyé avec succès !" });
      setForm({ nom: "", prenom: "", email: "", description: "" });
    } catch {
      setStatus({
        type: "error",
        msg: "Erreur lors de l’envoi. Réessaie plus tard.",
      });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__left">
        <h2>Contact</h2>
        <p>Tu as un projet, une question, ou envie d’échanger ?</p>

        <ul className="contact__info">
          <li>
            <span className="label">Email:</span>
            <a href="mailto:mansour.samb@example.com">
              mansour.samb@example.com
            </a>
          </li>
          <li>
            <span className="label">GitHub:</span>
            <a
              href="https://github.com/mansorsamb"
              target="_blank"
              rel="noreferrer"
            >
              github.com/mansorsamb
            </a>
          </li>
          <li>
            <span className="label">Téléphone:</span>
            <a href="tel:+33600000000">+33 6 00 00 00 00</a>
          </li>
        </ul>

        <div className="contact__note">
          <p>
            Basé à Nailloux (Occitanie). Disponible pour missions frontend
            React, intégration API, et UI design.
          </p>
        </div>
      </div>

      <div className="contact__right">
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="grid">
            <div className="field">
              <label htmlFor="nom">Nom</label>
              <input
                id="nom"
                name="nom"
                type="text"
                placeholder="Dupont"
                value={form.nom}
                onChange={handleChange}
                className={errors.nom ? "error" : ""}
              />
              {errors.nom && <small className="error-text">{errors.nom}</small>}
            </div>

            <div className="field">
              <label htmlFor="prenom">Prénom</label>
              <input
                id="prenom"
                name="prenom"
                type="text"
                placeholder="Mansour"
                value={form.prenom}
                onChange={handleChange}
                className={errors.prenom ? "error" : ""}
              />
              {errors.prenom && (
                <small className="error-text">{errors.prenom}</small>
              )}
            </div>
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="mansour@example.com"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && (
              <small className="error-text">{errors.email}</small>
            )}
          </div>

          <div className="field">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows="5"
              placeholder="Décris ton projet, tes objectifs, ton budget, etc."
              value={form.description}
              onChange={handleChange}
              className={errors.description ? "error" : ""}
            />
            {errors.description && (
              <small className="error-text">{errors.description}</small>
            )}
          </div>

          <button type="submit" className="btn">
            Envoyer
          </button>

          {status && <p className={`status ${status.type}`}>{status.msg}</p>}
        </form>
      </div>
    </section>
  );
}
