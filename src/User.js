
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './Header';

function User() {
    let [data, setdata] = useState([]);
    let [data1, setdata1] = useState([]);
    let [data2, setdata2] = useState([]);
    let [data3, setdata3] = useState([]);
    let [data4, setdata4] = useState([]);
    let arr = []


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {

                console.log(response.data);
                setdata(response.data)
                // console.log(response.data.address)
                // console.log('sddad'+response.data.length)
                // for (var i = 0; i < response.data.length; i++) {
                //     // setdata1(response.data[i].address);
                //     arr[i]=response.data[i].address;

                //     // setdata2(response.data[i].address.geo);
                //     // console.log(arr)

                //     // setdata3(response.data[i].company);
                // }
                // setdata1(arr)



            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [])
    return (
        <>
            <Header></Header>
                <table className='user'>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th colSpan={4}>address</th>
                        <th colSpan={2}>geo</th>
                        <th>phone</th>
                        <th>website</th>
                        <th colSpan={3}>company</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>street</th>
                        <th>suite</th>
                        <th>city</th>
                        <th>zipcode</th>
                        <th>lat</th>
                        <th>lng</th>
                        <th></th>
                        <th></th>
                        <th>name</th>
                        <th>catchPhrase</th>
                        <th>bs</th>

                    </tr>
                    {
                        data.map((ele, ind) => {
                            return (
                                <tr key={ind}>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.username}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.address.street}</td>
                                    <td>{ele.address.suite}</td>
                                    <td>{ele.address.city}</td>
                                    <td>{ele.address.zipcode}</td>
                                    <td>{ele.address.geo.lat}</td>
                                    <td>{ele.address.geo.lng}</td>
                                    <td>{ele.phone}</td>
                                    <td>{ele.website}</td>
                                    <td>{ele.company.name}</td>
                                    <td>{ele.company.catchPhrase}</td>
                                    <td>{ele.company.bs}</td>

                                </tr>
                            )
                        })
                    }
                </table>



           
        </>
    )
}
export default User;
