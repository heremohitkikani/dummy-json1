
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './Header';

function Todo() {
    let [data, setdata] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(function (response) {
                // handle success
                // if (response == '') {
                //   setdata('hakdgadgaudfadgy')
                // }
                console.log(response.data);
                setdata(response.data)
                // setall(response.data.results)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [])
    return (
        <>
        <Header></Header>
            <table border={1} className='todo'>
                <tr>
                    <th>User Id</th>
                    <th>Id</th>
                    <th>title</th>
                    <th>completed</th>
                </tr>
                {
                    data.map((ele,ind)=>{
                        return(
                            <tr>
                                <td>{ele.userId}</td>
                                <td>{ele.id}</td>
                                <td>{ele.title}</td>
                                <td>{ele.completed}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}
export default Todo;
