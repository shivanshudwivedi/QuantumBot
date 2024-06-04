const functions = require("firebase-functions");
const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp();
}

const { logger } = functions;

exports.addMessage = functions.https.onCall(async (data, context) => {
  try {
    logger.log("Received message request data:", data);

    // Validate required fields
    if (!data.text || !data.userId) {
      logger.log("Required fields (text or userId) are missing");
      throw new functions.https.HttpsError(
        "invalid-argument",
        "Required fields (text or userId) are missing",
      );
    }

    const { text, userId } = data;

    // Construct message data
    const messageData = {
      text,
      userId,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    };

    // Add message
    const messageRef = await admin
      .firestore()
      .collection("chats")
      .doc(userId)
      .collection("messages")
      .add(messageData);

    logger.log("Message added successfully, message id:", messageRef.id);

    // Return success status
    return { status: "success", messageId: messageRef.id };
  } catch (error) {
    logger.log("Error adding message:", error);

    // Throw a structured error for the client
    throw new functions.https.HttpsError(
      "unknown",
      "Error adding message",
      error,
    );
  }
});
