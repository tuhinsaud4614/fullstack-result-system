import  {memo} from "react";

import AddSubject from "../components/add-subject";

const Subjects = () => {
  return (
    <div>
      <AddSubject />
    </div>
  );
};

export default memo(Subjects);
