import React, { useState } from 'react';

const UserTable = ({ userData, onDelete, onUpdate }) => {
  const [editingField, setEditingField] = useState(null);
  const [editedData, setEditedData] = useState({});

  const handleEdit = (field, value) => {
    setEditingField(field);
    setEditedData({ ...editedData, [field]: value });
  };

  const handleSave = (id) => {
    onUpdate(id, editedData);
    setEditingField(null);
    setEditedData({});
  };

  const handleCancel = () => {
    setEditingField(null);
    setEditedData({});
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 border">User Name</th>
            <th className="px-4 py-2 border">First Name</th>
            <th className="px-4 py-2 border">Last Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Password</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2 border">
                {editingField === `userName-${user.id}` ? (
                  <input
                    type="text"
                    value={editedData[`userName-${user.id}`] || user.userName}
                    onChange={(e) =>
                      handleEdit(`userName-${user.id}`, e.target.value)
                    }
                  />
                ) : (
                  user.userName
                )}
              </td>
              <td className="px-4 py-2 border">
                {editingField === `firstName-${user.id}` ? (
                  <input
                    type="text"
                    value={editedData[`firstName-${user.id}`] || user.firstName}
                    onChange={(e) =>
                      handleEdit(`firstName-${user.id}`, e.target.value)
                    }
                  />
                ) : (
                  user.firstName
                )}
              </td>
              <td className="px-4 py-2 border">
                {editingField === `lastName-${user.id}` ? (
                  <input
                    type="text"
                    value={editedData[`lastName-${user.id}`] || user.lastName}
                    onChange={(e) =>
                      handleEdit(`lastName-${user.id}`, e.target.value)
                    }
                  />
                ) : (
                  user.lastName
                )}
              </td>
              <td className="px-4 py-2 border">
                {editingField === `email-${user.id}` ? (
                  <input
                    type="text"
                    value={editedData[`email-${user.id}`] || user.email}
                    onChange={(e) =>
                      handleEdit(`email-${user.id}`, e.target.value)
                    }
                  />
                ) : (
                  user.email
                )}
              </td>
              <td className="px-4 py-2 border">
                {editingField === `password-${user.id}` ? (
                  <input
                    type="password"
                    value={editedData[`password-${user.id}`] || user.password}
                    onChange={(e) =>
                      handleEdit(`password-${user.id}`, e.target.value)
                    }
                  />
                ) : (
                  user.password
                )}
              </td>
              <td className="px-4 py-2 border">
                {editingField === user.id ? (
                  <div>
                    <button
                      onClick={() => handleSave(user.id)}
                      className="bg-green-600 hover:bg-green-700 px-2 py-1 text-white rounded mr-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-gray-600 hover:bg-gray-700 px-2 py-1 text-white rounded"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div>
                  
                    <button
                      onClick={() => onDelete(user.id)}
                      className="bg-red-600 hover:bg-red-700 px-2 py-1 text-white rounded"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
