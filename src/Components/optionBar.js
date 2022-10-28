import { useEffect, useState } from "react";

const OptionBar = (props) => {
  const [limit, setLimit] = useState(50);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");

  useEffect(()=>{
    props.generateUrlParams(limit,page,sortBy,order)
  },[limit,page,sortBy,order])

  return (
    <div>
        <label>Limit: </label>
        <input type="number" value={limit} onChange={(e)=>{
            setLimit(e.target.value)
        }}></input>
        <br></br>
        <label>Page: </label>
        <input type="number" value={page} onChange={(e)=>{
            setPage(e.target.value)
        }}></input>
        <br></br>
        <label>Sort By: </label>
        <select onChange={(e)=>{
            setSortBy(e.target.value)
        }}>
            <option></option>
            <option value="id">id</option>
            <option value="title">title</option>
            <option value='createdAt'>createdAt</option>
        </select>
        <br></br>
        <label>Order: </label>
        <select onChange={(e)=>{
            setOrder(e.target.value)
        }}>
            <option></option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
            <option></option>
        </select>
    </div>
  )
};

export default OptionBar;
