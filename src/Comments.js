
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './Header';

function Comments() {
    let [data, setdata] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
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
            <table border={1} className='comments'>
                <tr>
                    <th>User Id</th>
                    <th>Id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>body</th>
                </tr>
                {
                    data.map((ele,ind)=>{
                        return(
                            <tr>
                                <td>{ele.postId}</td>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>{ele.body}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}
export default Comments;
