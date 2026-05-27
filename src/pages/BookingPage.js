import { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';

export default function BookingPage() {

  const [availableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00'
  ]);

  return (
    <>
      <Header />

      <main>
        <h1>Book a Table</h1>
        <BookingForm availableTimes={availableTimes} />
      </main>

      <Footer />
    </>
  );
}