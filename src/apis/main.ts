import { getDocs } from "firebase/firestore";
import {
  careerCollection,
  educationCollection,
  skillCollection
} from "~/firebase.config";

const fetchSkills = async (language: Common.LanguageType) => {
  const querySnapshot = await getDocs(skillCollection);
  return querySnapshot.docs.map(doc => {
    return doc.data()[language];
  })[0];
};
const fetchCareers = async (language: Common.LanguageType) => {
  const querySnapshot = await getDocs(careerCollection);
  return querySnapshot.docs.map(doc => {
    return doc.data()[language];
  })[0];
};
const fetchEducations = async (language: Common.LanguageType) => {
  const querySnapshot = await getDocs(educationCollection);
  return querySnapshot.docs.map(doc => {
    return doc.data()[language];
  })[0];
};

export { fetchSkills, fetchCareers, fetchEducations };
