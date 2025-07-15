import React, { useEffect, useState } from 'react'

import axios from 'axios'
import NavBar from './NavBar'


const View = () => {
    const [quotes, changequotes] = useState(
      {"quotes":[],"total":1454,"skip":0,"limit":30}
        
    )


    const fetchData=()=>{
        axios.get("https://dummyjson.com/quotes").then( 
            (response)=>{
                changequotes(response.data)
            }
        ).catch()
        }

         useEffect(()=>{fetchData()},[])


    return (
        <div>

            <div>
                <NavBar />
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                                <table class="table">
                                    <thead>

                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Author</th>
                                            <th scope="col">Quote</th>
                                            
                                           

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {quotes.quotes.map(
                                            (value, index) => {
                                                return (
                                                    <tr>

                                                        
                                                        
                                                        <th>{value.id}</th>
                                                        <td>{value.author}</td>
                                                        <td>{value.quote}</td>

                                                        
                                                      
                                                    </tr>

                                                )
                                            }
                                        )}


                                    </tbody>
                                </table>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View