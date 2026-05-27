import { render, screen } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

test('renders reserve button',()=>{
 render(<BookingForm />);
 expect(screen.getByText(/Reserve Table/i)).toBeInTheDocument();
});
