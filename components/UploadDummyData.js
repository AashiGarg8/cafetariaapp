import { doc, setDoc } from "firebase/firestore";
import { db } from "../configs/firebase"; // Adjust the path

const uploadDummyData = async () => {
  try {
    console.log("⏳ Uploading dummy data...");
    const todayDoc = doc(db, "insights", "today");

    await setDoc(todayDoc, {
      mostWasted: "Rice",
      suggestion: "Reduce rice servings by 10%",
      items: [
        { name: "Rice", quantity: 20 },
        { name: "Dal", quantity: 15 },
        { name: "Roti", quantity: 10 },
        { name: "Sabzi", quantity: 5 }
      ]
    });

    console.log("✅ Dummy data uploaded!");
  } catch (error) {
    console.error("❌ Error uploading dummy data:", error);
  }
};

uploadDummyData();
