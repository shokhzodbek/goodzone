import React from 'react';
import { Dropdown, ButtonToolbar } from 'rsuite';
const CustomDropdown = ({ ...props }) => (
	<div className="drop">
		<Dropdown {...props} noCaret className="drop" style={{ color: 'red' }}>
			<Dropdown.Item className="drop">New File</Dropdown.Item>
			<Dropdown.Item>New File with Current Profile</Dropdown.Item>
			<Dropdown.Item>Download As...</Dropdown.Item>
			<Dropdown.Item>Export PDF</Dropdown.Item>
			<Dropdown.Item>Export HTML</Dropdown.Item>
			<Dropdown.Item>Settings</Dropdown.Item>
			<Dropdown.Item>About</Dropdown.Item>
		</Dropdown>
	</div>
);
function Dropdowns() {
	return (
		<div>
			<ButtonToolbar className="drop">
				<CustomDropdown title="Class" trigger="hover" className="drop" />
				<CustomDropdown title="Hover" trigger="hover" />
				<CustomDropdown title="Hover" trigger="hover" />
				<CustomDropdown title="Hover" trigger="hover" />
				<CustomDropdown title="Hover" trigger="hover" />
			</ButtonToolbar>
		</div>
	);
}

export default Dropdowns;
