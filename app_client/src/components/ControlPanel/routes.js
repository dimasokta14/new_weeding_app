import React from 'react'

// component

const Dashboard = React.lazy(() => import('./Dashboard'))
const BukuTamu = React.lazy(() => import('./Book'))

const routes = [
  { path: '/cp/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/cp/tamu', name: 'Buku Tamu', component: BukuTamu },
]

export default routes