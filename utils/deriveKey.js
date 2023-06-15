import crypto from "crypto"
export default async function deriveKey(givenString, salt) {
    const iterations = 100000; // Number of iterations for key derivation
    const keyLength = 32; // Key length in bytes
    const digest = 'sha256'; // Digest algorithm for key derivation
  
    return crypto.pbkdf2Sync(givenString, salt, iterations, keyLength, digest);
  }

