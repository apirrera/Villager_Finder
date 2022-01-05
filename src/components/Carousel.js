import React from "react";

function Carousel() {
	return (
		<div
			id="carouselExampleIndicators"
			className="carousel slide"
			data-bs-ride="carousel"
		>
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
			</div>

			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src="/images/simplebg.jpeg"
						className="img-fluid"
						style={{ width: "1000px", height: "400px" }}
						alt="banner1"
					/>
				</div>
				<div className="carousel-item">
					<img
						src="/images/villagersbanner.jpg"
						className="img-fluid"
						style={{ width: "1000px", height: "400px" }}
						alt="banner2"
					/>
				</div>
				<div className="carousel-item">
					<img
						src="/images/villagerbanner2.jpg"
						className="img-fluid"
						style={{ width: "1000px", height: "400px" }}
						alt="banner3"
					/>
				</div>
			</div>

			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}

export default Carousel;
