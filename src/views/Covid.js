import { useEffect, useState } from "react";
import axios from "axios";
const Covid = () => {
  useEffect(() => {
    async function getData() {
      try {
        let res = await axios.get("https://reqres.in/api/users?page=1");
        let data = res && res.data && res.data.data ? res.data.data : [];
        setObject(data);
        setLoading(false);
      } catch (eros) {
        console.log(">>>check err:", eros);
        setErr(true);
      }
    }

    getData();
  }, []);
  const [err, setErr] = useState(false);
  const [obj, setObject] = useState([]);
  const [loading, setLoading] = useState(true);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First-Name</th>
          </tr>
        </thead>
        {err === false &&
          loading === false &&
          obj &&
          obj.length > 0 &&
          obj.map((item, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                </tr>
              </tbody>
            );
          })}
        {err === false && loading === true && (
          <tfoot>
            <tr>
              <td className="loading">loading...</td>
            </tr>
          </tfoot>
        )}
        {err === true && (
          <tfoot>
            <tr>
              <td className="loading">somethingwrong...</td>
            </tr>
          </tfoot>
        )}
      </table>
    </>
  );
};
export default Covid;
