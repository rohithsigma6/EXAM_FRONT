import React, { useState } from 'react';

const Notification = () => {
  const [showNotification, setShowNotification] = useState(false);

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  return (
    <div>
      <button
        onClick={toggleNotification}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Show Notification
      </button>

      {showNotification && (
        <div className="fixed top-0 right-0 mt-8 mr-8 bg-blue-500 text-white p-4 rounded shadow-lg z-50">
          This is a notification message. You can customize its content and style as needed.
          <button
            onClick={toggleNotification}
            className="float-right focus:outline-none focus:shadow-outline"
          >
            <svg
              className="h-4 w-4 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Notification;
