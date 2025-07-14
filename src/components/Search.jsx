import React from 'react'
import NavBar from './NavBar'


const Search = () => {
  return (
    <div>
        <NavBar/>
     <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <row>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-control">Id</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <br></br>
                    <button className="btn btn-success">Search</button>
                </div>
            </row>
        </div>
     </div>




    </div>
  )
}

export default Search