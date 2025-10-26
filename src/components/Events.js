import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'Lorem Ipsum Sed',
      date: 'October 15, 2024',
      time: '8:00 PM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Lorem Ipsum Sed',
      date: 'October 22, 2024',
      time: '7:30 PM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Lorem Ipsum Sed',
      date: 'October 29, 2024',
      time: '9:00 PM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  return (
    <section id="events" className="section-padding bg-delray-cream">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            OCTOBER EVENTS
          </h2>
          <div className="flex space-x-2">
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4 text-gray-900">
                {event.title}
              </h3>
              <div className="text-delray-teal font-medium mb-2">
                {event.date}
              </div>
              <div className="text-gray-600 mb-4">
                {event.time}
              </div>
              <p className="text-gray-700 leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;