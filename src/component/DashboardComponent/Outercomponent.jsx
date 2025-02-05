import { useSnapshot } from 'valtio';
import Livenow from './Livenow'
import Meter from './Meter'
import Preview from './Preview'
import state from '../../store';
import { useEffect, useState } from 'react';
import axiosInstance from '../../../Axios';

function OutercomponentDashboard() {
   const [live, setLive] = useState([]);
 const [loading, setLoading] = useState(true);
 const snap = useSnapshot(state)

 const fetchData = ()=>{
   setTimeout(()=>{
    axiosInstance 
      .get(`/stats/live-now/${snap.userId}`)
      .then((res) => {
        setLoading(false);
        if (res.data.data.length === 0) {
          return setLive([]);
        }
       
        setLive(res.data.data);
      })
      .catch((err) => console.log(err));
   },1000)
 }

 useEffect(()=>{
  fetchData()
 },[])

  return (
    <div className="bg-slate-200 h-full px-5 py-9 ">
      <div className="flex md:flex-row flex-col gap-5">
        <Livenow live={live} loading={loading} />
        <Meter />
      </div>
      <div className="flex gap-5 py-5 ">
        {/* <Preview  /> */}
        {/* <User /> */}
      </div>
    </div>
  );
}

export default OutercomponentDashboard
