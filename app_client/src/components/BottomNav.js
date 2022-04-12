import React, { useState } from "react";
import styled from "styled-components";
import ScrollMenu from "react-horizontal-scrolling-menu";

import { Visibility } from "semantic-ui-react";

import { ReactComponent as IconSampul } from "../assets/i2.svg";
import { ReactComponent as IconMpl } from "../assets/i7.svg";
import { ReactComponent as IconAcr } from "../assets/i5.svg";
import { ReactComponent as IconLoc } from "../assets/i8.svg";
import { ReactComponent as IconPt } from "../assets/i4.svg";
import { ReactComponent as IconClose } from "../assets/i1.svg";
import { ReactComponent as IconBook } from "../assets/i3.svg";
import { ReactComponent as IconAgp } from "../assets/i6.svg";

// const StyledScrollMenu = styled(ScrollMenu)`
// position: fixed;
// left: 0;
// bottom: 0;
// width: 100%;
// background-color: red;
// color: white;
// text-align: center;
// `

const MenuStyle = {
	position: "fixed",
	left: 0,
	bottom: 0,
	width: "100%",
	backgroundColor: "red",
	color: "white",
	textAlign: "center",
	alignItems: "center",
	display: "flex",
	userSelect: "none",
};

const list = [
	{ name: "Sampul", icon: <IconSampul className="icon-menu" /> },
	{ name: "Mempelai", icon: <IconMpl className="icon-menu" /> },
	{ name: "Acara", icon: <IconAcr className="icon-menu" /> },
	{
		name: "Lokasi",
		icon: <IconLoc className="icon-menu" style={{ width: "20px" }} />,
	},
	// { name: 'Penutup', icon: <IconClose className='icon-menu' style={{width:'20px'}}/> },
	{
		name: "Buku Tamu",
		icon: <IconBook className="icon-menu" style={{ width: "20px" }} />,
	},
	// { name: 'Angpao',icon: <IconAgp className='icon-menu' style={{width:'20px'}}/> },
	{ name: "Foto", icon: <IconPt className="icon-menu" /> },
];

const MenuItem = ({ text, icon, selected }) => {
	return (
		<div
			className={`menu-item ${selected ? "active" : ""}`}
			style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
		>
			{icon}
			<span className="text-menu">{text}</span>
		</div>
	);
};

export const Menu = (list, selected) =>
	list.map((el) => {
		const { name, icon } = el;

		return <MenuItem text={name} key={name} icon={icon} selected={selected} />;
	});

const Arrow = ({ text, className }) => {
	return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const BottomNav = (props) => {
	const [menuFixed, setMenuFixed] = useState(true);
	const [selected, setSelected] = useState("item1");

	const menuItems = Menu(list, selected);

	const handleSelect = (key) => {
		setSelected(key);
	};

	return (
		<div>
			<ScrollMenu
				data={menuItems}
				selected={selected}
				// arrowLeft={ArrowLeft}
				arrowRight={ArrowRight}
				onSelect={handleSelect}
				hideSingleArrow={true}
				hideArrows={true}
				wheel={true}
				transition={0.3}
				translate={0}
				menuStyle={MenuStyle}
			/>
		</div>
	);
};

export default BottomNav;
