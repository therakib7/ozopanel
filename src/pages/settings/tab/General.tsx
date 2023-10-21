import { useEffect } from 'react';
import { toast } from "react-toastify";
import api from '@utils/api';

const General = () => {
  // const [form, setFrom] = useState({});

  useEffect(() => {
    get();
  }, []);

  const get = () => {
    api.get('settings', 'tab=test_tab')
      .then((res: { success: boolean; data: any; }) => {
        // setPosts(data);
          if (res.success) {
            // toast.success('Data Found');
          } else {
            res.data.forEach( (value: string) => {
              toast.error(value);
            } );
          }
      })
  }

  return (
    <div>
      General Settings
    </div>
  );
};
export default General;
