import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Etudes"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://cdn.discordapp.com/attachments/1173696524878888961/1342483415836004375/telechargement_4.png?ex=67b9cc9c&is=67b87b1c&hm=e85048b81129386fe838558ab2b294b35ecd0c4231fb33e3c8be9f0f9cd0bcc8&"
								alt="BTS SIO"
								className="work-image"
							/>
							<div className="work-title">BTS SIO</div>
							<div className="work-subtitle">
							Alternance BTS SIO
							</div>
							<div className="work-duration">2023 - Maintenant</div>
						</div>

						<div className="work">
							<img
								src="https://cdn.discordapp.com/attachments/1173696524878888961/1342485077132578867/telechargement_3.jpg?ex=67b9ce28&is=67b87ca8&hm=89ee3f80cc83be9aa45bab8221fa5a18f8b5d5e49e409dcb0cfeddc1c9553262&"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Lycée Jean-Joseph Fourier</div>
							<div className="work-subtitle">
								Bac STI2D option energie environement
							</div>
							<div className="work-duration">2020 - 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
