const counter = ()=>{
    return (<>
    <section className="counter">
			<div className="container">
				<div className="col-md-3 col-sm-3">
					<div className="counter-text">
						<span aria-hidden="true" className="icon-briefcase"></span>
						<h3>1000</h3>
						<p>Jobs Posted</p>
					</div>
				</div>
				
				<div className="col-md-3 col-sm-3">
					<div className="counter-text">
						<span className="box1"><span aria-hidden="true" className="icon-expand"></span></span>
						<h3>207</h3>
						<p>All Companies</p>
					</div>
				</div>
				
				<div className="col-md-3 col-sm-3">
					<div className="counter-text">
						<span className="box1"><span aria-hidden="true" className="icon-profile-male"></span></span>
						<h3>700+</h3>
						<p>Total Members</p>
					</div>
				</div>
				
				<div className="col-md-3 col-sm-3">
					<div className="counter-text">
					<span className="box1"><span aria-hidden="true" className="icon-sad"></span></span>
						<h3>802+</h3>
						<p>Happy Members</p>
					</div>
				</div>
			</div>
		</section>
    </>)
}
export default counter 