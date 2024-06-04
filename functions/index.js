/**
 * Import function triggers from their respective submodules:
 *
 * const { onCall } = require("firebase-functions/v2/https");
 * const { onDocumentWritten } = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// Importing the functions and admin modules
const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK 
if (!admin.apps.length) {
  admin.initializeApp();
}

exports.addMessage = require("./api/addMessage");
