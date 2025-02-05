/* eslint-disable no-unused-vars */
import { MdDelete } from 'react-icons/md'
import axiosInstance from '../../../Axios'
import { useSnapshot } from 'valtio'
import state from '../../store'
import Swal from 'sweetalert2'

const DomainTab = ({...item}) => {
  const snap = useSnapshot(state);

    const handleDelete = () => {
      Swal.fire({
        title: "Delete Domain",
        text: "Are you sure you want to delete this Domain?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosInstance
            .get(`/domain/delete/${item._id}`)
            .then((res) => {
      
              state.refreshData = !snap.refreshData;
              Swal.fire("Deleted!", "Your Domain has been deleted.", "success");
            })
            .catch((err) => {
              console.log(err);
              if (err.response.status === 401) {
                Swal.fire(
                  "Not Authorized",
                  "You are not authorized to delete.",
                  "error"
                );
              }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelled", "Your Domain is safe :)", "info");
        }
      });
    };

   

  return (
    <div className='py-6 px-24 bg-light shadow-md border-b-2'>
    <div className='flex w-[600px] justify-between'>
    <div className='font-semibold'>
       {item.domain}
     </div>
     <div onClick={handleDelete} className='bg-red flex items-center cursor-pointer text-white w-8 justify-center h-9 rounded-md hover:scale-95  hover:text-black'>
     <MdDelete />

     </div>
    </div>
   </div>
  )
}

export default DomainTab
