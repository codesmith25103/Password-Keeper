import crypto from "crypto"
export default async function deriveKey(givenString, salt) {
    const iterations = 100000; 
    const keyLength = 32; 
    const digest = 'sha256'; 
    return crypto.pbkdf2Sync(givenString, salt, iterations, keyLength, digest);
}

