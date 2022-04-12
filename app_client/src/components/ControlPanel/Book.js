import React from "react";
import { Grid } from "semantic-ui-react";
import firebase from "firebase";

import styled from "styled-components";
import DataTable from "react-data-table-component";

const Wrapper = styled.div`
	height: 100vh;
	position: relative;
	padding: 0px 10px 10px 10px;
	margin-top: 20%;
`;

// const data = [{ id: 1, nama: 'Conan the Barbarian', whatsapp: '1982-344', status: 'Hadir', pesan: 'Orphaned boy Conan is enslaved after his village is destroyed...' },];
const columns = [
	{
		name: "",
		sortable: false,
	},
	{
		name: "Nama",
		sortable: true,
		cell: (row) => <div style={{ fontWeight: 700 }}>{row.nama}</div>,
	},
	{
		name: "Whatsapp",
		selector: "whatsapp",
	},
	{
		name: "Status",
		selector: "status",
		sortable: true,
		right: true,
	},
];

const Book = (props) => {
	const { attendees } = props;
	const [data, setData] = React.useState([]);
	React.useEffect(() => {
		const fetchData = async () => {
			const result = await firebase
				.database()
				.ref("/biodata_ukm_binaan")
				.once("value")
				.then((snapshot) => {
					setData(snapshot.val());
					// setLoading(false)
				});
			return result;
		};
		fetchData();
	}, []);

	console.log(data);
	return (
		<Wrapper>
			<Grid columns="equal">
				<Grid.Column mobile="16" computer="16" tablet="16">
					<DataTable
						title="Daftar Tamu Undangan"
						columns={columns}
						data={data}
						expandableRows
						sortIcon={<i className="far fa-arrow-right" />}
						pagination
						paginationDefaultPage={1}
					/>
				</Grid.Column>
			</Grid>
		</Wrapper>
	);
};

// const mapStateToProps = (state) => {
//   return {
//     attendees: state.fireastore.ordered.attendees
//   }
// }

// export default compose(
//   firebaseConnect(() => ['attendees']),
//   connect((state, props) => ({
//     attendees: state.fireastore.ordered.attendees
//   }))
// )(Book)
export default Book;
