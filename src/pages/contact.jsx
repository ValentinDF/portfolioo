import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
						Entrons en contact : Les moyens de me joindre
						</div>

						<div className="subtitle contact-subtitle">
							Merci de votre intérêt pour me contacter. 
							Je suis toujours ouvert aux échanges, aux questions 
							et aux suggestions.
							Si vous souhaitez me joindre directement, vous pouvez m’envoyer un e-mail à
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. Je fais de mon mieux pour répondre sous 24 heures, mais cela peut parfois prendre un peu plus de temps en période chargée.

Vous pouvez également utiliser le formulaire de contact sur mon site pour m’envoyer un message. Remplissez simplement les champs requis, et je reviendrai vers vous dès que possible.

Merci encore pour votre intérêt, et au plaisir d’échanger avec vous !
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
