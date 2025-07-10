import { useEffect, useReducer, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

async function getdata(dispatch) {
  try {
    let data = await fetch("https://dummyjson.com/posts");
    data = await data.json();
    dispatch({ type: "success", payload: data.posts });
  } catch (error) {
    dispatch({ type: "error" });
  }
}

let initial = { loading: false, data: [], error: false };


function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true };
    case "success":
      return { ...state, data: action.payload, loading: false };
    case "error":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

function Home() {
  const [list, setlist] = useState([]);
  const [state, dispatch] = useReducer(reducer, initial);
  const nav = useNavigate();

  useEffect(() => {
    dispatch({ type: "loading" });
    getdata(dispatch);
  }, []);
  return (
    <>
      <div className="home">
        {state.loading ? (
          <div>...loading</div>
        ) : (
          <div className="list">
            {state.data.map((item) => (
              <div onClick={() => nav(`/post/${item.id}`)} key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
