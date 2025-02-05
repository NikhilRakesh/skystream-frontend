import { Skeleton, } from "@chakra-ui/react";
const InboxTabLoading = () => {
  return (
    <div className="h-16 w-full flex shadow-lg justify-between items-center px-10">
      <Skeleton height="20px" width="20px" />
      <Skeleton height="20px" width="100px" />
      <Skeleton height="20px" width="150px" />
      <Skeleton height="20px" width="150px" />
      <Skeleton height="20px" width="100px" />
      <Skeleton height="20px" width="200px" />
    </div>
  );
}

export default InboxTabLoading