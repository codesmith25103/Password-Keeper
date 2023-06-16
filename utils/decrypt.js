import crypto from "crypto"
import deriveKey from "./deriveKey.js";

export default async function decryptMessage(ciphertext, givenString, salt, iv) {
    const key = await deriveKey(givenString, Buffer.from(salt, 'hex'));
  
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(ciphertext, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
  
    return decrypted;
  }
  