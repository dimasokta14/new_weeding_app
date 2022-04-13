import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { Grid, Segment, Form, Button } from "semantic-ui-react";
import { animated, useSpring } from "react-spring";

import bq from "../assets/bouquet.jpg";
import FlowerGif from "../assets/tenor_fg.gif";
import Decor from "../assets/decor.svg";
import GuestBookRecord from "./GuestBookRecord";
import {
	FlipUpTitleAnimation,
	ScaleUpImageDecorAnimation,
} from "../helpers/animation";
import { RsvpContext } from "../context/RsvpContext";

const options = [
	{ key: "r1", text: "AKAN HADIR", value: "Hadir" },
	{ key: "rd", text: "BELUM DIPASTIKAN", value: "belum pasti" },
	{ key: "r2", text: "TIDAK HADIR", value: "Tidak Hadir" },
];

const StyledButton = styled(Button)`
	border-radius: 20px !important;
	background: #e3c7ca !important;
	color: black !important;
`;

const AnimatedForm = animated(Form);

const RSVP = (props) => {
	const { rsvp_lists, postAttenders } = useContext(RsvpContext);
	const [values, setValues] = React.useState({
		name: "",
		phone: "",
		num_attend: 0,
		greet: "",
		status: "",
	});

	const handleChange = (prop) => (e) => {
		e.preventDefault();
		setValues({ ...values, [prop]: e.target.value });
	};

	const style_animated_form = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: "1000" },
		loop: false,
	});

	const handleSubmit = () => {
		try {
			Swal.fire({
				title: "Apakah data sudah benar?",
				text: "Data yang kamu simpan akan masuk di daftar tamu kami",
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: "Simpan",
			}).then((result) => {
				if (result.isConfirmed) {
					try {
						postAttenders(values);
						Swal.fire({
							title: "Berhasil",
							text: "Data berhasil disimpan",
							icon: "success",
							background: `#fff url(${bq}) no-repeat top center / 500px`,
							backdrop: `
                rgba(253,190,212,0.4)
                url(${FlowerGif})
                left top
                no-repeat
              `,
						});
					} catch (err) {
						Swal.fire(
							"Oppsssss!",
							"Nampaknya ada yang salah, periksa koneksi internet kamu!" + err,
							"error"
						);
					}
				}
			});
		} catch (err) {
			Swal.fire("Oppssss!", err, "error");
		}
	};
	return (
		<Grid columns="equal">
			<Grid.Column mobile={16} computer={16} tablet={16}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						marginBottom: "30px",
					}}
				>
					<ScaleUpImageDecorAnimation src={Decor} />
					<FlipUpTitleAnimation text="Guest Book" />
				</div>
				<AnimatedForm onSubmit={handleSubmit} style={style_animated_form}>
					<Form.Field>
						<label>NAMA</label>
						<input
							placeholder="contoh: Dimas - SVK"
							onChange={handleChange("name")}
						/>
					</Form.Field>
					<Form.Field>
						<label>No. WHATSAPP</label>
						<input
							placeholder="contoh: 081xxxxxx"
							onChange={handleChange("phone")}
						/>
					</Form.Field>
					<Form.Field>
						<label>JUMLAH ORANG YANG HADIR</label>
						<input
							type="number"
							placeholder="contoh: 4"
							onChange={handleChange("num_attend")}
						/>
					</Form.Field>
					<Form.TextArea
						label="UCAPAN & DOA"
						placeholder="Isi ucapan dan Doa..."
						onChange={handleChange("greet")}
					/>
					<Form.Select
						fluid
						label="KONFIRMASI KEHADIRAN"
						options={options}
						value={options.value}
						placeholder="Konfirmasi Kehadiran"
						onChange={async (e, { value }) => {
							setValues({ ...values, ["status"]: value });
						}}
					/>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<StyledButton type="submit">Submit Kehadiran</StyledButton>
					</div>
				</AnimatedForm>
				<GuestBookRecord feed_data={rsvp_lists} />
			</Grid.Column>
		</Grid>
	);
};

export default RSVP;
