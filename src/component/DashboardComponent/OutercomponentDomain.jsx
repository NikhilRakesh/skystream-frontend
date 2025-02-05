import React, { useEffect, useState } from 'react'
import DomainTab from './DomainTab'
import { useSnapshot } from 'valtio'
import state from '../../store'
import axiosInstance from '../../../Axios'
import SkelitonList from './SkelitonList'
import DomainLoading from './DomainLoading'
import CreateDomain from "./CreateDomain";
import DomainValidation from "./DomainValidation";
import Swal from "sweetalert2";

const OutercomponentDomain = () => {
  const [domains, setDomains] = useState([]);
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(true)
  const [createdomain, setCreatedomain] = useState(false);
  const [reFresh, setreFresh] = useState(false);
  const [domainerror, setDomainerror] = useState({});

  const snap = useSnapshot(state)

  const handleChange = (e) => {
    setDomain(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = DomainValidation(domain);
    setDomainerror(error);
    console.log("Error: ", error);

    if (Object.keys(error).length == 0) {
      axiosInstance
        .post(`/domain/${snap.userId}`, { domain })
        .then((res) => {
          Swal.fire({
            title: "Success",
            text: "Domain Created Successfully",
            icon: "success",
          });
          setCreatedomain(false);
          setreFresh(!reFresh)
        })
        .catch((err) => {
          console.log("Error: ", err);
          if (err.response.status === 401) {
            Swal.fire(
              "Not Authorized",
              "You are not authorized to Create Domain.",
              "error"
            );
          }
        });
    } else {
      console.log("Validation Error: ", domainerror);
    }
  };
  useEffect(() => {
    axiosInstance.get(`/domain/${snap.userId}`).then((res) => {
      setDomains(res.data.domain)
    }).then(() => setLoading(false)).catch((err) => {
      console.log(err);
    })
  }, [snap.refreshData,reFresh])

  return (
    <div className='w-full flex flex-col gap-2 '>
      <div className='flex w-full px-24 justify-between items-center font-bold text-blue bg-white shaddow h-20  border-b-4'>
        <h1>Domain Name</h1>
        <div>
          {snap.userData.superAdmin && (
            <div className="cursor-pointer">
              <button
                className="bg-blue text-white px-3 py-1 rounded-md hover:scale-105 transform transition-all"
                onClick={() => setCreatedomain(!createdomain)}
              >
                Add Domain
              </button>
            </div>
          )}
        </div>

      </div>
      {loading ? <div><DomainLoading /> <DomainLoading /> <DomainLoading /> </div> :
        domains?.map((item, index) => <DomainTab key={index} {...item} />)
      }
      {createdomain ? (
        <CreateDomain
          value={createdomain}
          handleClose={() => setCreatedomain(false)}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          {...domainerror}
        />
      ) : null}

    </div>
  )
}

export default OutercomponentDomain   
