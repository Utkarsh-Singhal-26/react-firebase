import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import deleteData from "./deleteData";

async function listData({ onCreateClick }) {
  const querySnapshot = await getDocs(collection(db, "records"));
  const recordElements = querySnapshot.docs.map((doc) => (
    <tr key={doc.id}>
      <td>{doc.data().name}</td>
      <td>{doc.data().contact}</td>
      <td>{doc.data().email}</td>
      <td>
        <button className="hover">
          <a href={`${doc.data().image}`} target="_blank">
            View
          </a>
        </button>
      </td>
      <td>
        <button
          className="hover"
          onClick={() => onCreateClick(doc.id)}
        >
          Edit
        </button>
        <button className="hover" onClick={() => deleteData(doc.id)}>Delete</button>
      </td>
    </tr>
  ));
  return recordElements;
}

export default listData;
