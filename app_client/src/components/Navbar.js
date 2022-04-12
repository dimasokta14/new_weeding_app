import React from "react";
import { createMedia } from "@artsy/fresnel";
import { Container, Icon, Image, Menu, Sidebar } from "semantic-ui-react";

import imgbg from "../assets/35.png";
import Logo from "../assets/36.png";
import styled from "styled-components";

const AppMedia = createMedia({
	breakpoints: {
		mobile: 320,
		tablet: 768,
		computer: 992,
		largeScreen: 1200,
		widescreen: 1920,
	},
});

const LeftMenu = styled(Menu.Menu)`
	width: 35% !important;
	background: url(${imgbg});
	background-repeat: no-repeat;
	background-size: 170px;
	background-position-y: -60px;
	background-position-x: -30px;
`;
const RightMenu = styled(Menu.Menu)`
	width: 35% !important;
	background: url(${imgbg});
	background-repeat: no-repeat;
	background-size: 170px;
	background-position-y: -60px;
	background-position-x: -30px;
	transform: rotateY(180deg);
`;
const CenterMenu = styled(Menu.Menu)`
	width: 30% !important;
	background: url(${Logo});
	background-repeat: no-repeat;
	background-size: 120px;
	background-position-y: -50px;
	background-position-x: -5px;
`;

const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

const NavbarMobile = (props) => {
	const { children, leftItems, onPusherClick, onToggle, rightItems, visible } =
		props;

	return (
		<Sidebar.Pushable>
			<Sidebar
				as={Menu}
				animation="overlay"
				icon="labeled"
				inverted
				items={leftItems}
				vertical
				visible={visible}
			/>
			<Sidebar.Pusher
				dimmed={visible}
				onClick={onPusherClick}
				style={{ backgroundColor: "#eaeaea" }}
			>
				<Menu fixed="top" inverted>
					<LeftMenu position="left">
						<Menu.Item>
							<Image size="mini" src={imgbg} />
						</Menu.Item>
					</LeftMenu>
					<Menu.Item>
						<Image size="mini" src={Logo} />
					</Menu.Item>
					<RightMenu position="right"></RightMenu>
				</Menu>
				{/* {children} */}
			</Sidebar.Pusher>
		</Sidebar.Pushable>
	);
};

const NavbarDesktop = (props) => {
	const { leftItems, rightItems } = props;

	return (
		<Menu
			fixed="top"
			inverted
			style={{
				backgroundImage: "linear-gradient( white, transparent )",
				backgroundColor: "rgba(248, 255, 251, 0.05)",
				height: "100px",
			}}
		>
			<LeftMenu position="left" />
			<CenterMenu />
			<RightMenu position="right" />

			{/* {leftItems.map((item) => (
        <Menu.Item {...item} />
      ))}

      <Menu.Menu position="right">
        {rightItems.map((item) => (
          <Menu.Item {...item} />
        ))}
      </Menu.Menu> */}
		</Menu>
	);
};

const NavBarChildren = (props) => (
	<Container style={{ marginTop: "5em" }}>{props.children}</Container>
);

const Navbar = (props) => {
	const { children, leftItems, rightItems, is_inverted } = props;

	const [visible, setVisible] = React.useState(false);

	const handlePusher = () => {
		if (visible) setVisible(false);
	};

	const handleToggle = () => setVisible(!visible);
	return (
		<div
			style={
				is_inverted
					? {
							bottom: 0,
							position: "absolute",
							height: "100vh",
							zIndex: -1,
							background: "#ededed",
							transform: "rotate(180deg)",
					  }
					: { background: "#ededed" }
			}
		>
			<Media at="mobile">
				<NavbarMobile
					// leftItems={leftItems}
					onPusherClick={handlePusher}
					onToggle={handleToggle}
					// rightItems={rightItems}
					visible={visible}
				>
					{/* <NavBarChildren>{children}</NavBarChildren> */}
				</NavbarMobile>
			</Media>
			<Media greaterThan="mobile">
				<NavbarDesktop leftItems={leftItems} rightItems={rightItems} />
				{/* <NavBarChildren>{children}</NavBarChildren> */}
			</Media>
		</div>
	);
};

export default Navbar;
