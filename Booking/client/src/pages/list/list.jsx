import "./list.css"
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/searchItem";
import useFetch from "../../hooks/useFetch"
const List = () => {

    const location = useLocation()// uselocation is a hook

    const [destination,setDestination] = useState(location.state.destination)
    const [dates,setDates] = useState(location.state.dates)
    const [openDate,setopenDate] = useState(false)
    const [Options,setOptions] = useState(location.state.Options)
    const [min,setMin] = useState(undefined)
    const [max,setMax] = useState(undefined)

    const {data, loading, error, reFetch} = useFetch(`/hotels?city=${destination}&min=${min || 0}&max=${max || 20000}`)
    // console.log(location);

    const handleClick = () =>
    {
        reFetch()
    }
    return(
    <div>
        <Navbar/>
        <Header type = "list"/>
        <div className="listContainer">
            <div className="listWrapper">
                <div className="listSearch">
                    <h1 className="lsTitle">Search</h1>
                    <div className="lsItem">
                        <label>Destination</label>
                        <input type="text" placeholder={destination}/>
                        <label>Check-in Date</label>
                        <span onClick={() => setopenDate(!openDate)}>
                            {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
                        </span>
                        {openDate && <DateRange 
                            onChange={(item) => setDates([item.selection])}
                            minDate = {new Date()}
                            ranges = {dates}
                        />
                        }
                    </div>
                    <div className="lsItem">
                        <label>Options</label>
                        <div className="lsOptions">

                    
                        <div className="lsOptionItem">
                            <span className="lsOptionText">
                                Min price <small>per night</small>
                            </span>
                            <input type="number" onChange={e => setMin(e.target.value)} className="lsOptionInput" />
                        </div>

                        <div className="lsOptionItem">
                            <span className="lsOptionText">
                                Max price <small>per night</small>
                            </span>
                            <input type="number" onChange={e => setMax(e.target.value)} className="lsOptionInput" />
                        </div>

                        <div className="lsOptionItem">
                            <span className="lsOptionText">
                                Adult
                            </span>
                            <input type="number" min = {1} className="lsOptionInput" placeholder={Options.adult} />
                            
                        </div>

                        <div className="lsOptionItem">
                            <span className="lsOptionText" >
                                Children
                            </span>
                            <input type="number" min = {0} className="lsOptionInput" placeholder={Options.children}  />
                        </div>

                        <div className="lsOptionItem">
                            <span className="lsOptionText">
                                Room
                            </span>
                            <input type="number" min = {1} className="lsOptionInput"  placeholder={Options.room} />
                        </div>
                    </div>
                    </div>
                    <button onClick={handleClick}>Search</button>
                </div>
                <div className="listResult">
                    {loading ? "loading" : 
                    <>
                    {data.map(item => (

                        <SearchItem item = {item} key = {item._id}/>
                    ))}
                    </>
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default  List;

