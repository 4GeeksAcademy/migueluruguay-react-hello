import React from 'react';
import Header from './Header';
import WelcomeSection from './WelcomeSection';
import Card from './Card';
import Footer from './Footer';
const App = () => {
  const cardData = [
    { title: 'Card 1', text: 'Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/150' },
    { title: 'Card 2', text: 'Consectetur adipiscing elit.', image: 'https://via.placeholder.com/150' },
    { title: 'Card 3', text: 'Integer molestie lorem at massa.', image: 'https://via.placeholder.com/150' },
    { title: 'Card 4', text: 'Facilisis in pretium nisl aliquet.', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div>
      <Header />
      <WelcomeSection />
      <div className="container my-4">
        <div className="row">
          {cardData.map((card, index) => (
            <Card key={index} title={card.title} text={card.text} image={card.image} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;