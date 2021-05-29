import React from "react";
import Pie from "./Pie";
import { CallReceived } from "@material-ui/icons";
function Contents() {
	return (
		<div className='contents-container'>
			<div className='pie-container'>
				<div className='row'>
					<div class='col-md-4'>
						<h2>SMS Remaining</h2>
						<div className='pie-card'>
							<Pie series={[44, 55, 41, 17, 15]} />
							<div class='number'>40</div>
						</div>
					</div>
					<div class='col-md-4'>
						<h2>SMS Send</h2>
						<div className='pie-card'>
							<Pie series={[44, 55, 41, 17, 15]} />
							<div class='number'>60</div>
						</div>
					</div>
					<div class='col-md-4'>
						<h2>Delivery Status</h2>
						<div className='pie-card'>
							<Pie series={[14, 82]} />
							<div class='number'>82%</div>
						</div>
					</div>
				</div>
			</div>

			{/* other */}
			<div className='mt-2 country'>
				<div className='row'>
					<div className='col'>
						<img src='/af.jpg' alt='' style={{ width: "100%" }} />
					</div>
					<div className='col-4'>
						<div class='country-container bg-light  pt-2'>
							<table align='center'>
								<tr>
									<td>
										<h3>
											<CallReceived /> Stats
										</h3>
									</td>
								</tr>
							</table>
							<table>
								<tr>
									<td>
										<img src='/img2.jpg' alt='' />
									</td>
									<td>SENEGAL</td>
								</tr>
								<tr>
									<td>
										<img src='/img3.jpg' alt='' />
									</td>
									<td>20,040 campnies</td>
								</tr>
								<tr>
									<td>
										<img src='/img4.jpg' alt='' />
									</td>
									<td>French speaking</td>
								</tr>
								<tr>
									<td>
										<img src='/img5.jpg' alt='' />
									</td>
									<td>
										Visit{" "}
										<a href='https://africa.xyz.senegal'>africa.xyz.senegal</a>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contents;