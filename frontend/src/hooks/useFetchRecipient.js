import { useEffect, useState } from "react";
import { baseUrl, getRequest } from "/src/utils/services.js";

export const useFetchRecipientUser = (chat, user) => {
  const [recipientUser, setRecipientUser] = useState(null);
  const [error, setError] = useState(null);

  // Determine the recipientId from the chat's members
  const recipientId = chat?.members?.find((id) => id !== user?._id);


  useEffect(() => {
    const getUser = async () => {
      if (!recipientId) return null;

     
        // Fetch the recipient user data from the API
        const response = await getRequest(`${baseUrl}/users/find/${recipientId}`);

        
        if (response.error) {
          return setError(error);
        }
  
        setRecipientUser(response);
      
    };

    getUser();
  }, [ recipientId ]);


  return { recipientUser } ;


};
