import { ThreadsAPI } from 'threads-api';


export const login = async () => {
    const threadsAPI = new ThreadsAPI({
      username: "recepoksuz_", // Your username
      password: "dedede", // Your password
    });

    //  console.log(inUsername, "inusername", inPassword, "inPassword")
  
    await threadsAPI.publish({
      text: '🤖 Hello World',
    });
  };
