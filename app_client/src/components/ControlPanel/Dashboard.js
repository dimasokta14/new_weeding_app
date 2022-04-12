import React from 'react'
import {
  Label,
  Header,
  Grid,
  Card,
  Statistic,
  Table,
  Menu,
  Icon,
  Segment
} from 'semantic-ui-react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import firebase from 'firebase'
import DataTable from 'react-data-table-component';

import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  padding: 0px 10px 10px 10px;
  margin-top: 20%;
`
const StyledCard = styled(Card)`
  box-shadow:
    0 6.1px 10.3px rgba(0, 0, 0, 0.01),
    0 20.3px 43.4px rgba(0, 0, 0, 0.014),
    0 91px 80px rgba(0, 0, 0, 0.04) !important
  ;
`


const columns = [
  // {
  //   name: '',
  //   sortable: false,
  // },
  {
    name: 'Nama',
    sortable: true,
    cell: row => <div style={{fontWeight: 700}}>{row.nama}</div>
  },
  {
    name: 'Ucapan',
    selector: 'ucapan'
  },
  {
    name: 'Whatsapp',
    selector: 'whatsapp'
  },
  {
    name: 'Jumlah',
    selector: 'jumlah'
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    right: true,
  },
];

const Dashboard = () => {
  const [data, setData] = React.useState([])
  const [total, setTotal] = React.useState(0)
  const [hadir, setHadir] = React.useState(0)
  const [belum, setBelum] = React.useState(0)
  const [tidak, setTidak] = React.useState(0)

  // const selectorStatus = (data) => {
  //   switch (data) {
  //     case 'akan hadir':
  //     return {
  //       setHadir(data.length)
  //     }
    
  //     default:
  //       break;
  //   }
  // }
  
  const items = [
    { key: 'total', label: 'Total', value: total},
    { key: 'hadir', label: 'Hadir', value: hadir},
    { key: 'belum', label: 'Belum Dipastikan', value: belum },
    { key: 'tidak', label: 'Tidak Hadir', value: tidak },
  ]

  React.useEffect(() => {
      const fetchData = async() => {
        const result = await firebase.database()
          .ref('/attendees')
          .once('value')
          .then((snapshot) => {
            setData(snapshot.val())
            // setLoading(false)
          })
        return result
      }
      fetchData()
    },[])
  // const filteredItems = Object.values(data).filter(item => item.nama.toLowerCase().includes(filterText.toLowerCase()) || item.nama_usaha.toLowerCase().includes(filterText.toLowerCase()) || item.kota.toLowerCase().includes(filterText.toLowerCase()));
  return (
    <Wrapper>
      <Grid columns='equal'>
        <Grid.Column mobile={16} computer={16} tablet={16}>
          <StyledCard>
            <Card.Content>
              <Statistic.Group items={items} size='tiny' widths='2'/>
            </Card.Content>
          </StyledCard>
        </Grid.Column>
      </Grid>
      <Grid columns='equal'>
        <Grid.Column mobile='16' computer='16' tablet='16'>
          <DataTable
            title='Daftar Tamu Undangan'
            columns={columns}
            data={Object.values(data)}
            // expandableRows
            // sortIcon={<i className='far fa-arrow-right'/>}
            pagination
            paginationDefaultPage={1}
          />
        </Grid.Column>
      </Grid>
    </Wrapper>
  )
}

// export default compose(
//   firebaseConnect(() => ['attendees']),
//   connect((state, props) => ({
//     attendees: state.firestore.ordered.attendees
//   }))
// )(Dashboard)

export default Dashboard
