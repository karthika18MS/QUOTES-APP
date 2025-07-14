import React from 'react'
import NavBar from './NavBar'


const Add = () => {
  return (
    <div>
        <container>
            <NavBar/>
            <div className="row">
                <div className="col col-12 col-sm-12  col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6  col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">ID</label>
                            <input type="text" className="form-control" />
                        </div>
                          <div className="col col-12 col-sm-6  col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Author</label>
                             <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12  col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Quote</label>
                            <textarea name="" id="" className="form-control"></textarea>
                        </div>
                      
                        
                        <div className="col col-12 col-sm-12  col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <br></br>
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </container>
    </div>
  )
}

export default Add