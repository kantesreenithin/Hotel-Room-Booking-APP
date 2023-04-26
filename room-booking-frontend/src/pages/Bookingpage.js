import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "../index.css";
import moment from "moment";
import Loader from "../display/Loader";
import Error from "../display/Error";
import StripeCheckout from "react-stripe-checkout";
import Swal from 'sweetalert2'
function Bookingpage() {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [room, setroom] = useState(true);

  let { id, fromdate, todate } = useParams();
  const roomid = id;
  const from = moment(fromdate, "DD-MM-YYYY");
  const to = moment(todate, "DD-MM-YYYY");
  const totaldays = moment.duration(to.diff(from)).asDays() + 1;
  const [totalamount, settotalamount] = useState();
  useEffect(() => {
    const fetchData = async () => {
      if(!localStorage.getItem('currentUser')){
        window.location.reload='/login';
      }
      try {
        setloading(true);
        const data = (
          await axios.post("/api/rooms/getroombyid", { roomid: id })
        ).data;
        settotalamount(data.rentperday * totaldays);
        setroom(data);
        setloading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
        setloading(false);
        seterror(true);
      }
    };
    fetchData();
  }, []);
  async function onToken(token) {
    console.log(token);
    const bookingDetails = {
      room,
      userid: JSON.parse(localStorage.getItem("currentUser")).data._id,
      fromdate,
      todate,
      totalamount,
      totaldays,
    };
    try {
      setloading(true);
      const result = await axios.post("/api/bookings/bookroom", bookingDetails);
      setloading(false);
      Swal.fire('Congratulation' , 'Your room booked successfully' , 'success').then(result => {
        window.location.href='/profile'
      })
    } catch (error) {
      console.log(error);
      Swal.fire('Whoops' , 'Something went wrong' , 'error')
    }
  }
  return (
    <div className="mt-5">
      {loading ? (
        <h1>
          <Loader />
        </h1>
      ) : error ? (
        <h1>
          <Error />
        </h1>
      ) : (
        <div className="container">
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-6">
              <h1>{room.name}</h1>
              <img
                src={room.imageurls[0]}
                alt={room.name}
                className="bigimg"
              ></img>
            </div>

            <div className="col-md-6">
              <div style={{ textAlign: "right" }}>
                <h1>Booking Details</h1>
                <hr />
                <b>
                  <p>
                    Name :
                    {JSON.parse(localStorage.getItem("currentUser")).data.name}
                  </p>
                  <p>From Date :{fromdate}</p>
                  <p>To Date : {todate}</p>
                  <p>Max Count : {room.maxcount}</p>
                </b>
              </div>

              <div style={{ textAlign: "right" }}>
                <b>
                  <h1>Amount</h1>
                  <hr />
                  <p>Total days :{totaldays}</p>
                  <p>Rent per day : {room.rentperday}</p>
                  <p>Total Amount : {totalamount}</p>
                </b>
              </div>

              <div style={{ float: "right" }}>
                <StripeCheckout
                  amount={totalamount * 100}
                  token={onToken}
                  currency="INR"
                  stripeKey="pk_test_51Mzh7TSH19W3MuCw388C68rEO9EJpyT8DVr46WniQHYYKKWlr9XJHLWI5hFJf6YdpnJxB8QAxucKCwS0VxwwUn6z00zQupML5a"
                >
                  <button className="btn btn-primary">Pay Now</button>
                </StripeCheckout>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookingpage;
