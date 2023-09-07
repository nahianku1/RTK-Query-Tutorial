import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Loader() {
  return (
    <div className="text-center">
      <button className="bg-lime-400 font-bold text-white p-[10px] mb-[20px] rounded-md">
        Create New
      </button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Skeleton />
            </td>
            <td>
              <Skeleton />
            </td>
            <td>
              <Skeleton />
            </td>
            <td>
              <Skeleton />
            </td>
            <td>
              <div className="flex justify-center items-center gap-2">
                <Skeleton
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                />
                <Skeleton
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Loader;
