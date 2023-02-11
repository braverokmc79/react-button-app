import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter start 0', () => {
  render(<App />);
  const counterElement =screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});

test('minus button has correct text',  ()=>{
  render(<App /> );
  const buttontElement =screen.getByTestId("minus-button");
  expect(buttontElement).toHaveTextContent("-")
});


test('plus button has correct text', ()=>{
  render(<App />);
  const buttontElement =screen.getByTestId("plus-button");
  expect(buttontElement).toHaveTextContent("+");
});



test('When the + button is pressed, the counter changes to 1', ()=>{
  render(<App />);
  const buttontElement =screen.getByTestId("plus-button");
  fireEvent.click(buttontElement);

  const counterElement =screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});


