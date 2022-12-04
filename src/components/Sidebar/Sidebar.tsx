import React from "react";
import { Link } from "react-router-dom";
// icon
import { BsHouseFill } from "react-icons/bs";
import { FaTicketAlt, FaMap } from "react-icons/fa";
// css
import  "./Sidebar.css";

function Sidebar() {
	return (
		<div>
			
			<nav id="sidebarMenu" className={`col-md-3 col-lg-2 d-md-block bg-light collapse sidebar`}>
				<div className="position-sticky pt-3">
					<ul className="nav flex-column">
						<li className="nav-item mb-2">
							<Link to="/">								
								<BsHouseFill size="1.5rem" className={`text-primary d_icon`} />
								<small>Dashboard</small>							
							</Link>
						</li>
						<li className="nav-item mb-2">
							<Link to="/kanban" >								
								<FaMap size="1.5rem" className="d_icon" />
								<small>Kanban</small>						
							</Link>
						</li>
						<li className="nav-item mb-2">
							<Link to="/invoice">							
								<FaTicketAlt size="1.5rem" className="d_icon" />
								<small>Invoice</small>						
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div> 
	);
}

export default Sidebar;

