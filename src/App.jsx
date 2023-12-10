import { useEffect } from "react";
import { db, doc, setDoc } from "../firebase.config";
import { v4 as uuid4 } from "uuid";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
const App = () => {
  const storeDataInFirestore = async (collectionName, docName, data) => {
    try {
      await setDoc(doc(db, collectionName, docName), data);
      console.log("Document successfully written!");
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  // useEffect(() => {
  //   projects.forEach((data) => {
  //     const uid = uuid4();
  //     storeDataInFirestore("projects", uid, data);
  //   });
  // }, [projects]);

  return (
    <div className="bg-gradient w-full font-sans scroll-smooth">
      <Navbar />
      <div className="xl:px-40 lg:px-20 md:px-10 sml:px-5 px-2">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
};

export default App;
