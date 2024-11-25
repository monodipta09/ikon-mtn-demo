// import axios from "axios";
// import * as Crypto from 'expo-crypto';
// import * as SecureStore from 'expo-secure-store';

// const sha512 = async (content) => {
//     try {
//         const hash = await Crypto.digestStringAsync(
//             Crypto.CryptoDigestAlgorithm.SHA512, // Use SHA-512 algorithm
//             content // Input content to hash
//         );
//         return hash; // Return the hash
//     } catch (error) {
//         //console.error("Error generating SHA-512 hash:", error);
//         throw error; // Re-throw the error for further handling
//     }
// };

// const baseUrl = 'https://ikoncloud.keross.com/rest';

// export const loginApi = async (username, password) => {
//     return true;
//     try {
//         // Generate SHA-512 hash for the password
//         const hashPasswd = await sha512(password);

//         // Set request headers
//         const headers = {
//             "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
//         };

//         // Set query parameters
//         const params = {
//             inZip: false,
//             outZip: true,
//             inFormat: 'xml',
//             outFormat: 'typedjson',
//             service: 'loginService',
//             operation: 'login',
//             locale: 'en_US'
//         };

//         // Format credentials as XML string
//         const credential = `
//         <list>
//             <string>
//                 <content>
//                     <![CDATA[${username}]]>
//                 </content>
//             </string>
//             <string>
//                 <content>
//                     <![CDATA[${hashPasswd}]]>
//                 </content>
//             </string>
//         </list>`.trim().replace(/\s+/g, ''); // Remove excessive whitespace

//         // Make the API call
//         const res = await axios.post(
//             baseUrl,
//             { 'arguments': credential },
//             { headers, params }
//         );

//         // Extract temporary ticket from response
//         const tempTicket = res?.data?.value?.temporaryTicket?.value;

//         if (tempTicket) {
//             // Store the temporary ticket in SecureStore
//             await SecureStore.setItemAsync("tempTicket", tempTicket);
//             //console.log("Temporary ticket stored:", tempTicket);
//             return true;
//         } else {
//             //console.error("Login failed: No temporary ticket returned");
//             return false;
//         }
//     } catch (e) {
//         //console.error("Error during login API call:", e);
//         return false;
//     }
// };

// export const otpApi = async (otp) => {
//     return true;
//     try {
//         // Set request headers
//         const headers = {
//             "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
//         };

//         // Retrieve the temporary ticket from SecureStore
//         const temporaryTicket = await SecureStore.getItemAsync("tempTicket");
//         if (!temporaryTicket) {
//             //console.error("No temporary ticket found in SecureStore");
//             return false;
//         }

//         // Set query parameters
//         const params = {
//             inFormat: "xml",
//             inZip: false,
//             locale: "en_US",
//             operation: "validateOTP",
//             outFormat: "typedjson",
//             outZip: true,
//             service: "loginService",
//         };

//         // Format credentials as XML string
//         const credential = `
//         <list>
//             <string>
//                 <content>
//                     <![CDATA[${temporaryTicket}]]>
//                 </content>
//             </string>
//             <string>
//                 <content>
//                     <![CDATA[${otp}]]>
//                 </content>
//             </string>
//         </list>`.trim().replace(/\s+/g, ''); // Remove excessive whitespace

//         // Make the API call
//         const res = await axios.post(
//             baseUrl,
//             { 'arguments': credential },
//             { headers, params }
//         );

//         // Extract ticket from response
//         const ticket = res?.data?.value?.ticket?.value;

//         if (ticket) {
//             // Store the ticket in SecureStore
//             await SecureStore.setItemAsync("ticket", ticket);
//             //console.log("Ticket stored:", ticket);
//             return true;
//         } else {
//             //console.error("OTP validation failed: No ticket returned");
//             return false;
//         }
//     } catch (e) {
//         //console.error("Error during OTP API call:", e);
//         return false;
//     }
// };





















import axios from "axios";
import * as Crypto from "expo-crypto";
import * as SecureStore from "expo-secure-store";
import qs from "qs";

const sha512 = async (content) => {
  try {
    const hash = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA512,
      content
    );
    return hash;
  } catch (error) {
    throw error;
  }
};

const baseUrl = "https://ikoncloud.keross.com/rest";

export const loginApi = async (username, password) => {
  //return true;
  try {
    const hashPasswd = await sha512(password);
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    };

    const params = {
      inZip: false,
      outZip: true,
      inFormat: "xml",
      outFormat: "typedjson",
      service: "loginService",
      operation: "login",
      locale: "en_US",
    };

    const credential = `
        <list>
            <string>
                <content>
                    <![CDATA[${username}]]>
                </content>
            </string>
            <string>
                <content>
                    <![CDATA[${hashPasswd}]]>
                </content>
            </string>
        </list>`.trim().replace(/\s+/g, "");

    const res = await axios.post(
      baseUrl,
      { arguments: credential },
      { headers, params }
    );

    const tempTicket = res?.data?.value?.temporaryTicket?.value;

    if (tempTicket) {
      await SecureStore.setItemAsync("tempTicket", tempTicket);
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};

export const otpApi = async (otp) => {
  //return true;
  try {
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    };

    const temporaryTicket = await SecureStore.getItemAsync("tempTicket");
    if (!temporaryTicket) {
      return false;
    }

    const params = {
      inFormat: "xml",
      inZip: false,
      locale: "en_US",
      operation: "validateOTP",
      outFormat: "typedjson",
      outZip: true,
      service: "loginService",
    };

    const credential = `
        <list>
            <string>
                <content>
                    <![CDATA[${temporaryTicket}]]>
                </content>
            </string>
            <string>
                <content>
                    <![CDATA[${otp}]]>
                </content>
            </string>
        </list>`.trim().replace(/\s+/g, "");

    const res = await axios.post(
      baseUrl,
      { arguments: credential },
      { headers, params }
    );

    const ticket = res?.data?.value?.ticket?.value;

    if (ticket) {
      await SecureStore.setItemAsync("ticket", ticket);
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};

export const resetPassword = async (userName) => {
  try {
    const data = qs.stringify({
      arguments: `["${userName}"]`,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${baseUrl}?inZip=false&outZip=false&inFormat=freejson&outFormat=freejson&service=loginService&operation=resetPassword`,
      headers: {
        "User-Agent": "Human",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    const response = await axios.request(config);
    console.log(response)


    return ; // Return the response data
  } catch (error) {
    console.error("Error during resetPassword API call:", error);
    throw error;
  }
};
