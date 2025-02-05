import DashboardHeader from './DashboardHeader'
import OutercomponentDashboard from './Outercomponent'
import OutercomponentInbox from './OutercomponentInbox'
import OutercomponentUser from './OutercomponentUser'
import OutercomponentLive from './OutercomponentLive'
import { Route, Routes } from 'react-router-dom'
import OutercomponentChannel from './OutercomponentChannel'
import OutercomponentDomain from './OutercomponentDomain'
import PageNotFound from '../../pages/404'

function Right() {
  return (
    <div className='md:w-10/12 w-full'>
      <DashboardHeader />
    <Routes>
      <Route path='/dashboard' element={<OutercomponentDashboard />} />
      <Route path='/inbox' element={<OutercomponentInbox /> } />
      <Route path='/user' element={<OutercomponentUser />} />
      <Route path='/live' element={<OutercomponentLive />} />
      <Route path='/channel' element={<OutercomponentChannel />}/>
      <Route path='/domain' element={<OutercomponentDomain />}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
      </div>
   
  )
}

export default Right
